import { j as json } from "../../../../../../chunks/index2.js";
import { PrismaClient } from "@prisma/client";
import { a as ancestriesData } from "../../../../../../chunks/ancestries.js";
import { t as traitsData } from "../../../../../../chunks/traits.js";
const prisma = new PrismaClient();
const POST = async ({ request }) => {
  const data = await request.json();
  if (!data.characterId) {
    return json({ success: false, message: "Character ID is required." }, { status: 400 });
  }
  if (!Array.isArray(data.selectedAncestries) || data.selectedAncestries.length === 0 || data.selectedAncestries.length > 2) {
    return json({ success: false, message: "You must select between 1 and 2 ancestries." }, { status: 400 });
  }
  for (const ancestryId of data.selectedAncestries) {
    const validAncestry = ancestriesData.find((a) => a.id === ancestryId);
    if (!validAncestry) {
      return json({ success: false, message: `Invalid ancestry ID: ${ancestryId}` }, { status: 400 });
    }
  }
  if (!Array.isArray(data.selectedTraits)) {
    return json({ success: false, message: "Selected traits data is invalid." }, { status: 400 });
  }
  if (data.selectedTraits.length > 0) {
    for (const traitId of data.selectedTraits) {
      const validTrait = traitsData.find((t) => t.id === traitId);
      if (!validTrait) {
        return json({ success: false, message: `Invalid trait ID: ${traitId}` }, { status: 400 });
      }
    }
    const selectedTraitObjects = data.selectedTraits.map((id) => traitsData.find((t) => t.id === id)).filter((t) => t !== void 0);
    const totalCost = selectedTraitObjects.reduce((sum, trait) => sum + trait.cost, 0);
    if (totalCost !== 5) {
      return json({ success: false, message: `Total ancestry points must equal 5, got: ${totalCost}` }, { status: 400 });
    }
    const minorTraits = selectedTraitObjects.filter((t) => t.isMinor);
    if (minorTraits.length > 1) {
      return json({ success: false, message: `Maximum of 1 minor trait allowed, got: ${minorTraits.length}` }, { status: 400 });
    }
    const pointsFromNegative = selectedTraitObjects.filter((t) => t.cost < 0).reduce((sum, t) => sum + Math.abs(t.cost), 0);
    if (pointsFromNegative > 2) {
      return json({ success: false, message: `Maximum of +2 points from negative traits allowed, got: ${pointsFromNegative}` }, { status: 400 });
    }
  }
  if (!data.attributes || typeof data.attributes !== "object") {
    return json({ success: false, message: "Attribute data is missing or invalid." }, { status: 400 });
  }
  const attributeNames = ["attribute_might", "attribute_agility", "attribute_charisma", "attribute_intelligence"];
  for (const attrName of attributeNames) {
    const attrValue = data.attributes[attrName];
    if (typeof attrValue !== "number" || attrValue < -2 || attrValue > 3) {
      return json({ success: false, message: `Invalid value for attribute ${attrName}: ${attrValue}. Must be between -2 and +3.` }, { status: 400 });
    }
  }
  const baseAttributeValue = -2;
  const expectedTotalPoints = 12;
  const actualTotalPoints = attributeNames.reduce((sum, attrName) => sum + (data.attributes[attrName] - baseAttributeValue), 0);
  if (actualTotalPoints !== expectedTotalPoints) {
    return json({ success: false, message: `Total attribute points mismatch. Expected ${expectedTotalPoints}, got ${actualTotalPoints}.` }, { status: 400 });
  }
  try {
    const character = await prisma.characterInProgress.findUnique({
      where: { id: data.characterId },
      select: {
        currentStep: true
        // Select other fields if needed for validation against previous stage data
      }
    });
    if (!character) {
      return json({ success: false, message: "Character not found." }, { status: 404 });
    }
    const updatedCharacter = await prisma.characterInProgress.update({
      where: { id: data.characterId },
      data: {
        ancestry1Id: data.selectedAncestries[0] || null,
        // Store first ancestry ID
        ancestry2Id: data.selectedAncestries[1] || null,
        // Store second ancestry ID (if exists)
        selectedTraitIds: JSON.stringify(data.selectedTraits),
        // Store trait IDs as JSON string
        // Update attributes if they were potentially modified in the helper panel
        attribute_might: data.attributes.attribute_might,
        attribute_agility: data.attributes.attribute_agility,
        attribute_charisma: data.attributes.attribute_charisma,
        attribute_intelligence: data.attributes.attribute_intelligence,
        // Corrected attribute name
        currentStep: 2
        // Mark Stage B as complete (using integer 2)
      }
    });
    return json({ success: true, character: updatedCharacter });
  } catch (error) {
    console.error("Error processing Stage B data:", error);
    return json({ success: false, message: "Failed to save Stage B data." }, { status: 500 });
  }
};
export {
  POST
};
