<script lang="ts">
    import { characterInProgressStore } from '$lib/stores/characterInProgressStore';
    import type { IAncestry, ITrait } from '$lib/rulesdata/types';
    import { ancestriesData } from '$lib/rulesdata/ancestries';
    import { traitsData as traits } from '$lib/rulesdata/traits'; // Assuming traits are in a separate file

    const ancestries = ancestriesData; // Assign to a local variable for consistency

    // II. B. Internal State (Reactive Svelte Variables):
    let selectedAncestry1_ID: string | null = null;
    let selectedAncestry2_ID: string | null = null;
    let availableTraitsForSelection: ITrait[] = []; // Reactive/Derived Array
    let currentSelectedTraits: ITrait[] = []; // Array of Trait Objects
    const ancestryPointsBudget: number = 5;
    let pointsFromNegativeTraits: number = 0; // Reactive/Derived Number
    $: totalAncestryPointsAvailable = ancestryPointsBudget + pointsFromNegativeTraits; // Reactive/Derived Number
    $: ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0); // Reactive/Derived Number
    $: ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent; // Reactive/Derived Number

    let showOverflowHelperPanel: boolean = false; // Boolean (default: false)
    let overflowTrait: ITrait | null = null; // Object | null (the trait causing the overflow)
    let overflowAttributeName: 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence' | null = null; // String | null (e.g., 'attribute_might')
    let overflowAmount: number = 0; // Number (how many points attribute would go over cap)
    // Use a more specific type for temp attributes, or copy only relevant ones
    let tempAttributesForReallocation: {
        attribute_might: number;
        attribute_agility: number;
        attribute_charisma: number;
        attribute_intelligence: number;
    } = { attribute_might: -2, attribute_agility: -2, attribute_charisma: -2, attribute_intelligence: -2 }; // Initialize with base values
    let pointsFreedInPanel: number = 0; // Number (tracks how many points user has reduced in panel)

    // II. D. Functions & Logic:
    function getAncestryName(id: string): string {
        const ancestry = ancestries.find(a => a.id === id);
        return ancestry ? ancestry.name : 'Unknown Ancestry';
    }

    // Corrected parameter type to match the keys of tempAttributesForReallocation
    function reduceAttributeInPanel(attributeName: keyof typeof tempAttributesForReallocation): void {
        // Check if we can reduce this attribute and haven't reached our goal yet
        if (tempAttributesForReallocation[attributeName] > -2 && pointsFreedInPanel < overflowAmount) {
            // Don't reduce the attribute that's being increased by the trait
            if (attributeName !== overflowAttributeName) {
                tempAttributesForReallocation[attributeName]--;
                pointsFreedInPanel++;
            }
        }
    }

    // Function to check if selecting a trait would cause an attribute overflow
    function checkAttributeOverflow(trait: ITrait): { willOverflow: boolean; attributeName: 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence' | null; overflowAmount: number } {
        const attributeEffect = trait.effects?.find(effect => effect.type === 'MODIFY_ATTRIBUTE');

        if (attributeEffect && attributeEffect.target && typeof attributeEffect.value === 'number' && attributeEffect.value > 0) {
            const storeAttributeName = `attribute_${attributeEffect.target}` as 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence';

            if (['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'].includes(storeAttributeName)) {
                const currentAttributeValue = $characterInProgressStore?.[storeAttributeName] ?? -2;
                const potentialNewValue = currentAttributeValue + attributeEffect.value;
                const level1Cap = 3;

                if (potentialNewValue > level1Cap) {
                    return {
                        willOverflow: true,
                        attributeName: storeAttributeName,
                        overflowAmount: potentialNewValue - level1Cap
                    };
                }
            } else {
                 console.warn(`Trait ${trait.id} effect targets unknown or non-primary attribute: ${attributeEffect.target}`);
            }
        }
        return { willOverflow: false, attributeName: null, overflowAmount: 0 };
    }


    function handleTraitSelection(trait: ITrait): void {
        const traitIndex = currentSelectedTraits.findIndex(t => t.id === trait.id);

        if (traitIndex > -1) {
            // Trait is currently selected, so deselect it
            currentSelectedTraits = currentSelectedTraits.filter(t => t.id !== trait.id);
            // Reactive variables will handle points recalculation
        } else {
            // Trait is not selected, try to select it

            // Check if adding this trait violates point budget
            if (trait.cost > 0 && ancestryPointsRemaining < trait.cost) {
                // Add UI feedback here (will implement below)
                console.warn(`Cannot select trait ${trait.name}: Not enough Ancestry Points.`);
                return; // Prevent selection
            }

            // Check for Minor Trait limit (max 1)
            const minorTraitsSelected = currentSelectedTraits.filter(t => t.isMinor).length;
            if (trait.isMinor && minorTraitsSelected >= 1) {
                // Add UI feedback here (will implement below)
                console.warn("You can only select one Minor Trait.");
                return; // Prevent selection
            }

            // Check for Negative Trait point gain limit (max +2)
            if (trait.cost < 0) {
                const potentialPointsFromNegative = currentSelectedTraits
                    .filter(t => t.cost < 0)
                    .reduce((sum, t) => sum + Math.abs(t.cost), 0) + Math.abs(trait.cost);

                if (potentialPointsFromNegative > 2) {
                    // Add UI feedback here (will implement below)
                    console.warn("You can only gain a maximum of +2 points from Negative Traits.");
                    return; // Prevent selection
                }
            }

            // Check for attribute overflow
            const overflowCheck = checkAttributeOverflow(trait);
            if (overflowCheck.willOverflow) {
                // Set up overflow panel
                overflowTrait = trait;
                overflowAttributeName = overflowCheck.attributeName;
                overflowAmount = overflowCheck.overflowAmount;

                // Copy attribute values for reallocation
                tempAttributesForReallocation = {
                    attribute_might: $characterInProgressStore?.attribute_might ?? -2,
                    attribute_agility: $characterInProgressStore?.attribute_agility ?? -2,
                    attribute_charisma: $characterInProgressStore?.attribute_charisma ?? -2,
                    attribute_intelligence: $characterInProgressStore?.attribute_intelligence ?? -2,
                };

                pointsFreedInPanel = 0;
                showOverflowHelperPanel = true;
                return;
            }

            // If all checks pass, add the trait
            currentSelectedTraits = [...currentSelectedTraits, trait];
        }
    }

    function openOverflowHelperPanel(trait: ITrait): void {
        // This function is now primarily called by handleTraitSelection
        // Its logic has been moved into checkAttributeOverflow and handleTraitSelection
        // We keep it as a placeholder or potentially for direct calls if needed elsewhere
        console.warn("openOverflowHelperPanel called directly - logic is now in handleTraitSelection and checkAttributeOverflow");
        // The state variables (overflowTrait, etc.) are set in handleTraitSelection before calling this.
        // showOverflowHelperPanel = true; // This is set in handleTraitSelection
    }

    function closeOverflowHelperPanel(): void {
        // TODO: Implement logic to close panel
        showOverflowHelperPanel = false;
        overflowTrait = null; // Clear overflow state
        overflowAttributeName = null;
        overflowAmount = 0;
        pointsFreedInPanel = 0;
        // TODO: Decide if tempAttributesForReallocation should be reset or kept for review
    }

    function confirmAttributeReallocationAndSelectTrait(): void {
        if (overflowTrait && overflowAttributeName && pointsFreedInPanel === overflowAmount) {
            // Apply the attribute changes to the store
            characterInProgressStore.update(store => {
                return {
                    ...store,
                    attribute_might: tempAttributesForReallocation.attribute_might,
                    attribute_agility: tempAttributesForReallocation.attribute_agility,
                    attribute_charisma: tempAttributesForReallocation.attribute_charisma,
                    attribute_intelligence: tempAttributesForReallocation.attribute_intelligence
                };
            });

            // Add the overflow trait to selected traits
            currentSelectedTraits = [...currentSelectedTraits, overflowTrait];

            // Close panel and reset state
            closeOverflowHelperPanel();
        } else {
            console.warn("Attempted to confirm reallocation without resolving overflow.");
        }
    }

    interface TraitsByAncestry {
        ancestry: IAncestry;
        traits: ITrait[];
    }
    let availableTraitsByAncestry: TraitsByAncestry[] = []; // Reactive/Derived Array

    $: {
        // Calculate availableTraitsByAncestry based on selectedAncestry1_ID and selectedAncestry2_ID
        availableTraitsByAncestry = [];

        // Ensure ancestries data is loaded before processing
        if (ancestries && (selectedAncestry1_ID !== null || selectedAncestry2_ID !== null)) {
            const selectedAncestry1 = ancestries.find(a => a.id === selectedAncestry1_ID);
            const selectedAncestry2 = ancestries.find(a => a.id === selectedAncestry2_ID);

            if (selectedAncestry1) {
                const traits1 = [...(selectedAncestry1.defaultTraitIds || []), ...(selectedAncestry1.expandedTraitIds || [])]
                    .map(traitId => traits.find(t => t.id === traitId))
                    .filter((t): t is ITrait => t !== undefined);
                availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry1, traits: traits1 }];
            }

            // Add second ancestry traits only if different from the first
            if (selectedAncestry2 && selectedAncestry2_ID !== selectedAncestry1_ID) {
                 const traits2 = [...(selectedAncestry2.defaultTraitIds || []), ...(selectedAncestry2.expandedTraitIds || [])]
                    .map(traitId => traits.find(t => t.id === traitId))
                    .filter((t): t is ITrait => t !== undefined);
                availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry2, traits: traits2 }];
            }
        }


        // Calculate pointsFromNegativeTraits based on currentSelectedTraits
        pointsFromNegativeTraits = currentSelectedTraits
            .filter(trait => trait.cost < 0)
            .reduce((sum, trait) => sum + Math.abs(trait.cost), 0);
        // Enforce max +2 point gain from Negative Traits
        if (pointsFromNegativeTraits > 2) {
            pointsFromNegativeTraits = 2;
            // TODO: Add UI feedback that the limit is reached
        }

        // TODO: Implement logic to enforce other trait rules (max 2 ancestries, 1 Minor Trait, max +2 points from Negative Traits, total 5 points used)
        // This will likely involve checks within handleTraitSelection and potentially disabling UI elements
    }

    // TODO: Implement UI Feedback for Trait Rules (disable selections, messages)

</script>

<!-- 1. Main Container & Stage Title: -->
<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary">
    <h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 2: Ancestry Choices</h2>

    <!-- 2. Ancestry Selection Section: -->
    <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3>
        <!-- TODO: Implement Ancestry Selection using Melt UI Select or custom SelectionCards -->
        <!-- Using standard select for now due to Melt UI SSR issues -->
        <div class="flex gap-4">
            <div class="flex-1">
                <!-- Fixed A11y warning by associating label with input -->
                <label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label>
                <select id="ancestry1" bind:value={selectedAncestry1_ID} class="p-2 border rounded w-full dark:bg-dark-bg-secondary dark:border-dark-border">
                    <option value={null}>Select an ancestry</option>
                    {#if ancestries}
                        {#each ancestries as ancestry}
                            <option value={ancestry.id}>{ancestry.name}</option>
                        {/each}
                    {/if}
                </select>
            </div>
            <div class="flex-1">
                <!-- Fixed A11y warning by associating label with input -->
                <label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label>
                 <select id="ancestry2" bind:value={selectedAncestry2_ID} class="p-2 border rounded w-full dark:bg-dark-bg-secondary dark:border-dark-border">
                    <option value={null}>None</option>
                    {#if ancestries}
                        {#each ancestries as ancestry}
                            <option value={ancestry.id}>{ancestry.name}</option>
                        {/each}
                    {/if}
                </select>
            </div>
        </div>
    </div>

    {#if selectedAncestry1_ID}
        <!-- 3. Ancestry Points & Trait Allocation Section: -->
        <div class="mb-6">
            <h3 class="text-lg font-medium mb-2">Ancestry Traits</h3>
            <p class="mb-4 text-light-text-secondary">Ancestry Points: <span class="font-bold">{ancestryPointsRemaining}</span> / {totalAncestryPointsAvailable} Remaining</p>

            <!-- Conditional Trait Listing for selected ancestries -->
            {#if availableTraitsByAncestry.length > 0}
                {#each availableTraitsByAncestry as ancestryGroup}
                    <h4 class="text-lg font-semibold mt-4 mb-2">{ancestryGroup.ancestry.name} Traits</h4>
                    {#if ancestryGroup.traits.length > 0}
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {#each ancestryGroup.traits as trait}
                                <li class="flex items-center justify-between p-3 my-1 rounded border border-dark-border dark:hover:bg-dark-bg-primary transition-colors duration-200">
                                    <!-- Add disabled state based on rules -->
                                    <input type="checkbox" on:change={() => handleTraitSelection(trait)} checked={currentSelectedTraits.some(t => t.id === trait.id)} disabled={
                                        // Disable if not enough points and not a negative trait
                                        (trait.cost > 0 && ancestryPointsRemaining < trait.cost && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                                        // Disable if Minor Trait limit reached and this is a Minor Trait
                                        (trait.isMinor && currentSelectedTraits.filter(t => t.isMinor).length >= 1 && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                                        // Disable if Negative Trait point gain limit reached and this is a Negative Trait
                                        (trait.cost < 0 && currentSelectedTraits.filter(t => t.cost < 0).reduce((sum, t) => sum + Math.abs(t.cost), 0) >= 2 && !currentSelectedTraits.some(t => t.id === trait.id))
                                    } class="form-checkbox h-5 w-5 text-purple-primary rounded focus:ring-purple-primary dark:bg-dark-bg-secondary dark:border-dark-border" />
                                    <span class="font-medium flex-1 ml-3 {currentSelectedTraits.some(t => t.id === trait.id) ? 'text-yellow-accent' : ''}">
                                        {trait.name} (Cost: {trait.cost})
                                    </span>
                                    <!-- TODO: Add Tooltip for description -->
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

        <!-- 4. Chosen Traits Summary: -->
        <div class="mt-4 p-4 bg-dark-bg-primary rounded-md shadow-sm mb-6">
        <h3 class="text-lg font-medium mb-2">Selected Traits</h3>
        {#each currentSelectedTraits as trait}
            <p class="text-light-text-primary">{trait.name} (Cost: {trait.cost}){trait.sourceAncestryId && ancestries.find(a => a.id === trait.sourceAncestryId) ? ' from ' + getAncestryName(trait.sourceAncestryId) : ''}</p>
        {/each}
    </div>
    {/if}

    <!-- 5. Read-Only Display of Updated Stage A Stats: -->
    <div class="mb-6 p-4 bg-dark-bg-primary rounded-md shadow-sm">
        <h3 class="text-lg font-medium mb-2">Current Core Stats (Reflecting Ancestry Choices)</h3>
        <!-- Display stats from $characterInProgressStore.attributesFromStageA and derived stats -->
        <div class="grid grid-cols-2 gap-4">
            <p>Might: <span class="font-bold">{$characterInProgressStore.attribute_might}</span></p>
            <p>Agility: <span class="font-bold">{$characterInProgressStore.attribute_agility}</span></p>
            <p>Charisma: <span class="font-bold">{$characterInProgressStore.attribute_charisma}</span></p>
            <p>Intellect: <span class="font-bold">{$characterInProgressStore.attribute_intelligence}</span></p>
            <!-- TODO: Display derived stats -->
            <!-- Example derived stat placeholder -->
            <p class="col-span-2">Prime Modifier: <span class="font-bold text-yellow-accent">TODO</span></p>
        </div>
    </div>

    <!-- 6. Overflow Helper Panel (Melt UI Dialog): -->
    <!-- Using a simple div for now due to Melt UI SSR issues -->
    {#if showOverflowHelperPanel}
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-dark-bg-secondary p-6 rounded-lg shadow-xl w-full max-w-md text-light-text-primary">
                <h3 class="text-lg font-bold mb-2">Attribute Cap Reached for '{overflowTrait?.name}'</h3>
                <!-- Corrected display to use overflowAmount directly -->
                <p class="mb-4">Selecting '{overflowTrait?.name}' will increase '{overflowAttributeName?.replace('attribute_', '')}' by +{overflowAmount}, exceeding the Level 1 cap of +3. You have {overflowAmount} point(s) to free up by reducing other attributes.</p>

                <!-- Attribute Reduction Section within Panel: -->
                <div>
                    <h4 class="text-md font-semibold mb-2">Reduce Attributes:</h4>
                    <!-- TODO: Implement attribute reduction controls -->
                    {#each ['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'] as attrName: keyof typeof tempAttributesForReallocation}
                        {#if attrName !== overflowAttributeName}
                            <div class="flex items-center justify-between mb-2">
                                <!-- Changed label to span as it's not associated with a form control -->
                                <span>{attrName.replace('attribute_', '')}: {tempAttributesForReallocation[attrName as keyof typeof tempAttributesForReallocation]}</span>
                                <button on:click={() => reduceAttributeInPanel(attrName as keyof typeof tempAttributesForReallocation)} disabled={ (tempAttributesForReallocation[attrName as keyof typeof tempAttributesForReallocation] ?? -2) <= -2 || pointsFreedInPanel >= overflowAmount } class="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">-</button>
                            </div>
                        {/if}
                    {/each}
                </div>

                <p class="mt-4">Points Freed: {pointsFreedInPanel} / {overflowAmount}</p>

                <!-- Panel Actions: -->
                <div class="flex justify-end gap-3 mt-4">
                    <button on:click={closeOverflowHelperPanel} class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Cancel Trait</button>
                    <button on:click={confirmAttributeReallocationAndSelectTrait} disabled={pointsFreedInPanel !== overflowAmount} class="bg-purple-primary hover:bg-purple-primary/80 text-white px-4 py-2 rounded">Apply & Select Trait</button>
                </div>
            </div>
        </div>
    {/if}

    <!-- Next Button -->
    <div class="mt-8 text-right">
        <button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed" disabled={ancestryPointsRemaining !== 0 || currentSelectedTraits.length === 0}>
            Next Step
        </button>
    </div>
</div>
