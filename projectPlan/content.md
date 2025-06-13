# Plan: Populate Static Rule Data from DC20 Rulebook

This document tracks the steps to fully populate the static rule data files for the DC20 Character Creator MVP, using `projectPlan/DC20_Core_Rules_Beta_0_9_5_PDF_v1_0.pdf` as the source.

## I. Preparation

*   [x] **Read PDF Content**:
    *   Status: `Completed`
    *   Action: Use `read_file` to extract text from `projectPlan/DC20_Core_Rules_Beta_0_9_5_PDF_v1_0.pdf`.
    *   Notes:

## II. Rule Data File Updates

For each file, the process will be:
1.  Read current file content.
2.  Identify missing/placeholder information.
3.  Extract relevant data from the PDF.
4.  Propose changes (using `replace_in_file` or `write_to_file`).
5.  Apply changes upon approval.

*   [x] **Update `src/lib/rulesdata/attributes.ts`**:
    *   Status: `Completed`
    *   Task: Populate all attribute descriptions and verify derived stats formulas against the rulebook.
    *   Notes:

*   [x] **Update `src/lib/rulesdata/ancestries.ts`**:
    *   Status: `Completed`
    *   Task: Populate all ancestry descriptions, verify default/expanded trait IDs, and ensure alignment with rulebook details.
    *   Notes:

*   [x] **Update `src/lib/rulesdata/classes.ts` (and `src/lib/rulesdata/sorcerer.ts`)**:
    *   Status: `Completed`
    *   Notes: Barbarian, Sorcerer, Bard, Champion, Cleric, Commander, Druid, Hunter, Monk, Rogue, Spellblade, Warlock, and Wizard classes added/updated based on PDF. Sorcerer data merged into classes.ts.
    *   Task:
        *   Complete Barbarian class data in `classes.ts`.
        *   Review `sorcerer.ts` for completeness.
        *   Decide on merging `sorcerer.ts` into `classes.ts` or keeping separate, then implement.
        *   Add other core classes from the rulebook with their Lvl 1 features, benefits, and choices.
    *   Notes:

*   [x] **Update `src/lib/rulesdata/skills.ts`**:
    *   Status: `Completed`
    *   Notes: All skills from DC20 p.11-13 added with descriptions and attribute associations.
    *   Task: Add all remaining skills from the rulebook, ensuring correct attribute associations and descriptions.
    *   Notes:

*   [x] **Review and Update `src/lib/rulesdata/traits.ts`**:
    *   Status: `Completed`
    *   Notes: All traits from DC20 p.108-116 added/updated with descriptions, costs, effects, flags, and prerequisites.
    *   Task: Verify all listed traits against the rulebook for accuracy in cost, effects, descriptions, and flags (minor/negative). Add any missing traits.
    *   Notes:

*   [x] **Review and Update `src/lib/rulesdata/languages.ts`**:
    *   Status: `Completed`
    *   Notes: Language descriptions updated based on DC20 p.18.
    *   Task: Verify all listed languages against the rulebook for accuracy and completeness.
    *   Notes:

*   [x] **Review and Update `src/lib/rulesdata/trades.ts`**:
    *   Status: `Completed`
    *   Notes: Trade descriptions updated based on DC20 p.14-17.
    *   Task: Verify all listed trades against the rulebook for accuracy, including attribute associations, descriptions, and tools.
    *   Notes:

## III. Documentation Update

*   [ ] **Update Memory Bank Files**:
    *   Status: `In Progress`
    *   Task: Update `memory-bank/activeContext.md` and `memory-bank/progress.md` to reflect the completion of static rule data population.
    *   Notes:

---
**Last Updated:** {{DATE}}
