import { M as attr, O as maybe_selected, K as ensure_array_like, I as escape_html, J as store_get, P as unsubscribe_stores, D as pop, A as push } from "../../../../chunks/index.js";
import { c as characterInProgressStore, p as primeModifier } from "../../../../chunks/characterInProgressStore.js";
import { a as ancestriesData } from "../../../../chunks/ancestries.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let totalAncestryPointsAvailable, ancestryPointsSpent, ancestryPointsRemaining;
  const ancestries = ancestriesData;
  let selectedAncestry1_ID = null;
  let selectedAncestry2_ID = null;
  let currentSelectedTraits = [];
  const ancestryPointsBudget = 5;
  totalAncestryPointsAvailable = ancestryPointsBudget;
  ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0);
  ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent;
  $$payload.out += `<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary"><h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 2: Ancestry Choices</h2> <div class="mb-6"><h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3>  <div class="flex gap-4"><div class="flex-1"><label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label> <select id="ancestry1" class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">`;
  $$payload.select_value = selectedAncestry1_ID;
  $$payload.out += `<option${attr("value", null)}${maybe_selected($$payload, null)}>Select an ancestry</option>`;
  if (ancestries) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(ancestries);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let ancestry = each_array[$$index];
      $$payload.out += `<option${attr("value", ancestry.id)}${maybe_selected($$payload, ancestry.id)}>${escape_html(ancestry.name)}</option>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="flex-1"><label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label> <select id="ancestry2" class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">`;
  $$payload.select_value = selectedAncestry2_ID;
  $$payload.out += `<option${attr("value", null)}${maybe_selected($$payload, null)}>None</option>`;
  if (ancestries) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(ancestries);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let ancestry = each_array_1[$$index_1];
      $$payload.out += `<option${attr("value", ancestry.id)}${maybe_selected($$payload, ancestry.id)}>${escape_html(ancestry.name)}</option>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div></div> <style lang="postcss">
    /* Apply dark background to select elements and options */
    select.bg-dark-bg-secondary {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */ --tw-text-opacity: 1; color: rgb(216 180 254 / var(--tw-text-opacity, 1)); /* Apply text color using @apply */
    }

    /* Attempt to style dropdown options - browser support varies */
    select.bg-dark-bg-secondary option {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */ --tw-text-opacity: 1; color: rgb(229 231 235 / var(--tw-text-opacity, 1)); /* Use light text for options */
    }
</style></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mb-6 p-4 bg-dark-bg-primary rounded-md shadow-sm"><h3 class="text-lg font-medium mb-2">Current Core Stats (Reflecting Ancestry Choices)</h3> <div class="grid grid-cols-2 gap-4"><p>Might: <span class="font-bold">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}</span></p> <p>Agility: <span class="font-bold">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}</span></p> <p>Charisma: <span class="font-bold">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}</span></p> <p>Intellect: <span class="font-bold">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}</span></p> <p class="col-span-2">Prime Modifier: <span class="font-bold text-yellow-accent">${escape_html(store_get($$store_subs ??= {}, "$primeModifier", primeModifier).attribute)} (${escape_html(store_get($$store_subs ??= {}, "$primeModifier", primeModifier).value >= 0 ? "+" : "")}${escape_html(store_get($$store_subs ??= {}, "$primeModifier", primeModifier).value)})</span></p></div></div>  `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mt-8 text-right"><button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"${attr("disabled", ancestryPointsRemaining !== 0 || currentSelectedTraits.length === 0, true)}>Next Step</button></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
