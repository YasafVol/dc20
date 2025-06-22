import { J as store_get, K as ensure_array_like, M as attr, N as attr_class, I as escape_html, P as unsubscribe_stores, D as pop, A as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { c as characterInProgressStore, p as primeModifier, g as gritPoints, j as jumpDistance, a as provisionalSkillPoints, s as saveMasteries, e as combatMastery, m as maxHP, f as precisionDefense, h as areaDefense, i as initiative } from "../../../../chunks/characterInProgressStore.js";
import { a as attributesData } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let currentAttributes, pointsSpent, pointsRemaining, highestAttributeValue, tiedAttributes, displayedPrimeModifierAttribute, displayedPrimeModifierValue;
  let characterName = "";
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3;
  let primeModifierAttributeUserChoice = null;
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
  displayedPrimeModifierValue = displayedPrimeModifierAttribute ? currentAttributes[displayedPrimeModifierAttribute] : store_get(
    $$store_subs ??= {},
    // Use currentAttributes for value
    "$primeModifier",
    primeModifier
  ).value;
  const each_array = ensure_array_like(attributesData);
  $$payload.out += `<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary"><h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 1: Core Attributes &amp; Foundational Stats</h2> <div class="mb-6"><label for="characterName" class="block text-lg font-medium mb-2">Character Name</label> <input type="text" id="characterName"${attr("value", characterName)} class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border" placeholder="Enter your character's name"/></div> <div class="mb-6"><h3 class="text-lg font-medium mb-2">Allocate Attribute Points (Point Buy)</h3> <p${attr_class("mb-4 text-light-text-secondary", void 0, { "text-magenta-error": pointsRemaining < 0 })}>Budget: ${escape_html(pointsRemaining)} / 12 Points Remaining</p> <div class="flex flex-col gap-4 mb-6"><!--[-->`;
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
  $$payload.out += `<!--]--></div> <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-purple-primary/20 rounded-lg text-center"><span class="text-lg text-light-text-primary">Level:</span> <span class="text-2xl font-bold text-yellow-accent">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).level)}</span></div> <div class="p-4 bg-purple-primary/20 rounded-lg text-center"><span class="text-lg text-light-text-primary">Combat Mastery (CM):</span> <span class="text-2xl font-bold text-yellow-accent">${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}</span></div> <div class="p-4 bg-purple-primary/20 rounded-lg text-center"><span class="text-lg text-light-text-primary">Prime Modifier:</span> <span class="text-2xl font-bold text-yellow-accent">${escape_html(displayedPrimeModifierAttribute ? attributesData.find((a) => a.id === displayedPrimeModifierAttribute.toLowerCase())?.name || displayedPrimeModifierAttribute : "N/A")} (${escape_html(displayedPrimeModifierValue)})</span></div> <div class="p-4 bg-dark-bg-primary rounded-lg text-center"><span class="text-md text-light-text-primary">Base Skill Points (5 + Int Mod):</span> <span class="text-xl font-semibold text-blue-info">${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</span></div></div> <div class="mt-6"><h3 class="text-lg font-medium mb-3">Provisional Base Stats (Finalized after Class &amp; Equipment)</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary"><p>HP = Base(8) + Might(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}) + Ancestry(0) = ${escape_html(store_get($$store_subs ??= {}, "$maxHP", maxHP))}</p> <p>SP = Class SP</p> <p>MP = Class MP</p> <p>PD = Base(8) + CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) + Intelligence(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}) + Bonuses(0) = ${escape_html(store_get($$store_subs ??= {}, "$precisionDefense", precisionDefense))}</p> <p>AD = Base(8) + CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Might(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}) + Charisma(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}) + Bonuses(0) = ${escape_html(store_get($$store_subs ??= {}, "$areaDefense", areaDefense))}</p> <p>Initiative = CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) = ${escape_html(store_get($$store_subs ??= {}, "$initiative", initiative))}</p> <p>Grit Points = Base(2) + Charisma(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}) = ${escape_html(store_get($$store_subs ??= {}, "$gritPoints", gritPoints))}</p> <p>Jump Distance = Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) (min 1) = ${escape_html(store_get($$store_subs ??= {}, "$jumpDistance", jumpDistance))}</p> <p>Base Skill Points = Base(5) + Intelligence(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}) = ${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</p></div></div> <div class="mt-8 text-right"><button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"${attr("disabled", pointsRemaining !== 0, true)}>Next Step</button></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
