# DC20 Character Creator MVP - Planning Refinement Tasks

This document outlines tasks to refine existing planning documents (`mvp.md`, `stage1.md`, `stage2.md`) and detail the content of new files, ensuring consistency, detail for development, and accuracy against the DC20 Beta 0.9.5 rulebook.

## I. Refinements for `mvp.md`

*   [x] Clarify the MVP Wizard Scope: Detail the planned 6-stage re-ordered flow, explicitly stating the initial focus on Stages A (Attributes), B (Ancestry), and C (Class).
*   [x] Detail the fields for the `CharacterSheetData` Prisma model: Based on the required outputs for a Level 1 character sheet, list the specific fields, their intended data types, and purpose within the model.
*   [x] Specify the role of `src/lib/rulesdata/types.ts`: State that this file will define detailed TypeScript interfaces for static rule data. List the key interface names to be created: `IAttributeData`, `ITraitEffect`, `ITrait`, `IAncestry`, `IClassFeatureChoiceOption`, `IClassFeatureChoice`, `IClassFeature`, `IClassDefinition`, `ISkillData`, `ITradeData`, `ILanguageData`.

## II. Refinements for `stage1.md` (Stage A - Attributes)

*   [x] Clarify `getModifier(attributeScore)` logic: Explain that in DC20, the attribute score *is* the modifier. Detail how the function should handle null or undefined input values gracefully.
*   [x] Specify `L1_COMBAT_MASTERY` constant: Define the source and exact value for this constant, referencing the DC20 rulebook.
*   [x] Populate attribute descriptions: Add a task to copy the descriptions for the four core attributes directly from the DC20 Beta 0.9.5 rulebook (p. 9).
*   [x] Clarify "Points Spent" calculation for Point Buy: Detail the calculation, explaining that the total points available are 12, derived from a base of -2 for each of the four attributes (4 * -2 = -8 base, + 20 points to spend = 12 total).
*   [x] Clarify Save Mastery calculation: Explicitly state the formula: Save Mastery = Attribute Modifier + L1 Combat Mastery.
*   [x] Specify Level 1 attribute cap: Note the maximum attribute score allowed at Level 1 is +3, referencing DC20 Beta 0.9.5 rulebook (p. 10).

## III. Refinements for `stage2.md` (Stage B - Ancestry)

*   [x] Clarify usage of `attributesFromStageA`: Detail how the attribute scores selected in Stage A (stored in the Svelte store) are accessed and utilized within the logic and UI of Stage B.
*   [x] Specify Trait data sourcing: State that Trait data (name, cost, description, effects, flags) will be sourced from static rule data using the TypeScript interfaces defined in `src/lib/rulesdata/types.ts`.
*   [x] Detail Overflow Helper Panel attribute reduction logic: Explain the constraints on attribute reduction:
    *   The attribute currently overflowing cannot be reduced via the panel.
    *   No attribute can be reduced below its base value of -2.
*   [x] Detail UI feedback for Trait rule enforcement: Add tasks to specify how the UI should provide feedback to the user when they attempt actions that violate Trait rules, such as:
    *   Exceeding the Minor Trait limit.
    *   Exceeding the Negative Trait point gain limit.
    *   Exceeding the Ancestry Point budget.
*   [x] Ensure `handleTraitSelection` logic clarity: Explicitly state that if selecting a trait results in a rule violation (e.g., exceeding limits, causing an attribute overflow), the `openOverflowHelperPanel` function must be triggered.

## IV. Content Generation for `src/lib/rulesdata/types.ts`

*   [x] Define `IAttributeData` interface: Include fields for name, description, and any other relevant static data for attributes.
*   [x] Define `ITraitEffect` interface: Structure this to encode the effects of traits (e.g., attribute modifiers, skill bonuses, special abilities). Consider a flexible structure that can handle various effect types.
*   [x] Define `ITrait` interface: Include fields for name, cost (positive for negative traits, negative for positive traits), description, an array of `ITraitEffect`s, and flags (e.g., 'minor', 'negative').
*   [x] Define `IAncestry` interface: Include fields for name, description, base attribute modifiers, starting traits, ancestry points budget, and any other ancestry-specific static data.
*   [x] Define `IClassFeatureChoiceOption` interface: For class features that offer choices (e.g., skill proficiencies), define the structure for each option.
*   [x] Define `IClassFeatureChoice` interface: Define the structure for a set of choices within a class feature (e.g., number of options to choose, list of available options).
*   [x] Define `IClassFeature` interface: Include fields for name, description, an array of `ITraitEffect`s (for passive or active effects), and an optional array of `IClassFeatureChoice` for features requiring user selection.
*   [x] Define `IClassDefinition` interface: Include fields for name, description, prime attribute, hit die, starting proficiencies (skills, trades, languages, armor, weapons), Level 1 features (array of `IClassFeature`), and Level 1 choices (array of `IClassFeatureChoice`).
*   [x] Define `ISkillData`, `ITradeData`, `ILanguageData` interfaces: Define simple interfaces for static data related to skills, trades, and languages, including name and description.

## V. Initial Content Generation for `src/lib/rulesdata/*.ts`

*   [x] Populate `attributes.ts`: Create and export an array or object containing `IAttributeData` for the four core attributes (Might, Agility, Grit, Wit), sourcing descriptions from DC20 Beta 0.9.5 rulebook (p. 9).
*   [x] Populate `ancestries.ts`: Create and export an array or object containing `IAncestry` data for Human and Elf, including their base attribute modifiers, starting traits, and ancestry points budget, referencing DC20 Beta 0.9.5 rulebook.
*   [x] Populate `traits.ts`: Create and export an array or object containing `ITrait` data for Human and Elf default traits, plus a selection of Expanded Traits (both positive and negative) with encoded effects, referencing DC20 Beta 0.9.5 rulebook.
*   [x] Populate `classes.ts`: Create and export an array or object containing `IClassDefinition` data for Barbarian and Sorcerer, including their Level 1 benefits, features, and Level 1 choices, referencing DC20 Beta 0.9.5 rulebook.

## VI. Modifications for `prisma/schema.prisma`

*   [x] Update `CharacterInProgress` model: Add all necessary fields to store the state of Stages A, B, and C. Ensure correct Prisma types are used (e.g., `Int` for attributes, `String?` for JSON data). Set appropriate default values (e.g., attributes `@default(-2)`). Include fields for:
    *   Attribute scores (Might, Agility, Grit, Wit)
    *   Selected Ancestry ID
    *   Selected Trait IDs (array, potentially stored as JSON string)
    *   Selected Class ID
    *   Selected Class Feature choices (JSON string)
*   [x] Define `CharacterSheetData` model: Create this new model with fields corresponding to the final Level 1 character sheet output. Define the relation linking it back to the `CharacterInProgress` model. Include fields for:
    *   All final calculated stats (e.g., Save Masteries, Grit Points, Combat Mastery, Defense, Initiative, etc.)
    *   Selected Skills, Trades, Languages
    *   Selected Proficiencies (Armor, Weapons)
    *   Any other data required for the final sheet.

## VII. Structure Details for `src/lib/stores/characterInProgressStore.ts`

*   [x] Define initial state: Detail the initial state of the writable Svelte store (`characterInProgressStore`), ensuring it mirrors the default values defined in the `CharacterInProgress` Prisma model.
*   [x] List key derived stores: Identify and list the key derived stores that will be needed to reactively calculate values based on the core store state (e.g., `primeModifierValue`, `saveMasteries`, `gritPoints`, `ancestryPointsRemaining`, `traitPointsGained`, `minorTraitsSelected`).
*   [x] Define helper functions and constants: List necessary helper functions (like `getModifier`) and constants (like `L1_COMBAT_MASTERY`) that should be defined within or alongside the store logic for calculations.
