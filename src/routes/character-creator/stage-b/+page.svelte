<script lang="ts">
    import { characterInProgressStore } from '$lib/stores/characterInProgressStore';
    import type { IAncestry, ITrait } from '$lib/rulesdata/types';
    import { ancestriesData as ancestries } from '$lib/rulesdata/ancestries';
    import { traitsData as traits } from '$lib/rulesdata/traits'; // Assuming traits are in a separate file

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

    function getTraitsForAncestry(ancestryId: string): ITrait[] {
        // Assuming traits have a sourceAncestryId property
        return traits.filter(trait => trait.sourceAncestryId === ancestryId);
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


    $: {
        // Calculate availableTraitsForSelection based on selectedAncestry1_ID and selectedAncestry2_ID
        availableTraitsForSelection = [];
        if (selectedAncestry1_ID) {
            availableTraitsForSelection = [...availableTraitsForSelection, ...getTraitsForAncestry(selectedAncestry1_ID)];
        }
        if (selectedAncestry2_ID && selectedAncestry2_ID !== null) {
             availableTraitsForSelection = [...availableTraitsForSelection, ...getTraitsForAncestry(selectedAncestry2_ID)];
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
    // TODO: Implement UI Feedback for Trait Rules (disable selections, messages)

</script>

<!-- II. C. UI Structure & Components (Melt UI + TailwindCSS): -->

<!-- 1. Main Container & Stage Title: -->
<div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Step 2: Ancestry Choices</h2>

    <!-- 2. Ancestry Selection Section: -->
    <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">Choose Your Ancestry (Up to 2)</h3>
        <!-- TODO: Implement Ancestry Selection using Melt UI Select or custom SelectionCards -->
        <!-- Using standard select for now due to Melt UI SSR issues -->
        <div class="flex gap-4">
            <div>
                <!-- Fixed A11y warning by associating label with input -->
                <label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label>
                <select id="ancestry1" bind:value={selectedAncestry1_ID} class="p-2 border rounded dark:bg-dark-bg-secondary dark:border-dark-border">
                    <option value={null}>Select an ancestry</option>
                    {#each ancestries as ancestry}
                        <option value={ancestry.id}>{ancestry.name}</option>
                    {/each}
                </select>
            </div>
            <div>
                <!-- Fixed A11y warning by associating label with input -->
                <label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label>
                 <select id="ancestry2" bind:value={selectedAncestry2_ID} class="p-2 border rounded dark:bg-dark-bg-secondary dark:border-dark-border">
                    <option value={null}>None</option>
                    {#each ancestries as ancestry}
                        <option value={ancestry.id}>{ancestry.name}</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>

    <!-- 3. Ancestry Points & Trait Allocation Section: -->
    <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">Ancestry Traits</h3>
        <p class="mb-4">Ancestry Points: {ancestryPointsRemaining} / {totalAncestryPointsAvailable} Remaining</p>

        <!-- Conditional Trait Listing for selected ancestries -->
        {#if availableTraitsForSelection.length > 0}
            <ul>
                {#each availableTraitsForSelection as trait}
                    <li class="flex items-center justify-between p-2 my-1 rounded dark:hover:bg-dark-bg-primary">
                        <!-- Add disabled state based on rules -->
                        <input type="checkbox" on:change={() => handleTraitSelection(trait)} checked={currentSelectedTraits.some(t => t.id === trait.id)} disabled={
                            // Disable if already selected (handled by checked)
                            // Disable if not enough points and not a negative trait
                            (trait.cost > 0 && ancestryPointsRemaining < trait.cost && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                            // Disable if Minor Trait limit reached and this is a Minor Trait
                            (trait.isMinor && currentSelectedTraits.filter(t => t.isMinor).length >= 1 && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                            // Disable if Negative Trait point gain limit reached and this is a Negative Trait
                            (trait.cost < 0 && currentSelectedTraits.filter(t => t.cost < 0).reduce((sum, t) => sum + Math.abs(t.cost), 0) >= 2 && !currentSelectedTraits.some(t => t.id === trait.id))
                        } />
                        <span class="font-medium {currentSelectedTraits.some(t => t.id === trait.id) ? 'text-yellow-accent' : ''}">
                            {trait.name} (Cost: {trait.cost})
                        </span>
                        <!-- TODO: Add Tooltip for description -->
                    </li>
                {/each}
            </ul>
        {:else}
            <p>Select one or two ancestries to see available traits.</p>
        {/if}
    </div>

    <!-- 4. Chosen Traits Summary: -->
    <div class="mt-4 p-3 bg-dark-bg-primary rounded-md mb-6">
        <h3 class="text-xl font-semibold mb-3">Selected Traits</h3>
        {#each currentSelectedTraits as trait}
            <p>{trait.name} (Cost: {trait.cost}){trait.sourceAncestryId ? ' from ' + getAncestryName(trait.sourceAncestryId) : ''}</p>
        {/each}
    </div>

    <!-- 5. Read-Only Display of Updated Stage A Stats: -->
    <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">Current Core Stats (Reflecting Ancestry Choices)</h3>
        <!-- Display stats from $characterInProgressStore.attributesFromStageA and derived stats -->
        <p>Might: {$characterInProgressStore.attribute_might}</p>
        <p>Agility: {$characterInProgressStore.attribute_agility}</p>
        <p>Charisma: {$characterInProgressStore.attribute_charisma}</p>
        <p>Intellect: {$characterInProgressStore.attribute_intelligence}</p>
        <!-- TODO: Display derived stats -->
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
                                <span>{(attrName as keyof typeof tempAttributesForReallocation).replace('attribute_', '')}: {tempAttributesForReallocation[attrName as keyof typeof tempAttributesForReallocation]}</span>
                                <button on:click={() => reduceAttributeInPanel(attrName as keyof typeof tempAttributesForReallocation)} disabled={(tempAttributesForReallocation[attrName as keyof typeof tempAttributesForReallocation] ?? -2) <= -2 || pointsFreedInPanel >= overflowAmount} class="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">-</button>
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
</div>
