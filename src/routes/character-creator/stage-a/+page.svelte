<script lang="ts">
  import { writable, derived } from 'svelte/store';
  import { goto } from '$app/navigation'; // Import goto for navigation
  import { characterInProgressStore, primeModifier, saveMasteries, gritPoints, jumpDistance, provisionalSkillPoints, getModifier, L1_COMBAT_MASTERY, combatMastery } from '$lib/stores/characterInProgressStore';
  import { attributesData } from '$lib/rulesdata/attributes';
  // No Melt UI imports needed for standard HTML elements

  // Local state for character name
  let characterName: string = '';

  // Constants
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3; // Level 1 cap is +3

  // Reactive calculations based on the store
  $: currentAttributes = {
    might: $characterInProgressStore.attribute_might,
    agility: $characterInProgressStore.attribute_agility,
    charisma: $characterInProgressStore.attribute_charisma,
    intelligence: $characterInProgressStore.attribute_intelligence,
  };

  $: pointsSpent = (currentAttributes.might - ATTRIBUTE_MIN) +
                   (currentAttributes.agility - ATTRIBUTE_MIN) +
                   (currentAttributes.charisma - ATTRIBUTE_MIN) +
                   (currentAttributes.intelligence - ATTRIBUTE_MIN); // Corrected typo

  $: pointsRemaining = POINT_BUY_BUDGET - pointsSpent;

  // Local state for Prime Modifier tie-breaking UI
  let primeModifierAttributeUserChoice: string | null = null;

  // Determine if a tie exists for the highest attribute
  $: highestAttributeValue = Math.max(...Object.values(currentAttributes));
  $: tiedAttributes = Object.entries(currentAttributes)
      .filter(([name, value]) => value === highestAttributeValue)
      .map(([name, value]) => name); // Get names of tied attributes

  // Function to handle attribute changes
  function handleAttributeChange(attributeId: keyof typeof currentAttributes, delta: number) {
    const currentValue = currentAttributes[attributeId];
    const newValue = currentValue + delta;

    // Prevent going below min or above max
    if (newValue < ATTRIBUTE_MIN || newValue > ATTRIBUTE_MAX_L1) {
      return;
    }

    // Prevent spending more points than budget (only for increments)
    if (delta > 0 && pointsRemaining <= 0) {
       // Allow decrementing even if pointsRemaining is negative
       if (pointsRemaining === 0) return; // Prevent increment if exactly 0 points left
    }

    // Update the store
    characterInProgressStore.update(store => {
      // Map attributeId string ('might') to store key ('attribute_might')
      const storeKey = `attribute_${attributeId}` as keyof typeof store;
      if (storeKey in store) {
         (store[storeKey] as number) = newValue; // Type assertion needed for update
      }
      // Recalculate pointsSpent in the store? Or rely on derived?
      // Let's rely on derived for display, but maybe store pointsSpent for backend validation?
      // The schema has pointsSpent, so let's update it here.
      // This calculation should match the reactive $: pointsSpent above.
      store.pointsSpent = (store.attribute_might - ATTRIBUTE_MIN) +
                          (store.attribute_agility - ATTRIBUTE_MIN) +
                          (store.attribute_charisma - ATTRIBUTE_MIN) +
                          (store.attribute_intelligence - ATTRIBUTE_MIN);

      return store;
    });
  }

  // Function to handle submitting Stage A data
  async function handleSubmitStageA() {
    // Frontend validation
    if (!characterName.trim()) {
        alert('Please enter a character name.');
        return;
    }
    if (pointsRemaining !== 0) {
      alert(`You must allocate exactly ${POINT_BUY_BUDGET} points. Points remaining: ${pointsRemaining}`);
      return;
    }
    // Attribute cap validation is handled by handleAttributeChange

    // Prepare data to send to backend
    const stageAData = {
      characterId: $characterInProgressStore.id, // Pass the current ID (might be null for new)
      finalName: characterName.trim(), // Include character name
      attribute_might: $characterInProgressStore.attribute_might,
      attribute_agility: $characterInProgressStore.attribute_agility,
      attribute_charisma: $characterInProgressStore.attribute_charisma,
      attribute_intelligence: $characterInProgressStore.attribute_intelligence,
      // pointsSpent is calculated by backend for authoritative validation
    };

    try {
      // Use SvelteKit's fetch for API calls
      const response = await fetch('/api/character/progress/stageA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stageAData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Backend validation failed:', error);
        alert(`Failed to save attributes: ${error.message || response.statusText}`);
        return;
      }

      const result = await response.json();
      console.log('Stage A data saved successfully:', result);

      // Update store with potentially new character ID if it was created
      if (result.characterId && $characterInProgressStore.id === null) {
         characterInProgressStore.update(store => ({ ...store, id: result.characterId }));
         // TODO: Also save characterId to localStorage for resume functionality (TD-002 related)
      }

      // Navigate to the next stage (Stage B)
      goto('/character-creator/stage-b');

    } catch (error) {
      console.error('Error submitting Stage A data:', error);
      alert('An unexpected error occurred while saving attributes.');
    }
  }

  // Reactive statement to update user choice if tie is resolved or changes
  $: {
      if (tiedAttributes.length === 1) {
          // If tie is resolved to a single attribute, set user choice to that attribute
          primeModifierAttributeUserChoice = tiedAttributes[0];
      } else if (tiedAttributes.length > 1) {
          // If there's a tie, ensure user choice is one of the tied attributes
          if (primeModifierAttributeUserChoice === null || !tiedAttributes.includes(primeModifierAttributeUserChoice)) {
              // If no choice made yet, or previous choice is no longer tied, clear it
              primeModifierAttributeUserChoice = null; // Force user to choose
          }
      } else {
          // Should not happen with 4 attributes starting at -2, but handle defensively
          primeModifierAttributeUserChoice = null;
      }
  }

  // Derived store for the *displayed* Prime Modifier attribute, considering user choice on tie
  $: displayedPrimeModifierAttribute = tiedAttributes.length > 1 && primeModifierAttributeUserChoice !== null
      ? primeModifierAttributeUserChoice
      : $primeModifier.attribute; // Use store's default if no tie or no user choice yet

  // Derived store for the *displayed* Prime Modifier value, based on the displayed attribute
  $: displayedPrimeModifierValue = displayedPrimeModifierAttribute
      ? currentAttributes[displayedPrimeModifierAttribute as keyof typeof currentAttributes] // Use currentAttributes for value
      : $primeModifier.value; // Fallback to store's derived value if needed

</script>

<!-- UI Structure -->
<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary">
  <h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 1: Core Attributes & Foundational Stats</h2>

  <!-- Character Name Input -->
  <div class="mb-6">
    <label for="characterName" class="block text-lg font-medium mb-2">Character Name</label>
    <input
      type="text"
      id="characterName"
      bind:value={characterName}
      class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border"
      placeholder="Enter your character's name"
    />
  </div>

  <!-- Point Buy Allocation Section -->
  <div class="mb-6">
    <h3 class="text-lg font-medium mb-2">Allocate Attribute Points (Point Buy)</h3>
    <p class="mb-4 text-light-text-secondary" class:text-magenta-error={pointsRemaining < 0}>
      Budget: {pointsRemaining} / {POINT_BUY_BUDGET} Points Remaining
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {#each attributesData as attribute (attribute.id)}
        <div class="p-4 bg-dark-bg-primary rounded-md shadow-sm relative flex flex-col justify-between"
             class:border-2={displayedPrimeModifierAttribute === attribute.name}
             class:border-yellow-accent={displayedPrimeModifierAttribute === attribute.name}>
          <!-- Top Section -->
          <div class="flex justify-between items-center mb-1">
            <!-- Using standard label -->
            <label for={`attribute-${attribute.id}`} class="text-xl font-medium text-light-text-primary">
              {attribute.name}
            </label>
            <!-- Save Mastery Display -->
            <span class="text-blue-info font-medium">
              Save: {($saveMasteries[attribute.id as keyof typeof $saveMasteries] >= 0 ? '+' : '') + $saveMasteries[attribute.id as keyof typeof $saveMasteries]}
              <!-- TODO: Add Tooltip for Save Mastery calculation -->
            </span>
          </div>
          <p class="text-sm text-light-text-secondary mb-2">{attribute.description}</p>

          <!-- Bottom Section - Input & Derived Stats -->
          <div class="flex items-center gap-2 mb-2">
            <!-- Using standard button -->
            <button class="p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg"
                         on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, -1)}
                         disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] <= ATTRIBUTE_MIN}>-</button>
            <!-- Using standard input -->
            <input id={`attribute-${attribute.id}`}
                        type="number"
                        readonly
                        value={currentAttributes[attribute.id as keyof typeof currentAttributes]}
                        class="w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8" />
            <!-- Using standard button -->
            <button class="p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg"
                         on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, 1)}
                         disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] >= ATTRIBUTE_MAX_L1 || pointsRemaining <= 0}>+</button>
          </div>
          <!-- Integrated Derived Stats Display (Conditional) -->
          {#if attribute.id === 'charisma'}
            <span class="text-xs text-light-text-secondary">
              Grit: {$gritPoints}
              <!-- TODO: Add Tooltip -->
            </span>
          {/if}
          {#if attribute.id === 'agility'}
            <span class="text-xs text-light-text-secondary">
              Jump: {$jumpDistance}
              <!-- TODO: Add Tooltip -->
            </span>
          {/if}
          {#if attribute.id === 'intelligence'}
            <span class="text-xs text-light-text-secondary">
              Skill Pts (Base): {$provisionalSkillPoints}
              <!-- TODO: Add Tooltip -->
            </span>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Prime Modifier Tie-Breaker (Conditional UI) -->
    {#if tiedAttributes.length > 1}
      <div class="my-4">
        <p class="mb-2 text-yellow-accent">Multiple attributes are tied for highest. Please select your Prime Modifier:</p>
        <!-- Using standard radio group -->
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

  <!-- Key Calculated Stats Display -->
  <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Level: </span>
      <span class="text-2xl font-bold text-yellow-accent">{$characterInProgressStore.level}</span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Combat Mastery (CM): </span>
      <span class="text-2xl font-bold text-yellow-accent">{$combatMastery}</span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Prime Modifier: </span>
      <span class="text-2xl font-bold text-yellow-accent">
        {displayedPrimeModifierAttribute ? attributesData.find(a => a.id === displayedPrimeModifierAttribute.toLowerCase())?.name || displayedPrimeModifierAttribute : 'N/A'} ({displayedPrimeModifierValue})
      </span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-dark-bg-primary rounded-lg text-center">
      <span class="text-md text-light-text-primary">Base Skill Points (5 + Int Mod): </span>
      <span class="text-xl font-semibold text-blue-info">{$provisionalSkillPoints}</span>
      <!-- TODO: Add Tooltip -->
    </div>
     <!-- TODO: Add Grit Points and Jump Distance cards here if desired, or keep them integrated -->
  </div>

  <!-- Provisional Formulas Display -->
  <div class="mt-6">
    <h3 class="text-lg font-medium mb-3">Provisional Base Stats (Finalized after Class & Equipment)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary">
      {#each attributesData as attribute}
        {#if attribute.derivedStats}
          {#each attribute.derivedStats as derivedStat}
            <p>{derivedStat.statName} = {derivedStat.formula}</p>
          {/each}
        {/if}
      {/each}
      <!-- Add other provisional formulas not tied to a single attribute -->
      <p>Health Points = Class HP + Might ({currentAttributes.might}) + Ancestry HP</p>
      <p>Stamina Points = Class SP</p>
      <p>Mana Points = Class MP</p>
      <!-- Removed hardcoded Precision Defense and Area Defense formulas as they are now sourced from attributesData -->
    </div>
  </div>

  <!-- Navigation Button -->
  <div class="mt-8 text-right">
      <!-- Using standard button -->
      <button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"
                   on:click={handleSubmitStageA}
                   disabled={pointsRemaining !== 0}>
          Next Step
      </button>
  </div>
</div>
