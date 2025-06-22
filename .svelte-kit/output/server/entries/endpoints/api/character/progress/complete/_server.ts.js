import { j as json } from "../../../../../../chunks/index2.js";
import { PrismaClient } from "@prisma/client";
import { c as classesData } from "../../../../../../chunks/classes.js";
import { t as traitsData } from "../../../../../../chunks/traits.js";
const prisma = new PrismaClient();
function validateFeatureChoices(classId, selectedChoicesJson) {
  const classData = classesData.find((c) => c.id === classId);
  if (!classData) throw new Error(`Invalid class ID: ${classId}`);
  const choices = JSON.parse(selectedChoicesJson || "{}");
  for (const requiredChoice of classData.featureChoicesLvl1 || []) {
    if (choices[requiredChoice.id] === void 0) {
      throw new Error(`Missing required choice for ${classData.name}: ${requiredChoice.prompt}`);
    }
    const validOptions = requiredChoice.options.map((o) => o.value);
    if (!validOptions.includes(choices[requiredChoice.id])) {
      throw new Error(`Invalid selected option for ${requiredChoice.id} in class ${classData.name}`);
    }
  }
}
function validateAttributeCapsAfterTraits(attributes, selectedTraitIdsJson) {
  const selectedTraitIds = JSON.parse(selectedTraitIdsJson || "[]");
  const traits = selectedTraitIds.map((id) => traitsData.find((t) => t.id === id)).filter((t) => t !== void 0);
  const finalAttributes = { ...attributes };
  for (const trait of traits) {
    const attrEffect = trait.effects?.find((e) => e.type === "MODIFY_ATTRIBUTE");
    if (attrEffect && attrEffect.target && typeof attrEffect.value === "number") {
      const attributeKey = `attribute_${attrEffect.target}`;
      if (attributeKey in finalAttributes) {
        finalAttributes[attributeKey] += attrEffect.value;
      }
    }
  }
  const ATTRIBUTE_MAX_L1 = 3;
  for (const [attrName, finalValue] of Object.entries(finalAttributes)) {
    if (finalValue > ATTRIBUTE_MAX_L1) {
      throw new Error(`Final attribute ${attrName.replace("attribute_", "")} exceeds Level 1 cap (+3) after applying traits.`);
    }
  }
}
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.finalName || typeof data.finalName !== "string" || data.finalName.trim().length === 0) {
      return json({ error: "Character name is required." }, { status: 400 });
    }
    const attributes = {
      attribute_might: data.attribute_might,
      attribute_agility: data.attribute_agility,
      attribute_charisma: data.attribute_charisma,
      attribute_intelligence: data.attribute_intelligence
    };
    const totalPoints = Object.values(attributes).reduce((sum, v) => sum + (typeof v === "number" ? v : 0), 0);
    if (totalPoints !== 0) {
      return json({ error: "Attribute points must sum to 0 (point buy)." }, { status: 400 });
    }
    if (!data.ancestry1Id) {
      return json({ error: "At least one ancestry must be selected." }, { status: 400 });
    }
    if (data.ancestry2Id && data.ancestry1Id === data.ancestry2Id) {
      return json({ error: "Cannot select the same ancestry twice." }, { status: 400 });
    }
    try {
      const selectedTraitIds = JSON.parse(data.selectedTraitIds || "[]");
      if (!Array.isArray(selectedTraitIds)) throw new Error();
    } catch {
      return json({ error: "Invalid selectedTraitIds format." }, { status: 400 });
    }
    if (!data.classId || !classesData.find((c) => c.id === data.classId)) {
      return json({ error: "A valid class must be selected." }, { status: 400 });
    }
    try {
      validateFeatureChoices(data.classId, data.selectedFeatureChoices);
    } catch (err) {
      return json({ error: err.message }, { status: 400 });
    }
    try {
      validateAttributeCapsAfterTraits(attributes, data.selectedTraitIds);
    } catch (err) {
      return json({ error: err.message }, { status: 400 });
    }
    const result = await prisma.$transaction(async (tx) => {
      let character;
      if (data.id) {
        character = await tx.characterInProgress.update({
          where: { id: data.id },
          data: {
            ...data,
            updatedAt: /* @__PURE__ */ new Date()
          }
        });
      } else {
        character = await tx.characterInProgress.create({
          data: {
            ...data,
            createdAt: /* @__PURE__ */ new Date(),
            updatedAt: /* @__PURE__ */ new Date()
          }
        });
      }
      return character;
    });
    return json({ success: true, id: result.id });
  } catch (err) {
    return json({ error: err.message || "Unknown error" }, { status: 500 });
  }
};
export {
  POST
};
