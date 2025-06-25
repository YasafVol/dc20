ARCHIVED: This plan describes a previous multi-stage implementation. Functionality for this stage has been merged into `src/routes/character-creator/+page.svelte`. This document is kept for historical reference only.

# AI Generation Guide: Character Creator - Stage A (Attributes, Prime Modifier, Foundational Stats - Point Buy)

## I. Overall Stage Objective
Create a Svelte component (e.g., `StageA_Attributes.svelte`) that allows the user to:
1.  Allocate 12 attribute points using the Point Buy method (starting from -2 in each of Might, Agility, Charisma, Intelligence) for Level 1 characters (max +3 per attribute).
2.  View the automatically calculated Prime Modifier (with a user choice for ties).
3.  View the automatically calculated Save Mastery bonus for each attribute.
4.  View the automatically calculated Grit Points, Jump Distance, and provisional Skill Point total.
5.  View provisional formulas/known components for Health, SP, MP, PD, AD.
6.  Persist these choices to a Svelte store and, upon proceeding, save to the `CharacterInProgress` table via a backend API call.

## II. Svelte Component: `StageA_Attributes.svelte`

### A. Props:
*   `characterInProgressStore`: Writable Svelte store holding the current character creation data.

### B. Internal State (Reactive Svelte Variables):
*   `pointBuyBudget`: Number (constant: 12)
*   `attributes`: Object (e.g., `{ Might: -2, Agility: -2, Charisma: -2, Intelligence: -2 }`) - *User modifies these values.*
*   `pointsSpent`: Reactive/Derived Number (`$: pointsSpent = calculatePointsSpent(attributes)`)
*   `pointsRemaining`: Reactive/Derived Number (`$: pointsRemaining = pointBuyBudget - pointsSpent`)
*   `primeModifierAttribute`: String (Might, Agility, Charisma, or Intelligence - user choice if tie)
*   `primeModifierValue`: Reactive/Derived Number (`$: primeModifierValue = attributes[primeModifierAttribute]`)
*   `saveMasteries`: Reactive/Derived Object (`$: saveMasteries = calculateSaveMasteries(attributes, L1_COMBAT_MASTERY)`)
*   `gritPoints`: Reactive/Derived Number (`$: gritPoints = 2 + getModifier(attributes.Charisma)`)
*   `jumpDistance`: Reactive/Derived Number (`$: jumpDistance = attributes.Agility < 1 ? 1 : attributes.Agility`)
*   `provisionalSkillPoints`: Reactive/Derived Number (`$: provisionalSkillPoints = 5 + getModifier(attributes.Intelligence)`)
*   `L1_COMBAT_MASTERY`: Number (constant: 1) - *Sourced from global static rule data (DC20 p.22).*

### C. UI Structure & Components (Melt UI + TailwindCSS):

**1. Main Container (`div`):**
    *   Tailwind: `p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary`

**2. Stage Title (`h2`):**
    *   Text: "Step 1: Core Attributes & Foundational Stats"
    *   Tailwind: `text-2xl font-semibold mb-6 text-yellow-accent` (using Inter font)

**3. Point Buy Allocation Section (`div` section):**
    *   Title (`h3`): "Allocate Attribute Points (Point Buy)" (Tailwind: `text-lg font-medium mb-2`)
    *   Budget Display (`p`): "Budget: {pointsRemaining} / 12 Points Remaining" (Tailwind: `mb-4 text-light-text-secondary`)
        *   Dynamically change text color to `magenta-error` if `pointsRemaining < 0`.
    *   Layout: CSS Grid (`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6`)
    *   **For each of the 4 attributes (Might, Agility, Charisma, Intelligence):**
        *   Attribute Card (`div`):
            *   Tailwind: `p-4 bg-dark-bg-primary rounded-md shadow-sm relative flex flex-col justify-between`
            *   Dynamic Tailwind class if this attribute is the `primeModifierAttribute`: `border-2 border-yellow-accent`
        *   **Top Section:**
            *   Attribute Name & Save Mastery (`div`):
                *   Tailwind: `flex justify-between items-center mb-1`
                *   Name (Melt UI `Label` for the input): e.g., "Might" (Tailwind: `text-xl font-medium text-light-text-primary`)
                *   Save Mastery (`span`): e.g., "Save: +{saveMasteries.Might}" (Tailwind: `text-blue-info font-medium`)
            *   Attribute Description (`p`):
                *   Text: "Your Strength of Body." (Might)
                *   Text: "Your Balance, Nimbleness, and Dexterity." (Agility)
                *   Text: "Your Charm, Presence, Persuasiveness, and Force of Will." (Charisma)
                *   Text: "Your Reasoning, Understanding, and Wisdom." (Intelligence)
                *   Tailwind: `text-sm text-light-text-secondary mb-2`
        *   **Bottom Section - Input & Derived Stats:**
            *   Point Buy Input Control (`div`):
                *   Tailwind: `flex items-center gap-2 mb-2`
                *   Melt UI `Button` (for "-"): Tailwind: `p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg`
                *   Melt UI `Input` (type="number", readonly): Displays current `attributes.Might`. Tailwind: `w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8`
                *   Melt UI `Button` (for "+"): Tailwind: `p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg`
            *   **Integrated Derived Stats Display (Conditional on attribute):**
                *   If Charisma: `span` "Grit: {gritPoints}" (Tailwind: `text-xs text-light-text-secondary`)
                *   If Agility: `span` "Jump: {jumpDistance}" (Tailwind: `text-xs text-light-text-secondary`)
                *   If Intelligence: `span` "Skill Pts (Base): {provisionalSkillPoints}" (Tailwind: `text-xs text-light-text-secondary`)
    *   **Prime Modifier Tie-Breaker (Conditional UI):**
        *   If a tie for highest attribute occurs:
            *   Message (`p`): "Multiple attributes are tied for highest. Please select your Prime Modifier:" (Tailwind: `my-4 text-yellow-accent`)
            *   Melt UI `RadioGroup` (`<RadioGroup.Root bind:value={$primeModifierAttribute}>`):
                *   Tailwind: `flex gap-4`
                *   `RadioGroup.Item` for each tied attribute, styled.

**4. Key Calculated Stats Display (`div` section):**
    *   Tailwind: `mt-6 grid grid-cols-1 md:grid-cols-2 gap-4`
    *   Prime Modifier Card (`div`):
        *   Tailwind: `p-4 bg-purple-primary/20 rounded-lg text-center`
        *   Label (`span`): "Prime Modifier: " (Tailwind: `text-lg text-light-text-primary`)
        *   Value (`span`): "{primeModifierValue}" (Tailwind: `text-2xl font-bold text-yellow-accent`)
    *   Provisional Skill Points Card (`div`):
        *   Tailwind: `p-4 bg-dark-bg-primary rounded-lg text-center`
        *   Label (`span`): "Base Skill Points (5 + Int Mod): " (Tailwind: `text-md text-light-text-primary`)
        *   Value (`span`): "{provisionalSkillPoints}" (Tailwind: `text-xl font-semibold text-blue-info`)

**5. Provisional Formulas Display (`div` section):**
    *   Title (`h3`): "Provisional Base Stats (Finalized after Class & Equipment)" (Tailwind: `text-lg font-medium mt-6 mb-3`)
    *   Layout: Tailwind: `grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary`
    *   `p`: "Health Points = Class HP + Might ({attributes.Might}) + Ancestry HP"
    *   `p`: "Stamina Points = Class SP"
    *   `p`: "Mana Points = Class MP"
    *   `p`: "Precision Defense (PD) = 8 + CM(+1) + Agility ({attributes.Agility}) + Intelligence ({attributes.Intelligence}) + Equip Bonuses"
    *   `p`: "Area Defense (AD) = 8 + CM(+1) + Might ({attributes.Might}) + Charisma ({attributes.Charisma}) + Equip Bonuses"

### D. Functions & Logic:
*   `getModifier(attributeScore)`: Helper function to get an attribute's modifier. In DC20, the attribute score itself (e.g., +2, -1, 0) is directly used as the modifier. This function should `return attributeScore;`. It handles `null` or `undefined` scores by returning `0`.
*   `calculatePointsSpent(attributes)`:
    *   Calculates total points spent. Each attribute starts at -2. Each +1 increase costs 1 point. Total budget is 12 points. Formula: `sum(current_attr_value - (-2))` should equal 12 when done.
*   `calculateSaveMasteries(attributes, combatMastery)`:
    *   Calculates Save Mastery for each attribute. Formula: `attributeScore + combatMastery`. Combat Mastery (CM) at Level 1 is +1 (DC20, p.22).
*   Event handlers for attribute +/- buttons:
    *   Increment/decrement the specific attribute.
    *   Ensure attribute value stays within -2 and +3 (Level 1 limit). The Level 1 attribute cap is +3.
    *   Update `characterInProgressStore`.
*   Logic to determine `primeModifierAttribute`:
    *   Find the highest attribute(s).
    *   If one is highest, set it.
    *   If multiple are tied, enable the tie-breaker UI and use the user's selection.
*   Validation logic:
    *   `pointsRemaining` cannot be negative when user tries to advance (or disable increment buttons if budget met).
    *   Ensure no attribute exceeds the Level 1 cap of +3.
*   Function to persist current state to `characterInProgressStore` and call backend API on "Next Step".

### E. Styling Notes (TailwindCSS):
*   Use Inter font with appropriate weights.
*   Adhere to the chosen dark mode color palette.
*   Ensure clear visual hierarchy and readability.
*   Tooltips (Melt UI `Tooltip`) next to calculated values (Prime Modifier, Save Masteries, Grit, Jump, Skill Pts) explaining their calculation formula briefly (e.g., "Prime: Highest Attribute", "Save: Attribute + Combat Mastery (+1)").

## VI. Backend API Endpoint (`/api/character/progress/stageA` - SvelteKit Form Action or API Route)
*   Accepts: `attributes` object from the frontend.
*   Validates:
    *   Each attribute is between -2 and +3.
    *   Total points spent from a -2 base for all attributes equals 12.
*   Action: Saves the validated `attributes` to the `CharacterInProgress` table using Prisma.
*   Returns: Success/error response.

---
