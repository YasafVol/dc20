import { e as error, j as json } from "../../../../../../chunks/index2.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const ATTRIBUTE_MIN = -2;
const ATTRIBUTE_MAX_L1 = 3;
const POINT_BUY_BUDGET = 12;
async function POST({ request }) {
  try {
    const { characterId, finalName, attribute_might, attribute_agility, attribute_charisma, attribute_intelligence } = await request.json();
    if (!finalName || typeof finalName !== "string" || finalName.trim().length === 0) {
      return error(400, { message: "Character name is required." });
    }
    const attributes = {
      might: attribute_might,
      agility: attribute_agility,
      charisma: attribute_charisma,
      intelligence: attribute_intelligence
    };
    for (const [name, value] of Object.entries(attributes)) {
      if (value < ATTRIBUTE_MIN || value > ATTRIBUTE_MAX_L1) {
        return error(400, { message: `Attribute ${name} is out of the allowed range (-2 to +3).` });
      }
    }
    const pointsSpent = attributes.might - ATTRIBUTE_MIN + (attributes.agility - ATTRIBUTE_MIN) + (attributes.charisma - ATTRIBUTE_MIN) + (attributes.intelligence - ATTRIBUTE_MIN);
    if (pointsSpent !== POINT_BUY_BUDGET) {
      return error(400, { message: `Total points allocated must be exactly ${POINT_BUY_BUDGET}. You allocated ${pointsSpent}.` });
    }
    let updatedCharacter;
    if (characterId) {
      updatedCharacter = await prisma.characterInProgress.update({
        where: { id: characterId },
        data: {
          finalName: finalName.trim(),
          // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent,
          // Store points spent for consistency, though backend validates
          level: 1,
          // Hardcoded to 1 for MVP
          combatMastery: 1,
          // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]),
          // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]),
          // Initialize selected feature choices
          currentStep: 1
          // Mark Stage A as complete
        }
      });
    } else {
      updatedCharacter = await prisma.characterInProgress.create({
        data: {
          finalName: finalName.trim(),
          // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent,
          level: 1,
          // Hardcoded to 1 for MVP
          combatMastery: 1,
          // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]),
          // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]),
          // Initialize selected feature choices
          currentStep: 1
          // Mark Stage A as complete
        }
      });
    }
    return json({ success: true, characterId: updatedCharacter.id });
  } catch (e) {
    console.error("Backend error saving Stage A data:", e);
    if (e instanceof Error) {
      return error(500, { message: `Internal server error: ${e.message}` });
    }
    return error(500, { message: "An unknown error occurred while saving attributes." });
  } finally {
    await prisma.$disconnect();
  }
}
export {
  POST
};
