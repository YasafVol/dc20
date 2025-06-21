<script lang="ts">
  import { onMount } from 'svelte';
  import { characterInProgressStore, primeModifier, saveMasteries, gritPoints, jumpDistance, provisionalSkillPoints, getModifier, L1_COMBAT_MASTERY, combatMastery, maxHP, areaDefense, precisionDefense, initiative, startingSP, startingMP } from '$lib/stores/characterInProgressStore';
  import { attributesData } from '$lib/rulesdata/attributes';
  import { ancestriesData } from '$lib/rulesdata/ancestries';
  import { traitsData as traits } from '$lib/rulesdata/traits';
  import { classesData } from '$lib/rulesdata/classes';

  // --- Local State ---
  // Character Name
  let characterName: string = '';

  // Attribute Allocation
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3;

  $: currentAttributes = {
    might: $characterInProgressStore.attribute_might,
    agility: $characterInProgressStore.attribute_agility,
    charisma: $characterInProgressStore.attribute_charisma,
    intelligence: $characterInProgressStore.attribute_intelligence,
  };
  $: pointsSpent = (currentAttributes.might - ATTRIBUTE_MIN) +
                   (currentAttributes.agility - ATTRIBUTE_MIN) +
                   (currentAttributes.charisma - ATTRIBUTE_MIN) +
                   (currentAttributes.intelligence - ATTRIBUTE_MIN);
  $: pointsRemaining = POINT_BUY_BUDGET - pointsSpent;

  // Prime Modifier Tie-Breaker
  let primeModifierAttributeUserChoice: string | null = null;
  $: highestAttributeValue = Math.max(...Object.values(currentAttributes));
  $: tiedAttributes = Object.entries(currentAttributes)
      .filter(([name, value]) => value === highestAttributeValue)
      .map(([name, value]) => name);

  $: {
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
  $: displayedPrimeModifierAttribute = tiedAttributes.length > 1 && primeModifierAttributeUserChoice !== null
      ? primeModifierAttributeUserChoice
      : $primeModifier.attribute;
  $: displayedPrimeModifierValue = displayedPrimeModifierAttribute
      ? currentAttributes[displayedPrimeModifierAttribute as keyof typeof currentAttributes]
      : $primeModifier.value;

  // --- Ancestry & Trait Selection ---
  let selectedAncestry1_ID: string | null = null;
  let selectedAncestry2_ID: string | null = null;
  let currentSelectedTraits: any[] = [];
  const ancestryPointsBudget: number = 5;
  $: totalAncestryPointsAvailable = ancestryPointsBudget;
  $: ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0);
  $: ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent;

  // --- Class Selection ---
  let selectedClassId: string | null = null;
  let selectedFeatureChoices: Record<string, any> = {};

  $: selectedClass = classesData.find(c => c.id === selectedClassId);

  // --- Validation ---
  $: allRequiredFeatureChoicesMade = selectedClass?.featureChoicesLvl1?.every(
    choice => selectedFeatureChoices && selectedFeatureChoices[choice.id] !== undefined
  ) ?? true;

  $: allStagesValid =
    pointsRemaining === 0 &&
    ancestryPointsRemaining === 0 &&
    selectedClassId !== null &&
    allRequiredFeatureChoicesMade;

  // --- Handlers ---
  function handleAttributeChange(attributeId: keyof typeof currentAttributes, delta: number) {
    const currentValue = currentAttributes[attributeId];
    const newValue = currentValue + delta;
    if (newValue < ATTRIBUTE_MIN || newValue > ATTRIBUTE_MAX_L1) return;
    if (delta > 0 && pointsRemaining <= 0) {
      if (pointsRemaining === 0) return;
    }
    characterInProgressStore.update(store => {
      const storeKey = `attribute_${attributeId}` as keyof typeof store;
      if (storeKey in store) {
         (store[storeKey] as number) = newValue;
      }
      store.pointsSpent = (store.attribute_might - ATTRIBUTE_MIN) +
                          (store.attribute_agility - ATTRIBUTE_MIN) +
                          (store.attribute_charisma - ATTRIBUTE_MIN) +
                          (store.attribute_intelligence - ATTRIBUTE_MIN);
      return store;
    });
  }

  function handleTraitSelection(trait: any): void {
    const traitIndex = currentSelectedTraits.findIndex(t => t.id === trait.id);
    if (traitIndex > -1) {
      currentSelectedTraits = currentSelectedTraits.filter(t => t.id !== trait.id);
    } else {
      if (trait.cost > 0 && ancestryPointsRemaining < trait.cost) return;
      const minorTraitsSelected = currentSelectedTraits.filter(t => t.isMinor).length;
      if (trait.isMinor && minorTraitsSelected >= 1) return;
      if (trait.cost < 0) {
        const potentialPointsFromNegative = currentSelectedTraits
          .filter(t => t.cost < 0)
          .reduce((sum, t) => sum + Math.abs(t.cost), 0) + Math.abs(trait.cost);
        if (potentialPointsFromNegative > 2) return;
      }
      currentSelectedTraits = [...currentSelectedTraits, trait];
    }
  }

  function handleClassSelection(classId: string) {
    selectedClassId = classId;
    selectedFeatureChoices = {};
    characterInProgressStore.update(store => ({ ...store, classId }));
  }

  function handleFeatureChoice(choiceId: string, value: any) {
    selectedFeatureChoices = { ...selectedFeatureChoices, [choiceId]: value };
    characterInProgressStore.update(store => ({
      ...store,
      selectedFeatureChoices: JSON.stringify(selectedFeatureChoices)
    }));
  }

  async function handleSubmitCharacter() {
    if (!allStagesValid) {
      alert('Please complete all sections and resolve validation errors.');
      return;
    }
    characterInProgressStore.update(store => ({
      ...store,
      finalName: characterName.trim(),
      ancestry1Id: selectedAncestry1_ID,
      ancestry2Id: selectedAncestry2_ID,
      selectedTraitIds: JSON.stringify(currentSelectedTraits.map(t => t.id)),
      classId: selectedClassId,
      selectedFeatureChoices: JSON.stringify(selectedFeatureChoices)
    }));
    const $store = $characterInProgressStore;
    const payload = {
      ...$store,
      finalName: characterName.trim(),
      ancestry1Id: selectedAncestry1_ID,
      ancestry2Id: selectedAncestry2_ID,
      selectedTraitIds: JSON.stringify(currentSelectedTraits.map(t => t.id)),
      classId: selectedClassId,
      selectedFeatureChoices: JSON.stringify(selectedFeatureChoices)
    };
    try {
      const response = await fetch('/api/character/progress/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.error || 'Failed to save character.');
        return;
      }
      alert('Character saved successfully!');
      // Optionally redirect or reset form
    } catch (err) {
      alert('Unexpected error saving character.');
    }
  }

  // --- Ancestry Trait Calculation ---
  import type { IAncestry, ITrait } from '$lib/rulesdata/types';
  // Explicitly type availableTraitsByAncestry to avoid Svelte/TS never[] errors
  let availableTraitsByAncestry: { ancestry: IAncestry; traits: ITrait[] }[] = [];
  $: {
    availableTraitsByAncestry = [];
    if (ancestriesData && (selectedAncestry1_ID !== null || selectedAncestry2_ID !== null)) {
      const selectedAncestry1 = ancestriesData.find(a => a.id === selectedAncestry1_ID);
      const selectedAncestry2 = ancestriesData.find(a => a.id === selectedAncestry2_ID);
      if (selectedAncestry1) {
        const traits1 = [...(selectedAncestry1.defaultTraitIds || []), ...(selectedAncestry1.expandedTraitIds || [])]
          .map(traitId => traits.find(t => t.id === traitId))
          .filter((t): t is ITrait => t !== undefined);
        availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry1, traits: traits1 }];
      }
      if (selectedAncestry2 && selectedAncestry2_ID !== selectedAncestry1_ID) {
        const traits2 = [...(selectedAncestry2.defaultTraitIds || []), ...(selectedAncestry2.expandedTraitIds || [])]
          .map(traitId => traits.find(t => t.id === traitId))
          .filter((t): t is ITrait => t !== undefined);
        availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry2, traits: traits2 }];
      }
    }
  }
</script>

<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary">
  <h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Character Creation</h2>

  <!-- Step 1: Character Name & Attributes -->
  <div class="mb-8">
    <label for="characterName" class="block text-lg font-medium mb-2">Character Name</label>
    <input
      type="text"
      id="characterName"
      bind:value={characterName}
      class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border"
      placeholder="Enter your character's name"
    />
    <h3 class="text-lg font-medium mt-6 mb-2">Allocate Attribute Points (Point Buy)</h3>
    <p class="mb-4 text-light-text-secondary" class:text-magenta-error={pointsRemaining < 0}>
      Budget: {pointsRemaining} / {POINT_BUY_BUDGET} Points Remaining
    </p>
    <div class="flex flex-col gap-4 mb-6">
      {#each attributesData as attribute (attribute.id)}
        <div
          class="flex items-center gap-4 p-4 bg-dark-bg-primary rounded-md shadow-sm relative"
        >
          <!-- Controls (leftmost) -->
          <div class="flex items-center gap-2">
            <button
              class="p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg"
              on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, -1)}
              disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] <= ATTRIBUTE_MIN}
            >-</button>
            <input
              id={`attribute-${attribute.id}`}
              type="number"
              readonly
              value={currentAttributes[attribute.id as keyof typeof currentAttributes]}
              class="w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8"
            />
            <button
              class="p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg"
              on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, 1)}
              disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] >= ATTRIBUTE_MAX_L1 || pointsRemaining <= 0}
            >+</button>
          </div>
          <!-- Yellow marker (if prime) -->
          {#if displayedPrimeModifierAttribute === attribute.name}
            <div class="w-1 h-10 bg-yellow-accent rounded mr-3"></div>
          {/if}
          <!-- Name & Description -->
          <div class="flex flex-col min-w-[140px]">
            <label for={`attribute-${attribute.id}`} class="text-xl font-medium text-light-text-primary leading-tight">
              {attribute.name}
            </label>
            <span class="text-xs text-light-text-secondary">{attribute.description}</span>
          </div>

          <!-- Derived Stat (if any) -->
          {#if attribute.id === 'charisma'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Grit: {$gritPoints}
            </span>
          {/if}
          {#if attribute.id === 'agility'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Jump: {$jumpDistance}
            </span>
          {/if}
          {#if attribute.id === 'intelligence'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Skill Pts: {$provisionalSkillPoints}
            </span>
          {/if}

          <!-- Save Bonus (far right) -->
          <span class="ml-auto text-blue-info font-medium whitespace-nowrap">
            Save: {($saveMasteries[attribute.id as keyof typeof $saveMasteries] >= 0 ? '+' : '') + $saveMasteries[attribute.id as keyof typeof $saveMasteries]}
          </span>
        </div>
      {/each}
    </div>
    {#if tiedAttributes.length > 1}
      <div class="my-4">
        <p class="mb-2 text-yellow-accent">Multiple attributes are tied for highest. Please select your Prime Modifier:</p>
        <div class="flex gap-4">
          {#each tiedAttributes as attrId}
            <label>
              <input type="radio" name="primeModifier" value={attrId} bind:group={primeModifierAttributeUserChoice} class="mr-1" />
              {attributesData.find(a => a.id === attrId)?.name || attrId}
            </label>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <!-- Step 2: Ancestry & Trait Selection -->
  <div class="mb-8">
    <h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3>
    <div class="flex gap-4">
      <div class="flex-1">
        <label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label>
        <select id="ancestry1" bind:value={selectedAncestry1_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
          <option value={null}>Select an ancestry</option>
          {#each ancestriesData as ancestry}
            <option value={ancestry.id}>{ancestry.name}</option>
          {/each}
        </select>
      </div>
      <div class="flex-1">
        <label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label>
        <select id="ancestry2" bind:value={selectedAncestry2_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
          <option value={null}>None</option>
          {#each ancestriesData as ancestry}
            <option value={ancestry.id}>{ancestry.name}</option>
          {/each}
        </select>
      </div>
    </div>
    {#if selectedAncestry1_ID}
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Ancestry Traits</h3>
        <p class="mb-4 text-light-text-secondary">Ancestry Points: <span class="font-bold">{ancestryPointsRemaining}</span> / {totalAncestryPointsAvailable} Remaining</p>
        {#if availableTraitsByAncestry.length > 0}
          {#each availableTraitsByAncestry as ancestryGroup}
            <h4 class="text-lg font-semibold mt-4 mb-2">{ancestryGroup.ancestry.name} Traits</h4>
            {#if ancestryGroup.traits.length > 0}
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each ancestryGroup.traits as trait}
                  <li class="flex items-center justify-between p-3 my-1 rounded border border-dark-border dark:hover:bg-dark-bg-primary transition-colors duration-200">
                    <input type="checkbox" on:change={() => handleTraitSelection(trait)} checked={currentSelectedTraits.some(t => t.id === trait.id)} disabled={
                      (trait.cost > 0 && ancestryPointsRemaining < trait.cost && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                      (trait.isMinor && currentSelectedTraits.filter(t => t.isMinor).length >= 1 && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                      (trait.cost < 0 && currentSelectedTraits.filter(t => t.cost < 0).reduce((sum, t) => sum + Math.abs(t.cost), 0) >= 2 && !currentSelectedTraits.some(t => t.id === trait.id))
                    } class="form-checkbox h-5 w-5 text-purple-primary rounded focus:ring-purple-primary dark:bg-dark-bg-secondary dark:border-dark-border" />
                    <span class="font-medium flex-1 ml-3 {currentSelectedTraits.some(t => t.id === trait.id) ? 'text-yellow-accent' : ''}">
                      {trait.name} (Cost: {trait.cost})
                    </span>
                  </li>
                {/each}
              </ul>
            {:else}
              <p>No traits available for {ancestryGroup.ancestry.name}.</p>
            {/if}
          {/each}
        {:else}
          <p>Select one or two ancestries to see available traits.</p>
        {/if}
      </div>
      <div class="mt-4 p-4 bg-dark-bg-primary rounded-md shadow-sm mb-6">
        <h3 class="text-lg font-medium mb-2">Selected Traits</h3>
        {#each currentSelectedTraits as trait}
          <p class="text-light-text-primary">{trait.name} (Cost: {trait.cost})</p>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Step 3: Class Selection -->
  <div class="mb-8">
    <h3 class="text-lg font-medium mb-2">Class Selection</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each classesData as classObj}
        <label class="flex items-center p-3 border rounded cursor-pointer" class:border-yellow-accent={selectedClassId === classObj.id}>
          <input type="radio" name="class" value={classObj.id} bind:group={selectedClassId} on:change={() => handleClassSelection(classObj.id)} />
          <span class="ml-3 font-semibold">{classObj.name}</span>
        </label>
      {/each}
    </div>
    {#if selectedClass}
      <div class="mt-4">
        <h4 class="font-semibold mb-2">Level 1 Features</h4>
        <ul>
          {#each selectedClass.level1Features as feature}
            <li class="mb-1">{feature.name}: {feature.description}</li>
          {/each}
        </ul>
        {#if selectedClass.featureChoicesLvl1 && selectedClass.featureChoicesLvl1.length > 0}
          <div class="mt-4">
            <h4 class="font-semibold mb-2">Feature Choices</h4>
            {#each selectedClass.featureChoicesLvl1 as choice}
              <div class="mb-2">
                <label class="block mb-1">{choice.prompt}</label>
                {#if choice.type === 'select_one'}
                  <div class="flex gap-2">
                    {#each choice.options as option}
                      <label>
                        <input type="radio" name={choice.id} value={option.value} checked={selectedFeatureChoices[choice.id] === option.value} on:change={() => handleFeatureChoice(choice.id, option.value)} />
                        {option.label}
                      </label>
                    {/each}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>

  <!-- Step 4: Final Provisional Stats -->
  <div class="mb-8">
    <h3 class="text-lg font-medium mb-2">Final Provisional Stats</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary">
      <p>HP = Class({selectedClass ? selectedClass.baseHpContribution : 8}) + Might({$characterInProgressStore.attribute_might}) + Ancestry(0) = {$maxHP}</p>
      <p>SP = { $startingSP }</p>
      <p>MP = { $startingMP }</p>
      <p>PD = Base(8) + CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) + Intelligence({$characterInProgressStore.attribute_intelligence}) + Bonuses(0) = {$precisionDefense}</p>
      <p>AD = Base(8) + CM({$combatMastery}) + Might({$characterInProgressStore.attribute_might}) + Charisma({$characterInProgressStore.attribute_charisma}) + Bonuses(0) = {$areaDefense}</p>
      <p>Initiative = CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) = {$initiative}</p>
      <p>Grit Points = Base(2) + Charisma({$characterInProgressStore.attribute_charisma}) = {$gritPoints}</p>
      <p>Jump Distance = Agility({$characterInProgressStore.attribute_agility}) (min 1) = {$jumpDistance}</p>
      <p>Base Skill Points = Base(5) + Intelligence({$characterInProgressStore.attribute_intelligence}) = {$provisionalSkillPoints}</p>
    </div>
  </div>

  <!-- Submit Button -->
  <div class="mt-8 text-right">
    <button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"
      on:click={handleSubmitCharacter}
      disabled={!allStagesValid}>
      Save Character
    </button>
  </div>
</div>
