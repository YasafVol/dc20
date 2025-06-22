import { J as store_get, K as ensure_array_like, M as attr, N as attr_class, I as escape_html, O as maybe_selected, P as unsubscribe_stores, D as pop, A as push } from "../../../chunks/index.js";
import { c as characterInProgressStore, p as primeModifier, g as gritPoints, j as jumpDistance, a as provisionalSkillPoints, s as saveMasteries, m as maxHP, b as startingSP, d as startingMP, e as combatMastery, f as precisionDefense, h as areaDefense, i as initiative } from "../../../chunks/characterInProgressStore.js";
import { a as attributesData } from "../../../chunks/attributes.js";
import { a as ancestriesData } from "../../../chunks/ancestries.js";
import { c as classesData } from "../../../chunks/classes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let currentAttributes, pointsSpent, pointsRemaining, highestAttributeValue, tiedAttributes, displayedPrimeModifierAttribute, totalAncestryPointsAvailable, ancestryPointsSpent, ancestryPointsRemaining, selectedClass, allStagesValid;
  let characterName = "";
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3;
  let primeModifierAttributeUserChoice = null;
  let selectedAncestry1_ID = null;
  let selectedAncestry2_ID = null;
  let currentSelectedTraits = [];
  const ancestryPointsBudget = 5;
  let selectedClassId = null;
  let selectedFeatureChoices = {};
  currentAttributes = {
    might: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might,
    agility: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility,
    charisma: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma,
    intelligence: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence
  };
  pointsSpent = currentAttributes.might - ATTRIBUTE_MIN + (currentAttributes.agility - ATTRIBUTE_MIN) + (currentAttributes.charisma - ATTRIBUTE_MIN) + (currentAttributes.intelligence - ATTRIBUTE_MIN);
  pointsRemaining = POINT_BUY_BUDGET - pointsSpent;
  highestAttributeValue = Math.max(...Object.values(currentAttributes));
  tiedAttributes = Object.entries(currentAttributes).filter(([name, value]) => value === highestAttributeValue).map(([name, value]) => name);
  {
    if (tiedAttributes.length === 1) {
      primeModifierAttributeUserChoice = tiedAttributes[0];
    } else if (tiedAttributes.length > 1) {
      if (primeModifierAttributeUserChoice === null || !tiedAttributes.includes(primeModifierAttributeUserChoice)) {
        primeModifierAttributeUserChoice = null;
      }
    } else {
      primeModifierAttributeUserChoice = null;
    }
  }
  displayedPrimeModifierAttribute = tiedAttributes.length > 1 && primeModifierAttributeUserChoice !== null ? primeModifierAttributeUserChoice : store_get($$store_subs ??= {}, "$primeModifier", primeModifier).attribute;
  displayedPrimeModifierAttribute ? currentAttributes[displayedPrimeModifierAttribute] : store_get($$store_subs ??= {}, "$primeModifier", primeModifier).value;
  totalAncestryPointsAvailable = ancestryPointsBudget;
  ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0);
  ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent;
  selectedClass = classesData.find((c) => c.id === selectedClassId);
  selectedClass?.featureChoicesLvl1?.every((choice) => selectedFeatureChoices && selectedFeatureChoices[choice.id] !== void 0) ?? true;
  allStagesValid = pointsRemaining === 0 && ancestryPointsRemaining === 0 && selectedClassId !== null;
  const each_array = ensure_array_like(attributesData);
  const each_array_2 = ensure_array_like(ancestriesData);
  const each_array_3 = ensure_array_like(ancestriesData);
  const each_array_7 = ensure_array_like(classesData);
  $$payload.out += `<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary"><h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Character Creation</h2> <div class="mb-8"><label for="characterName" class="block text-lg font-medium mb-2">Character Name</label> <input type="text" id="characterName"${attr("value", characterName)} class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border" placeholder="Enter your character's name"/> <h3 class="text-lg font-medium mt-6 mb-2">Allocate Attribute Points (Point Buy)</h3> <p${attr_class("mb-4 text-light-text-secondary", void 0, { "text-magenta-error": pointsRemaining < 0 })}>Budget: ${escape_html(pointsRemaining)} / 12 Points Remaining</p> <div class="flex flex-col gap-4 mb-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let attribute = each_array[$$index];
    $$payload.out += `<div class="flex items-center gap-4 p-4 bg-dark-bg-primary rounded-md shadow-sm relative"><div class="flex items-center gap-2"><button class="p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg"${attr("disabled", currentAttributes[attribute.id] <= ATTRIBUTE_MIN, true)}>-</button> <input${attr("id", `attribute-${attribute.id}`)} type="number" readonly${attr("value", currentAttributes[attribute.id])} class="w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8"/> <button class="p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg"${attr("disabled", currentAttributes[attribute.id] >= ATTRIBUTE_MAX_L1 || pointsRemaining <= 0, true)}>+</button></div> `;
    if (displayedPrimeModifierAttribute === attribute.name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="w-1 h-10 bg-yellow-accent rounded mr-3"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="flex flex-col min-w-[140px]"><label${attr("for", `attribute-${attribute.id}`)} class="text-xl font-medium text-light-text-primary leading-tight">${escape_html(attribute.name)}</label> <span class="text-xs text-light-text-secondary">${escape_html(attribute.description)}</span></div> `;
    if (attribute.id === "charisma") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Grit: ${escape_html(store_get($$store_subs ??= {}, "$gritPoints", gritPoints))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (attribute.id === "agility") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Jump: ${escape_html(store_get($$store_subs ??= {}, "$jumpDistance", jumpDistance))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (attribute.id === "intelligence") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Skill Pts: ${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <span class="ml-auto text-blue-info font-medium whitespace-nowrap">Save: ${escape_html((store_get($$store_subs ??= {}, "$saveMasteries", saveMasteries)[attribute.id] >= 0 ? "+" : "") + store_get($$store_subs ??= {}, "$saveMasteries", saveMasteries)[attribute.id])}</span></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (tiedAttributes.length > 1) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(tiedAttributes);
    $$payload.out += `<div class="my-4"><p class="mb-2 text-yellow-accent">Multiple attributes are tied for highest. Please select your Prime Modifier:</p> <div class="flex gap-4"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let attrId = each_array_1[$$index_1];
      $$payload.out += `<label><input type="radio" name="primeModifier"${attr("value", attrId)}${attr("checked", primeModifierAttributeUserChoice === attrId, true)} class="mr-1"/> ${escape_html(attributesData.find((a) => a.id === attrId)?.name || attrId)}</label>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mb-8"><h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3> <div class="flex gap-4"><div class="flex-1"><label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label> <select id="ancestry1" class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">`;
  $$payload.select_value = selectedAncestry1_ID;
  $$payload.out += `<option${attr("value", null)}${maybe_selected($$payload, null)}>Select an ancestry</option><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let ancestry = each_array_2[$$index_2];
    $$payload.out += `<option${attr("value", ancestry.id)}${maybe_selected($$payload, ancestry.id)}>${escape_html(ancestry.name)}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="flex-1"><label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label> <select id="ancestry2" class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">`;
  $$payload.select_value = selectedAncestry2_ID;
  $$payload.out += `<option${attr("value", null)}${maybe_selected($$payload, null)}>None</option><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let ancestry = each_array_3[$$index_3];
    $$payload.out += `<option${attr("value", ancestry.id)}${maybe_selected($$payload, ancestry.id)}>${escape_html(ancestry.name)}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mb-8"><h3 class="text-lg font-medium mb-2">Class Selection</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`;
  for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
    let classObj = each_array_7[$$index_7];
    $$payload.out += `<label${attr_class("flex items-center p-3 border rounded cursor-pointer", void 0, {
      "border-yellow-accent": selectedClassId === classObj.id
    })}><input type="radio" name="class"${attr("value", classObj.id)}${attr("checked", selectedClassId === classObj.id, true)}/> <span class="ml-3 font-semibold">${escape_html(classObj.name)}</span></label>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (selectedClass) {
    $$payload.out += "<!--[-->";
    const each_array_8 = ensure_array_like(selectedClass.level1Features);
    $$payload.out += `<div class="mt-4"><h4 class="font-semibold mb-2">Level 1 Features</h4> <ul><!--[-->`;
    for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
      let feature = each_array_8[$$index_8];
      $$payload.out += `<li class="mb-1">${escape_html(feature.name)}: ${escape_html(feature.description)}</li>`;
    }
    $$payload.out += `<!--]--></ul> `;
    if (selectedClass.featureChoicesLvl1 && selectedClass.featureChoicesLvl1.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array_9 = ensure_array_like(selectedClass.featureChoicesLvl1);
      $$payload.out += `<div class="mt-4"><h4 class="font-semibold mb-2">Feature Choices</h4> <!--[-->`;
      for (let $$index_10 = 0, $$length = each_array_9.length; $$index_10 < $$length; $$index_10++) {
        let choice = each_array_9[$$index_10];
        $$payload.out += `<div class="mb-2"><label class="block mb-1">${escape_html(choice.prompt)}</label> `;
        if (choice.type === "select_one") {
          $$payload.out += "<!--[-->";
          const each_array_10 = ensure_array_like(choice.options);
          $$payload.out += `<div class="flex gap-2"><!--[-->`;
          for (let $$index_9 = 0, $$length2 = each_array_10.length; $$index_9 < $$length2; $$index_9++) {
            let option = each_array_10[$$index_9];
            $$payload.out += `<label><input type="radio"${attr("name", choice.id)}${attr("value", option.value)}${attr("checked", selectedFeatureChoices[choice.id] === option.value, true)}/> ${escape_html(option.label)}</label>`;
          }
          $$payload.out += `<!--]--></div>`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--></div>`;
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mb-8"><h3 class="text-lg font-medium mb-2">Final Provisional Stats</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary"><p>HP = Class(${escape_html(selectedClass ? selectedClass.baseHpContribution : 8)}) + Might(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}) + Ancestry(0) = ${escape_html(store_get($$store_subs ??= {}, "$maxHP", maxHP))}</p> <p>SP = ${escape_html(store_get($$store_subs ??= {}, "$startingSP", startingSP))}</p> <p>MP = ${escape_html(store_get($$store_subs ??= {}, "$startingMP", startingMP))}</p> <p>PD = Base(8) + CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) + Intelligence(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}) + Bonuses(0) = ${escape_html(store_get($$store_subs ??= {}, "$precisionDefense", precisionDefense))}</p> <p>AD = Base(8) + CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Might(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}) + Charisma(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}) + Bonuses(0) = ${escape_html(store_get($$store_subs ??= {}, "$areaDefense", areaDefense))}</p> <p>Initiative = CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) = ${escape_html(store_get($$store_subs ??= {}, "$initiative", initiative))}</p> <p>Grit Points = Base(2) + Charisma(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}) = ${escape_html(store_get($$store_subs ??= {}, "$gritPoints", gritPoints))}</p> <p>Jump Distance = Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) (min 1) = ${escape_html(store_get($$store_subs ??= {}, "$jumpDistance", jumpDistance))}</p> <p>Base Skill Points = Base(5) + Intelligence(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}) = ${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</p></div></div> <div class="mt-8 text-right"><button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"${attr("disabled", !allStagesValid, true)}>Save Character</button></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
