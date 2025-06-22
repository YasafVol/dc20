import { d as derived, w as writable } from "./index3.js";
import { c as classesData } from "./classes.js";
const initialCharacterInProgressState = {
  id: "",
  // Will be set when a new character is started/loaded
  attribute_might: -2,
  attribute_agility: -2,
  attribute_charisma: -2,
  attribute_intelligence: -2,
  pointsSpent: 0,
  // Core Stats
  level: 1,
  // Default to Level 1 for MVP
  combatMastery: 1,
  // Calculated: Math.ceil(level / 2)
  ancestry1Id: null,
  ancestry2Id: null,
  selectedTraitIds: "",
  // JSON string of selected trait IDs
  ancestryPointsSpent: 0,
  classId: null,
  selectedFeatureChoices: "",
  // JSON string of selected feature choice IDs/values
  // Skills, Equipment, Details fields will be added/updated later
  finalName: null,
  finalPlayerName: null,
  createdAt: /* @__PURE__ */ new Date(),
  // Placeholder, will be set by DB
  updatedAt: /* @__PURE__ */ new Date(),
  // Placeholder, will be set by DB
  // UI State
  currentStep: 1,
  // Start at Stage A (Attributes)
  overflowTraitId: null,
  overflowAttributeName: null
};
const characterInProgressStore = writable(initialCharacterInProgressState);
function getModifier(attributeScore) {
  return attributeScore ?? 0;
}
const combatMastery = derived(
  characterInProgressStore,
  ($store) => {
    return Math.ceil(($store.level ?? 1) / 2);
  }
);
const primeModifier = derived(
  characterInProgressStore,
  ($store) => {
    const attributes = [
      { name: "Might", value: $store.attribute_might },
      { name: "Agility", value: $store.attribute_agility },
      { name: "Charisma", value: $store.attribute_charisma },
      { name: "Intelligence", value: $store.attribute_intelligence }
    ];
    let highestAttribute = attributes[0];
    for (let i = 1; i < attributes.length; i++) {
      if (attributes[i].value > highestAttribute.value) {
        highestAttribute = attributes[i];
      }
    }
    if (!highestAttribute) {
      console.error("Error calculating primeModifier: highestAttribute is undefined.");
      return { value: 0, attribute: "Unknown" };
    }
    const primeModifierValue = highestAttribute.value;
    const primeModifierAttribute = highestAttribute.name;
    return { value: primeModifierValue, attribute: primeModifierAttribute };
  }
);
const saveMasteries = derived(
  [characterInProgressStore, primeModifier, combatMastery],
  ([$store, $primeModifier, $combatMastery]) => {
    const primeModValue = $primeModifier.value;
    const primeModAttribute = $primeModifier.attribute;
    const currentCombatMastery = $combatMastery;
    return {
      might: currentCombatMastery + (primeModAttribute === "Might" ? primeModValue : getModifier($store.attribute_might)),
      agility: currentCombatMastery + (primeModAttribute === "Agility" ? primeModValue : getModifier($store.attribute_agility)),
      charisma: currentCombatMastery + (primeModAttribute === "Charisma" ? primeModValue : getModifier($store.attribute_charisma)),
      intelligence: currentCombatMastery + (primeModAttribute === "Intelligence" ? primeModValue : getModifier($store.attribute_intelligence))
    };
  }
);
const gritPoints = derived(
  characterInProgressStore,
  ($store) => {
    const baseGrit = 2;
    return baseGrit + getModifier($store.attribute_charisma);
  }
);
const jumpDistance = derived(
  characterInProgressStore,
  ($store) => {
    const agilityModifier = getModifier($store.attribute_agility);
    return agilityModifier < 1 ? 1 : agilityModifier;
  }
);
const startingSP = derived(
  characterInProgressStore,
  ($store) => {
    if (!$store.classId) return 0;
    const classData = classesData.find((c) => c.id === $store.classId);
    return classData?.startingSP ?? 0;
  }
);
const startingMP = derived(
  characterInProgressStore,
  ($store) => {
    if (!$store.classId) return 0;
    const classData = classesData.find((c) => c.id === $store.classId);
    return classData?.startingMP ?? 0;
  }
);
const provisionalSkillPoints = derived(
  characterInProgressStore,
  ($store) => {
    const intelligenceModifier = getModifier($store.attribute_intelligence);
    const classSkillBonus = 0;
    return 5 + intelligenceModifier + classSkillBonus;
  }
);
derived(
  characterInProgressStore,
  ($store) => {
    const basePoints = 4;
    const pointsFromNegativeTraits = 0;
    return basePoints + pointsFromNegativeTraits - $store.ancestryPointsSpent;
  }
);
const maxHP = derived(
  characterInProgressStore,
  ($store) => {
    const classData = classesData.find((c) => c.id === $store.classId);
    const classHP = classData?.baseHpContribution ?? 8;
    const mightModifier = getModifier($store.attribute_might);
    const ancestryHP = 0;
    return classHP + mightModifier + ancestryHP;
  }
);
const areaDefense = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const mightModifier = getModifier($store.attribute_might);
    const charismaModifier = getModifier($store.attribute_charisma);
    const bonuses = 0;
    return 8 + $combatMastery + mightModifier + charismaModifier + bonuses;
  }
);
const precisionDefense = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const agilityModifier = getModifier($store.attribute_agility);
    const intelligenceModifier = getModifier($store.attribute_intelligence);
    const bonuses = 0;
    return 8 + $combatMastery + agilityModifier + intelligenceModifier + bonuses;
  }
);
const initiative = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const agilityModifier = getModifier($store.attribute_agility);
    return $combatMastery + agilityModifier;
  }
);
export {
  provisionalSkillPoints as a,
  startingSP as b,
  characterInProgressStore as c,
  startingMP as d,
  combatMastery as e,
  precisionDefense as f,
  gritPoints as g,
  areaDefense as h,
  initiative as i,
  jumpDistance as j,
  maxHP as m,
  primeModifier as p,
  saveMasteries as s
};
