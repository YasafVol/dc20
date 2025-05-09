# AI Generation Guide: Character Creator - Stage B (Ancestry Choices with Overflow Helper Panel)

## I. Overall Stage Objective
Create a Svelte component (e.g., `StageB_Ancestry.svelte`) that allows the user to:
1.  Select 1 or 2 Ancestries.
2.  Allocate 5 Ancestry Points for Traits from the chosen Ancestry/Ancestries, respecting rules (Minor Trait limit, Negative Trait point gain).
3.  If an Ancestry Trait would cause an attribute (set in Stage A) to exceed its Level 1 cap (+3), present a Helper Panel to allow the user to reduce other attributes to make room.
4.  View chosen traits and the impact on Ancestry Points.
5.  View the (read-only but dynamically updated) stats from Stage A, reflecting any changes made due to trait selections or reallocations via the Helper Panel.
6.  Persist these choices to a Svelte store and, upon proceeding, save to the `CharacterInProgress` table.

## II. Svelte Component: `StageB_Ancestry.svelte`

### A. Props:
*   `characterInProgressStore`: Writable Svelte store (holds `attributesFromStageA`, `selectedAncestries`, `selectedTraits`, `ancestryPointsAvailable`, etc.). Attribute values (e.g., `$characterInProgressStore.attribute_might`) set in Stage A are accessed from this store for display and overflow calculations.

### B. Internal State (Reactive Svelte Variables):
*   `selectedAncestry1_ID`: String | null
*   `selectedAncestry2_ID`: String | null
*   `availableTraitsForSelection`: Reactive/Derived Array (based on selected ancestries)
*   `currentSelectedTraits`: Array of Trait Objects (e.g., `[{ id: 'human_resolve', cost: 1, name: 'Human Resolve', ...}, ...]`)
*   `ancestryPointsBudget`: Number (constant: 5)
*   `pointsFromNegativeTraits`: Reactive/Derived Number
*   `totalAncestryPointsAvailable`: Reactive/Derived Number (`$: ancestryPointsBudget + pointsFromNegativeTraits`)
*   `ancestryPointsSpent`: Reactive/Derived Number
*   `ancestryPointsRemaining`: Reactive/Derived Number (`$: totalAncestryPointsAvailable - ancestryPointsSpent`)
*   `showOverflowHelperPanel`: Boolean (default: false)
*   `overflowTrait`: Object | null (the trait causing the overflow)
*   `overflowAttributeName`: String | null
*   `overflowAmount`: Number (how many points attribute would go over cap)
*   `tempAttributesForReallocation`: Object (copy of current `attributesFromStageA` for use in panel)
*   `pointsFreedInPanel`: Number (tracks how many points user has reduced in panel)

### C. UI Structure & Components (Melt UI + TailwindCSS):

**1. Main Container & Stage Title:** (Similar to Stage A)
    *   Title (`h2`): "Step 2: Ancestry Choices"

**2. Ancestry Selection Section (`div`):**
    *   Title (`h3`): "Choose Your Ancestry (Up to 2)"
    *   Two Melt UI `Select` components (or custom `SelectionCard`s):
        *   For "Ancestry 1" (bind to `selectedAncestry1_ID`)
        *   For "Ancestry 2" (bind to `selectedAncestry2_ID`, with a "None" option).
        *   Populated from static rule data. Styled with Tailwind.

**3. Ancestry Points & Trait Allocation Section (`div`):**
    *   Budget Display (`p`): "Ancestry Points: {ancestryPointsRemaining} / {totalAncestryPointsAvailable} Remaining"
    *   **Conditional Trait Listing (for Ancestry 1 and Ancestry 2 if selected):**
        *   For each selected ancestry:
            *   Subtitle (`h4`): "[Ancestry Name] Traits"
            *   List (`ul`) of its available traits:
                *   Each trait item (`li` - Tailwind: `flex items-center justify-between p-2 my-1 rounded dark:hover:bg-dark-bg-primary`):
                    *   Melt UI `Checkbox` (or `Toggle`) for selection (bind checked state to logic that updates `currentSelectedTraits` and points).
                    *   Label: Trait Name (Cost: X) - (Tailwind: `font-medium`). Dynamic class if selected (`text-yellow-accent`).
                    *   Melt UI `Tooltip` (on hover/focus on trait name): Shows full trait description.
                    *   *If selecting this trait would cause an overflow AND the Helper Panel isn't already open for it, clicking it should trigger `openOverflowHelperPanel(trait)` instead of direct selection.*
    *   *Trait listings (name, cost, description, effects, Minor/Negative flags) are populated from static rule data, using `IAncestry` and `ITrait` TypeScript interfaces.*

**2. Ancestry Selection Section (`div`):**
    *   Title (`h3`): "Choose Your Ancestry (Up to 2)"
    *   Two Melt UI `Select` components (or custom `SelectionCard`s):
        *   For "Ancestry 1" (bind to `selectedAncestry1_ID`)
        *   For "Ancestry 2" (bind to `selectedAncestry2_ID`, with a "None" option).
        *   Populated from static rule data. Styled with Tailwind.

**3. Ancestry Points & Trait Allocation Section (`div`):**
    *   Budget Display (`p`): "Ancestry Points: {ancestryPointsRemaining} / {totalAncestryPointsAvailable} Remaining"
    *   **Conditional Trait Listing (for Ancestry 1 and Ancestry 2 if selected):**
        *   For each selected ancestry:
            *   Subtitle (`h4`): "[Ancestry Name] Traits"
            *   List (`ul`) of its available traits:
                *   Each trait item (`li` - Tailwind: `flex items-center justify-between p-2 my-1 rounded dark:hover:bg-dark-bg-primary`):
                    *   Melt UI `Checkbox` (or `Toggle`) for selection (bind checked state to logic that updates `currentSelectedTraits` and points).
                    *   Label: Trait Name (Cost: X) - (Tailwind: `font-medium`). Dynamic class if selected (`text-yellow-accent`).
                    *   Melt UI `Tooltip` (on hover/focus on trait name): Shows full trait description.
                    *   *If selecting this trait would cause an overflow AND the Helper Panel isn't already open for it, clicking it should trigger `openOverflowHelperPanel(trait)` instead of direct selection.*

**4. Chosen Traits Summary (`div`):**
    *   Title (`h3`): "Selected Traits"
    *   List (`ul`) of `currentSelectedTraits`, showing name, cost, and source ancestry.
    *   Tailwind: `mt-4 p-3 bg-dark-bg-primary rounded-md`

**5. Read-Only Display of Updated Stage A Stats (`div` - crucial for feedback):**
    *   Title (`h3`): "Current Core Stats (Reflecting Ancestry Choices)"
    *   Display Might, Agility, Cha, Int (from `$characterInProgressStore.attributesFromStageA`, which gets updated by Helper Panel).
    *   Display Prime Modifier, Save Masteries, Grit, Jump, Provisional Skill Points (all derived from updated attributes).
    *   Highlight the Prime Modifier attribute.

**6. Overflow Helper Panel (Melt UI `Dialog` - `Dialog.Root bind:open={$showOverflowHelperPanel}`):**
    *   Melt UI `Dialog.Trigger` (not explicitly needed if opened programmatically).
    *   Melt UI `Dialog.Portal` -> `Dialog.Overlay` (styled with Tailwind for dark semi-transparent bg) -> `Dialog.Content`
    *   **`Dialog.Content` Styling (Tailwind):** `bg-dark-bg-secondary p-6 rounded-lg shadow-xl w-full max-w-md text-light-text-primary`
    *   `Dialog.Title`: "Attribute Cap Reached for '{overflowTrait.name}'"
    *   `Dialog.Description` (`p`): "Selecting '{overflowTrait.name}' will increase '{overflowAttributeName}' by +{overflowTrait.attributeBonusValue}, exceeding the Level 1 cap of +3. You have {overflowAmount} point(s) to free up by reducing other attributes."
    *   **Attribute Reduction Section within Panel:**
        *   The panel allows reducing any attribute *except* the one `overflowAttributeName` (that the `overflowTrait` is trying to increase). Attributes cannot be reduced below -2.
        *   For each of the 4 attributes (displaying values from `tempAttributesForReallocation`):
            *   Label: Attribute Name: [Current Value in Panel]
            *   Melt UI `Button` ("-"):
                *   Disabled if attribute is `overflowAttributeName` or if its value in `tempAttributesForReallocation` is already -2.
                *   Action: Decrements the attribute in `tempAttributesForReallocation`, increments `pointsFreedInPanel`.
            *   *(No "+" button in this panel, only reduction is allowed)*
    *   Display (`p`): "Points Freed: {pointsFreedInPanel} / {overflowAmount}"
    *   **Panel Actions (`div` - Tailwind: `flex justify-end gap-3 mt-4`):**
        *   Melt UI `Button` ("Cancel Trait"):
            *   Action: `closeOverflowHelperPanel()`.
            *   Tailwind: `bg-gray-500 hover:bg-gray-600 ...`
        *   Melt UI `Button` ("Apply & Select Trait"):
            *   Disabled if `pointsFreedInPanel !== overflowAmount`.
            *   Action: `confirmAttributeReallocationAndSelectTrait()`.
            *   Tailwind: `bg-purple-primary hover:bg-purple-primary/80 ...`

### D. Functions & Logic:
*   `handleTraitSelection(trait)`:
    *   Checks for attribute overflow if trait modifies an attribute.
    *   If overflow: `openOverflowHelperPanel(trait)`. *Clicking a problematic trait triggers this instead of direct selection and point deduction.*
    *   Else: Toggles trait in `currentSelectedTraits`, updates point counts, checks Minor/Negative Trait limits.
*   `openOverflowHelperPanel(trait)`:
    *   Sets `overflowTrait`, `overflowAttributeName`, `overflowAmount`.
    *   Copies current `attributesFromStageA` to `tempAttributesForReallocation`.
    *   Resets `pointsFreedInPanel`.
    *   Sets `showOverflowHelperPanel = true`.
*   `closeOverflowHelperPanel()`:
    *   Sets `showOverflowHelperPanel = false`.
    *   Resets `overflowTrait`, `tempAttributesForReallocation`, `pointsFreedInPanel`.
*   `confirmAttributeReallocationAndSelectTrait()`:
    *   Updates the main `$characterInProgressStore.attributesFromStageA` with values from `tempAttributesForReallocation`.
    *   Adds `overflowTrait` to `currentSelectedTraits` and updates point counts.
    *   `closeOverflowHelperPanel()`.
*   Logic to enforce: Max 2 ancestries, 1 Minor Trait, max +2 points gain from Negative Traits, total Ancestry Points spent = 5 (after accounting for negative traits).
*   All choices and final attribute adjustments persisted to `characterInProgressStore` and then to backend.
*   **UI Feedback for Trait Rules:**
    *   When a Minor Trait is selected, disable selection of other Minor Traits and provide a tooltip/message.
    *   When selecting Negative Traits, `totalAncestryPointsAvailable` display updates. If the +2 point gain limit from Negative Traits is reached, disable further Negative Trait selection and message the user.
    *   Disable trait selection if `ancestryPointsRemaining` would be negative (unless it's a negative trait resolving this).

### E. Styling Notes (TailwindCSS):
*   Dark mode theme, Inter font, chosen color palette.
*   Clear visual distinction for selected ancestries and traits (`text-yellow-accent`, borders).
*   Helper Panel (Dialog) should feel like a focused, temporary interruption.

## VI. Backend API Endpoint (`/api/character/progress/stageB` - SvelteKit Form Action or API Route)
*   Accepts: `characterInProgressStore` data (including potentially modified `attributesFromStageA`, `selectedAncestries`, `selectedTraits`).
*   Validates:
    *   All attribute values are still within -2 and +3.
    *   Total points spent on attributes (from -2 base) still equals 12.
    *   Ancestry Point rules (total 5 points used, Minor Trait limit, Negative Trait limit).
*   Action: Saves/updates the relevant fields in the `CharacterInProgress` table using Prisma.
*   Returns: Success/error response.

---
