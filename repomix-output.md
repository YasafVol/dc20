This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.gitignore
.repomixignore
.svelte-kit/ambient.d.ts
.svelte-kit/generated/client/app.js
.svelte-kit/generated/client/matchers.js
.svelte-kit/generated/client/nodes/0.js
.svelte-kit/generated/client/nodes/1.js
.svelte-kit/generated/client/nodes/2.js
.svelte-kit/generated/client/nodes/3.js
.svelte-kit/generated/client/nodes/4.js
.svelte-kit/generated/client/nodes/5.js
.svelte-kit/generated/client/nodes/6.js
.svelte-kit/generated/root.js
.svelte-kit/generated/root.svelte
.svelte-kit/generated/server/internal.js
.svelte-kit/non-ambient.d.ts
.svelte-kit/tsconfig.json
memory-bank/activeContext.md
memory-bank/productContext.md
memory-bank/progress.md
memory-bank/projectbrief.md
memory-bank/systemPatterns.md
memory-bank/techContext.md
package.json
postcss.config.js
prisma/migrations/20250526210112_init/migration.sql
prisma/migrations/20250620112102_allow_next_in_stage_a/migration.sql
prisma/migrations/migration_lock.toml
prisma/schema.prisma
projectPlan/content.md
projectPlan/geminiTasks.md
projectPlan/merge-character-stages-plan.md
projectPlan/mvp.md
projectPlan/stage0.md
projectPlan/stage1.md
projectPlan/stage2.md
projectPlan/stage3.md
projectPlan/status.md
projectPlan/tailwind.config.js
projectPlan/techDesignDebt.md
repomix.config.json
src/app.css
src/app.html
src/lib/components/ui/button/button.svelte
src/lib/components/ui/button/index.ts
src/lib/components/ui/input/index.ts
src/lib/components/ui/input/input.svelte
src/lib/components/ui/label/index.ts
src/lib/components/ui/label/label.svelte
src/lib/components/ui/radio-group/index.ts
src/lib/components/ui/radio-group/radio-group-item.svelte
src/lib/components/ui/radio-group/radio-group-root.svelte
src/lib/rulesdata/ancestries.ts
src/lib/rulesdata/attributes.ts
src/lib/rulesdata/classes.ts
src/lib/rulesdata/languages.ts
src/lib/rulesdata/skills.ts
src/lib/rulesdata/sorcerer.ts
src/lib/rulesdata/trades.ts
src/lib/rulesdata/traits.ts
src/lib/rulesdata/types.ts
src/lib/stores/characterInProgressStore.ts
src/routes/+layout.svelte
src/routes/+page.svelte
src/routes/api/character/progress/_backup_merge_stages_20250621/stageA+server.ts
src/routes/api/character/progress/_backup_merge_stages_20250621/stageB+server.ts
src/routes/api/character/progress/complete/+server.ts
src/routes/api/character/progress/stageA/+server.ts
src/routes/api/character/progress/stageB/+server.ts
src/routes/character-creator/_backup_merge_stages_20250621/stage-a+page.svelte
src/routes/character-creator/_backup_merge_stages_20250621/stage-b+page.svelte
src/routes/character-creator/+page.svelte
src/routes/character-creator/stage-a/+page.svelte
src/routes/character-creator/stage-b/+page.svelte
src/routes/test-ui/+page.svelte
svelte.config.js
tailwind.config.js
tsconfig.json
vite.config.js
```

# Files

## File: .gitignore
````
*.pdf
````

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
*.pdf
````

## File: .svelte-kit/generated/client/matchers.js
````javascript
export const matchers = {};
````

## File: .svelte-kit/generated/client/nodes/1.js
````javascript
export { default as component } from "../../../../node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte";
````

## File: .svelte-kit/generated/client/nodes/2.js
````javascript
export { default as component } from "../../../../src/routes/+page.svelte";
````

## File: .svelte-kit/generated/client/nodes/6.js
````javascript
export { default as component } from "../../../../src/routes/test-ui/+page.svelte";
````

## File: .svelte-kit/generated/root.js
````javascript
import { asClassComponent } from 'svelte/legacy';
import Root from './root.svelte';
export default asClassComponent(Root);
````

## File: .svelte-kit/generated/root.svelte
````
<!-- This file is generated by @sveltejs/kit — do not edit it! -->
<svelte:options runes={true} />
<script>
	import { setContext, onMount, tick } from 'svelte';
	import { browser } from '$app/environment';

	// stores
	let { stores, page, constructors, components = [], form, data_0 = null, data_1 = null } = $props();

	if (!browser) {
		setContext('__svelte__', stores);
	}

	if (browser) {
		$effect.pre(() => stores.page.set(page));
	} else {
		stores.page.set(page);
	}
	$effect(() => {
		stores;page;constructors;components;form;data_0;data_1;
		stores.page.notify();
	});

	let mounted = $state(false);
	let navigated = $state(false);
	let title = $state(null);

	onMount(() => {
		const unsubscribe = stores.page.subscribe(() => {
			if (mounted) {
				navigated = true;
				tick().then(() => {
					title = document.title || 'untitled page';
				});
			}
		});

		mounted = true;
		return unsubscribe;
	});

	const Pyramid_1=$derived(constructors[1])
</script>

{#if constructors[1]}
	{@const Pyramid_0 = constructors[0]}
							<!-- svelte-ignore binding_property_non_reactive -->
							<Pyramid_0 bind:this={components[0]} data={data_0} {form}>
								<!-- svelte-ignore binding_property_non_reactive -->
										<Pyramid_1 bind:this={components[1]} data={data_1} {form} />
							</Pyramid_0>
	
{:else}
	{@const Pyramid_0 = constructors[0]}
	<!-- svelte-ignore binding_property_non_reactive -->
	<Pyramid_0 bind:this={components[0]} data={data_0} {form} />
	
{/if}

{#if mounted}
	<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px">
		{#if navigated}
			{title}
		{/if}
	</div>
{/if}
````

## File: .svelte-kit/non-ambient.d.ts
````typescript
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};
````

## File: .svelte-kit/tsconfig.json
````json
{
	"compilerOptions": {
		"paths": {
			"$lib": [
				"../src/lib"
			],
			"$lib/*": [
				"../src/lib/*"
			]
		},
		"rootDirs": [
			"..",
			"./types"
		],
		"verbatimModuleSyntax": true,
		"isolatedModules": true,
		"lib": [
			"esnext",
			"DOM",
			"DOM.Iterable"
		],
		"moduleResolution": "bundler",
		"module": "esnext",
		"noEmit": true,
		"target": "esnext"
	},
	"include": [
		"ambient.d.ts",
		"non-ambient.d.ts",
		"./types/**/$types.d.ts",
		"../vite.config.js",
		"../vite.config.ts",
		"../src/**/*.js",
		"../src/**/*.ts",
		"../src/**/*.svelte",
		"../tests/**/*.js",
		"../tests/**/*.ts",
		"../tests/**/*.svelte"
	],
	"exclude": [
		"../node_modules/**",
		"../src/service-worker.js",
		"../src/service-worker/**/*.js",
		"../src/service-worker.ts",
		"../src/service-worker/**/*.ts",
		"../src/service-worker.d.ts",
		"../src/service-worker/**/*.d.ts"
	]
}
````

## File: memory-bank/productContext.md
````markdown
# Product Context

This document describes the purpose and intended functionality of the project from a product perspective.

## Purpose

- This project exists to provide DC20 players with a digital tool for creating Level 1 characters.
- It solves the problem of manually calculating stats and managing choices during the character creation process by providing a guided, automated workflow.

## How it Works

- Users navigate through a 6-stage wizard (A-Attributes, B-Ancestry, C-Class, D-Background, E-Review, F-Equipment). The MVP will implement stages A, B, and C.
- At each stage, users make choices (allocate points, select ancestries/traits, select class/features) via input fields, selections, and buttons.
- The UI provides real-time provisional feedback on how choices affect stats.
- Data is saved to the database after each completed stage, allowing users to resume later.
- Upon completing the final stage (F), the backend performs final calculations and saves the complete character data.
- A dedicated Character Page displays the finalized Level 1 character sheet data.

## User Experience Goals

- Provide a guided, intuitive, and easy-to-follow character creation process.
- Ensure a clean, modern, and visually appealing user interface with a primary dark mode theme.
- Offer real-time feedback and validation to help users understand the impact of their choices and adhere to rules.
- Allow users to save and resume their character creation progress.
- Present the final character sheet data in a clear, structured, and readable format.

## Features

- **Character Creation Wizard (Level 1 MVP: Stages A, B, C):**
    - Stage A: Attribute Point Buy allocation, Prime Modifier determination, foundational stat calculation (Save Masteries, Grit, Jump, Provisional Skill Points).
    - Stage B: Ancestry selection (1 or 2), Ancestry Point allocation for Traits, handling attribute cap overflows with reallocation helper.
    - Stage C: Class selection, Level 1 Class Feature choices (planned for MVP).
    - Visual-only breadcrumbs for progress indication.
    - Real-time frontend validation and provisional stat updates.
    - Data persistence to `CharacterInProgress` table after each stage.
- **Character Page Output:**
    - Displays finalized Level 1 character sheet data from the `CharacterSheetData` table.
    - Structured HTML format with dark mode styling.
- **Data Persistence:**
    - `CharacterInProgress` table for intermediate wizard data.
    - `CharacterSheetData` table for completed character data.
    - Basic resume functionality using browser `localStorage` to store the last edited character ID.
````

## File: memory-bank/projectbrief.md
````markdown
# Project Brief

This document serves as the foundational document for the project, outlining its core requirements, goals, and scope.

## Project Goals

- Create a Level 1 Character Creator for DC20.
- Implement a guided, multi-stage wizard for character creation.
- Display a finalized Level 1 character sheet.
- Persist character data during and after creation.

## Scope

- **Included:**
    - Level 1 Character Creation Wizard (Stages A, B, C).
    - Character Page Output displaying finalized Level 1 data.
    - Data persistence for in-progress and completed characters using Prisma and PostgreSQL.
    - Frontend UI using SvelteKit, Melt UI, and TailwindCSS.
    - Backend logic for validation and final calculations.
    - Basic resume creation functionality using browser localStorage.
- **Out of Scope for MVP:**
    - Wizard Stages D, E, F.
    - Character Level Up Wizard.
    - Custom Equipment creation.
    - Name Generator.
    - Advanced features like image generation, PDF output, user accounts, sharing characters.
    - Moving static rule data to the database.
    - Interactive breadcrumb navigation.
    - Light Mode theme.

## Key Requirements

- Implement Point Buy system for attributes (Stage A).
- Allow selection of 1 or 2 Ancestries and allocation of Ancestry Points for Traits (Stage B).
- Handle attribute cap overflows during trait selection with a reallocation helper (Stage B).
- Implement Class selection and feature choices for Level 1 (Stage C - planned).
- Store intermediate character data in `CharacterInProgress` table.
- Store final character data in `CharacterSheetData` table.
- Use SvelteKit Form Actions/API routes for backend interactions.
- Implement frontend validation and display provisional stats.
- Implement backend authoritative validation and final calculations.
- Style the application using TailwindCSS dark mode with a specific color palette and Inter font.

## Target Audience

- Players of the DC20 tabletop roleplaying game who want a digital tool to create Level 1 characters.

## Stakeholders

- DC20 players (users).
- Project developers/maintainers.

## Initial Thoughts/Notes

- The project follows a guided wizard flow, breaking down character creation into manageable steps.
- Emphasis on a clean, modern dark mode UI.
- Static rule data is initially hardcoded for simplicity in the MVP.
- Backend is the source of truth for final calculations and validation.
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
````

## File: prisma/migrations/20250526210112_init/migration.sql
````sql
-- CreateTable
CREATE TABLE "CharacterInProgress" (
    "id" TEXT NOT NULL,
    "attribute_might" INTEGER NOT NULL DEFAULT -2,
    "attribute_agility" INTEGER NOT NULL DEFAULT -2,
    "attribute_charisma" INTEGER NOT NULL DEFAULT -2,
    "attribute_intelligence" INTEGER NOT NULL DEFAULT -2,
    "pointsSpent" INTEGER NOT NULL DEFAULT 0,
    "ancestry1Id" TEXT,
    "ancestry2Id" TEXT,
    "selectedTraitIds" TEXT NOT NULL,
    "ancestryPointsSpent" INTEGER NOT NULL DEFAULT 0,
    "classId" TEXT,
    "selectedFeatureChoices" TEXT NOT NULL,
    "finalName" TEXT,
    "finalPlayerName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterInProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSheetData" (
    "id" TEXT NOT NULL,
    "characterInProgressId" TEXT NOT NULL,
    "finalName" TEXT NOT NULL,
    "finalPlayerName" TEXT,
    "finalLevel" INTEGER NOT NULL DEFAULT 1,
    "finalMight" INTEGER NOT NULL,
    "finalAgility" INTEGER NOT NULL,
    "finalCharisma" INTEGER NOT NULL,
    "finalIntelligence" INTEGER NOT NULL,
    "finalPrimeModifierValue" INTEGER NOT NULL,
    "finalPrimeModifierAttribute" TEXT NOT NULL,
    "finalCombatMastery" INTEGER NOT NULL DEFAULT 1,
    "finalSaveMasteryMight" INTEGER NOT NULL,
    "finalSaveMasterityAgility" INTEGER NOT NULL,
    "finalSaveMasteryCharisma" INTEGER NOT NULL,
    "finalSaveMasteryIntelligence" INTEGER NOT NULL,
    "finalHPMax" INTEGER NOT NULL,
    "finalSPMax" INTEGER NOT NULL,
    "finalMPMax" INTEGER NOT NULL,
    "finalPD" INTEGER NOT NULL,
    "finalAD" INTEGER NOT NULL,
    "finalPDR" TEXT,
    "finalEDR" TEXT,
    "finalMDR" TEXT,
    "finalSaveDC" INTEGER NOT NULL,
    "finalDeathThreshold" INTEGER NOT NULL,
    "finalMoveSpeed" INTEGER NOT NULL,
    "finalJumpDistance" INTEGER NOT NULL,
    "finalRestPoints" INTEGER NOT NULL,
    "finalGritPoints" INTEGER NOT NULL,
    "finalInitiativeBonus" INTEGER NOT NULL,
    "skillsJson" TEXT NOT NULL,
    "tradesJson" TEXT NOT NULL,
    "languagesJson" TEXT NOT NULL,
    "ancestry1Name" TEXT,
    "ancestry2Name" TEXT,
    "selectedTraitsJson" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "classFeaturesLvl1Json" TEXT NOT NULL,
    "equipmentJson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterSheetData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSheetData_characterInProgressId_key" ON "CharacterSheetData"("characterInProgressId");

-- AddForeignKey
ALTER TABLE "CharacterSheetData" ADD CONSTRAINT "CharacterSheetData_characterInProgressId_fkey" FOREIGN KEY ("characterInProgressId") REFERENCES "CharacterInProgress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
````

## File: prisma/migrations/20250620112102_allow_next_in_stage_a/migration.sql
````sql
-- AlterTable
ALTER TABLE "CharacterInProgress" ADD COLUMN     "currentStep" INTEGER NOT NULL DEFAULT 1;
````

## File: prisma/migrations/migration_lock.toml
````toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
````

## File: projectPlan/content.md
````markdown
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
````

## File: projectPlan/geminiTasks.md
````markdown
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
````

## File: projectPlan/status.md
````markdown
# DC20 Character Creator - Project Status

## Current Status (May 27, 2025)

The project is in the planning and initial setup phase for the DC20 Character Creator MVP. The core requirements, scope, and technical approach are defined. Detailed plans for the first two stages of the wizard are documented.

### Completed Tasks

1. __Project Planning__:

   - Defined project scope, requirements, and architecture in memory bank documentation
   - Created detailed plans for Stage A (Attributes) and Stage B (Ancestry) of the character creation wizard
   - Established UI design principles and color palette

2. __Database Setup__:

   - Installed and configured PostgreSQL locally
   - Created `dc20-local` database
   - Set up environment variables in `.env` file
   - Generated Prisma client
   - Applied initial migration to create database schema

3. __Static Data Implementation__:

   - Defined TypeScript interfaces in `src/lib/rulesdata/types.ts`
   - Created initial rule data files for attributes, ancestries, traits, classes, skills, trades, and languages
   - Set up Svelte store structure in `src/lib/stores/characterInProgressStore.ts`

### Current Work

The project is now ready for frontend and backend implementation. The database is set up, and the static rule data is in place.

### Next Steps

1. __Frontend Implementation__:

   - Implement the Svelte component for Stage A (Attributes) based on `projectPlan/stage1.md`
   - Create UI components using Melt UI primitives styled with TailwindCSS
   - Implement the attribute point allocation system with real-time validation

2. __Backend Implementation__:

   - Create the SvelteKit Form Action for Stage A data persistence
   - Implement validation logic for attribute point allocation
   - Connect the frontend to the backend using the Prisma client

3. __Continue Development__:

   - Implement Stage B (Ancestry) components and logic
   - Implement the attribute overflow helper panel for trait selection
   - Detail and implement Stage C (Class)

## Project Context

The DC20 Character Creator is a web application designed to help players create Level 1 characters for the DC20 tabletop roleplaying game. The application follows a guided wizard approach, breaking down character creation into manageable steps.

### Key Features (MVP)

- Character Creation Wizard (Stages A, B, C)
- Point Buy system for attributes
- Ancestry selection and trait allocation
- Class selection and feature choices
- Data persistence using PostgreSQL
- Dark mode UI with a modern aesthetic

### Technology Stack

- __Frontend__: SvelteKit, Melt UI, TailwindCSS
- __Backend__: SvelteKit Form Actions/API Routes
- __Database__: PostgreSQL with Prisma ORM
- __State Management__: Svelte stores

### Architecture

The application follows a full-stack architecture using SvelteKit. Frontend components handle the user interface and client-side logic, while backend endpoints handle data persistence, validation, and final calculations. The database stores both in-progress character data and finalized character sheets.

## Resources

- Detailed planning documents in `projectPlan/` directory
- Memory bank documentation in `memory-bank/` directory
- Static rule data in `src/lib/rulesdata/` directory
- Database schema in `prisma/schema.prisma`


Here's an additional section about Prisma that you can add to your status.md file:

## Prisma Database Setup Details

### Completed Prisma Setup

- Installed Prisma dependencies:
  - `prisma` (v6.7.0) as a dev dependency
  - `@prisma/client` (v6.7.0) as a runtime dependency
- Created and configured `prisma/schema.prisma` with:
  - PostgreSQL database provider
  - `CharacterInProgress` and `CharacterSheetData` models
- Set up local PostgreSQL database:
  - Created `dc20-local` database
  - Configured connection string in `.env` file: `POSTGRES_URL="postgresql://postgres:123456789@localhost:5432/dc20-local"`
- Generated Prisma client: `npx prisma generate`
- Applied initial migration: `npx prisma migrate dev --name init`
- Database tables are now created and ready for use

### Using Prisma in the Application

To use Prisma in your SvelteKit application:

1. **Import the Prisma client**:
   ```typescript
   import { PrismaClient } from '@prisma/client'
   const prisma = new PrismaClient()
   ```

2. **Create records** (example for saving character progress):
   ```typescript
   // In a SvelteKit Form Action or API endpoint
   const character = await prisma.characterInProgress.create({
     data: {
       attribute_might: -1,
       attribute_agility: 0,
       attribute_charisma: 1,
       attribute_intelligence: 2,
       pointsSpent: 12,
       // other fields as needed
     }
   })
   ```

3. **Query records** (example for loading character progress):
   ```typescript
   const character = await prisma.characterInProgress.findUnique({
     where: { id: characterId }
   })
   ```

4. **Update records** (example for updating after a wizard step):
   ```typescript
   const updatedCharacter = await prisma.characterInProgress.update({
     where: { id: characterId },
     data: {
       ancestry1Id: selectedAncestryId,
       selectedTraitIds: JSON.stringify(selectedTraits),
       // other fields to update
     }
   })
   ```

### Prisma Utilities

- **Prisma Studio**: A visual database editor
  - Run with `npx prisma studio`
  - Allows viewing and editing database records through a web interface
  - Useful for debugging and manual data management

- **Schema Updates**: When you modify your Prisma schema
  - Run `npx prisma migrate dev --name descriptive_name` to create and apply a new migration
  - This keeps your database schema in sync with your code

### Next Steps for Prisma

- Implement database access in SvelteKit Form Actions/API Routes
- Create helper functions for common database operations
- Consider setting up a connection pool for production deployment
- Plan for database backup and recovery strategies
````

## File: projectPlan/tailwind.config.js
````javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'yellow-accent': '#FFBE0B',
        'orange-secondary': '#FB5607',
        'magenta-error': '#FF006E',
        'purple-primary': '#8338EC',
        'blue-info': '#3A86FF',
        // Define your dark background shades
        'dark-bg-primary': '#111827', // Example: Tailwind gray-900
        'dark-bg-secondary': '#1F2937', // Example: Tailwind gray-800
        // Define your light text shades
        'light-text-primary': '#E5E7EB', // Example: Tailwind gray-200
        'light-text-secondary': '#D1D5DB', // Example: Tailwind gray-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Make Inter the default sans-serif
      },
    },
  },
  // ... plugins
}
````

## File: repomix.config.json
````json
{
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: src/app.css
````css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
````

## File: src/app.html
````html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
````

## File: src/lib/components/ui/button/button.svelte
````
<script lang="ts">
  // Forward all props to the button element
  // This allows consumers to pass standard button attributes like 'type', 'disabled', 'onclick', etc.
  // and also custom attributes or actions.
  // Melt UI doesn't provide a specific 'Button' primitive with actions/context,
  // so this wrapper is mainly for styling and prop forwarding.
</script>

<!--
  This is the root button element.
  Apply base styling here using TailwindCSS classes.
  Consumers of this component can add additional classes via the 'class' prop,
  which will be merged by Svelte's {...$$restProps}.
-->
<button
  {...$$restProps}
  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-dark-bg-primary" // Example base styling
>
  <!-- Slot for the button content (text, icons, etc.) -->
  <slot />
</button>
````

## File: src/lib/components/ui/button/index.ts
````typescript
// This is a simple wrapper index for a Button component.
// Melt UI doesn't have a core 'Button' primitive with actions/context
// like RadioGroup, so this likely just re-exports a styled Svelte component.

import Root from './button.svelte';

export {
  Root,
};
````

## File: src/lib/components/ui/input/index.ts
````typescript
// This is a simple wrapper index for an Input component.
// Melt UI doesn't have a core 'Input' primitive with actions/context,
// so this likely just re-exports a styled Svelte component.

import Root from './input.svelte';

export {
  Root,
};
````

## File: src/lib/components/ui/input/input.svelte
````
<script lang="ts">
  // Forward all props to the input element.
  // This allows consumers to pass standard input attributes like 'type', 'value', 'disabled', 'placeholder', etc.
  // and also custom attributes or actions.
  // Melt UI doesn't provide a specific 'Input' primitive with actions/context,
  // so this wrapper is mainly for styling and prop forwarding.
</script>

<!--
  This is the root input element.
  Apply base styling here using TailwindCSS classes.
  Consumers of this component can add additional classes via the 'class' prop,
  which will be merged by Svelte's {...$$restProps}.
-->
<input
  {...$$restProps}
  class="flex h-10 w-full rounded-md border border-dark-bg-primary bg-dark-bg-secondary px-3 py-2 text-sm placeholder:text-light-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-dark-bg-primary" // Example base styling
/>
````

## File: src/lib/components/ui/label/index.ts
````typescript
// This is a simple wrapper index for a Label component.
// Melt UI provides a Label primitive with actions/context,
// so this will re-export the Root and potentially other parts.

import { Label as LabelPrimitive } from '@melt-ui/svelte';
import Root from './label.svelte';

const getLabelContext = LabelPrimitive.getContext; // Export the context getter

export {
  Root,
  getLabelContext,
  // Add other Label parts if needed, e.g., LabelPrimitive.Helper
};
````

## File: src/lib/components/ui/label/label.svelte
````
<script lang="ts">
  import { getLabelContext } from './index.ts';

  // Get context data from the parent Label.Root
  const { root } = getLabelContext();

  // Forward props
  export let forId: string | undefined = undefined; // Use 'for' attribute

  // Add styling here using TailwindCSS classes
  // Example: class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
</script>

<!-- Apply the action to the label element -->
<label
  use:root
  for={forId}
  {...$$restProps}
  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" // Example base styling
>
  <!-- Slot for the label content -->
  <slot />
</label>
````

## File: src/lib/components/ui/radio-group/index.ts
````typescript
// This index file exports the wrapped RadioGroup components.

import Root from './radio-group-root.svelte';
import Item from './radio-group-item.svelte';

export {
  Root,
  Item,
};
````

## File: src/lib/components/ui/radio-group/radio-group-item.svelte
````
<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from '@melt-ui/svelte';

  // Get context data from the parent RadioGroup.Root using getItemContext
  const { item } = RadioGroupPrimitive.getItemContext();

  // Forward props and actions
  export let value: string;
  export let disabled: boolean = false;

  // Add styling here using TailwindCSS classes
  // Example: class="flex items-center space-x-2"
</script>

<!-- Apply the action to the button element -->
<button
  use:item={{ value, disabled }}
  {...$$restProps}
  class="flex items-center space-x-2"
>
  // Example styling
  <!-- This is where the visual radio button element goes -->
  <!-- You would typically add a styled div/span here -->
  <div class="h-4 w-4 rounded-full border border-light-text-primary flex items-center justify-center">
      <div class="h-2 w-2 rounded-full bg-yellow-accent" use:item.indicator></div>
  </div>
  <!-- Content slot for the label -->
  <slot />
</button>
````

## File: src/lib/components/ui/radio-group/radio-group-root.svelte
````
<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from '@melt-ui/svelte';

  // Create the Melt UI RadioGroup primitive and set context
  const { elements: { root }, states: { value }, update } = RadioGroupPrimitive.create({});

  // Forward props and actions
  export let bind: string | undefined = undefined; // Prop to bind the value

  // Update the primitive when the bound value changes
  $: if (bind !== undefined) {
    value.set(bind);
  }

  // Update the bound value when the primitive's value changes
  $: if ($value !== bind) {
    bind = $value;
  }

  // Add styling here using TailwindCSS classes
  // Example: class="flex flex-col space-y-2"
</script>

<!-- Apply the action to the div element -->
<div
  use:root
  {...$$restProps}
  class="flex flex-col space-y-2" // Example base styling
>
  <!-- Slot for the RadioGroup items -->
  <slot />
</div>
````

## File: src/lib/rulesdata/sorcerer.ts
````typescript
import { IClassDefinition } from './types';

// IClassDefinition for Sorcerer:
export const sorcererClass: IClassDefinition = {
  id: 'sorcerer',
  name: 'Sorcerer',
  description: '[Extract "Source of Power" for Sorcerer from DC20 p.149]',
  baseHpContribution: 8, // From class table p.149 Lvl 1 HP
  startingSP: 0,
  startingMP: 6, // From class table p.149 Lvl 1 MP
  combatTraining: ['Light Armor'], // From p.149 "Sorcerer Spellcasting Path"
  cantripsKnownLvl1: 2, // From class table p.149
  spellsKnownLvl1: 3,   // From class table p.149
  saveDCBase: 0, // Placeholder, need actual value from DC20
  deathThresholdBase: 0, // Placeholder, need actual value from DC20
  moveSpeedBase: 0, // Placeholder, need actual value from DC20
  restPointsBase: 0, // Placeholder, need actual value from DC20
  gritPointsBase: 0, // Placeholder, need actual value from DC20
  initiativeBonusBase: 0, // Placeholder, need actual value from DC20
  // No maneuvers/techniques for base Sorcerer L1
  level1Features: [
    {
      id: 'sorcerer_innate_power',
      name: 'Innate Power',
      level: 1,
      description: '[Summarize Innate Power from DC20 p.150: Choose Sorcerous Origin. Max MP +1. Once per Long Rest, use 1MP Spell Enhancement free (regain on Initiative roll).]',
      effects: [
          { type: 'MODIFY_MP_MAX', value: 1 },
          { type: 'GRANT_ABILITY', value: 'Free_1MP_Spell_Enhancement_Once_Per_Long_Rest' }
      ]
    },
    {
      id: 'sorcerer_overload_magic',
      name: 'Overload Magic',
      level: 1,
      description: '[Summarize Overload Magic from DC20 p.150: 2 AP for 1 min: +5 Spell Checks. Start & each turn: Attribute Save (your choice) vs own Save DC or gain Exhaustion. Ends early if Incapacitated/die/choose. Lose gained Exhaustion on Short Rest.]',
      effects: [{ type: 'GRANT_ABILITY', value: 'Overload_Magic_Mechanics_Bundle' }]
    },
    {
      id: 'sorcerer_sorcery_flavor',
      name: 'Sorcery (Flavor)',
      level: 1,
      description: '[DC20 p.150: "You learn the Sorcery Spell." (Sorcery Spell is on p.178)]',
      effects: [{ type: 'GRANT_SPELL_KNOWN', value: 'sorcery_cantrip_id' }]
    }
  ],
  featureChoicesLvl1: [
    {
      id: 'sorcerous_origin_choice', // Key for storing choice
      prompt: 'Choose your Sorcerous Origin (DC20 p.150):',
      type: 'select_one',
      options: [
        { value: 'intuitive_magic', label: 'Intuitive Magic', description: '[DC20 p.150: "You learn an additional Spell and Cantrip from your Sorcerer Spell List."]', effectsOnChoice: [{ type: 'GRANT_BONUS_SPELL_KNOWN' }, { type: 'GRANT_BONUS_CANTRIP_KNOWN'}] },
        { value: 'resilient_magic', label: 'Resilient Magic', description: '[DC20 p.150: "You gain Dazed Resistance."]', effectsOnChoice: [{ type: 'GRANT_CONDITION_RESISTANCE', target: 'Dazed'}] },
        { value: 'unstable_magic', label: 'Unstable Magic', description: '[DC20 p.150: "When you Critically Succeed or Fail on a Spell Check, roll on the Wild Magic Table..."]', effectsOnChoice: [{ type: 'ENABLE_WILD_MAGIC_TABLE_ON_CRIT_SPELL_CHECK'}] }
      ]
    },
    {
      id: 'sorcerer_spell_list_choice', // Key for storing choice
      prompt: 'Choose Your Sorcerer Spell List (DC20 p.149):',
      type: 'select_one',
      options: [
        { value: 'arcane', label: 'Arcane Spell List' },
        { value: 'divine', label: 'Divine Spell List' },
        { value: 'primal', label: 'Primal Spell List' }
      ]
    }
  ]
}
````

## File: src/routes/+page.svelte
````
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
````

## File: src/routes/api/character/progress/_backup_merge_stages_20250621/stageA+server.ts
````typescript
import { json, error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Constants for validation (should ideally be shared or sourced from rules data)
const ATTRIBUTE_MIN = -2;
const ATTRIBUTE_MAX_L1 = 3;
const POINT_BUY_BUDGET = 12;

export async function POST({ request }) {
  try {
    const { characterId, finalName, attribute_might, attribute_agility, attribute_charisma, attribute_intelligence } = await request.json();

    // Backend Validation
    if (!finalName || typeof finalName !== 'string' || finalName.trim().length === 0) {
        return error(400, { message: 'Character name is required.' });
    }
    // Optional: Add length constraints or character restrictions for finalName

    const attributes = {
      might: attribute_might,
      agility: attribute_agility,
      charisma: attribute_charisma,
      intelligence: attribute_intelligence,
    };

    // Validate attribute ranges
    for (const [name, value] of Object.entries(attributes)) {
      if (value < ATTRIBUTE_MIN || value > ATTRIBUTE_MAX_L1) {
        return error(400, { message: `Attribute ${name} is out of the allowed range (-2 to +3).` });
      }
    }

    // Validate total points spent
    const pointsSpent = (attributes.might - ATTRIBUTE_MIN) +
                        (attributes.agility - ATTRIBUTE_MIN) +
                        (attributes.charisma - ATTRIBUTE_MIN) +
                        (attributes.intelligence - ATTRIBUTE_MIN);

    if (pointsSpent !== POINT_BUY_BUDGET) {
      return error(400, { message: `Total points allocated must be exactly ${POINT_BUY_BUDGET}. You allocated ${pointsSpent}.` });
    }

    let updatedCharacter;

    if (characterId) {
      // Update existing character progress
      updatedCharacter = await prisma.characterInProgress.update({
        where: { id: characterId },
        data: {
          finalName: finalName.trim(), // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent, // Store points spent for consistency, though backend validates
          level: 1, // Hardcoded to 1 for MVP
          combatMastery: 1, // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]), // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]), // Initialize selected feature choices
          currentStep: 1, // Mark Stage A as complete
        },
      });
    } else {
      // Create new character progress (handles TD-002 for the first save)
      updatedCharacter = await prisma.characterInProgress.create({
        data: {
          finalName: finalName.trim(), // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent,
          level: 1, // Hardcoded to 1 for MVP
          combatMastery: 1, // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]), // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]), // Initialize selected feature choices
          currentStep: 1, // Mark Stage A as complete
        },
      });
      // Note: The frontend will need to update its store with this new ID
    }


    // Return success response with the character ID
    return json({ success: true, characterId: updatedCharacter.id });

  } catch (e) {
    console.error('Backend error saving Stage A data:', e);
    // Handle Prisma errors or other exceptions
    if (e instanceof Error) {
       return error(500, { message: `Internal server error: ${e.message}` });
    }
    return error(500, { message: 'An unknown error occurred while saving attributes.' });
  } finally {
    await prisma.$disconnect();
  }
}
````

## File: src/routes/api/character/progress/_backup_merge_stages_20250621/stageB+server.ts
````typescript
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';
import type { ITrait } from '$lib/rulesdata/types'; // Import ITrait type
import { ancestriesData as ancestries } from '$lib/rulesdata/ancestries';
import { traitsData as traits } from '$lib/rulesdata/traits';

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();

    // Assuming data contains:
    // characterId: string;
    // selectedAncestries: string[]; // Array of ancestry IDs (max 2)
    // selectedTraits: string[]; // Array of trait IDs
    // attributes: { [key: string]: number }; // Attributes after potential reallocation

    // 1. Validate characterId exists and corresponds to an in-progress character
    if (!data.characterId) {
        return json({ success: false, message: 'Character ID is required.' }, { status: 400 });
    }

    // 2. Validate selected ancestries (max 2)
    if (!Array.isArray(data.selectedAncestries) || data.selectedAncestries.length === 0 || data.selectedAncestries.length > 2) {
         return json({ success: false, message: 'You must select between 1 and 2 ancestries.' }, { status: 400 });
    }
    // Validate ancestry IDs
    for (const ancestryId of data.selectedAncestries) {
        const validAncestry = ancestries.find(a => a.id === ancestryId);
        if (!validAncestry) {
            return json({ success: false, message: `Invalid ancestry ID: ${ancestryId}` }, { status: 400 });
        }
    }

    // 3. Validate selected traits
    if (!Array.isArray(data.selectedTraits)) {
        return json({ success: false, message: 'Selected traits data is invalid.' }, { status: 400 });
    }
    // Validate trait IDs and rules
    if (data.selectedTraits.length > 0) {
        // Validate trait IDs exist
        for (const traitId of data.selectedTraits) {
            const validTrait = traits.find(t => t.id === traitId);
            if (!validTrait) {
                return json({ success: false, message: `Invalid trait ID: ${traitId}` }, { status: 400 });
            }
        }

        // Get full trait objects
        const selectedTraitObjects: ITrait[] = data.selectedTraits.map((id: string) => traits.find(t => t.id === id)).filter((t: ITrait | undefined): t is ITrait => t !== undefined);

        // Validate ancestry points budget
        const totalCost = selectedTraitObjects.reduce((sum: number, trait: ITrait) => sum + trait.cost, 0);
        if (totalCost !== 5) {
            return json({ success: false, message: `Total ancestry points must equal 5, got: ${totalCost}` }, { status: 400 });
        }

        // Validate minor trait limit
        const minorTraits = selectedTraitObjects.filter((t: ITrait) => t.isMinor);
        if (minorTraits.length > 1) {
            return json({ success: false, message: `Maximum of 1 minor trait allowed, got: ${minorTraits.length}` }, { status: 400 });
        }

        // Validate negative trait point gain limit
        const pointsFromNegative = selectedTraitObjects
            .filter((t: ITrait) => t.cost < 0)
            .reduce((sum: number, t: ITrait) => sum + Math.abs(t.cost), 0);
        if (pointsFromNegative > 2) {
            return json({ success: false, message: `Maximum of +2 points from negative traits allowed, got: ${pointsFromNegative}` }, { status: 400 });
        }
    }

    // 4. Validate attribute values after trait bonuses (within -2 and +3)
    // Assuming data.attributes is an object like { attribute_might: 1, ... }
    if (!data.attributes || typeof data.attributes !== 'object') {
         return json({ success: false, message: 'Attribute data is missing or invalid.' }, { status: 400 });
    }
    // Corrected attribute name to match schema
    const attributeNames = ['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'];
    for (const attrName of attributeNames) {
        const attrValue = data.attributes[attrName];
        if (typeof attrValue !== 'number' || attrValue < -2 || attrValue > 3) {
            return json({ success: false, message: `Invalid value for attribute ${attrName}: ${attrValue}. Must be between -2 and +3.` }, { status: 400 });
        }
    }

    // 5. Validate total attribute points (should still be 12 from Stage A base -2)
    // This check assumes the attributes passed in `data.attributes` are the final values after reallocation.
    // The base value for each attribute is -2, so 4 attributes have a base total of -8.
    // The total points allocated in Stage A is 20 (from 12 points + 8 base).
    // If attributes were reallocated in the helper panel, the sum should still reflect the original points + base.
    // Sum of (attributeValue - baseValue) should equal total points allocated.
    const baseAttributeValue = -2;
    const expectedTotalPoints = 12; // Total points allocated in Stage A
    const actualTotalPoints = attributeNames.reduce((sum, attrName) => sum + (data.attributes[attrName] - baseAttributeValue), 0);

    if (actualTotalPoints !== expectedTotalPoints) {
         return json({ success: false, message: `Total attribute points mismatch. Expected ${expectedTotalPoints}, got ${actualTotalPoints}.` }, { status: 400 });
    }


    try {
        // Fetch the existing character to ensure it's in the correct state (Stage A complete)
        const character = await prisma.characterInProgress.findUnique({
            where: { id: data.characterId },
            select: {
                currentStep: true,
                // Select other fields if needed for validation against previous stage data
            },
        });

        if (!character) {
            return json({ success: false, message: 'Character not found.' }, { status: 404 });
        }

        // Optional: Validate that the character is currently at the correct step (Stage A complete)
        // if (character.currentStep !== 1) { // Check against integer 1 for Stage A
        //      return json({ success: false, message: `Character is not in the correct stage. Current stage: ${character.currentStep}` }, { status: 400 });
        // }


        // Update the CharacterInProgress table with Stage B data
        const updatedCharacter = await prisma.characterInProgress.update({
            where: { id: data.characterId },
            data: {
                ancestry1Id: data.selectedAncestries[0] || null, // Store first ancestry ID
                ancestry2Id: data.selectedAncestries[1] || null, // Store second ancestry ID (if exists)
                selectedTraitIds: JSON.stringify(data.selectedTraits), // Store trait IDs as JSON string
                // Update attributes if they were potentially modified in the helper panel
                attribute_might: data.attributes.attribute_might,
                attribute_agility: data.attributes.attribute_agility,
                attribute_charisma: data.attributes.attribute_charisma,
                attribute_intelligence: data.attributes.attribute_intelligence, // Corrected attribute name
                currentStep: 2, // Mark Stage B as complete (using integer 2)
            },
        });

        // Return success response
        return json({ success: true, character: updatedCharacter });

    } catch (error) {
        console.error('Error processing Stage B data:', error);
        // Return appropriate error response
        return json({ success: false, message: 'Failed to save Stage B data.' }, { status: 500 });
    }
};

// TODO: Consider implementing a GET handler to fetch existing Stage B data if needed for resuming progress
// export const GET: RequestHandler = async ({ url }) => {
//     const characterId = url.searchParams.get('characterId');
//     if (!characterId) {
//         return json({ success: false, message: 'Character ID is required.' }, { status: 400 });
//     }
//     try {
//         const character = await prisma.characterInProgress.findUnique({
//             where: { id: characterId },
//             select: {
//                 selectedAncestries: true,
//                 selectedTraits: true,
//                 // Select other relevant fields
//             },
//         });
//         if (!character) {
//             return json({ success: false, message: 'Character not found.' }, { status: 404 });
//         }
//         return json({ success: true, character });
//     } catch (error) {
//         console.error('Error fetching Stage B data:', error);
//         return json({ success: false, message: 'Failed to fetch Stage B data.' }, { status: 500 });
//     }
// };
````

## File: src/routes/api/character/progress/complete/+server.ts
````typescript
// src/routes/api/character/progress/complete/+server.ts

import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import { classesData } from '$lib/rulesdata/classes';
import { traitsData } from '$lib/rulesdata/traits';
import type { RequestHandler } from './$types';

const prisma = new PrismaClient();

function validateFeatureChoices(classId: string, selectedChoicesJson: string) {
  const classData = classesData.find(c => c.id === classId);
  if (!classData) throw new Error(`Invalid class ID: ${classId}`);

  const choices = JSON.parse(selectedChoicesJson || '{}');

  for (const requiredChoice of classData.featureChoicesLvl1 || []) {
    if (choices[requiredChoice.id] === undefined) {
      throw new Error(`Missing required choice for ${classData.name}: ${requiredChoice.prompt}`);
    }
    const validOptions = requiredChoice.options.map(o => o.value);
    if (!validOptions.includes(choices[requiredChoice.id])) {
      throw new Error(`Invalid selected option for ${requiredChoice.id} in class ${classData.name}`);
    }
  }
}

function validateAttributeCapsAfterTraits(attributes: any, selectedTraitIdsJson: string) {
  const selectedTraitIds = JSON.parse(selectedTraitIdsJson || '[]');
  const traits = selectedTraitIds.map((id: string) => traitsData.find(t => t.id === id)).filter((t: any) => t !== undefined);

  const finalAttributes = { ...attributes };

  for (const trait of traits) {
    const attrEffect = trait.effects?.find((e: any) => e.type === 'MODIFY_ATTRIBUTE');
    if (attrEffect && attrEffect.target && typeof attrEffect.value === 'number') {
      const attributeKey = `attribute_${attrEffect.target}`;
      if (attributeKey in finalAttributes) {
        finalAttributes[attributeKey] += attrEffect.value;
      }
    }
  }

  const ATTRIBUTE_MAX_L1 = 3;
  for (const [attrName, finalValue] of Object.entries(finalAttributes)) {
    if (finalValue > ATTRIBUTE_MAX_L1) {
      throw new Error(`Final attribute ${attrName.replace('attribute_', '')} exceeds Level 1 cap (+3) after applying traits.`);
    }
  }
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.finalName || typeof data.finalName !== 'string' || data.finalName.trim().length === 0) {
      return json({ error: 'Character name is required.' }, { status: 400 });
    }

    // Validate attributes and point buy (Stage A)
    const attributes = {
      attribute_might: data.attribute_might,
      attribute_agility: data.attribute_agility,
      attribute_charisma: data.attribute_charisma,
      attribute_intelligence: data.attribute_intelligence
    };
    const totalPoints = Object.values(attributes).reduce((sum, v) => sum + (typeof v === 'number' ? v : 0), 0);
    if (totalPoints !== 0) {
      return json({ error: 'Attribute points must sum to 0 (point buy).' }, { status: 400 });
    }

    // Validate ancestry selections (Stage B)
    if (!data.ancestry1Id) {
      return json({ error: 'At least one ancestry must be selected.' }, { status: 400 });
    }
    if (data.ancestry2Id && data.ancestry1Id === data.ancestry2Id) {
      return json({ error: 'Cannot select the same ancestry twice.' }, { status: 400 });
    }

    // Validate selected trait IDs (Stage B)
    try {
      const selectedTraitIds = JSON.parse(data.selectedTraitIds || '[]');
      if (!Array.isArray(selectedTraitIds)) throw new Error();
      // Additional trait validation can be added here
    } catch {
      return json({ error: 'Invalid selectedTraitIds format.' }, { status: 400 });
    }

    // Validate class selection (Stage C)
    if (!data.classId || !classesData.find(c => c.id === data.classId)) {
      return json({ error: 'A valid class must be selected.' }, { status: 400 });
    }

    // Validate feature choices (Stage C)
    try {
      validateFeatureChoices(data.classId, data.selectedFeatureChoices);
    } catch (err: any) {
      return json({ error: err.message }, { status: 400 });
    }

    // Cross-stage validation: attribute caps after traits
    try {
      validateAttributeCapsAfterTraits(attributes, data.selectedTraitIds);
    } catch (err: any) {
      return json({ error: err.message }, { status: 400 });
    }

    // Save to DB in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Upsert CharacterInProgress by id if provided, else create new
      let character;
      if (data.id) {
        character = await tx.characterInProgress.update({
          where: { id: data.id },
          data: {
            ...data,
            updatedAt: new Date()
          }
        });
      } else {
        character = await tx.characterInProgress.create({
          data: {
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
      }
      return character;
    });

    return json({ success: true, id: result.id });
  } catch (err: any) {
    return json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
};
````

## File: src/routes/api/character/progress/stageB/+server.ts
````typescript
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';
import type { ITrait } from '$lib/rulesdata/types'; // Import ITrait type
import { ancestriesData as ancestries } from '$lib/rulesdata/ancestries';
import { traitsData as traits } from '$lib/rulesdata/traits';

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();

    // Assuming data contains:
    // characterId: string;
    // selectedAncestries: string[]; // Array of ancestry IDs (max 2)
    // selectedTraits: string[]; // Array of trait IDs
    // attributes: { [key: string]: number }; // Attributes after potential reallocation

    // 1. Validate characterId exists and corresponds to an in-progress character
    if (!data.characterId) {
        return json({ success: false, message: 'Character ID is required.' }, { status: 400 });
    }

    // 2. Validate selected ancestries (max 2)
    if (!Array.isArray(data.selectedAncestries) || data.selectedAncestries.length === 0 || data.selectedAncestries.length > 2) {
         return json({ success: false, message: 'You must select between 1 and 2 ancestries.' }, { status: 400 });
    }
    // Validate ancestry IDs
    for (const ancestryId of data.selectedAncestries) {
        const validAncestry = ancestries.find(a => a.id === ancestryId);
        if (!validAncestry) {
            return json({ success: false, message: `Invalid ancestry ID: ${ancestryId}` }, { status: 400 });
        }
    }

    // 3. Validate selected traits
    if (!Array.isArray(data.selectedTraits)) {
        return json({ success: false, message: 'Selected traits data is invalid.' }, { status: 400 });
    }
    // Validate trait IDs and rules
    if (data.selectedTraits.length > 0) {
        // Validate trait IDs exist
        for (const traitId of data.selectedTraits) {
            const validTrait = traits.find(t => t.id === traitId);
            if (!validTrait) {
                return json({ success: false, message: `Invalid trait ID: ${traitId}` }, { status: 400 });
            }
        }

        // Get full trait objects
        const selectedTraitObjects: ITrait[] = data.selectedTraits.map((id: string) => traits.find(t => t.id === id)).filter((t: ITrait | undefined): t is ITrait => t !== undefined);

        // Validate ancestry points budget
        const totalCost = selectedTraitObjects.reduce((sum: number, trait: ITrait) => sum + trait.cost, 0);
        if (totalCost !== 5) {
            return json({ success: false, message: `Total ancestry points must equal 5, got: ${totalCost}` }, { status: 400 });
        }

        // Validate minor trait limit
        const minorTraits = selectedTraitObjects.filter((t: ITrait) => t.isMinor);
        if (minorTraits.length > 1) {
            return json({ success: false, message: `Maximum of 1 minor trait allowed, got: ${minorTraits.length}` }, { status: 400 });
        }

        // Validate negative trait point gain limit
        const pointsFromNegative = selectedTraitObjects
            .filter((t: ITrait) => t.cost < 0)
            .reduce((sum: number, t: ITrait) => sum + Math.abs(t.cost), 0);
        if (pointsFromNegative > 2) {
            return json({ success: false, message: `Maximum of +2 points from negative traits allowed, got: ${pointsFromNegative}` }, { status: 400 });
        }
    }

    // 4. Validate attribute values after trait bonuses (within -2 and +3)
    // Assuming data.attributes is an object like { attribute_might: 1, ... }
    if (!data.attributes || typeof data.attributes !== 'object') {
         return json({ success: false, message: 'Attribute data is missing or invalid.' }, { status: 400 });
    }
    // Corrected attribute name to match schema
    const attributeNames = ['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'];
    for (const attrName of attributeNames) {
        const attrValue = data.attributes[attrName];
        if (typeof attrValue !== 'number' || attrValue < -2 || attrValue > 3) {
            return json({ success: false, message: `Invalid value for attribute ${attrName}: ${attrValue}. Must be between -2 and +3.` }, { status: 400 });
        }
    }

    // 5. Validate total attribute points (should still be 12 from Stage A base -2)
    // This check assumes the attributes passed in `data.attributes` are the final values after reallocation.
    // The base value for each attribute is -2, so 4 attributes have a base total of -8.
    // The total points allocated in Stage A is 20 (from 12 points + 8 base).
    // If attributes were reallocated in the helper panel, the sum should still reflect the original points + base.
    // Sum of (attributeValue - baseValue) should equal total points allocated.
    const baseAttributeValue = -2;
    const expectedTotalPoints = 12; // Total points allocated in Stage A
    const actualTotalPoints = attributeNames.reduce((sum, attrName) => sum + (data.attributes[attrName] - baseAttributeValue), 0);

    if (actualTotalPoints !== expectedTotalPoints) {
         return json({ success: false, message: `Total attribute points mismatch. Expected ${expectedTotalPoints}, got ${actualTotalPoints}.` }, { status: 400 });
    }


    try {
        // Fetch the existing character to ensure it's in the correct state (Stage A complete)
        const character = await prisma.characterInProgress.findUnique({
            where: { id: data.characterId },
            select: {
                currentStep: true,
                // Select other fields if needed for validation against previous stage data
            },
        });

        if (!character) {
            return json({ success: false, message: 'Character not found.' }, { status: 404 });
        }

        // Optional: Validate that the character is currently at the correct step (Stage A complete)
        // if (character.currentStep !== 1) { // Check against integer 1 for Stage A
        //      return json({ success: false, message: `Character is not in the correct stage. Current stage: ${character.currentStep}` }, { status: 400 });
        // }


        // Update the CharacterInProgress table with Stage B data
        const updatedCharacter = await prisma.characterInProgress.update({
            where: { id: data.characterId },
            data: {
                ancestry1Id: data.selectedAncestries[0] || null, // Store first ancestry ID
                ancestry2Id: data.selectedAncestries[1] || null, // Store second ancestry ID (if exists)
                selectedTraitIds: JSON.stringify(data.selectedTraits), // Store trait IDs as JSON string
                // Update attributes if they were potentially modified in the helper panel
                attribute_might: data.attributes.attribute_might,
                attribute_agility: data.attributes.attribute_agility,
                attribute_charisma: data.attributes.attribute_charisma,
                attribute_intelligence: data.attributes.attribute_intelligence, // Corrected attribute name
                currentStep: 2, // Mark Stage B as complete (using integer 2)
            },
        });

        // Return success response
        return json({ success: true, character: updatedCharacter });

    } catch (error) {
        console.error('Error processing Stage B data:', error);
        // Return appropriate error response
        return json({ success: false, message: 'Failed to save Stage B data.' }, { status: 500 });
    }
};

// TODO: Consider implementing a GET handler to fetch existing Stage B data if needed for resuming progress
// export const GET: RequestHandler = async ({ url }) => {
//     const characterId = url.searchParams.get('characterId');
//     if (!characterId) {
//         return json({ success: false, message: 'Character ID is required.' }, { status: 400 });
//     }
//     try {
//         const character = await prisma.characterInProgress.findUnique({
//             where: { id: characterId },
//             select: {
//                 selectedAncestries: true,
//                 selectedTraits: true,
//                 // Select other relevant fields
//             },
//         });
//         if (!character) {
//             return json({ success: false, message: 'Character not found.' }, { status: 404 });
//         }
//         return json({ success: true, character });
//     } catch (error) {
//         console.error('Error fetching Stage B data:', error);
//         return json({ success: false, message: 'Failed to fetch Stage B data.' }, { status: 500 });
//     }
// };
````

## File: src/routes/character-creator/_backup_merge_stages_20250621/stage-a+page.svelte
````
<script lang="ts">
  import { writable, derived } from 'svelte/store';
  import { goto } from '$app/navigation'; // Import goto for navigation
  import { characterInProgressStore, primeModifier, saveMasteries, gritPoints, jumpDistance, provisionalSkillPoints, getModifier, L1_COMBAT_MASTERY, combatMastery, maxHP, areaDefense, precisionDefense, initiative } from '$lib/stores/characterInProgressStore';
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
      <!-- Display calculated stats with transparent formulas -->
      <p>HP = Base(8) + Might({$characterInProgressStore.attribute_might}) + Ancestry(0) = {$maxHP}</p>
      <p>SP = Class SP</p>
      <p>MP = Class MP</p>
      <p>PD = Base(8) + CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) + Intelligence({$characterInProgressStore.attribute_intelligence}) + Bonuses(0) = {$precisionDefense}</p>
      <p>AD = Base(8) + CM({$combatMastery}) + Might({$characterInProgressStore.attribute_might}) + Charisma({$characterInProgressStore.attribute_charisma}) + Bonuses(0) = {$areaDefense}</p>
      <p>Initiative = CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) = {$initiative}</p>
      <p>Grit Points = Base(2) + Charisma({$characterInProgressStore.attribute_charisma}) = {$gritPoints}</p>
      <p>Jump Distance = Agility({$characterInProgressStore.attribute_agility}) (min 1) = {$jumpDistance}</p>
      <p>Base Skill Points = Base(5) + Intelligence({$characterInProgressStore.attribute_intelligence}) = {$provisionalSkillPoints}</p>
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
````

## File: src/routes/character-creator/_backup_merge_stages_20250621/stage-b+page.svelte
````
<script lang="ts">
    import { characterInProgressStore, primeModifier } from '$lib/stores/characterInProgressStore';
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
    // Removed pointsFromNegativeTraits as it's no longer needed for total budget calculation
    $: totalAncestryPointsAvailable = ancestryPointsBudget; // Always 5
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

        // The calculation for pointsFromNegativeTraits is now done locally within handleTraitSelection
        // The enforcement of the max +2 point gain from Negative Traits is also handled there.

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
                <select id="ancestry1" bind:value={selectedAncestry1_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
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
                 <select id="ancestry2" bind:value={selectedAncestry2_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
                    <option value={null}>None</option>
                    {#if ancestries}
                        {#each ancestries as ancestry}
                            <option value={ancestry.id}>{ancestry.name}</option>
                        {/each}
                    {/if}
                </select>
    </div>
</div>

<style lang="postcss">
    /* Apply dark background to select elements and options */
    select.bg-dark-bg-secondary {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */
        @apply text-purple-300; /* Apply text color using @apply */
    }

    /* Attempt to style dropdown options - browser support varies */
    select.bg-dark-bg-secondary option {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */
        @apply text-light-text-primary; /* Use light text for options */
    }
</style>
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
            <!-- Display derived stats -->
            <p class="col-span-2">Prime Modifier: <span class="font-bold text-yellow-accent">{$primeModifier.attribute} ({$primeModifier.value >= 0 ? '+' : ''}{$primeModifier.value})</span></p>
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
````

## File: tailwind.config.js
````javascript
// tailwind.config.js
import typography from '@tailwindcss/typography'; // Import the typography plugin

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}"], // Ensure content is defined
  theme: {
    extend: {
      colors: {
        'yellow-accent': '#FFBE0B',
        'orange-secondary': '#FB5607',
        'magenta-error': '#FF006E',
        'purple-primary': '#8338EC',
        'blue-info': '#3A86FF',
        // Define your dark background shades
        'dark-bg-primary': '#111827', // Example: Tailwind gray-900
        'dark-bg-secondary': '#1F2937', // Example: Tailwind gray-800
        // Define your light text shades
        'light-text-primary': '#E5E7EB', // Example: Tailwind gray-200
        'light-text-secondary': '#D1D5DB', // Example: Tailwind gray-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Make Inter the default sans-serif
      },
    },
  },
  plugins: [typography], // Use the imported plugin
};
````

## File: tsconfig.json
````json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "bundler"
    // baseUrl and paths have been removed as per SvelteKit's recommendation
  }
}
````

## File: vite.config.js
````javascript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});
````

## File: .svelte-kit/ambient.d.ts
````typescript
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const POSTGRES_URL: string;
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const ChocolateyToolsLocation: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const COLOR: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DriverData: string;
	export const EDITOR: string;
	export const GIT_ASKPASS: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INIT_CWD: string;
	export const LANG: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NEO4J_HOME: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_npm_version: string;
	export const npm_config_prefix: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVM_HOME: string;
	export const NVM_SYMLINK: string;
	export const OneDrive: string;
	export const OneDriveConsumer: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const windir: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		POSTGRES_URL: string;
		ALLUSERSPROFILE: string;
		APPDATA: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		ChocolateyToolsLocation: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		COLOR: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DriverData: string;
		EDITOR: string;
		GIT_ASKPASS: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INIT_CWD: string;
		LANG: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NEO4J_HOME: string;
		NODE: string;
		NODE_ENV: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_npm_version: string;
		npm_config_prefix: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		NUMBER_OF_PROCESSORS: string;
		NVM_HOME: string;
		NVM_SYMLINK: string;
		OneDrive: string;
		OneDriveConsumer: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		windir: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
````

## File: .svelte-kit/generated/client/nodes/0.js
````javascript
export { default as component } from "../../../../src/routes/+layout.svelte";
````

## File: .svelte-kit/generated/client/nodes/5.js
````javascript
export { default as component } from "../../../../src/routes/character-creator/stage-b/+page.svelte";
````

## File: memory-bank/systemPatterns.md
````markdown
# System Patterns

This document outlines the system architecture, key technical decisions, and design patterns used in the project.

## Architecture

- The project follows a full-stack architecture using SvelteKit.
- Frontend: Svelte components handle the user interface and client-side logic.
- Backend: SvelteKit endpoints (Form Actions or API Routes) handle data persistence, validation, and final calculations.
- Database: PostgreSQL is used for data storage, accessed via Prisma ORM.

## Design Patterns

- **Component-Based Architecture:** The frontend is built using reusable Svelte components (e.g., `SelectionCard`, `PointAllocator`).
- **State Management:** A single writable Svelte store (`characterInProgressStore`) is used to manage the character creation data on the frontend. Derived stores are used for calculated UI values.
- **Backend Validation:** Backend endpoints are responsible for authoritative validation of user input and final calculations, ensuring data integrity.

## Technical Decisions

- **SvelteKit:** Chosen for its full-stack capabilities, allowing for a unified development experience.
- **Melt UI:** Selected for providing accessible, unstyled UI primitives that can be easily styled with TailwindCSS. Requires the `@melt-ui/pp` preprocessor to be configured in `svelte.config.js` for its `use:melt` action to function correctly.
- **TailwindCSS:** Chosen for its utility-first approach to styling, enabling rapid UI development and consistency with the dark mode theme.
- **Prisma:** Selected as the ORM for its ease of use and type safety with TypeScript.
- **Static Rule Data:** Initially stored as TypeScript objects/arrays for simplicity and faster iteration during the MVP phase.

## Component Relationships

- The main wizard component manages the current stage and renders the appropriate stage component (e.g., `StageA_Attributes.svelte`, `StageB_Ancestry.svelte`).
- Stage components interact with the `characterInProgressStore` to read and update character data.
- UI components (Melt UI primitives, custom components) are used within stage components to build the user interface.
- Frontend components communicate with backend endpoints via SvelteKit Form Actions or API Routes to persist data.

## Critical Implementation Paths

- The character creation wizard flow (Stages A -> B -> C).
- Data persistence after each wizard stage.
- Backend validation and final calculation process.
- Displaying the finalized character sheet.
````

## File: memory-bank/techContext.md
````markdown
# Technical Context

This document details the technologies, development setup, and technical constraints of the project.

## Technologies Used

- **Framework:** SvelteKit (Full-stack JavaScript/TypeScript)
- **UI Primitives:** Melt UI (`@melt-ui/svelte`)
    - Preprocessor: `@melt-ui/pp`
- **Styling:** TailwindCSS
- **ORM & Migrations:** Prisma
- **Database:** PostgreSQL (hosted on Render Free tier)
- **Frontend State Management:** Svelte stores (writable and derived)
- **Rule Data Storage:** TypeScript objects/arrays (initially hardcoded in `src/lib/rulesdata/`)

## Development Setup

- Requires Node.js and npm.
- SvelteKit project initialized manually by installing core dependencies (`@sveltejs/kit`, `@sveltejs/adapter-auto`, `@sveltejs/vite-plugin-svelte`, `vite`), creating configuration files (`svelte.config.js`, `vite.config.js`, `src/app.html`), and updating `package.json` (e.g., `"type": "module"`, scripts).
- TailwindCSS setup integrated using `npx svelte-add@latest tailwindcss`, which configured `tailwind.config.js`, `postcss.config.js`, and `src/app.css`. Core Tailwind dependencies (`tailwindcss`, `postcss`, `autoprefixer`) installed.
- Melt UI preprocessor (`@melt-ui/pp`) configured in `svelte.config.js` by importing `preprocessMeltUI` and adding it to the `preprocess` array (e.g., `preprocess: sequence([vitePreprocess(), preprocessMeltUI()])`).
- Prisma CLI for database migrations.

## Technical Constraints

- Render Free tier database limitations (e.g., connection limits, sleep times).
- Initial static rule data is hardcoded, requiring code changes for rule updates.
- Level 1 attribute cap of +3.
- Ancestry Point allocation rules (5 points, 1 Minor Trait limit, +2 points max from Negative Traits).

## Dependencies

- **SvelteKit Core:** `@sveltejs/kit`, `@sveltejs/adapter-auto`, `@sveltejs/vite-plugin-svelte`, `vite`
- **UI Primitives:** `@melt-ui/svelte`
- **Melt UI Preprocessor:** `@melt-ui/pp`
- **Styling (TailwindCSS):** `tailwindcss`, `postcss`, `autoprefixer`
- **ORM & Database:** `prisma`, `@prisma/client`, `pg` (PostgreSQL driver - to be confirmed when DB work starts)
- **Svelte Core:** `svelte`

## Tool Usage Patterns

- Using Prisma CLI for schema definition and migrations.
- Using TailwindCSS for styling components.
- Using SvelteKit's built-in features for routing, API endpoints (Form Actions), and server-side logic.
- Using Melt UI primitives for building accessible UI components.
- Configuring and utilizing the Melt UI preprocessor (`@melt-ui/pp`) in `svelte.config.js` to enable `use:melt` action.
````

## File: projectPlan/merge-character-stages-plan.md
````markdown
# Plan: Merge Character Creation Stages (A, B, C) into a Single Page

## Objective

Merge the existing Stage A (Attributes) and Stage B (Ancestry) components, and integrate the planned Stage C (Class) selection, into a single, long-form page for character creation. This will provide users with a unified view and real-time feedback across all initial character choices.

## Requirements

- **Single Page:** All content for Stages A, B, and C will reside on one Svelte page.
- **Long Form Layout:** Sections will be stacked vertically with clear headers. No accordions or tabs are required.
- **Unified State:** Continue using the `characterInProgressStore` to manage all character data.
- **Real-time Updates:** Derived stats should update dynamically as attributes, ancestry, and class are selected.
- **Single API Endpoint:** A new backend endpoint will handle saving all data for the merged stages in one request.
- **Comprehensive Validation:** Backend and frontend validation must ensure all required fields are complete and rules are followed across all stages before saving.
- **No Dedicated Mobile UX:** Mobile responsiveness is not a primary concern for this task.

## Implementation Plan

### 1. File Structure Changes

- Create a new Svelte page component: `src/routes/character-creator/+page.svelte`. This will be the main merged page.
- The existing `src/routes/character-creator/stage-a/+page.svelte` and `src/routes/character-creator/stage-b/+page.svelte` files can be kept temporarily as references but will no longer be directly routed to.
- Create a new backend API endpoint file: `src/routes/api/character/progress/complete/+server.ts`.
- The existing `src/routes/api/character/progress/stageA/+server.ts` and `src/routes/api/character/progress/stageB/+server.ts` files will become obsolete and can be removed or archived after the new endpoint is functional.

### 2. Component Implementation (`src/routes/character-creator/+page.svelte`)

- **Import necessary stores and data:** Import `characterInProgressStore`, derived stats (`maxHP`, `areaDefense`, `precisionDefense`, `initiative`, `gritPoints`, `jumpDistance`, `provisionalSkillPoints`, `startingSP`, `startingMP`), `attributesData`, `ancestriesData`, `traitsData`, and `classesData`.
- **Combine HTML Structure:**
    - Copy the HTML structure from `src/routes/character-creator/stage-a/+page.svelte` for the Character Name and Attribute Allocation sections.
    - Copy the HTML structure from `src/routes/character-creator/stage-b/+page.svelte` for the Ancestry Selection and Trait Allocation sections.
    - Add a new section for **Class Selection**. This will involve:
        - Displaying available classes (using `classesData`).
        - Allowing the user to select one class (e.g., using radio buttons or a select dropdown).
        - Conditionally displaying Class Features (`level1Features`) and implementing UI for any required Feature Choices (`featureChoicesLvl1`) based on the selected class. This will require logic to render different input types (e.g., radio buttons for `select_one`).
    - Add a section to display **Final Provisional Stats** (HP, SP, MP, Defenses, Saves, etc.) based on the combined effects of Attributes, Ancestry Traits, and Class. This will leverage the existing and newly added derived stores.
- **Combine Svelte Script Logic:**
    - Merge the script sections from Stage A and Stage B.
    - Adapt the `handleAttributeChange` and `handleTraitSelection` functions to work within the single component.
    - Implement logic for Class Selection:
        - Update the `characterInProgressStore` with the selected `classId`.
        - Implement a `handleFeatureChoice` function to update the `selectedFeatureChoices` in the store (as a JSON string).
    - Ensure all reactive declarations (`$:`) and derived stores function correctly with the combined state.
    - Implement a single `handleSubmitCharacter` function that gathers all data from the store and sends it to the new `/api/character/progress/complete` endpoint.
- **Combine Styling:** Merge the CSS from both pages, resolving any conflicts.

### 3. State Management (`src/lib/stores/characterInProgressStore.ts`)

- The existing `characterInProgressStore` and derived stores are well-suited.
- **Add/Modify Derived Stores:**
    - Add `startingSP` derived store based on selected class's `startingSP`.
    - Add `startingMP` derived store based on selected class's `startingMP`.
    - Modify `maxHP` derived store to include the selected class's `baseHpContribution`.

    ```typescript
    // Derived store for Starting SP (from class)
    export const startingSP = derived(
      characterInProgressStore,
      ($store) => {
        if (!$store.classId) return 0;
        const classData = classesData.find(c => c.id === $store.classId); // Assuming classesData is imported
        return classData?.startingSP ?? 0;
      }
    );

    // Derived store for Starting MP (from class)
    export const startingMP = derived(
      characterInProgressStore,
      ($store) => {
        if (!$store.classId) return 0;
        const classData = classesData.find(c => c.id === $store.classId); // Assuming classesData is imported
        return classData?.startingMP ?? 0;
      }
    );

    // Update maxHP to include class base HP
    export const maxHP = derived(
      characterInProgressStore,
      ($store) => {
        const classData = classesData.find(c => c.id === $store.classId); // Assuming classesData is imported
        const classHP = classData?.baseHpContribution ?? 8; // fallback to 8 if no class selected
        const mightModifier = getModifier($store.attribute_might);
        const ancestryHP = 0; // MVP assumption - update when Ancestry HP is implemented
        return classHP + mightModifier + ancestryHP;
      }
    );
    ```

### 4. API Design (`src/routes/api/character/progress/complete/+server.ts`)

- Create a new POST endpoint.
- It should receive the complete character data object from the frontend (including character name, attributes, ancestry IDs, selected trait IDs, class ID, selected feature choices).
- Implement comprehensive backend validation:
    - Validate character name.
    - Validate attribute values and point buy total (existing Stage A logic).
    - Validate ancestry selections (up to 2, valid IDs).
    - Validate selected trait IDs against the chosen ancestries and point budget (existing Stage B logic).
    - Validate class selection (valid ID).
    - **Validate selected feature choices against the chosen class definition:** Ensure all required choices for the selected class are present and the selected values are valid options.
    - **Validate cross-stage dependencies:** E.g., ensure attribute caps are not exceeded after applying ancestry trait bonuses.

    ```typescript
    // Example backend validation for feature choices
    function validateFeatureChoices(classId: string, selectedChoicesJson: string) {
      const classData = classesData.find(c => c.id === classId); // Assuming classesData is imported
      if (!classData) throw new Error(`Invalid class ID: ${classId}`);

      const choices = JSON.parse(selectedChoicesJson || '{}');
      
      for (const requiredChoice of classData.featureChoicesLvl1) {
        if (choices[requiredChoice.id] === undefined) { // Check if choice was made
          throw new Error(`Missing required choice for ${classData.name}: ${requiredChoice.prompt}`);
        }
        // Validate selected value is one of the allowed options
        const validOptions = requiredChoice.options.map(o => o.value);
        if (!validOptions.includes(choices[requiredChoice.id])) {
          throw new Error(`Invalid selected option for ${requiredChoice.id} in class ${classData.name}`);
        }
      }
    }

    // Example backend cross-validation for attribute caps after traits
    function validateAttributeCapsAfterTraits(attributes, selectedTraitIdsJson: string) {
      const selectedTraitIds = JSON.parse(selectedTraitIdsJson || '[]');
      const traits = selectedTraitIds.map(id => traitsData.find(t => t.id === id)).filter(t => t !== undefined); // Assuming traitsData is imported
      
      const finalAttributes = { ...attributes }; // Start with base attributes

      for (const trait of traits) {
        const attrEffect = trait.effects?.find(e => e.type === 'MODIFY_ATTRIBUTE');
        if (attrEffect && attrEffect.target && typeof attrEffect.value === 'number') {
          const attributeKey = `attribute_${attrEffect.target}` as keyof typeof finalAttributes;
          if (attributeKey in finalAttributes) {
             finalAttributes[attributeKey] += attrEffect.value;
          }
        }
      }

      // Check against Level 1 cap (+3)
      const ATTRIBUTE_MAX_L1 = 3;
      for (const [attrName, finalValue] of Object.entries(finalAttributes)) {
        if (finalValue > ATTRIBUTE_MAX_L1) {
          throw new Error(`Final attribute ${attrName.replace('attribute_', '')} exceeds Level 1 cap (+3) after applying traits.`);
        }
      }
    }
    ```

- Use a Prisma transaction to either save all data or roll back if any validation fails or a database error occurs.
- Update the `CharacterInProgress` record in the database with all the collected data.
- Return a success response with the character ID or detailed error messages on failure.

### 5. Validation Strategy

- **Frontend Validation:** Provide immediate feedback to the user as they make choices (e.g., point budget remaining, trait selection rules, attribute overflow, required feature choices). Disable the submit button until all sections are valid.
    ```typescript
    // Example frontend check for overall form validity
    $: allStagesValid = 
      pointsRemaining === 0 && // Stage A complete
      ancestryPointsRemaining === 0 && // Stage B complete
      $characterInProgressStore.classId !== null && // Stage C class selected
      allRequiredFeatureChoicesMade; // Stage C choices complete

    // Check if all required feature choices for the selected class have been made
    $: allRequiredFeatureChoicesMade = selectedClass?.featureChoicesLvl1?.every(
      choice => $characterInProgressStore.selectedFeatureChoices && JSON.parse($characterInProgressStore.selectedFeatureChoices)[choice.id] !== undefined
    ) ?? true; // If no class or no choices required, consider valid
    ```
- **Backend Validation:** Implement robust validation in the `/api/character/progress/complete` endpoint as the authoritative source of truth before saving to the database.

### 6. Migration Steps (Corrected Order)

1. **Backup:** ✅ Create backups of `src/routes/character-creator/stage-a/+page.svelte`, `src/routes/character-creator/stage-b/+page.svelte`, `src/routes/api/character/progress/stageA/+server.ts`, and `src/routes/api/character/progress/stageB/+server.ts`.
2. **Update Derived Stores:** ✅ Modify `src/lib/stores/characterInProgressStore.ts` to add/update derived stores for `startingSP`, `startingMP`, and `maxHP` to incorporate class data.
3. **Create New API Endpoint:** ✅ Create `src/routes/api/character/progress/complete/+server.ts` and implement the backend logic for receiving, validating (including new cross-stage and feature choice validation), and saving all data in a transaction.
4. **Create Merged Component:** ✅ Create `src/routes/character-creator/+page.svelte`. Copy the relevant HTML and Svelte script logic from the old stage files and add the new sections for Class Selection and Final Provisional Stats. Implement the frontend validation logic.
5. **Test Incrementally:** Test the merged page locally as you build it, verifying each section works and interacts correctly.
6. **Update Routing:** Modify SvelteKit routing to point `/character-creator` to the new merged page.
7. **Test Thoroughly:** Conduct comprehensive testing as outlined in the Testing Strategy.
8. **Cleanup:** Once confident the new page works, remove or archive the old stage files and API endpoints.

### 7. Testing Strategy (Detailed)

- **Unit Tests:** (If applicable) Test individual functions for attribute changes, trait selection rules, class selection logic, and feature choice handling.
- **Component Tests:** Test the merged Svelte component to ensure UI elements are displayed correctly, interactions work, frontend validation is active, and derived stats update dynamically.
- **API Tests:** Test the `/api/character/progress/complete` endpoint with various valid and invalid data payloads to ensure backend validation (including cross-stage and feature choice validation) and saving work correctly.
- **End-to-End Tests:** Manually or automatically go through the entire character creation process on the merged page to ensure a character can be successfully created and saved. Verify the saved data in the database.
- **Specific Test Cases:**
    - Create a character with minimum/maximum attributes.
    - Select one ancestry, select traits within the point budget.
    - Select two different ancestries, select traits within the point budget.
    - Attempt to select a trait that exceeds the ancestry point budget (should be prevented).
    - Select a trait that triggers the attribute overflow helper, successfully reallocate points, and select the trait.
    - Select a trait that triggers the attribute overflow helper, attempt to confirm without freeing enough points (should be prevented).
    - Select each of the 13 classes.
    - For classes with feature choices (e.g., Sorcerer), select each available option and verify it's saved correctly.
    - Attempt to submit the form with missing required feature choices (should be prevented by validation).
    - Attempt to submit the form with invalid data (e.g., attribute out of range, too many ancestry points spent) and verify backend validation errors are returned.
    - Verify that HP, SP, MP, and other provisional stats update correctly based on selected attributes, ancestry traits, and class.

This updated plan incorporates the detailed technical steps and corrected migration order based on our discussion.
````

## File: projectPlan/mvp.md
````markdown
# Project: DC20 Level 1 Character Creator MVP

## I. Core Technologies
*   **Framework:** SvelteKit (Full-stack JavaScript/TypeScript)
*   **UI Primitives:** Melt UI (Primary)
*   **Styling:** TailwindCSS
*   **Fallback/Alternative UI:** `shadcn-svelte` (using Bits UI) / Bits UI directly, if needed for specific components or faster styling.
*   **ORM & Migrations:** Prisma
*   **Database:** Render Free PostgreSQL

## II. UI Design & Aesthetics
*   **Theme:** Dark Mode (Primary)
*   **Style:** Modern and Clean
*   **Primary Color Palette (Chosen):**
    *   `#FFBE0B` (Yellow - Accent, Highlights, Positive Feedback)
    *   `#FB5607` (Orange - Secondary Accent, Warnings)
    *   `#FF006E` (Magenta/Rose - Energetic Accent, Errors, Negative Feedback)
    *   `#8338EC` (Purple - Primary Action, Links, Key UI Elements)
    *   `#3A86FF` (Blue - Informational, Secondary Actions)
    *   *Dark Backgrounds:* Various shades of very dark gray/near-black (e.g., `#111827`, `#1F2937`, `#0D1117` from Tailwind's gray scale or custom)
    *   *Text Colors:* Light grays/off-whites for readability on dark backgrounds (e.g., `#E5E7EB`, `#D1D5DB`).
*   **Primary Font:** Inter (Variable font, allowing for different weights from a single family). Configured in Tailwind.
*   **Alternative Color Palettes (For Future Reference):**
    *   `https://coolors.co/palette/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1`
    *   `https://coolors.co/palette/007f5f-2b9348-55a630-80b918-aacc00-bfd200-d4d700-dddf00-eeef20-ffff3f`
    *   `https://coolors.co/03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08`
    *   `https://coolors.co/7400b8-6930c3-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb`
    *   `https://coolors.co/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0`

## III. MVP Feature Scope
1.  **Character Creation Wizard (Level 1 Only):**
    *   Guided, 6-stage UI implementing the initial stages (A-Attributes, B-Ancestry, C-Class) of the re-ordered flow (A-Attributes, B-Ancestry, C-Class, D-Background, E-Review, F-Equipment). These stages incorporate decision points from DC20's original 10 steps for Level 1.
    *   Visual-only breadcrumbs indicating progress through the re-ordered stages.
    *   Input fields, selections, point allocation with real-time validation for Level 1 constraints.
    *   Dynamic *provisional* updates of relevant stats on the frontend as choices are made.
    *   Data for the current creation process saved to the database (`CharacterInProgress` table) after each wizard step is completed by the user.
2.  **Character Page Output:**
    *   Upon completion of the wizard, all character data is finalized, calculated on the backend, and stored in a `CharacterSheetData` table.
    *   A dedicated page displays this finalized Level 1 character sheet data in a structured, readable HTML format, styled according to the dark mode, modern & clean aesthetic.
3.  **Data Persistence:**
    *   `CharacterInProgress` table: Stores intermediate data as the user moves through the wizard.
    *   `CharacterSheetData` table: Stores the final, calculated data for a completed Level 1 character.

## IV. Data Modeling (Prisma Schema)
*   **`CharacterInProgress` Table:**
    *   `id`: String `@id @default(uuid())`
    *   `characterName`: String?
    *   `currentWizardStage`: String `@default("A")` (e.g., "A", "B", "C" for re-ordered stages)
    *   `createdAt`: DateTime `@default(now())`
    *   `updatedAt`: DateTime `@updatedAt`
    *   **Stage A Data:**
        *   `attribute_might`: Int `@default(-2)`
        *   `attribute_agility`: Int `@default(-2)`
        *   `attribute_charisma`: Int `@default(-2)`
        *   `attribute_intelligence`: Int `@default(-2)`
        *   `primeModifierAttributeChoice`: String? // Stores "Might", "Agility", etc. if there's a tie.
    *   **Stage B Data:**
        *   `selectedAncestry1Id`: String?
        *   `selectedAncestry2Id`: String?
        *   `selectedAncestryTraitsJson`: String? // JSON string: `[{ "traitId": "human_resolve", "sourceAncestryId": "human" }, ...]`
    *   **Stage C Data:**
        *   `selectedClassId`: String?
        *   `classFeatureChoicesLvl1Json`: String? // JSON string: `{ "sorcerousOrigin": "intuitive_magic" }`
    *   *(Fields for Stage D, E, F to be added as those stages are detailed)*
*   **`CharacterSheetData` Table:**
    *   `id`: String `@id @default(uuid())`
    *   `characterInProgressId`: String @unique // Links to the completed CharacterInProgress
    *   `characterInProgress`: CharacterInProgress @relation(fields: [characterInProgressId], references: [id])
    *   **Final Output Fields (Level 1 Character Sheet):**
        *   `finalName: String`
        *   `finalPlayerName: String?`
        *   `finalLevel: Int @default(1)`
        *   `finalMight: Int`
        *   `finalAgility: Int`
        *   `finalCharisma: Int`
        *   `finalIntelligence: Int`
        *   `finalPrimeModifierValue: Int`
        *   `finalPrimeModifierAttribute: String`
        *   `finalCombatMastery: Int @default(1)`
        *   `finalSaveMasteryMight: Int`
        *   `finalSaveMasteryAgility: Int`
        *   `finalSaveMasteryCharisma: Int`
        *   `finalSaveMasteryIntelligence: Int`
        *   `finalHPMax: Int`
        *   `finalSPMax: Int`
        *   `finalMPMax: Int`
        *   `finalPD: Int`
        *   `finalAD: Int`
        *   `finalPDR: String?`
        *   `finalEDR: String?`
        *   `finalMDR: String?`
        *   `finalSaveDC: Int`
        *   `finalDeathThreshold: Int`
        *   `finalMoveSpeed: Int`
        *   `finalJumpDistance: Int`
        *   `finalRestPoints: Int`
        *   `finalGritPoints: Int`
        *   `finalInitiativeBonus: Int`
        *   `skillsJson: String` // `[{ id: 'athletics', name: 'Athletics', masteryLevel: 'Novice', bonus: 2, attribute: 'Might' }, ...]`
        *   `tradesJson: String` // `[{ id: 'alchemy', name: 'Alchemy', masteryLevel: 'Novice', bonus: 2, attribute: 'Intelligence' }, ...]`
        *   `languagesJson: String` // `[{ id: 'common', name: 'Common', fluency: 'Fluent' }, ...]`
        *   `ancestry1Name: String?`
        *   `ancestry2Name: String?`
        *   `selectedTraitsJson: String` // `[{ id: 'human_resolve', name: 'Human Resolve', cost: 1, description: '...', sourceAncestryName: 'Human' }, ...]`
        *   `className: String`
        *   `classFeaturesLvl1Json: String` // `[{ name: 'Rage', description: '...' }, { name: 'Sorcerous Origin', choice: 'Intuitive Magic', description: '...'}]`
        *   `equipmentJson: String` // `[{ name: 'Longsword', type: 'Weapon', ... }, ...]`
    *   `createdAt`: DateTime `@default(now())`
    *   `updatedAt`: DateTime `@updatedAt`
*   **Static Rule Data:**
    *   Initially embedded as TypeScript objects/arrays within the SvelteKit application (e.g., in `src/lib/rulesdata/`). TypeScript interfaces (e.g., `IAncestry`, `ITrait`, `IClass`) will define the structure. Effect encoding standardized (e.g., `effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'Might', value: 1 }]`).

## V. Key Backend Logic (SvelteKit Form Actions / API Routes)
*   One SvelteKit Form Action per wizard stage (e.g., `/wizard/stageA`, `/wizard/stageB`, etc.) to save/update `CharacterInProgress` data.
*   Endpoint/Form Action to finalize character creation:
    *   Takes `CharacterInProgress.id`.
    *   Performs all final calculations based on stored choices and embedded rule data.
    *   Validates all rules and constraints.
    *   Creates a new `CharacterSheetData` record.
*   Endpoint to fetch `CharacterSheetData` for display.
*   Backend re-validates all inputs for each stage. Final authoritative calculations for `CharacterSheetData` happen on the backend.

## VI. Key Frontend Logic & UI Implementation (SvelteKit with Melt UI & TailwindCSS)
*   **Wizard Structure:** A main Svelte component managing the current stage, with child components for each re-ordered stage (A, B, C initially).
*   **State Management:** A single, comprehensive writable Svelte store (`characterInProgressStore`) mirroring `CharacterInProgress` model plus transient UI state. Derived stores for calculated UI values.
*   **UI Components (Built using Melt UI primitives & styled with TailwindCSS):**
    *   Core Melt Primitives: `Button`, `Label`, `Input`, `Select`, `RadioGroup`, `Checkbox`, `Dialog`, `Tooltip`, `Progress`.
    *   Custom Composite Components: `WizardLayout.svelte`, `Breadcrumbs.svelte` (visual-only for MVP), `StageContainer.svelte`, `PointAllocator.svelte`, `StatDisplay.svelte` (for snapshot panel), `SelectionCard.svelte`.
*   **Styling:** TailwindCSS. Configuration includes chosen color palette and Inter font family. `darkMode: 'class'` with default to dark.
*   **Accessibility:** Leverage Melt UI's built-in features.
*   **Validation:** Real-time frontend validation with inline error messages next to problematic fields. Backend errors handled via SvelteKit Form Action responses.
*   **Character Sheet Display:** A dedicated Svelte route/page rendering `CharacterSheetData`.

## VII. Specific Planning Decisions (from Checklist)
*   **Complex Selections (Traits, Features):** Stored as JSON strings in `CharacterInProgress` for MVP.
*   **Static Rule Data Storage:** Hardcoded TypeScript objects/arrays in `src/lib/rulesdata/` for MVP.
*   **Svelte Store:** Single `characterInProgressStore` (writable), with extensive use of derived stores.
*   **Backend API:** One SvelteKit Form Action per wizard stage.
*   **Calculations:** Frontend for provisional UI display; backend for authoritative validation and final `CharacterSheetData` calculation.
*   **Error Handling:** Inline frontend messages; SvelteKit Form Action error patterns for backend errors.
*   **Resume Creation (MVP):** Use browser `localStorage` to store the `id` of the last edited `CharacterInProgress` record for basic resume functionality.
*   **Reusable Components:** Focus on `SelectionCard.svelte`, `PointAllocator.svelte`, `CharacterSnapshotPanel.svelte`.
*   **Tailwind Dark Mode:** `darkMode: 'class'`, default to dark.

## VIII. Post-MVP Considerations (Out of Scope for Initial Build)
*   Stages D (Background), E (Review), F (Equipment) of the wizard.
*   Character Level Up Wizard
*   Create Custom Equipment
*   Name Generator
*   Character Image & Token Generator (beyond simple upload)
*   PDF Output / Advanced Character Sheet Styling
*   User Accounts & Authentication
*   Sharing Characters
*   Moving Static Rule Data to Database
*   Interactive breadcrumb navigation (allowing edits to previous steps with full recalculation).
*   Light Mode Theme & UI Theme Toggle.
*   Different font classes for UI/Title.

## Appendix: Static Rule Data Definition
Detailed TypeScript interfaces for static rule data will be defined in `src/lib/rulesdata/types.ts`. Key interfaces include:

*   `IAttributeData { id: 'might' | 'agility' | 'charisma' | 'intelligence'; name: string; description: string; derivedStats?: Array<{ statName: string; formula: string; }>; }`
*   `ITraitEffect { type: string; target?: string; value?: any; condition?: string; userChoiceRequired?: { prompt: string; options?: string[] }; descriptionOverride?: string; }`
*   `ITrait { id: string; name: string; description: string; cost: number; isMinor?: boolean; isNegative?: boolean; effects?: ITraitEffect[]; prerequisites?: any[]; }`
*   `IAncestry { id: string; name: string; description: string; defaultTraitIds?: string[]; expandedTraitIds: string[]; }`
*   `IClassFeatureChoiceOption { value: string; label: string; description?: string; }`
*   `IClassFeatureChoice { id: string; prompt: string; type: 'select_one' | 'select_multiple'; maxSelections?: number; options: IClassFeatureChoiceOption[]; effectsOnChoice?: { [choiceValue: string]: ITraitEffect[] }; }`
*   `IClassFeature { id: string; name: string; description: string; level: number; effects?: ITraitEffect[]; }`
*   `IClassDefinition { id: string; name: string; ... baseHpContribution: number; startingSP: number; startingMP: number; skillPointGrantLvl1?: number; ... level1Features: IClassFeature[]; featureChoicesLvl1?: IClassFeatureChoice[]; ... }`
*   `ISkillData { id: string; name: string; attributeAssociation: string; description: string; }`
*   `ITradeData { id: string; name: string; attributeAssociation: string; description: string; tools?: string; }`
*   `ILanguageData { id: string; name: string; type: string; }`
````

## File: projectPlan/stage1.md
````markdown
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
````

## File: projectPlan/stage2.md
````markdown
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
````

## File: projectPlan/stage3.md
````markdown
# AI Generation Guide: Character Creator - Stage C (Class Selection)

## I. Overall Stage Objective
Create a Svelte component (e.g., `StageC_Class.svelte`) that allows the user to:
1.  Browse and select a Character Class from a list of options.
2.  View a detailed description, Level 1 features, and specific Level 1 benefits (HP, SP/MP, skill/trade points, starting known abilities) for the selected class.
3.  Make any necessary Level 1 feature choices specific to the selected class.
4.  See the `CharacterSnapshotPanel` update with finalized HP, SP, MP, and adjusted skill/trade point pools based on the class selection.
5.  Persist these choices to a Svelte store and, upon proceeding, save to the `CharacterInProgress` table via a backend API call.

## II. Svelte Component: `StageC_Class.svelte`

### A. Props:
*   `characterInProgressStore`: Writable Svelte store (holds `attributesFromStageA`, `selectedAncestries`, `selectedTraits`, `selectedClassID`, `classFeatureChoicesLvl1`, etc.).
*   `staticRuleData`: Object containing all class definitions, features, Lvl 1 benefits, etc.

### B. Internal State (Reactive Svelte Variables):
*   `selectedClassID`: String | null (bound to the Svelte store)
*   `currentFeatureChoices`: Object (e.g., `{ sorcererOrigin: null, clericDomain1: null }` - specific to class, bound to Svelte store)
*   `derivedSelectedClassData`: Reactive/Derived Object (`$: derivedSelectedClassData = $staticRuleData.classes.find(c => c.id === $selectedClassID)`)

### C. UI Structure & Components (Melt UI + TailwindCSS):

**1. Main Container & Stage Title:**
    *   Container (`div`): Tailwind: `p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary`
    *   Title (`h2`): "Step 3: Choose Your Class" (Tailwind: `text-2xl font-semibold mb-6 text-yellow-accent`)

**2. Class Selection Area (`div`):**
    *   Layout: CSS Grid (`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8`)
    *   **For each Class in `staticRuleData.classes`:**
        *   **`SelectionCard.svelte` Component (or custom styled `div` with Melt UI `Toggle` behavior):**
            *   Props: `classData`, `isSelected`, `onSelect`.
            *   Displays: Class Name (`h4 text-lg font-medium text-yellow-accent`), Short Description (`p text-xs text-light-text-secondary`).
            *   Tailwind: `p-4 border rounded-lg cursor-pointer transition-all dark:border-gray-700 dark:hover:bg-dark-bg-primary ui-selected:bg-purple-primary/30 ui-selected:border-purple-primary ui-selected:ring-2 ui-selected:ring-purple-primary`
            *   On click: calls `onSelect(classData.id)`.

**3. Selected Class Details Area (`div` - Conditional: `{#if $selectedClassID}`):**
    *   Tailwind: `mt-6 p-4 bg-dark-bg-primary rounded-lg`
    *   Selected Class Name (`h3`): `{$derivedSelectedClassData.name}` (Tailwind: `text-xl font-bold text-yellow-accent mb-2`)
    *   Full Description (`p`): `{$derivedSelectedClassData.fullDescription}` (Tailwind: `mb-4 text-light-text-primary leading-relaxed`)

    *   **Level 1 Class Features (`div`):**
        *   Title (`h4`): "Level 1 Features" (Tailwind: `text-lg font-medium mb-3 text-blue-info`)
        *   List (`ul`):
            *   For each feature in `$derivedSelectedClassData.level1Features`:
                *   Item (`li` - Tailwind: `mb-3 p-3 bg-dark-bg-secondary rounded`):
                    *   Feature Name (`strong`): `{feature.name}` (Tailwind: `text-light-text-primary`)
                    *   Feature Description (`p`): `{feature.description}` (Tailwind: `text-sm text-light-text-secondary mt-1`)
                    *   Melt UI `Tooltip` for any complex terms.

    *   **Level 1 Feature Choices (Conditional - `{#if $derivedSelectedClassData.featureChoicesLvl1 && $derivedSelectedClassData.featureChoicesLvl1.length > 0}`):**
        *   Title (`h4`): "Feature Choices" (Tailwind: `text-lg font-medium my-3 text-blue-info`)
        *   For each choice definition in `$derivedSelectedClassData.featureChoicesLvl1`:
            *   Label (Melt UI `Label`): `{choice.prompt}` (Tailwind: `block mb-1 font-medium`)
            *   If single select (e.g., Sorcerer Origin):
                *   Melt UI `Select` (`<Select.Root bind:value={$currentFeatureChoices[choice.id]}>`):
                    *   Styled `Select.Trigger` and `Select.Content` with `Select.Item` for each option.
            *   If multi-select (e.g., Cleric Domains - limit to 2):
                *   Group of Melt UI `Checkbox` components, each with a `Label`.
                *   Logic to enforce selection limits.

    *   **Level 1 Class Benefits Summary (`div`):**
        *   Title (`h4`): "Level 1 Benefits" (Tailwind: `text-lg font-medium my-3 text-blue-info`)
        *   Layout: Grid or flex list.
        *   `p`: "Base HP Increase: +{$derivedSelectedClassData.baseHpBonus}"
        *   `p`: "Starting Stamina Points: {$derivedSelectedClassData.startingSP}"
        *   `p`: "Starting Mana Points: {$derivedSelectedClassData.startingMP}"
        *   `p`: "Skill Points Granted: +{$derivedSelectedClassData.skillPointGrantLvl1 || 0}"
        *   `p`: "Trade Points Granted: +{$derivedSelectedClassData.tradePointGrantLvl1 || 0}"
        *   `p`: "Combat Training: {$derivedSelectedClassData.combatTraining.join(', ')}"
        *   `p`: "Starting Cantrips Known: {$derivedSelectedClassData.cantripsKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Spells Known: {$derivedSelectedClassData.spellsKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Maneuvers Known: {$derivedSelectedClassData.maneuversKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Techniques Known: {$derivedSelectedClassData.techniquesKnownLvl1 || 0}" (list if specific)

**4. Character Snapshot Panel (`CharacterSnapshot.svelte` - Reusable Component):**
    *   Props: `characterDataStore` (the main store from `StageC_Class.svelte`).
    *   Displays: Attributes, Prime Mod, Saves, Grit, Jump, **Final HP, Final SP, Final MP**, Provisional PD, Provisional AD, **Updated Skill/Trade Point Totals.**
    *   Tailwind: Positioned consistently, perhaps in a sidebar or a distinct section on the page. Values should reactively update when class is selected or feature choices are made that impact these stats.

### D. Functions & Logic:
*   `selectClass(classId)`:
    *   Updates `$characterInProgressStore.selectedClassID = classId`.
    *   Resets `$characterInProgressStore.classFeatureChoicesLvl1` to defaults for the new class.
    *   Triggers recalculation of HP, SP, MP, and skill/trade point pools in the main store, which the Snapshot Panel listens to.
*   Event handlers for feature choice inputs (updates `$characterInProgressStore.classFeatureChoicesLvl1`).
*   Validation: Ensure all required Level 1 feature choices are made before allowing "Next Step".
*   Function to persist current state to `characterInProgressStore` and call backend API.

### E. Static Rule Data Structure (Example Snippet for `staticRuleData.classes`):
```typescript
// Example for a class object
{
  id: 'sorcerer',
  name: 'Sorcerer',
  shortDescription: 'Channels raw magic from within.',
  fullDescription: 'Sorcerers tap into the raw magic in their own bodies...',
  baseHpBonus: 0, // Added to (Might + Ancestry HP + Class Table HP progression)
  startingSP: 0,
  startingMP: 6, // From Class Table
  skillPointGrantLvl1: 0, // Additional points beyond background
  tradePointGrantLvl1: 0,
  combatTraining: ['Light Armor'],
  cantripsKnownLvl1: 2, // From Class Table
  spellsKnownLvl1: 3,   // From Class Table
  level1Features: [
    { name: 'Innate Power', description: 'Choose a Sorcerous Origin...' },
    { name: 'Overload Magic', description: 'You can spend 2 AP to channel raw energy...' },
    { name: 'Sorcery (Flavor)', description: 'You learn the Sorcery Spell.' }
  ],
  featureChoicesLvl1: [
    {
      id: 'sorcerousOrigin', // Key for store
      prompt: 'Choose your Sorcerous Origin:',
      type: 'select', // 'select' or 'multiselect'
      options: [
        { value: 'intuitive_magic', label: 'Intuitive Magic' },
        { value: 'resilient_magic', label: 'Resilient Magic' },
        { value: 'unstable_magic', label: 'Unstable Magic' }
      ]
    }
  ],
  // ... other class specific data like spell list access
}
````

## File: src/lib/rulesdata/languages.ts
````typescript
import type { ILanguageData } from './types';

export const languagesData: ILanguageData[] = [
  {
    id: 'common',
    name: 'Common',
    type: 'standard', // From DC20 p.18
    description: 'Common is the most simple and universal language in the world. All Player Characters start Fluent in Common.'
  },
  {
    id: 'elvish',
    name: 'Elvish',
    type: 'standard', // From DC20 p.18
    description: 'Elvish is a fluid and melodic language spoken by Elves. Typical Speakers: Elves.'
  },
  {
    id: 'draconic',
    name: 'Draconic',
    type: 'exotic', // From DC20 p.18
    description: 'Draconic is a harsh, guttural language spoken by Dragons and Dragonkin. Typical Speakers: Dragons, Dragonkin.'
  },
  {
    id: 'dwarvish',
    name: 'Dwarvish',
    type: 'standard', // From DC20 p.18
    description: 'Dwarvish is a language of hard consonants and guttural sounds, spoken by Dwarves. Typical Speakers: Dwarves.'
  },
  {
    id: 'gnomish',
    name: 'Gnomish',
    type: 'standard', // From DC20 p.18
    description: 'Gnomish is a language filled with trills and clicks, spoken by Gnomes. Typical Speakers: Gnomes.'
  },
  {
    id: 'goblin',
    name: 'Goblin',
    type: 'standard', // From DC20 p.18
    description: 'Goblin is a rough and simple language spoken by Goblins, Hobgoblins, and Bugbears. Typical Speakers: Goblins, Hobgoblins, Bugbears.'
  },
  {
    id: 'halfling',
    name: 'Halfling',
    type: 'standard', // From DC20 p.18
    description: 'Halfling is a soft and gentle language spoken by Halflings. Typical Speakers: Halflings.'
  },
  {
    id: 'orcish',
    name: 'Orcish',
    type: 'standard', // From DC20 p.18
    description: 'Orcish is a brutal and harsh language spoken by Orcs. Typical Speakers: Orcs.'
  },
  {
    id: 'primordial',
    name: 'Primordial',
    type: 'exotic', // From DC20 p.18
    description: 'Primordial is the language of Elementals. Typical Speakers: Elementals.'
  },
  {
    id: 'celestial',
    name: 'Celestial',
    type: 'exotic', // From DC20 p.18
    description: 'Celestial is the language of Celestials. Typical Speakers: Celestials.'
  },
  {
    id: 'abyssal',
    name: 'Abyssal',
    type: 'exotic', // From DC20 p.18
    description: 'Abyssal is the language of Demons. Typical Speakers: Demons.'
  },
  {
    id: 'infernal',
    name: 'Infernal',
    type: 'exotic', // From DC20 p.18
    description: 'Infernal is the language of Devils. Typical Speakers: Devils.'
  },
  {
    id: 'undercommon',
    name: 'Undercommon',
    type: 'exotic', // From DC20 p.18
    description: 'Undercommon is a language spoken by inhabitants of the Underdark, such as Drow. Typical Speakers: Drow, Underdark inhabitants.'
  }
];
````

## File: src/lib/rulesdata/skills.ts
````typescript
import type { ISkillData } from './types';

export const skillsData: ISkillData[] = [
  {
    id: 'athletics',
    name: 'Athletics',
    attributeAssociation: 'might',
    description: 'Athletics covers activities that involve physical prowess, such as climbing, swimming, and jumping in difficult circumstances, or participating in a Grapple.'
  },
  {
    id: 'intimidation',
    name: 'Intimidation',
    attributeAssociation: 'might',
    description: 'Intimidation covers attempts to influence a creature’s behavior using threats, hostile actions, and physical violence.'
  },
  {
    id: 'acrobatics',
    name: 'Acrobatics',
    attributeAssociation: 'agility',
    description: 'Acrobatics covers activities that require flexibility, nimbleness, and balance.'
  },
  {
    id: 'trickery',
    name: 'Trickery',
    attributeAssociation: 'agility',
    description: 'Trickery covers non-verbal means of deceiving others, such as pickpocketing things, concealing an object on your person, or other forms of physical deception.'
  },
  {
    id: 'stealth',
    name: 'Stealth',
    attributeAssociation: 'agility',
    description: 'Stealth covers attempts to avoid being seen or heard by other creatures, such as sneaking about or hiding behind cover.'
  },
  {
    id: 'animal',
    name: 'Animal',
    attributeAssociation: 'charisma',
    description: 'Animal covers interactions such as corralling, training, calming, and gauging the intention of Beasts.'
  },
  {
    id: 'insight',
    name: 'Insight',
    attributeAssociation: 'charisma',
    description: 'Insight governs your ability to discern intentions. This could be from observing a creature’s body language, facial cues, and mannerisms. Alternatively, Insight can represent a gut feeling or intuition about a situation.'
  },
  {
    id: 'influence',
    name: 'Influence',
    attributeAssociation: 'charisma',
    description: 'Influence covers your attempts to manipulate a creature’s behavior using compelling arguments based on truth, half-truths, lies, or some combination in between.'
  },
  {
    id: 'investigation',
    name: 'Investigation',
    attributeAssociation: 'intelligence',
    description: 'Investigation covers using your senses to search for and discover things that are not readily observable. You look for clues and then make deductions on those clues to try and discern the locations of things or how they work (finding hidden objects, secret doors, or weak points in structures). It also covers the process of researching information through various texts.'
  },
  {
    id: 'medicine',
    name: 'Medicine',
    attributeAssociation: 'intelligence',
    description: 'Medicine covers activities that involve medical knowledge and application, such as treating a wounded creature, diagnosing an illness, or identifying a cure to an ailment.'
  },
  {
    id: 'survival',
    name: 'Survival',
    attributeAssociation: 'intelligence',
    description: 'Survival covers the activities required to survive in the wilderness, such as tracking quarry, foraging for food and water, and navigating through uncharted territory.'
  },
  {
    id: 'awareness',
    name: 'Awareness',
    attributeAssociation: 'prime', // Uses Prime Modifier
    description: 'Awareness governs your ability to detect the presence of other creatures or objects using your sight, hearing, smell, or other senses.'
  },
];
````

## File: src/lib/rulesdata/trades.ts
````typescript
import { ITradeData } from './types';

export const tradesData: ITradeData[] = [
  {
    id: 'alchemy',
    name: 'Alchemy',
    attributeAssociation: 'intelligence',
    description: 'Alchemy is the practice of creating something by combining or changing other things. This includes creating potions, poisons, and other alchemical substances.',
    tools: 'Alchemist’s Supplies'
  },
  {
    id: 'history',
    name: 'History',
    attributeAssociation: 'intelligence',
    description: 'History is the study of past events, ancient lore, and how civilizations have shaped the present. This includes recalling information about historical figures, events, and cultures.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'arcana',
    name: 'Arcana',
    attributeAssociation: 'intelligence',
    description: 'Arcana is the study of magic, its history, theories, and the planes of existence. This includes recalling information about spells, magical creatures, and magical phenomena.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'architecture',
    name: 'Architecture',
    attributeAssociation: 'intelligence',
    description: 'Architecture is the knowledge of building design, construction, and structural integrity. This includes understanding how buildings are constructed, identifying weak points, and designing structures.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'blacksmithing',
    name: 'Blacksmithing',
    attributeAssociation: 'might',
    description: 'Blacksmithing is the crafting and repairing of metal objects, including weapons and armor. This includes working with forges, hammers, and other tools to shape metal.',
    tools: 'Smith’s Tools'
  },
  {
    id: 'brewing',
    name: 'Brewing',
    attributeAssociation: 'intelligence',
    description: 'Brewing is the art of creating beverages through fermentation, such as beer, wine, and spirits. This includes understanding the process of fermentation and using brewing equipment.',
    tools: 'Brewer’s Supplies'
  },
  {
    id: 'calligraphy',
    name: 'Calligraphy',
    attributeAssociation: 'agility',
    description: 'Calligraphy is the art of decorative handwriting and lettering. This includes using various pens, inks, and techniques to create visually appealing text.',
    tools: 'Calligrapher’s Supplies'
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    attributeAssociation: 'might',
    description: 'Carpentry is the crafting and repairing of wooden objects and structures. This includes working with wood, saws, hammers, and other tools to build and repair.',
    tools: 'Carpenter’s Tools'
  },
  {
    id: 'cartography',
    name: 'Cartography',
    attributeAssociation: 'intelligence',
    description: 'Cartography is the art and science of mapmaking. This includes creating maps, reading maps, and navigating using maps.',
    tools: 'Cartographer’s Tools'
  },
  {
    id: 'cobbling',
    name: 'Cobbling',
    attributeAssociation: 'agility',
    description: 'Cobbling is the crafting and repairing of footwear. This includes working with leather, thread, and tools to create and repair shoes and boots.',
    tools: 'Cobbler’s Tools'
  },
  {
    id: 'cooking',
    name: 'Cooking',
    attributeAssociation: 'intelligence',
    description: 'Cooking is the preparation of food for consumption. This includes understanding ingredients, recipes, and cooking techniques.',
    tools: 'Cook’s Utensils'
  },
  {
    id: 'deciphering',
    name: 'Deciphering',
    attributeAssociation: 'intelligence',
    description: 'Deciphering is the understanding of coded messages, ancient scripts, or hidden meanings. This includes analyzing patterns, symbols, and languages to uncover hidden information.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'disguise',
    name: 'Disguise',
    attributeAssociation: 'charisma',
    description: 'Disguise is the altering of one’s appearance to resemble someone else or a different type of person. This includes using makeup, costumes, and props to change appearance.',
    tools: 'Disguise Kit'
  },
  {
    id: 'forgery',
    name: 'Forgery',
    attributeAssociation: 'agility',
    description: 'Forgery is the creating of convincing copies of documents, signatures, or objects. This includes replicating details and materials to create fakes.',
    tools: 'Forgery Kit'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    attributeAssociation: 'charisma',
    description: 'Gaming is the proficiency in various games of chance or skill. This includes understanding rules, strategies, and playing games.',
    tools: 'Gaming Set'
  },
  {
    id: 'herbalism',
    name: 'Herbalism',
    attributeAssociation: 'intelligence',
    description: 'Herbalism is the knowledge of plants, their properties, and uses. This includes identifying plants, preparing herbal remedies, and understanding plant effects.',
    tools: 'Herbalism Kit'
  },
  {
    id: 'jeweler',
    name: 'Jeweler',
    attributeAssociation: 'agility',
    description: 'Jeweler is the crafting and repairing of jewelry. This includes working with precious metals, gems, and tools to create and repair jewelry.',
    tools: 'Jeweler’s Tools'
  },
  {
    id: 'leatherworking',
    name: 'Leatherworking',
    attributeAssociation: 'agility',
    description: 'Leatherworking is the crafting and repairing of leather goods. This includes working with leather, tools, and techniques to create and repair items.',
    tools: 'Leatherworker’s Tools'
  },
  {
    id: 'linguistics',
    name: 'Linguistics',
    attributeAssociation: 'intelligence',
    description: 'Linguistics is the study of languages, their structure, and origins. This includes understanding grammar, syntax, and the history of languages.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'masonry',
    name: 'Masonry',
    attributeAssociation: 'might',
    description: 'Masonry is the working with stone to build structures or objects. This includes cutting, shaping, and laying stone to create buildings and other structures.',
    tools: 'Mason’s Tools'
  },
  {
    id: 'medicine',
    name: 'Medicine',
    attributeAssociation: 'intelligence',
    description: 'Medicine is the knowledge and practice of healing injuries and treating diseases. This includes diagnosing ailments, administering treatments, and understanding medical procedures.',
    tools: 'Healer’s Kit'
  },
  {
    id: 'music',
    name: 'Music',
    attributeAssociation: 'charisma',
    description: 'Music is the performance of music using instruments or voice. This includes playing instruments, singing, and understanding musical theory.',
    tools: 'Musical Instrument'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    attributeAssociation: 'intelligence',
    description: 'Navigation is the determining of one’s position and plotting a course. This includes using maps, compasses, and celestial bodies to navigate.',
    tools: 'Navigator’s Tools'
  },
  {
    id: 'painting',
    name: 'Painting',
    attributeAssociation: 'agility',
    description: 'Painting is the creating of art using paints. This includes using various paints, brushes, and techniques to create visual art.',
    tools: 'Painter’s Supplies'
  },
  {
    id: 'poisoner',
    name: 'Poisoner',
    attributeAssociation: 'intelligence',
    description: 'Poisoner is the knowledge and creation of poisons. This includes identifying poisonous substances, preparing poisons, and understanding their effects.',
    tools: 'Poisoner’s Kit'
  },
  {
    id: 'pottery',
    name: 'Pottery',
    attributeAssociation: 'agility',
    description: 'Pottery is the crafting of objects from clay. This includes shaping, firing, and glazing clay to create various objects.',
    tools: 'Potter’s Tools'
  },
  {
    id: 'religion',
    name: 'Religion',
    attributeAssociation: 'intelligence',
    description: 'Religion is the knowledge of deities, religious practices, and holy texts. This includes understanding religious beliefs, rituals, and scriptures.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'sculpting',
    name: 'Sculpting',
    attributeAssociation: 'might',
    description: 'Sculpting is the creating of three-dimensional art from various materials. This includes shaping materials like stone, wood, or clay to create sculptures.',
    tools: 'Sculptor’s Tools'
  },
  {
    id: 'smithing',
    name: 'Smithing',
    attributeAssociation: 'might',
    description: 'Smithing is the general knowledge of working with metals. This includes understanding different metals, their properties, and basic metalworking techniques.',
    tools: 'Smith’s Tools' // Often overlaps with Blacksmithing, but can be broader
  },
  {
    id: 'survival',
    name: 'Survival',
    attributeAssociation: 'intelligence',
    description: 'Survival is the knowledge and skills needed to survive in the wilderness. This includes tracking, foraging, shelter building, and navigating in natural environments.',
    tools: undefined // Knowledge trade, though often associated with tools like a hunting trap or fishing tackle
  },
  {
    id: 'tailoring',
    name: 'Tailoring',
    attributeAssociation: 'agility',
    description: 'Tailoring is the crafting and repairing of clothing and textiles. This includes working with fabric, needles, and thread to create and repair garments.',
    tools: 'Weaver’s Tools' // Or Tailor's Tools, depending on specific terminology
  },
  {
    id: 'thieves',
    name: 'Thieves’',
    attributeAssociation: 'agility',
    description: 'Thieves’ is the knowledge and skills related to thievery, including lockpicking and disarming traps. This includes understanding security measures and using specialized tools.',
    tools: 'Thieves’ Tools'
  },
  {
    id: 'vehicles_land',
    name: 'Vehicles (Land)',
    attributeAssociation: 'agility',
    description: 'Vehicles (Land) is the proficiency in operating land-based vehicles. This includes riding horses, driving carts, and operating other land vehicles.',
    tools: undefined // Proficiency, not tool-based
  },
  {
    id: 'vehicles_water',
    name: 'Vehicles (Water)',
    attributeAssociation: 'agility',
    description: 'Vehicles (Water) is the proficiency in operating water-based vehicles. This includes sailing boats, piloting ships, and operating other water vehicles.',
    tools: undefined // Proficiency, not tool-based
  },
  {
    id: 'woodcarving',
    name: 'Woodcarving',
    attributeAssociation: 'agility',
    description: 'Woodcarving is the creating of art or objects from wood. This includes shaping wood using knives, chisels, and other tools.',
    tools: 'Woodcarver’s Tools'
  }
];
````

## File: src/routes/+layout.svelte
````
<script>import "../app.css";</script>

<svelte:head>
  <title>DC20 Character Creator</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<slot></slot>
````

## File: src/routes/character-creator/+page.svelte
````
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
````

## File: svelte.config.js
````javascript
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI } from '@melt-ui/pp'; // Import Melt UI preprocessor (using correct named export)
// import { sequence } from '@sveltejs/kit/hooks'; // Removed sequence import

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [preprocessMeltUI(), vitePreprocess()], // Simplified array, Melt UI preprocessor first

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapters-auto for a list.
		// If your environment is not supported or you prefer specifying a single environment, then switch out and process this adapter:
		// import adapter from '@sveltejs/adapter-auto';
		adapter: adapter()
	}
};

export default config;
````

## File: .svelte-kit/generated/client/nodes/3.js
````javascript
export { default as component } from "../../../../src/routes/character-creator/+page.svelte";
````

## File: .svelte-kit/generated/client/nodes/4.js
````javascript
export { default as component } from "../../../../src/routes/character-creator/stage-a/+page.svelte";
````

## File: memory-bank/activeContext.md
````markdown
# Active Context

This document tracks the current work focus, recent changes, and next steps for the project.

## Current Work Focus

With the foundational UI setup (Stage 0) complete, the current focus is on implementing Stage A (Attributes) of the Character Creation Wizard. This involves building the Svelte component for attribute allocation and the corresponding backend logic for data handling.

## Recent Changes

**Stage 0 (Foundation and UI Setup) Completed:**
- Successfully initialized the SvelteKit project manually within the existing directory structure.
- Integrated TailwindCSS using `npx svelte-add@latest tailwindcss` and installed necessary dependencies (`tailwindcss`, `postcss`, `autoprefixer`).
- Applied the custom Tailwind theme from `projectPlan/tailwind.config.js` and verified its application on a test page.
- Set up and verified the Inter font using Google Fonts.
- Installed Melt UI (`@melt-ui/svelte`) and its preprocessor (`@melt-ui/pp`).
- Configured the Melt UI preprocessor (`preprocessMeltUI`) in `svelte.config.js`, resolving initial setup issues and verifying its functionality with a test collapsible component.
- Updated `projectPlan/stage0.md` to accurately reflect all setup steps, including the Melt UI preprocessor configuration.

The static rule data files (`src/lib/rulesdata/*.ts`) have been populated with detailed information for attributes, ancestries, classes, skills, traits, languages, and trades based on the DC20 Beta 0.9.5 rulebook. This completes a major step in preparing the necessary data for the Character Creation Wizard.

The memory bank documentation has also been updated based on the detailed planning documents found in the `projectPlan/` directory (`mvp.md`, `stage1.md`, `stage2.md`). This includes:
- Defining the specific scope and features for the MVP (Stages A, B, C).
- Detailing the required UI components, internal state, functions, and logic for Stage A (Attributes) and Stage B (Ancestry).
- Outlining the backend API endpoints/Form Actions needed for stages A and B, including validation requirements.
- Incorporating details about the chosen technologies (SvelteKit, Melt UI, TailwindCSS, Prisma, PostgreSQL) and their usage patterns.
- Documenting the data models (`CharacterInProgress`, `CharacterSheetData`) and initial static rule data structure.
- Clarifying specific planning decisions like state management approach, calculation responsibilities (frontend provisional, backend authoritative), error handling, and basic resume functionality.

## Next Steps

1.  Implement the Svelte component and logic for Stage A (Attributes) based on `projectPlan/stage1.md`.
2.  Implement the backend endpoint/Form Action for Stage A data persistence and validation.
3.  Implement the frontend Svelte component and logic for Stage B (Ancestry) based on `projectPlan/stage2.md`, including the attribute overflow helper panel.
4.  Implement the backend endpoint/Form Action for Stage B data persistence and validation.
5.  Implement the Svelte component and logic for Stage C (Class) based on `projectPlan/stage3.md` (once detailed).
6.  Implement the backend endpoint/Form Action for Stage C data persistence and validation.
7.  Implement the final character calculation and `CharacterSheetData` creation logic on the backend.
8.  Implement the Character Page component to display the finalized character sheet.
9.  Implement the basic resume functionality using browser `localStorage`.

## Active Decisions and Considerations

- Using Melt UI primitives for accessible UI components, styled with TailwindCSS. This requires configuring the `@melt-ui/pp` preprocessor in `svelte.config.js`.
- Implementing a dark mode first theme.
- Storing static rule data in TypeScript files (`src/lib/rulesdata/`) for the MVP.
- Utilizing a single writable Svelte store (`characterInProgressStore`) for frontend state management, with derived stores for calculated values.
- Backend is the source of truth for all final calculations and validation.
- Handling the specific logic for attribute point allocation (Point Buy) and Ancestry Point allocation (including negative traits and attribute cap overflows).

## Important Patterns and Preferences

- Component-based development for the frontend.
- Clear separation of concerns between frontend UI/provisional logic and backend validation/authoritative calculation.
- Adherence to the defined dark mode color palette and Inter font.
- Using SvelteKit Form Actions for wizard stage data submission.

## Learnings and Project Insights

The completion of Stage 0 highlighted the importance of verifying each foundational UI layer. Troubleshooting the Melt UI setup revealed the necessity of its preprocessor (`@melt-ui/pp`) and the correct import/configuration syntax in `svelte.config.js`, a crucial detail not present in the initial plan. This underscores the value of iterative testing even for setup tasks.

The detailed planning documents have provided a solid foundation and clear steps for the MVP implementation. The complexity of handling attribute cap overflows during trait selection in Stage B highlights the need for careful state management and validation logic on both the frontend and backend. The structure of the static rule data in TypeScript is defined, which will guide the implementation of data loading and lookups.
````

## File: projectPlan/techDesignDebt.md
````markdown
# Technical Design Debt Log

This document tracks technical decisions made for expediency, due to current limitations, or for future refinement, along with plans for improvements.

## Entry Structure

Each entry should ideally cover:

*   **Issue ID:** A unique identifier (e.g., TD-001).
*   **Date Identified:** When the issue was logged.
*   **Area/Component:** The part of the system affected.
*   **Issue Description:** A clear explanation of the technical debt or area for future improvement.
*   **Current Approach/Decision:** The temporary solution or decision made.
*   **Rationale for Current Approach:** Why this approach was chosen (e.g., MVP scope, time constraints, complexity).
*   **Identified Limitations/Impact:** Downsides, potential problems, or impact of the current approach.
*   **Proposed Future Solution/Refinement:** How the issue should ideally be addressed or improved.
*   **Priority:** (Optional) Suggested priority (e.g., Low, Medium, High).
*   **Status:** (Optional) e.g., Open, In Progress, Resolved.

---

## Logged Items

### TD-001: Prime Modifier Tie-Breaking Logic and Persistence
*   **Date Identified:** 2025-06-19
*   **Area/Component:** Stage A Attributes UI (`StageA_Attributes.svelte`), Character Store (`characterInProgressStore.ts`), Backend API for Stage A.
*   **Issue Description:** The `primeModifier` derived store in `characterInProgressStore.ts` currently defaults to selecting the first attribute in its internal list in the event of a tie for the highest attribute score. The UI for Stage A needs to allow the user to explicitly choose their Prime Modifier in such a tie. This explicit user choice is not currently planned to be persisted centrally in the store or database, nor systematically used by the derived store for calculations beyond the immediate display context of Stage A.
*   **Current Approach/Decision:**
    *   The `StageA_Attributes.svelte` component will manage a local Svelte variable (e.g., `primeModifierAttributeUserChoice`) to capture the user's selection from a `RadioGroup` when a tie occurs.
    *   This local choice will be used for display purposes within the Stage A component to show the user-selected Prime Modifier attribute and its value.
    *   The backend API for Stage A will save the core attribute scores. It will not explicitly store which attribute was chosen as prime in the event of a tie. The `primeModifierValue` is derived from the highest score, which is implicitly saved.
    *   The existing `primeModifier` derived store in `characterInProgressStore.ts` will continue its default behavior (picking the first highest attribute found) for any potential downstream calculations outside the Stage A UI context where the user's explicit choice is directly handled by the component.
*   **Rationale for Current Approach:**
    *   Simplifies the initial implementation for the Stage A MVP, focusing on core attribute allocation.
    *   Avoids immediate modifications to the `characterInProgressStore` structure and its existing derived logic, which already handles several calculations.
    *   The primary impact of the Prime Modifier (the value itself and its use in Save Masteries) can be correctly handled at the UI level for Stage A using the local user choice.
*   **Identified Limitations/Impact:**
    *   The user's explicit choice of Prime Modifier during a tie is not centrally persisted in the Svelte store or the database.
    *   If future application features or calculations (e.g., in later character creation stages, or for class abilities that depend on *which* attribute is prime) rely solely on the current `primeModifier` derived store, they might use an arbitrary selection in tie-break scenarios, not reflecting the user's actual choice. This could lead to data inconsistency or incorrect character behavior in specific edge cases.
*   **Proposed Future Solution/Refinement:**
    1.  **Store Enhancement:** Add a new field to the `CharacterInProgressStoreData` interface and `initialCharacterInProgressState` in `characterInProgressStore.ts` (e.g., `userSelectedPrimeAttribute: string | null`).
    2.  **UI Integration:** When the user makes a choice in the tie-breaker UI in `StageA_Attributes.svelte`, update this new `userSelectedPrimeAttribute` field in the store.
    3.  **Derived Logic Update:** Modify the `primeModifier` derived store in `characterInProgressStore.ts` to prioritize `userSelectedPrimeAttribute` if it's set and a tie exists among the highest attributes.
    4.  **Persistence:** Update the backend API for Stage A (and potentially the Prisma schema for `CharacterInProgress`) to save this `userSelectedPrimeAttribute` choice.
    5.  **Consistency:** Ensure all downstream calculations and displays correctly use the persisted user choice for the Prime Modifier attribute.
*   **Priority:** Medium (Potential for specific character build inaccuracies if not addressed before features relying on precise prime attribute choice are implemented).
*   **Status:** Open

---

### TD-002: Character ID Management for CharacterInProgress
*   **Date Identified:** 2025-06-19
*   **Area/Component:** Character Creation Wizard (overall flow), Stage A Backend API, `characterInProgressStore.ts`.
*   **Issue Description:** The precise mechanism for creating a new `CharacterInProgress` record and retrieving/managing its `id` for new characters versus resuming existing characters is not fully defined. The `characterInProgressStore` initializes its `id` field to `null`. Backend APIs for saving stage progress (like Stage A's) will need a robust way to handle `create` operations for new characters versus `update` operations for existing ones.
*   **Current Approach/Decision (to be solidified during Stage A implementation):**
    *   The `handleSubmitStageA` function in `StageA_Attributes.svelte` will need to pass the current `characterId` from the store if it exists.
    *   If no `characterId` exists (i.e., it's a new character), the backend API for Stage A might attempt an `upsert` operation (create if ID is null/not found, update otherwise), or the frontend will be responsible for an initial "create" call to a dedicated endpoint (or the Stage A endpoint itself handles creation if no ID is passed). The backend, upon creation, would return the new ID for the frontend store to update.
    *   Basic resume functionality (mentioned in `productContext.md`) will likely involve storing the last used `characterId` in `localStorage` and loading it into the store on app initialization.
*   **Rationale for Current Approach:** Defers the implementation of a fully dedicated "start new character" flow to allow focus on Stage A's core logic. An `upsert` or conditional create/update in the Stage A backend can handle the initial record creation.
*   **Identified Limitations/Impact:**
    *   Could lead to slightly more complex logic within each stage's save handler on the backend if each has to manage create vs. update.
    *   Requires careful coordination between frontend (passing ID or lack thereof) and backend (interpreting and acting on the ID).
    *   Less clean than a dedicated "create" endpoint that solely handles new character initialization.
*   **Proposed Future Solution/Refinement:**
    1.  Implement a dedicated API endpoint (e.g., `/api/character/new`) that specifically handles the creation of a new `CharacterInProgress` record.
    2.  This endpoint would generate a UUID, create the record with default initial values, and return the new `id`.
    3.  The frontend, upon starting a new character creation process, would call this endpoint first.
    4.  The returned `id` would be stored in `characterInProgressStore.id` and potentially in `localStorage` to facilitate resume functionality.
    5.  Subsequent stage-saving APIs (like Stage A's) would then always expect a valid `characterId` and perform `update` operations.
*   **Priority:** Medium (Essential for robust save/resume functionality).
*   **Status:** Open

---

### TD-003: Attribute Structure in Svelte Store vs. Component Plan
*   **Date Identified:** 2025-06-19
*   **Area/Component:** `characterInProgressStore.ts`, `StageA_Attributes.svelte`.
*   **Issue Description:** The `characterInProgressStore.ts` uses a flat structure for attribute storage (e.g., `attribute_might: -2`). The initial plan for `StageA_Attributes.svelte` (in `projectPlan/stage1.md`) described using a nested object for attributes within the component's state (e.g., `attributes: { Might: -2, Agility: -2, ... }`).
*   **Current Approach/Decision:** The `StageA_Attributes.svelte` component will adapt to the store's flat structure for reading and writing attributes. This means directly accessing `$characterInProgressStore.attribute_might`, etc.
*   **Rationale for Current Approach:** Simplifies interaction with the existing store structure and avoids unnecessary mapping layers within the component for this specific aspect. The store's flat structure aligns directly with the Prisma model.
*   **Identified Limitations/Impact:** Minor. If a nested `attributes` object was strongly preferred for internal component logic or for passing to sub-components, this direct adaptation means that preference isn't met. However, it's functionally equivalent.
*   **Proposed Future Solution/Refinement:** This is a very minor issue. If a compelling reason arises for a nested `attributes` object within the store itself or for broader component usage, the store could be refactored. For now, the current approach is acceptable.
*   **Priority:** Very Low.
*   **Status:** Open (For awareness).

---

### TD-004: Save Masteries Calculation Documentation Alignment
*   **Date Identified:** 2025-06-19
*   **Area/Component:** `characterInProgressStore.ts` (derived store `saveMasteries`), `projectPlan/stage1.md` (description of `calculateSaveMasteries` function).
*   **Issue Description:** The `saveMasteries` derived store in `characterInProgressStore.ts` implements a calculation: `L1_COMBAT_MASTERY + (primeModAttribute === 'Might' ? primeModValue : getModifier($store.attribute_might))`. This is more nuanced and likely more rule-accurate (especially if an attribute *is* the prime modifier) than the simpler formula `attributeScore + combatMastery` described for the `calculateSaveMasteries` helper function in `projectPlan/stage1.md`.
*   **Current Approach/Decision:** The `StageA_Attributes.svelte` component will directly use the `saveMasteries` derived store from `characterInProgressStore.ts` for displaying save mastery values. The component will not implement its own `calculateSaveMasteries` function as originally planned in `stage1.md` if the store provides the necessary derived values.
*   **Rationale for Current Approach:** Utilizes existing, more accurate logic in the central store, promoting consistency and reducing redundant calculations in the component.
*   **Identified Limitations/Impact:** None, as the component will use the more accurate derived store. The "debt" is purely a documentation/plan alignment.
*   **Proposed Future Solution/Refinement:** Ensure that `projectPlan/stage1.md` (and any other relevant planning documents) are updated to reflect that `saveMasteries` will be consumed from the derived store, and its calculation method is the one implemented in the store. This is primarily a documentation cleanup task.
*   **Priority:** Very Low (Documentation/Alignment).
*   **Status:** Open (For awareness/documentation update).

---

### TD-005: Melt UI SSR Compatibility Issue with Wrapped Components
*   **Date Identified:** 2025-06-19
*   **Area/Component:** Melt UI Wrapper Components (`src/lib/components/ui/`), SvelteKit SSR.
*   **Issue Description:** Attempting to wrap Melt UI primitives (specifically `RadioGroupPrimitive`) in custom Svelte components and import them via `$lib/components/ui/` paths results in a `TypeError: Cannot read properties of undefined (reading 'Root')` during SvelteKit's server-side rendering (SSR). This indicates that the Melt UI primitive object is `undefined` in the SSR environment when accessed at the module level within the wrapper component's script or index file.
*   **Current Approach/Decision:** Defer full Melt UI integration for components exhibiting this SSR issue (like RadioGroup). Implement the UI for Stage A using standard HTML elements (`<button>`, `<input>`, `<label>`, `<input type="radio">`) and Svelte reactivity, applying styling directly via TailwindCSS classes.
*   **Rationale for Current Approach:** Allows progress on the core character creation functionality (Stage A UI and backend) without being blocked by the Melt UI SSR compatibility issue. Provides a functional UI using standard web technologies.
*   **Identified Limitations/Impact:**
    *   Does not leverage Melt UI's accessibility features and primitive logic for the affected components in the initial implementation.
    *   Requires manual implementation of behaviors that Melt UI primitives would normally provide (e.g., keyboard navigation, ARIA attributes for radio groups).
    *   The UI components in `src/lib/components/ui/` that were intended as wrappers for Melt UI primitives are currently incomplete or non-functional due to this issue.
    *   This issue was initially logged as TD-006 and TD-007 by the user.
*   **Proposed Future Solution/Refinement:**
    1.  Investigate the root cause of the Melt UI SSR issue in the SvelteKit environment. This may involve consulting Melt UI documentation, community forums, or experimenting with different import/initialization patterns for SSR.
    2.  Once a solution or workaround is found, refactor the affected UI wrapper components (`src/lib/components/ui/`) to correctly integrate the Melt UI primitives in an SSR-compatible manner.
    3.  Update the Stage A Svelte component (and any future components) to use the refactored Melt UI wrapper components.
    4.  Ensure accessibility features provided by Melt UI are correctly implemented in the wrappers.
*   **Priority:** Medium (Impacts accessibility and consistency of UI component library usage).
*   **Status:** Open

---

### TD-006: Persistent Environmental/TypeScript Errors
*   **Date Identified:** 2025-06-20
*   **Area/Component:** SvelteKit Development Environment, `src/routes/character-creator/stage-b/+page.svelte`, `src/lib/stores/characterInProgressStore.ts`.
*   **Issue Description:** Encountered persistent TypeScript errors (initially logged by the user as TD-006 and TD-007) that seemed related to tooling or environment setup, including issues with Svelte file indexing, `./$types` imports, and implicit `any` types. Additional TypeScript errors related to template syntax and store initialization were also encountered during troubleshooting. These errors prevented successful file modifications using `replace_in_file`.
*   **Current Approach/Decision:** Performed a comprehensive environment reset (deleted `.svelte-kit`, `node_modules`, `package-lock.json`, reinstalled dependencies, and restarted the dev server). Addressed specific syntax errors in the Svelte template and type errors in the component script and store related to indexing and store initialization by modifying the code directly.
*   **Rationale for Current Approach:** Necessary steps to resolve environmental and code-level issues blocking development progress. The environment reset is a standard troubleshooting step for tooling-related problems in SvelteKit. Code modifications were required to fix specific syntax and type mismatches identified by the TypeScript compiler.
*   **Identified Limitations/Impact:** The root cause of the initial environmental/tooling errors (TD-006, TD-007) is not definitively known, although the environment reset and type regeneration likely cleared any corrupted build artifacts or caches. The specific template syntax and type issues were addressed, but similar issues could arise if complex TypeScript/template interactions are not carefully managed.
*   **Proposed Future Solution/Refinement:** Monitor the development environment for the recurrence of similar persistent errors. If they reappear, further investigation into the SvelteKit build process, TypeScript configuration, and potential interactions with other dependencies may be required. Ensure careful attention to TypeScript compatibility when writing Svelte template logic.
*   **Priority:** High (Initially blocked development).
*   **Status:** Resolved.
````

## File: src/lib/rulesdata/traits.ts
````typescript
import type { ITrait } from './types';

export const traitsData: ITrait[] = [
  // Human Traits (p. 108)
  {
    id: 'human_attribute_increase',
    name: 'Attribute Increase',
    description: 'Choose an Attribute. The chosen Attribute increases by 1 (up to the Attribute Limit).',
    cost: 2,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: 1, userChoiceRequired: { prompt: "Choose an Attribute to increase by 1" } }]
  },
  {
    id: 'human_skill_expertise',
    name: 'Skill Expertise',
    description: 'Choose a Skill. Your Mastery Cap and Mastery Level in the chosen Skill both increase by 1. You can only benefit from 1 Feature that increases your Skill Mastery Limit at a time.',
    cost: 2,
    effects: [{ type: 'GRANT_SKILL_EXPERTISE', value: { skillId: 'any_skill_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a skill for Expertise" } }]
  },
  {
    id: 'human_resolve',
    name: 'Human Resolve',
    description: 'Your Death’s Door Threshold value is expanded by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_DEATH_THRESHOLD_MODIFIER', value: 1 }]
  },
  {
    id: 'human_undying',
    name: 'Undying',
    description: 'You have ADV on Saves against the Doomed Condition.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Doomed' }]
  },
  {
    id: 'human_trade_expertise',
    name: 'Trade Expertise',
    description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'human_determination',
    name: 'Human Determination',
    description: 'Once per Combat, you can give yourself ADV on an Attack Check or Spell Check while Bloodied.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_CHECK_WHILE_BLOODIED', target: 'Attack_or_Spell_Check', condition: 'bloodied' }]
  },
  {
    id: 'human_unbreakable',
    name: 'Unbreakable',
    description: 'You have ADV on Death Saves.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE', target: 'Death_Save' }]
  },
  {
    id: 'human_attribute_decrease',
    name: 'Attribute Decrease',
    description: 'Choose an Attribute. You decrease the chosen Attribute by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: -1, userChoiceRequired: { prompt: "Choose an Attribute to decrease by 1" } }]
  },

  // Elf Traits (p. 108)
  {
    id: 'elf_elven_will',
    name: 'Elven Will',
    description: 'You have ADV on Checks and Saves against being Charmed and put to Sleep.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Charmed' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Sleep_Magic' }]
  },
  {
    id: 'elf_nimble',
    name: 'Nimble',
    description: 'When you take the Dodge Action, you instead gain the benefits of the Full Dodge Action.',
    cost: 2,
    effects: [{ type: 'MODIFY_ACTION_BENEFIT', target: 'Dodge_Action', value: 'Full_Dodge_Benefit' }]
  },
  {
    id: 'elf_agile_explorer',
    name: 'Agile Explorer',
    description: 'You’re not affected by Difficult Terrain.',
    cost: 2,
    effects: [{ type: 'IGNORE_DIFFICULT_TERRAIN' }]
  },
  {
    id: 'elf_discerning_sight',
    name: 'Discerning Sight',
    description: 'You have ADV on Checks and Saves made to discern through visual illusions.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_SAVES_VS_ILLUSION_VISUAL' }]
  },
  {
    id: 'elf_quick_reactions',
    name: 'Quick Reactions',
    description: 'While you aren’t wearing Armor, you gain +1 PD.',
    cost: 1,
    effects: [{ type: 'MODIFY_PD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'elf_peerless_sight',
    name: 'Peerless Sight',
    description: 'You don’t have DisADV as a result of making an Attack with a Weapon at Long Range',
    cost: 1,
    effects: [{ type: 'IGNORE_DISADV_ON_RANGED_ATTACK_AT_LONG_RANGE' }]
  },
  {
    id: 'elf_climb_speed',
    name: 'Climb Speed',
    description: 'You gain a Climb Speed equal to your Movement Speed.',
    cost: 1,
    effects: [{ type: 'GRANT_CLIMB_SPEED_EQUAL_TO_SPEED' }]
  },
  {
    id: 'elf_speed_increase',
    name: 'Speed Increase',
    description: 'Your Speed increases by 1 Space.',
    cost: 2,
    effects: [{ type: 'MODIFY_SPEED', value: 5 }] // 1 Space = 5 feet
  },
  {
    id: 'elf_trade_expertise_elf',
    name: 'Trade Expertise (Elf)',
    description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'elf_plant_knowledge',
    name: 'Plant Knowledge',
    description: 'While within forests, jungles, and swamps, you have ADV on Survival Checks. Additionally, you have ADV on Nature Checks made to recall information about plants.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS', target: 'forests_jungles_swamps' }, { type: 'GRANT_ADV_ON_NATURE_CHECKS_ABOUT_PLANTS' }]
  },
  {
    id: 'elf_brittle',
    name: 'Brittle',
    description: 'Your AD decreases by 1.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_AD', value: -1 }]
  },
  {
    id: 'elf_frail',
    name: 'Frail',
    description: 'Your HP maximum decreases by 2.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: -2 }]
  },
  {
    id: 'elf_might_decrease',
    name: 'Might Decrease',
    description: 'Your Might decreases by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'might', value: -1 }]
  },

  // Dwarf Traits (p. 109)
  {
    id: 'dwarf_tough',
    name: 'Tough',
    description: 'Your HP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: 1 }]
  },
  {
    id: 'dwarf_toxic_fortitude',
    name: 'Toxic Fortitude',
    description: 'You have Poison Resistance (Half) and ADV on Saves against being Poisoned.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Poison' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Poisoned' }]
  },
  {
    id: 'dwarf_physically_sturdy',
    name: 'Physically Sturdy',
    description: 'You have ADV on Saves against being Impaired, Deafened, or Petrified.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Impaired' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Deafened' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Petrified' }]
  },
  {
    id: 'dwarf_iron_stomach',
    name: 'Iron Stomach',
    description: 'You have ADV on Saves against effects that come from consuming food or liquids.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_EFFECT_FROM_CONSUMING' }]
  },
  {
    id: 'dwarf_thick_skinned',
    name: 'Thick-Skinned',
    description: 'While you aren’t wearing Armor, you gain +1 AD.',
    cost: 1,
    effects: [{ type: 'MODIFY_AD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'dwarf_natural_combatant',
    name: 'Natural Combatant',
    description: 'You gain Combat Training with Heavy Armor and All Shields.',
    cost: 1,
    effects: [{ type: 'GRANT_COMBAT_TRAINING', target: 'Heavy_Armor' }, { type: 'GRANT_COMBAT_TRAINING', target: 'All_Shields' }]
  },
  {
    id: 'dwarf_stone_blood',
    name: 'Stone Blood',
    description: 'You have ADV on Saves against Bleeding. Additionally, you can spend 1 AP to end the Bleeding Condition on yourself.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Bleeding' }, { type: 'GRANT_ABILITY', value: 'End_Bleeding_Self_1AP' }]
  },
  {
    id: 'dwarf_minor_tremorsense',
    name: 'Minor Tremorsense',
    description: 'You have Tremorsense 3 Spaces.',
    cost: 1,
    effects: [{ type: 'GRANT_TREMORSENSE', value: 3 }]
  },
  {
    id: 'dwarf_stubborn',
    name: 'Stubborn',
    description: 'You have ADV on Saves against being Taunted and against being forcibly moved.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Taunted' }, { type: 'GRANT_ADV_ON_SAVE_VS_FORCED_MOVEMENT' }]
  },
  {
    id: 'dwarf_trade_expertise',
    name: 'Trade Expertise',
    description: 'Choose a Crafting or Services Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_crafting_or_services_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Crafting or Services Trade for Expertise" } }]
  },
  {
    id: 'dwarf_earthen_knowledge',
    name: 'Earthen Knowledge',
    description: 'While within mountainous and subterranean environments, you have ADV on Survival Checks. Additionally, you have ADV on Nature Checks made to recall information about rocks, soil, crystals, and gems.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS', target: 'mountainous_and_subterranean' }, { type: 'GRANT_ADV_ON_NATURE_CHECKS_ABOUT_ROCKS_SOIL_CRYSTALS_GEMS' }]
  },
  {
    id: 'dwarf_charisma_attribute_decrease',
    name: 'Charisma Attribute Decrease',
    description: 'You decrease your Charisma by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'charisma', value: -1 }]
  },
  {
    id: 'dwarf_short_legged',
    name: 'Short-Legged',
    description: 'Your Speed decreases by 1 Space.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SPEED', value: -5 }]
  },

  // Halfling Traits (p. 109)
  {
    id: 'halfling_small_sized',
    name: 'Small-Sized',
    description: 'Your Size is considered Small.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SIZE', target: 'Small' }]
  },
  {
    id: 'halfling_elusive',
    name: 'Elusive',
    description: 'When you take the Disengage Action, you instead gain the benefits of the Full Disengage Action.',
    cost: 2,
    effects: [{ type: 'MODIFY_ACTION_BENEFIT', target: 'Disengage_Action', value: 'Full_Disengage_Action' }]
  },
  {
    id: 'halfling_bravery',
    name: 'Halfling Bravery',
    description: 'You have ADV on Saves against being Intimidated, Rattled, or Frightened',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Intimidated' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Rattled' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Frightened' }]
  },
  {
    id: 'halfling_endurance',
    name: 'Halfling Endurance',
    description: 'You have Exhaustion Resistance.',
    cost: 1,
    effects: [{ type: 'GRANT_CONDITION_RESISTANCE', target: 'Exhaustion' }]
  },
  {
    id: 'halfling_deft_footwork',
    name: 'Deft Footwork',
    description: 'You can move through the space of a hostile creature 1 size larger than you as if it were Difficult Terrain.',
    cost: 1,
    effects: [{ type: 'IGNORE_DIFFICULT_TERRAIN_WHEN_MOVING_THROUGH_SPACE_OF_LARGER_HOSTILE' }]
  },
  {
    id: 'halfling_beast_whisperer',
    name: 'Beast Whisperer',
    description: 'You can speak to Beasts in a limited manner. They can understand the meanings of simple words, concepts, or states of emotion. You don’t have a special ability to understand them in return.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_LIMITED_COMMUNICATION_WITH_BEASTS' }]
  },
  {
    id: 'halfling_beast_insight',
    name: 'Beast Insight',
    description: 'You can understand Beasts in a limited manner. You can understand the meaning of their noises and behaviors, though they have no special ability to understand you in return.',
    cost: 1,
    effects: [{ type: 'GRANT_LIMITED_UNDERSTANDING_OF_BEASTS' }]
  },
  {
    id: 'halfling_burst_of_bravery',
    name: 'Burst of Bravery',
    description: 'Once per Combat, you can end the Intimidated, Rattled, or Frightened Condition on yourself for free at any time.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'End_Intimidated_Rattled_Frightened_Self_OncePerCombat' }]
  },
  {
    id: 'halfling_trade_expertise',
    name: 'Trade Expertise',
    description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'halfling_critter_knowledge',
    name: 'Critter Knowledge',
    description: 'You have ADV on Nature, Survival, and Animal Checks involving Small size creatures and smaller.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_INVOLVING_SMALL_CREATURES', target: 'Nature_Survival_Animal_Checks' }]
  },
  {
    id: 'halfling_brittle',
    name: 'Brittle',
    description: 'Your AD decreases by 1.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_AD', value: -1 }]
  },
  {
    id: 'halfling_intelligence_attribute_decrease',
    name: 'Intelligence Attribute Decrease',
    description: 'You decrease your Intelligence by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'intelligence', value: -1 }]
  },
  {
    id: 'halfling_short_legged',
    name: 'Short-Legged',
    description: 'Your Speed decreases by 1 Space.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SPEED', value: -5 }]
  },

  // Gnome Traits (p. 110)
  {
    id: 'gnome_small_sized',
    name: 'Small-Sized',
    description: 'Your Size is considered Small.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SIZE', target: 'Small' }]
  },
  {
    id: 'gnome_escape_artist',
    name: 'Escape Artist',
    description: 'You have ADV on Checks and Saves to avoid or escape being Grappled or Restrained.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_SAVES_TO_AVOID_ESCAPE', target: 'Grappled_or_Restrained' }]
  },
  {
    id: 'gnome_magnified_vision',
    name: 'Magnified Vision',
    description: 'You have ADV on Investigation Checks made on something you’re holding or touching.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_INVESTIGATION_CHECKS_ON_HELD_TOUCHED' }]
  },
  {
    id: 'gnome_mental_clarity',
    name: 'Mental Clarity',
    description: 'You have ADV on Saves against being Dazed or Stunned.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Dazed' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Stunned' }]
  },
  {
    id: 'gnome_strong_minded',
    name: 'Strong-Minded',
    description: 'You gain Psychic Resistance (1).',
    cost: 1,
    effects: [{ type: 'GRANT_RESISTANCE_STATIC', target: 'Psychic', value: 1 }]
  },
  {
    id: 'gnome_predict_weather',
    name: 'Predict Weather',
    description: 'You can naturally tell what the weather is going to be in the next hour in the area within 1 mile of you. You don’t have DisADV on Checks or Saves as a result of naturally occurring weather.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ABILITY', value: 'Predict_Weather_1Mile_1Hour' }, { type: 'IGNORE_DISADV_FROM_NATURAL_WEATHER' }]
  },
  {
    id: 'gnome_mana_increase',
    name: 'Mana Increase',
    description: 'Your MP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_MP_MAX', value: 1 }]
  },
  {
    id: 'gnome_trapper',
    name: 'Trapper',
    description: 'You have ADV on Investigation Checks to spot Traps and on Trickery Checks to Hide Traps.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_INVESTIGATION_CHECKS_TO_SPOT_TRAPS' }, { type: 'GRANT_ADV_ON_TRICKERY_CHECKS_TO_HIDE_TRAPS' }]
  },
  {
    id: 'gnome_lightning_insulation',
    name: 'Lightning Insulation',
    description: 'You have Lightning Resistance (Half) and can’t be struck by natural lightning.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Lightning' }, { type: 'IMMUNE_TO_NATURAL_LIGHTNING' }]
  },
  {
    id: 'gnome_trade_expertise',
    name: 'Trade Expertise',
    description: 'Choose a Crafting or Subterfuge Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_crafting_or_subterfuge_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Crafting or Subterfuge Trade for Expertise" } }]
  },
  {
    id: 'gnome_storm_knowledge',
    name: 'Storm Knowledge',
    description: 'While within rainy, snowy, or stormy environments, you have ADV on Survival Checks. Additionally, you have ADV on Knowledge Checks made to recall information about rain, snow, and storms.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS', target: 'rainy_snowy_stormy' }, { type: 'GRANT_ADV_ON_KNOWLEDGE_CHECKS_ABOUT_RAIN_SNOW_STORMS' }]
  },
  {
    id: 'gnome_agility_attribute_decrease',
    name: 'Agility Decrease',
    description: 'You decrease your Agility by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'agility', value: -1 }]
  },
  {
    id: 'gnome_short_legged',
    name: 'Short-Legged',
    description: 'Your Speed decreases by 1 Space.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SPEED', value: -5 }]
  },

  // Orc Traits (p. 110)
  {
    id: 'orc_cursed_mind',
    name: 'Cursed Mind',
    description: 'You gain Psychic Vulnerability (1).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_VULNERABILITY_STATIC', target: 'Psychic', value: 1 }]
  },
  {
    id: 'orc_rush',
    name: 'Orc Rush',
    description: 'Once per Combat when you willingly move toward an enemy, you can spend 1 AP to gain Temp HP equal to your Prime Modifier.',
    cost: 2,
    effects: [{ type: 'GRANT_TEMP_HP_ONCE_PER_COMBAT_WHEN_MOVE_TOWARD_ENEMY', value: 'Prime_Modifier' }]
  },
  {
    id: 'orc_brutal_strikes',
    name: 'Brutal Strikes',
    description: 'You deal +1 damage when you score a Brutal or Critical Hit with a Melee Weapon or Unarmed Strike.',
    cost: 2,
    effects: [{ type: 'MODIFY_DAMAGE_ON_HIT', target: 'Melee_Martial_Attack', value: 1, condition: 'Brutal_or_Critical_Hit' }]
  },
  {
    id: 'orc_tough',
    name: 'Tough',
    description: 'Your HP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: 1 }]
  },
  {
    id: 'orc_orcish_resolve',
    name: 'Orcish Resolve',
    description: 'You gain 1 additional AP while on Death’s Door.',
    cost: 1,
    effects: [{ type: 'MODIFY_AP_WHILE_DEATHS_DOOR', value: 1 }]
  },
  {
    id: 'orc_already_cursed',
    name: 'Already Cursed',
    description: 'You have ADV on Saves against Curses.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Curses' }]
  },
  {
    id: 'orc_intimidating_shout',
    name: 'Intimidating Shout',
    description: 'Once per Combat, you can spend 1 AP to let out an Intimidating Shout. All creatures within 5 Spaces that can hear you must make a Charisma Save contested by your Attack Check. Failure: A target is Hindered on the next Attack Check or Spell Attack it makes before the start of your next turn.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Intimidating_Shout_OncePerCombat_1AP' }]
  },
  {
    id: 'orc_dash',
    name: 'Orc Dash',
    description: 'Once per Combat you can use your Minor Action to move, as long as that movement is towards an enemy.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Move_As_Minor_Action_OncePerCombat_Toward_Enemy' }]
  },
  {
    id: 'orc_finishing_blow',
    name: 'Finishing Blow',
    description: 'You deal +1 damage to creatures who are Well-Bloodied.',
    cost: 1,
    effects: [{ type: 'MODIFY_DAMAGE_ON_HIT', target: 'Martial_Attacks', value: 1, condition: 'Well_Bloodied' }]
  },
  {
    id: 'orc_imposing_presence',
    name: 'Imposing Presence',
    description: 'Once per Combat when a creature makes an Attack against you, you can force them to make a Charisma Save. Save Failure: They must choose a new target for the Attack. If there are no other targets, then the Attack is wasted.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Force_New_Target_OncePerCombat_Reaction' }]
  },
  {
    id: 'orc_provocation',
    name: 'Provocation',
    description: 'You have DisADV on Checks and Saves against being Taunted.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_DISADV_ON_CHECKS_SAVES_VS_CONDITION', target: 'Taunted' }]
  },
  {
    id: 'orc_reckless',
    name: 'Reckless',
    description: 'Your PD decreases by 1.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_PD', value: -1 }]
  },

  // Dragonborn Traits (p. 111)
  {
    id: 'dragonborn_darkvision',
    name: 'Darkvision',
    description: 'You have Darkvision 10 Spaces.',
    cost: 1,
    effects: [{ type: 'GRANT_DARKVISION', value: 10 }]
  },
  {
    id: 'dragonborn_draconic_resistance',
    name: 'Draconic Resistance',
    description: 'You gain Resistance (Half) to your Draconic damage type.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Draconic_damage_type' }]
  },
  {
    id: 'dragonborn_draconic_breath_weapon',
    name: 'Draconic Breath Weapon',
    description: 'You gain a Breath Weapon that you can use by spending 2 AP to exhale destructive power in an Area or Focused against a specific target. You can use this ability once per Long Rest, and regain the ability to use it again when you roll for Initiative.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_OncePerLongRest_RegainOnInitiative' }]
  },
  {
    id: 'dragonborn_reptilian_superiority',
    name: 'Reptilian Superiority',
    description: 'You have ADV on Intimidation Checks against reptilian creatures of Medium Size and smaller (not including other Dragonborn).',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_INTIMIDATION_CHECKS_VS_REPTILIAN_MEDIUM_SMALL' }]
  },
  {
    id: 'dragonborn_mana_increase',
    name: 'Mana Increase',
    description: 'Your MP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_MP_MAX', value: 1 }]
  },
  {
    id: 'dragonborn_thick_skinned',
    name: 'Thick-Skinned',
    description: 'While you aren’t wearing Armor, you gain +1 AD.',
    cost: 1,
    effects: [{ type: 'MODIFY_AD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'dragonborn_second_breath',
    name: 'Second Breath',
    description: 'You can now use your Draconic Breath Weapon twice per Combat. Additionally, whenever you use your Draconic Breath Weapon, you can spend 2 uses to increase the damage by 2 if its an Area, or by 4 if its Focused.',
    cost: 1,
    prerequisites: ['dragonborn_draconic_breath_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_TwicePerCombat' }, { type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_Enhanced_Damage_Spend_Uses' }]
  },
  {
    id: 'dragonborn_concussive_breath',
    name: 'Concussive Breath',
    description: 'When you use your Draconic Breath Weapon, you can force all targets to make a Physical Save. Save Failure: The target is pushed 1 Space away +1 additional Space for every 5 it fails its Save by.',
    cost: 1,
    prerequisites: ['dragonborn_draconic_breath_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_Concussive_Push' }]
  },
  {
    id: 'dragonborn_draconic_affinity',
    name: 'Draconic Affinity',
    description: 'When you take damage of the same type as your Draconic damage, your next Draconic Breath Weapon deals +1 bonus damage.',
    cost: 1,
    effects: [{ type: 'MODIFY_DAMAGE_ON_NEXT_DRACONIC_BREATH_WEAPON', value: 1, condition: 'take_same_type_damage' }]
  },
  {
    id: 'dragonborn_dying_breath',
    name: 'Dying Breath',
    description: 'Once per Combat when you enter Death’s Door, you regain a use of your Draconic Breath Weapon and can immediately use it as a Reaction for free (0 AP).',
    cost: 1,
    prerequisites: ['dragonborn_draconic_breath_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_Reaction_On_Deaths_Door' }]
  },
  {
    id: 'dragonborn_draconic_ward',
    name: 'Draconic Ward',
    description: 'Once per Combat when you enter Death’s Door, you gain 2 Temp HP. Whenever you’re Hit by a Melee Attack while you have this Temp HP, your Attacker takes 1 Draconic damage.',
    cost: 1,
    effects: [{ type: 'GRANT_TEMP_HP_ONCE_PER_COMBAT_ON_DEATHS_DOOR', value: 2 }, { type: 'GRANT_DAMAGE_ON_MELEE_HIT_WHILE_TEMP_HP', target: 'Draconic_damage_type', value: 1 }]
  },
  {
    id: 'dragonborn_draconic_protection',
    name: 'Draconic Protection',
    description: 'Once per Combat, when an ally within 20 Spaces is on Death’s Door, you begin to surge with an ancient power. While they remain on Death’s Door their PD and AD increases by 5 until Combat ends.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Increase_PD_AD_Ally_On_Deaths_Door' }]
  },
  {
    id: 'dragonborn_glide_speed',
    name: 'Glide Speed',
    description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.',
    cost: 2,
    effects: [{ type: 'GRANT_GLIDE_SPEED' }]
  },
  {
    id: 'dragonborn_guardians_bond',
    name: 'Guardian’s Bond',
    description: 'Once per Combat when an ally enters Death’s Door within 20 Spaces of you, you take an amount of True damage equal to your Prime Modifier.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'TAKE_TRUE_DAMAGE_ONCE_PER_COMBAT_WHEN_ALLY_DEATHS_DOOR', value: 'Prime_Modifier' }]
  },

  // Giantborn Traits (p. 112)
  {
    id: 'giantborn_tough',
    name: 'Tough',
    description: 'Your HP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: 1 }]
  },
  {
    id: 'giantborn_powerful_build',
    name: 'Powerful Build',
    description: 'You increase by 1 Size, but you occupy the Space of a creature 1 Size smaller.',
    cost: 2,
    effects: [{ type: 'MODIFY_SIZE', target: 'Large' }, { type: 'MODIFY_SPACE_OCCUPIED', target: '1_Size_Smaller' }]
  },
  {
    id: 'giantborn_unstoppable',
    name: 'Unstoppable',
    description: 'You have ADV on Saves against being Slowed or Stunned.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Slowed' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Stunned' }]
  },
  {
    id: 'giantborn_giants_resolve',
    name: 'Giant’s Resolve',
    description: 'While on Death’s Door, you reduce all damage taken by 1.',
    cost: 1,
    effects: [{ type: 'REDUCE_DAMAGE_TAKEN', value: 1, condition: 'deaths_door' }]
  },
  {
    id: 'giantborn_unyielding_movement',
    name: 'Unyielding Movement',
    description: 'You’re immune to being Slowed 2 (or higher).',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'IMMUNE_TO_SLOWED_2_OR_HIGHER' }]
  },
  {
    id: 'giantborn_giants_fortitude',
    name: 'Giant’s Fortitude',
    description: 'You also gain the benefits of your Giant’s Resolve Trait while Well-Bloodied.',
    cost: 2,
    prerequisites: ['giantborn_giants_resolve'],
    effects: [{ type: 'GRANT_BENEFIT_WHILE_WELL_BLOODIED', target: 'giantborn_giants_resolve' }]
  },
  {
    id: 'giantborn_strong_body',
    name: 'Strong Body',
    description: 'Once per Combat when you take damage from an Attack, you can reduce the damage taken by an amount equal to your Might or Agility (your choice).',
    cost: 2,
    effects: [{ type: 'REDUCE_DAMAGE_TAKEN_ONCE_PER_COMBAT', value: 'Might_or_Agility' }]
  },
  {
    id: 'giantborn_mighty_hurl',
    name: 'Mighty Hurl',
    description: 'You throw creatures 1 Space farther than normal, and objects (including Weapons) 5 Spaces farther than normal.',
    cost: 1,
    effects: [{ type: 'MODIFY_THROW_DISTANCE_CREATURES', value: 1 }, { type: 'MODIFY_THROW_DISTANCE_OBJECTS', value: 5 }]
  },
  {
    id: 'giantborn_titanic_toss',
    name: 'Titanic Toss',
    description: 'You have ADV on Checks made to throw creatures. Additionally, you don’t have DisADV as a result of making an Attack with a Weapon with the Toss or Thrown Property at Long Range.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS', target: 'Throw_Creatures' }, { type: 'IGNORE_DISADV_ON_RANGED_ATTACK_WITH_TOSS_THROWN_AT_LONG_RANGE' }]
  },
  {
    id: 'giantborn_mighty_leap',
    name: 'Mighty Leap',
    description: 'You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling.',
    cost: 1,
    effects: [{ type: 'USE_ATTRIBUTE_FOR_JUMP_DISTANCE_FALLING_DAMAGE', target: 'Might' }]
  },
  {
    id: 'giantborn_brute',
    name: 'Brute',
    description: 'Once per Combat, you can take the Shove or Grapple Action as a Minor Action.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Shove_or_Grapple_As_Minor_Action_OncePerCombat' }]
  },
  {
    id: 'giantborn_heavy_riser',
    name: 'Heavy Riser',
    description: 'You have to spend 4 Spaces of movement to stand up from Prone.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_MOVEMENT_TO_STAND_UP', value: 4 }]
  },
  {
    id: 'giantborn_clumsiness',
    name: 'Clumsiness',
    description: 'You have DisADV on Agility Checks.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_DISADV_ON_CHECKS', target: 'Agility_Checks' }]
  },
  {
    id: 'giantborn_intelligence_attribute_decrease',
    name: 'Intelligence Decrease',
    description: 'You decrease your Intelligence by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'intelligence', value: -1 }]
  },

  // Angelborn Traits (p. 113)
  {
    id: 'angelborn_radiant_resistance',
    name: 'Radiant Resistance',
    description: 'You have Resistance (Half) to Radiant damage.',
    cost: 1,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Radiant' }]
  },
  {
    id: 'angelborn_celestial_magic',
    name: 'Celestial Magic',
    description: 'You learn 1 Spell of your choice from the Divine Spell List (Holy & Restoration during the Beta). Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spells total MP cost (before all reductions) still can’t exceed your Mana Spend Limit.',
    cost: 2,
    effects: [{ type: 'GRANT_SPELL_FROM_LIST', target: 'Divine_Spell_List' }, { type: 'REDUCE_MP_COST_ONCE_PER_LONG_REST', value: 1 }]
  },
  {
    id: 'angelborn_healing_touch',
    name: 'Healing Touch',
    description: 'Once per Combat, you can spend 1 AP to touch a creature and Heal it. Make a DC 10 Spell Check. Success: You can restore up to 2 HP to the target. Success (each 5): +1 HP. Failure: You only restore 2 HP.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Healing_Touch_OncePerCombat_1AP' }]
  },
  {
    id: 'angelborn_divine_glow',
    name: 'Divine Glow',
    description: 'Your body can emit a Bright Light in a 5 Space radius around you at will.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ABILITY', value: 'Emit_Bright_Light_5Space_Radius_AtWill' }]
  },
  {
    id: 'angelborn_mana_increase',
    name: 'Mana Increase',
    description: 'Your MP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_MP_MAX', value: 1 }]
  },
  {
    id: 'angelborn_celestial_clarity',
    name: 'Celestial Clarity',
    description: 'You have ADV on Saves against being Blinded or Deafened.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Blinded' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Deafened' }]
  },
  {
    id: 'angelborn_angelic_insight',
    name: 'Angelic Insight',
    description: 'Once per Long Rest you can grant yourself ADV on an Insight Check to see if someone is lying.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_INSIGHT_CHECK_ONCE_PER_LONG_REST', condition: 'see_if_lying' }]
  },
  {
    id: 'angelborn_gift_of_the_angels',
    name: 'Gift of the Angels',
    description: 'Once per Combat you can spend 1 AP and 1 MP and touch a creature to heal them over time. The creature recovers 1 HP at the start of each of their turns for 1 minute (5 Rounds).',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Heal_Over_Time_OncePerCombat_1AP_1MP' }]
  },
  {
    id: 'angelborn_blinding_light',
    name: 'Blinding Light',
    description: 'Once per Combat, you can spend 1 AP to choose a creature within 5 Spaces and make a Spell Check contested by its Physical Save. Success: The target is Blinded until the end of your next turn.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Blind_Target_OncePerCombat_1AP' }]
  },
  {
    id: 'angelborn_glide_speed',
    name: 'Glide Speed',
    description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.',
    cost: 2,
    effects: [{ type: 'GRANT_GLIDE_SPEED' }]
  },
  {
    id: 'angelborn_pacifist',
    name: 'Pacifist',
    description: 'Your divine call is to put others before yourself and resist doing harm. You suffer a -1 penalty to all Checks and Saves made during the first round of Combat.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'PENALTY_ON_CHECKS_SAVES_FIRST_ROUND_OF_COMBAT', value: -1 }]
  },
  {
    id: 'angelborn_umbral_weakness',
    name: 'Umbral Weakness',
    description: 'You have Umbral Vulnerability (1).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_VULNERABILITY_STATIC', target: 'Umbral', value: 1 }]
  },

  // Fiendborn Traits (p. 114)
  {
    id: 'fiendborn_fiendish_resistance',
    name: 'Fiendish Resistance',
    description: 'You gain Resistance (Half) to your Fiendish damage type.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Fiendish_damage_type' }]
  },
  {
    id: 'fiendborn_fiendish_magic',
    name: 'Fiendish Magic',
    description: 'You learn 1 Spell of your choice from the Arcane Spell List from the Destruction or Enchantment Spell Schools. If the Spell deals damage, it must be the same damage type as your Fiendish damage. Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spells total MP cost (before all reductions) still can’t exceed your Mana Spend Limit.',
    cost: 2,
    effects: [{ type: 'GRANT_SPELL_FROM_LIST_SCHOOLS', target: 'Arcane_Spell_List', schools: ['Destruction', 'Enchantment'] }, { type: 'REDUCE_MP_COST_ONCE_PER_LONG_REST', value: 1, condition: 'spell_damage_type_matches_fiendish' }]
  },
  {
    id: 'fiendborn_darkvision',
    name: 'Darkvision',
    description: 'You have a Darkvision of 10 Spaces.',
    cost: 1,
    effects: [{ type: 'GRANT_DARKVISION', value: 10 }]
  },
  {
    id: 'fiendborn_lights_bane',
    name: 'Light’s Bane',
    description: 'You can spend 1 AP to snuff out a mundane light source within 5 Spaces of you.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ABILITY', value: 'Snuff_Out_Mundane_Light_Source_1AP' }]
  },
  {
    id: 'fiendborn_mana_increase',
    name: 'Mana Increase',
    description: 'Your MP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_MP_MAX', value: 1 }]
  },
  {
    id: 'fiendborn_silver_tongued',
    name: 'Silver-Tongued',
    description: 'Once per Long Rest you can grant yourself ADV on an Influence Check when trying to deceive someone.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_INFLUENCE_CHECK_ONCE_PER_LONG_REST', condition: 'trying_to_deceive' }]
  },
  {
    id: 'fiendborn_fiendish_aura',
    name: 'Fiendish Aura',
    description: 'You learn the Sorcery Cantrip, but you must choose the type of energy that’s the same as your Fiendish Origin.',
    cost: 1,
    effects: [{ type: 'GRANT_SPELL_KNOWN', value: 'Sorcery_Cantrip' }, { type: 'SET_SORCERY_ENERGY_TYPE', target: 'Fiendish_Origin' }]
  },
  {
    id: 'fiendborn_superior_darkvision',
    name: 'Superior Darkvision',
    description: 'Your Darkvision increases to 20 Spaces.',
    cost: 1,
    prerequisites: ['fiendborn_darkvision'],
    effects: [{ type: 'MODIFY_DARKVISION', value: 20 }]
  },
  {
    id: 'fiendborn_infernal_bravery',
    name: 'Infernal Bravery',
    description: 'You have ADV on Saves against being Intimidated.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Intimidated' }]
  },
  {
    id: 'fiendborn_intimidator',
    name: 'Intimidator',
    description: 'Once per Combat you can take the Intimidate Action as a Minor Action.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Intimidate_As_Minor_Action_OncePerCombat' }]
  },
  {
    id: 'fiendborn_charming_gaze',
    name: 'Charming Gaze',
    description: 'You can spend 1 AP to gaze upon a creature you can see within 10 Spaces that can also see you. Make a Spell Check contested by the target’s Repeated Charisma Save. Success: The creature becomes Charmed by you for 1 minute. You can use this ability once per Long Rest, and when you roll for Initiative, or meet some other unique criteria at the GM’s discretion, this ability recharges.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Charm_Target_OncePerLongRest_1AP' }]
  },
  {
    id: 'fiendborn_glide_speed',
    name: 'Glide Speed',
    description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.',
    cost: 2,
    effects: [{ type: 'GRANT_GLIDE_SPEED' }]
  },
  {
    id: 'fiendborn_radiant_weakness',
    name: 'Radiant Weakness',
    description: 'You have Radiant Vulnerability (1).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_VULNERABILITY_STATIC', target: 'Radiant', value: 1 }]
  },
  {
    id: 'fiendborn_divine_dampening',
    name: 'Divine Dampening',
    description: 'You recover 1 less HP when healed from divine sources.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'REDUCE_HP_REGAINED_FROM_DIVINE_SOURCES', value: 1 }]
  },

  // Beastborn Traits (p. 115-116)
  {
    id: 'beastborn_darkvision',
    name: 'Darkvision',
    description: 'You have Darkvision 10 Spaces.',
    cost: 1,
    effects: [{ type: 'GRANT_DARKVISION', value: 10 }]
  },
  {
    id: 'beastborn_echolocation',
    name: 'Echolocation',
    description: 'You can spend 1 AP to roar, scream, or screech to gain Blindsight in a 10 Spaces radius that lasts until the start of your next turn. The sound can be heard from up to 100 Spaces away. You gain no benefit from this Trait in an area of Silence.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Echolocation_1AP_10Space_1Round' }]
  },
  {
    id: 'beastborn_keen_sense',
    name: 'Keen Sense',
    description: 'Choose 1 of the following senses: hearing, sight, or smell. You make Awareness Checks with ADV using the chosen sense.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_AWARENESS_CHECKS_USING_SENSE', target: 'chosen_sense', userChoiceRequired: { prompt: "Choose a sense: hearing, sight, or smell" } }],
    // This trait can be chosen multiple times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: 'beastborn_sunlight_sensitivity',
    name: 'Sunlight Sensitivity',
    description: 'While you or your target is in sunlight, you have DisADV on Attacks and Awareness Checks that rely on sight.',
    cost: -2,
    isNegative: true,
    effects: [{ type: 'GRANT_DISADV_ON_ATTACKS_AWARENESS_CHECKS_IN_SUNLIGHT' }]
  },
  {
    id: 'beastborn_quick_reactions',
    name: 'Quick Reactions',
    description: 'While you aren’t wearing Armor, you gain +1 PD.',
    cost: 1,
    effects: [{ type: 'MODIFY_PD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'beastborn_climb_speed',
    name: 'Climb Speed',
    description: 'You gain a Climb Speed equal to your Ground Speed.',
    cost: 1,
    effects: [{ type: 'GRANT_CLIMB_SPEED_EQUAL_TO_SPEED' }]
  },
  {
    id: 'beastborn_spider_climb',
    name: 'Spider Climb',
    description: 'You can walk without falling on the ceiling and vertical surfaces normally without needing to Climb.',
    cost: 1,
    prerequisites: ['beastborn_climb_speed'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Walk_On_Vertical_Surfaces_Ceilings' }]
  },
  {
    id: 'beastborn_web_walk',
    name: 'Web Walk',
    description: 'You can walk along and through webs unimpeded. Additionally, you know the location of any creature that’s in contact with the same web.',
    cost: 1,
    effects: [{ type: 'IGNORE_DIFFICULT_TERRAIN_FROM_WEBS' }, { type: 'KNOW_LOCATION_OF_CREATURES_IN_CONTACT_WITH_WEB' }]
  },
  {
    id: 'beastborn_water_breathing',
    name: 'Water Breathing',
    description: 'You can breathe underwater.',
    cost: 1,
    effects: [{ type: 'GRANT_WATER_BREATHING' }]
  },
  {
    id: 'beastborn_swim_speed',
    name: 'Swim Speed',
    description: 'You gain a Swim Speed equal to your Ground Speed. Additionally, your Breath Duration increases by 3.',
    cost: 1,
    effects: [{ type: 'GRANT_SWIM_SPEED_EQUAL_TO_SPEED' }, { type: 'MODIFY_BREATH_DURATION', value: 3 }]
  },
  {
    id: 'beastborn_speed_increase',
    name: 'Speed Increase',
    description: 'Your Speed increases by 1 Space.',
    cost: 2,
    effects: [{ type: 'MODIFY_SPEED', value: 5 }],
    // This trait can be chosen up to 5 times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: 'beastborn_sprint',
    name: 'Sprint',
    description: 'You can use your Minor Action to take the Move Action. Once you use this Trait, you can’t use it again until you take a turn without taking the Move Action.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Move_As_Minor_Action_OncePerTurn_NoMoveAction' }]
  },
  {
    id: 'beastborn_charge',
    name: 'Charge',
    description: 'If you move at least 2 Spaces in a straight line before making a Melee Attack, the damage of the Attack increases by 1.',
    cost: 2,
    effects: [{ type: 'MODIFY_DAMAGE_ON_MELEE_ATTACK', value: 1, condition: 'move_2_spaces_straight_before' }]
  },
  {
    id: 'beastborn_burrow_speed',
    name: 'Burrow Speed',
    description: 'You gain a Burrow Speed equal to half your Movement Speed.',
    cost: 2,
    effects: [{ type: 'GRANT_BURROW_SPEED_HALF_SPEED' }]
  },
  {
    id: 'beastborn_jumper',
    name: 'Jumper',
    description: 'Your Jump Distance increases by 2, and you can take the Jump Action as a Minor Action.',
    cost: 1,
    effects: [{ type: 'MODIFY_JUMP_DISTANCE', value: 2 }, { type: 'GRANT_ABILITY', value: 'Jump_As_Minor_Action' }]
  },
  {
    id: 'beastborn_strong_jumper',
    name: 'Strong Jumper',
    description: 'You no longer need to move 2 Spaces before performing a Running Jump, and you take 0 damage from Controlled Falling 5 Spaces or less.',
    cost: 1,
    effects: [{ type: 'IGNORE_2_SPACES_MOVEMENT_FOR_RUNNING_JUMP' }, { type: 'IGNORE_FALLING_DAMAGE_5_SPACES_OR_LESS' }]
  },
  {
    id: 'beastborn_glide_speed',
    name: 'Glide Speed',
    description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.',
    cost: 2,
    effects: [{ type: 'GRANT_GLIDE_SPEED' }]
  },
  {
    id: 'beastborn_limited_flight',
    name: 'Limited Flight',
    description: 'You have a set of wings that grant you limited flight. Provided you aren’t Incapacitated, you gain the following benefits: Vertical Ascent: You can spend 2 Spaces of movement to ascend 1 Space vertically. Hover: When you end your turn in the air, you maintain your altitude.',
    cost: 2,
    prerequisites: ['beastborn_glide_speed'],
    effects: [{ type: 'GRANT_LIMITED_FLIGHT' }]
  },
  {
    id: 'beastborn_full_flight',
    name: 'Full Flight',
    description: 'You have a Fly Speed equal to your Ground Speed.',
    cost: 2,
    prerequisites: ['beastborn_limited_flight'],
    effects: [{ type: 'GRANT_FLY_SPEED_EQUAL_TO_SPEED' }]
  },
  {
    id: 'beastborn_flyby',
    name: 'Flyby',
    description: 'You don’t provoke Opportunity Attacks when you Fly out of an enemy’s reach.',
    cost: 1,
    prerequisites: ['beastborn_limited_flight'],
    effects: [{ type: 'IGNORE_OPPORTUNITY_ATTACKS_WHEN_FLY_OUT_OF_REACH' }]
  },
  {
    id: 'beastborn_stealth_feathers',
    name: 'Stealth Feathers',
    description: 'You have ADV on Stealth Checks while Flying.',
    cost: 2,
    prerequisites: ['beastborn_limited_flight'],
    effects: [{ type: 'GRANT_ADV_ON_STEALTH_CHECKS_WHILE_FLYING' }]
  },
  {
    id: 'beastborn_winged_arms',
    name: 'Winged Arms',
    description: 'Your arms are also your wings. Anytime you use a Glide Speed or Flying Speed, you can’t hold anything in your hands.',
    cost: -1,
    isNegative: true,
    prerequisites: ['beastborn_limited_flight'], // Assuming Limited Flight or Full Flight
    effects: [{ type: 'PENALTY_CANT_HOLD_WHILE_FLYING' }]
  },
  {
    id: 'beastborn_tough',
    name: 'Tough',
    description: 'Your HP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: 1 }]
  },
  {
    id: 'beastborn_thick_skinned',
    name: 'Thick-Skinned',
    description: 'While you aren’t wearing Armor, you gain +1 AD.',
    cost: 1,
    effects: [{ type: 'MODIFY_AD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'beastborn_powerful_build',
    name: 'Powerful Build',
    description: 'You increase by 1 Size, but you occupy the Space of a creature 1 Size smaller.',
    cost: 2,
    effects: [{ type: 'MODIFY_SIZE', target: 'Large' }, { type: 'MODIFY_SPACE_OCCUPIED', target: '1_Size_Smaller' }]
  },
  {
    id: 'beastborn_long_limbed',
    name: 'Long-Limbed',
    description: 'When you make a Melee Martial Attack, your reach is 1 Space greater than normal.',
    cost: 3,
    effects: [{ type: 'MODIFY_MELEE_REACH', value: 1 }]
  },
  {
    id: 'beastborn_secondary_arms',
    name: 'Secondary Arms',
    description: 'You have 2 slightly smaller secondary arms below your primary pair of arms. They function just like your primary arms, but they can’t wield Weapons with the Heavy Property or Shields.',
    cost: 1,
    effects: [{ type: 'GRANT_SECONDARY_ARMS' }]
  },
  {
    id: 'beastborn_prehensile_appendage',
    name: 'Prehensile Appendage',
    description: 'You have a prehensile tail or trunk that has a reach of 1 Space and can lift up an amount of pounds equal to your Might times 5 (or half as many kilograms). You can use it to lift, hold, or drop objects, and to push, pull, or grapple creatures. It can’t wield Weapons or Shields, you can’t use tools with it that require manual precision, and you can’t use it in place of Somatic Components for Spells.',
    cost: 1,
    effects: [{ type: 'GRANT_PREHENSILE_APPENDAGE' }]
  },
  {
    id: 'beastborn_hazardous_hide',
    name: 'Hazardous Hide',
    description: 'You have spikes, retractable barbs, poisonous skin, or some other form of defense mechanism to keep creatures from touching you. Choose 1 of the following damage types: Corrosion, Piercing, or Poison. While you are physically Grappled, your Grappler takes 1 damage of the chosen type at the start of each of its turns. Creatures that start their turn Grappled by you also take this damage.',
    cost: 1,
    effects: [{ type: 'GRANT_DAMAGE_TO_GRAPPLER', target: 'chosen_damage_type', value: 1, userChoiceRequired: { prompt: "Choose a damage type: Corrosion, Piercing, or Poison" } }]
  },
  {
    id: 'beastborn_natural_armor',
    name: 'Natural Armor',
    description: 'While not wearing Armor, you gain PDR.',
    cost: 2,
    prerequisites: ['beastborn_thick_skinned'],
    effects: [{ type: 'GRANT_PDR', condition: 'not_wearing_armor' }]
  },
  {
    id: 'beastborn_hard_shell',
    name: 'Hard Shell',
    description: 'You have a large shell around your body for protection. Your AD increases by 1 (while you’re not wearing Armor), your Movement Speed decreases by 1, and you’re immune to being Flanked.',
    cost: 1,
    prerequisites: ['beastborn_thick_skinned'],
    effects: [{ type: 'MODIFY_AD', value: 1, condition: 'not_wearing_armor' }, { type: 'MODIFY_SPEED', value: -5 }, { type: 'IMMUNE_TO_FLANKING' }]
  },
  {
    id: 'beastborn_shell_retreat',
    name: 'Shell Retreat',
    description: 'Your body has a shell that you can retreat into. You can spend 1 AP to retreat into or come back out of your shell. You gain +5 PD and AD, PDR, EDR and ADV on Might Saves. While in your shell, you’re Prone, you can’t move, you have DisADV on Agility Saves, and you can’t take Reactions.',
    cost: 1,
    prerequisites: ['beastborn_hard_shell'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Retreat_Into_Shell_1AP' }]
  },
  {
    id: 'beastborn_camouflage',
    name: 'Camouflage',
    description: 'You can change the color and pattern of your body. You have ADV on Stealth Checks while motionless.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_STEALTH_CHECKS_WHILE_MOTIONLESS' }]
  },
  {
    id: 'beastborn_prowler',
    name: 'Prowler',
    description: 'You have ADV on Stealth Checks while in Darkness.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_STEALTH_CHECKS_WHILE_IN_DARKNESS' }]
  },
  {
    id: 'beastborn_cold_resistance',
    name: 'Cold Resistance',
    description: 'You have Cold Resistance (Half) and Resistance to Exhaustion from cold temperatures.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Cold' }, { type: 'GRANT_RESISTANCE_TO_EXHAUSTION', condition: 'cold_temperatures' }]
  },
  {
    id: 'beastborn_fire_resistance',
    name: 'Fire Resistance',
    description: 'You have Fire Resistance (Half) and Resistance to Exhaustion from hot temperatures.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Fire' }, { type: 'GRANT_RESISTANCE_TO_EXHAUSTION', condition: 'hot_temperatures' }]
  },
  {
    id: 'beastborn_short_legged',
    name: 'Short-Legged',
    description: 'Your Speed decreases by 1 Space.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SPEED', value: -5 }]
  },
  {
    id: 'beastborn_small_sized',
    name: 'Small-Sized',
    description: 'Your Size is considered Small.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SIZE', target: 'Small' }]
  },
  {
    id: 'beastborn_reckless',
    name: 'Reckless',
    description: 'Your PD decreases by 1.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_PD', value: -1 }]
  },
  {
    id: 'beastborn_natural_weapon',
    name: 'Natural Weapon',
    description: 'You have up to 2 Natural Weapons (claws, horns, fangs, tail, etc.) which you can use to make Unarmed Strikes that deal 1 Bludgeoning, Piercing, or Slashing damage (your choice upon gaining this Trait). You can perform Attack Maneuvers with your Natural Weapons.',
    cost: 1,
    effects: [{ type: 'GRANT_NATURAL_WEAPON', value: 1, userChoiceRequired: { prompt: "Choose a damage type: Bludgeoning, Piercing, or Slashing" } }],
    // This trait can be chosen multiple times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: 'beastborn_extended_natural_weapon',
    name: 'Extended Natural Weapon',
    description: 'Your Natural Weapon now has the Reach Property.',
    cost: 2,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_PROPERTY_TO_NATURAL_WEAPON', target: 'Reach' }]
  },
  {
    id: 'beastborn_natural_projectile',
    name: 'Natural Projectile',
    description: 'You can use your Natural Weapon to make a Ranged Martial Attack with a Range of 10 Spaces. The Natural Weapon might produce a spine, barb, fluid, or other harmful projectile (your choice).',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Natural_Projectile_Ranged_Attack' }]
  },
  {
    id: 'beastborn_natural_weapon_passive',
    name: 'Natural Weapon Passive',
    description: 'You can choose 1 Weapon Style that fits your desired Natural Weapon. You can benefit from the chosen Weapon Style’s passive with your Natural Weapon.',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_WEAPON_STYLE_PASSIVE_TO_NATURAL_WEAPON', target: 'chosen_weapon_style', userChoiceRequired: { prompt: "Choose a Weapon Style" } }]
  },
  {
    id: 'beastborn_rend',
    name: 'Rend',
    description: 'You can spend 1 AP when making an Attack Check with your Natural Weapon to force the target to make a Physical Save. Failure: Target begins Bleeding.',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Rend_Bleeding_1AP' }]
  },
  {
    id: 'beastborn_retractable_natural_weapon',
    name: 'Retractable Natural Weapon',
    description: 'Your Natural Weapon is able to be concealed or retracted and gains the Concealable Property (gain ADV on the first Attack Check you make in Combat).',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_PROPERTY_TO_NATURAL_WEAPON', target: 'Concealable' }]
  },
  {
    id: 'beastborn_venomous_natural_weapon',
    name: 'Venomous Natural Weapon',
    description: 'When you Hit a creature with your Natural Weapon, they make a Physical Save against your Save DC. Failure: The target becomes Impaired until the start of your next turn.',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Venomous_Natural_Weapon_Impaired' }]
  },
  {
    id: 'beastborn_fast_reflexes',
    name: 'Fast Reflexes',
    description: 'You gain ADV on Initiative Checks and on the first Attack Check you make in Combat.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_INITIATIVE_CHECKS' }, { type: 'GRANT_ADV_ON_FIRST_ATTACK_CHECK_IN_COMBAT' }]
  },
  {
    id: 'beastborn_mimicry',
    name: 'Mimicry',
    description: 'You can mimic simple sounds that you’ve heard (such as a baby’s crying, the creak of a door, or single words) and repeat short 3 word phrases that sound identical to what you heard. A creature can make an Insight Check contested by your Trickery Check to determine if this sound is real.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Mimic_Simple_Sounds_Short_Phrases' }]
  },
  {
    id: 'beastborn_intimidating_shout',
    name: 'Intimidating Shout',
    description: 'Once per Combat, you can spend 1 AP to let out an Intimidating Shout. All creatures within 5 Spaces that can hear you must make a Charisma Save contested by your Attack Check. Failure: A target is Hindered on the next Attack Check or Spell Attack it makes before the start of your next turn.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Intimidating_Shout_OncePerCombat_1AP' }]
  },
  {
    id: 'beastborn_toxic_fortitude',
    name: 'Toxic Fortitude',
    description: 'You have Poison Resistance (Half) and ADV on Saves against being Poisoned.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Poison' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Poisoned' }]
  },
  {
    id: 'beastborn_shoot_webs',
    name: 'Shoot Webs',
    description: 'You can spend 1 AP to shoot web at a target within 5 Spaces. Make an Attack Check contested by the target’s Physical Save. Success: The target is Restrained by webbing and can spend 1 AP on their turn to attempt to escape (Martial Check vs your Save DC). The webbing can also be attacked and destroyed (PD 5, AD 10, 2 HP; Immunity to Bludgeoning, Poison, and Psychic damage).',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Shoot_Webs_1AP' }]
  },
];
````

## File: src/routes/test-ui/+page.svelte
````
<h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1>
<div class="bg-purple-primary w-24 h-24 m-4"></div>

<button
  class="p-2 px-4 m-4 bg-orange-secondary text-light-text-primary rounded-lg font-semibold hover:bg-opacity-80"
  on:click={() => alert('Styled HTML button works!')}>
  Test Styled Button
</button>

<script lang="ts">
  import { createCollapsible, melt } from '@melt-ui/svelte';
  const {
    elements: { root, content, trigger },
    states: { open },
  } = createCollapsible();
</script>

<div use:melt={$root} class="mt-4 p-2 border border-purple-primary rounded">
  <button use:melt={$trigger} class="p-2 bg-purple-primary text-light-text-primary rounded w-full text-left">
    Collapsible Trigger (Click to {$open ? 'Close' : 'Open'})
  </button>
  {#if $open}
    <div use:melt={$content} class="p-2 mt-2 bg-dark-bg-secondary text-light-text-primary rounded">
      Collapsible Content - Now Visible!
    </div>
  {/if}
</div>
````

## File: memory-bank/progress.md
````markdown
# Progress

This document summarizes the current status of the project, including what has been completed, what remains, and any known issues.

## What Works

- **Stage 0 (Foundation and UI Setup) Completed:**
    - Functional SvelteKit project initialized and configured.
    - TailwindCSS installed and configured with the project's custom theme, verified.
    - The Inter font loaded and applied.
    - Melt UI (`@melt-ui/svelte`) installed, and its preprocessor (`@melt-ui/pp`) correctly configured.
    - `projectPlan/stage0.md` updated.
- The memory bank documentation has been successfully updated to reflect the project plan detailed in the `projectPlan/` directory.
- The core technologies, UI design principles, MVP feature scope, data modeling (Prisma schema), key backend logic, key frontend logic, and specific planning decisions for the Level 1 Character Creator MVP have been documented.
- Detailed plans for Stage A (Attributes) and Stage B (Ancestry) of the character creation wizard have been incorporated into the documentation.
- Static rule data in TypeScript files (`src/lib/rulesdata/`) has been implemented based on the DC20 Beta 0.9.5 rulebook.

## What's Left to Build

- Implement the frontend Svelte component and logic for Stage A (Attributes).
- Implement the backend endpoint/Form Action for Stage A data persistence and validation.
- Implement the frontend Svelte component and logic for Stage B (Ancestry), including the attribute overflow helper panel.
- Implement the backend endpoint/Form Action for Stage B data persistence and validation.
- Detail and implement Stage C (Class) of the character creation wizard.
- Implement the backend logic for final character calculation and `CharacterSheetData` creation.
- Implement the frontend component for displaying the finalized character sheet.
- Implement the basic resume functionality using browser `localStorage`.

## Current Status

The project has successfully completed Stage 0 (Foundation and UI Setup). The SvelteKit application has a stable and verified UI foundation, including TailwindCSS with the custom theme, the Inter font, and a working Melt UI installation with its preprocessor. The core requirements, scope, and technical approach are defined. Detailed plans for the first two wizard stages (A and B) are documented. The next steps involve translating these plans into code, starting with the implementation of Stage A (Attributes).

## Known Issues

- Stage C of the character creation wizard is not yet detailed in the planning documents.
- The attribute overflow helper panel logic in Stage B requires careful implementation and testing to ensure correct attribute reallocation and validation.

## Evolution of Project Decisions

- The SvelteKit project was initialized manually to work within the existing project structure.
- The necessity of installing and configuring the `@melt-ui/pp` preprocessor for Melt UI was identified and implemented during Stage 0.
- The decision to initially store static rule data in TypeScript files was made for simplicity during the MVP phase, with a potential future plan to move it to the database.
- The character creation wizard stages were re-ordered from the original DC20 steps to A-Attributes, B-Ancestry, C-Class, D-Background, E-Review, F-Equipment for a more streamlined digital workflow.
- A specific dark mode color palette and font (Inter) have been chosen for the UI aesthetics.
````

## File: prisma/schema.prisma
````
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "debian-openssl-1.1.x"]
}

datasource db {
  provider = "postgresql"
  url      = env("POSTGRES_URL")
}

// Model to store the character creation progress
model CharacterInProgress {
  id                   String @id @default(uuid())
  // Stage A: Attributes
  attribute_might      Int    @default(-2)
  attribute_agility    Int    @default(-2)
  attribute_charisma   Int    @default(-2)
  attribute_intelligence Int  @default(-2)
  pointsSpent          Int    @default(0) // Points spent in point buy
  currentStep          Int    @default(1) // Current stage in the wizard (1 = Stage A, 2 = Stage B, etc.)

  // Core Stats
  level                Int    @default(1)
  combatMastery        Int    @default(1) // Calculated as half level rounded up

  // Stage B: Ancestry
  ancestry1Id          String? // ID of the first ancestry
  ancestry2Id          String? // ID of the second ancestry (for mixed ancestry)
  selectedTraitIds     String // JSON string of selected trait IDs
  ancestryPointsSpent  Int    @default(0) // Points spent on traits

  // Stage C: Class
  classId              String? // ID of the selected class
  selectedFeatureChoices String // JSON string of selected feature choice IDs/values

  // Stage D: Skills (MVP Scope)
  // Will add skill selection fields here later

  // Stage E: Equipment (MVP Scope)
  // Will add equipment selection fields here later

  // Stage F: Details (MVP Scope)
  finalName            String?
  finalPlayerName      String?

  // Link to the final character sheet data (once creation is complete)
  finalCharacterSheet  CharacterSheetData?

  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}

// Model to store the final calculated character sheet data
model CharacterSheetData {
  id                   String @id @default(uuid())
  characterInProgressId String @unique // Link back to the progress record
  characterInProgress  CharacterInProgress @relation(fields: [characterInProgressId], references: [id])

  // Final Calculated Stats (based on MVP mvp.md Section IV)
  finalName            String
  finalPlayerName      String?
  finalLevel           Int    @default(1)

  finalMight           Int
  finalAgility         Int
  finalCharisma        Int
  finalIntelligence    Int

  finalPrimeModifierValue Int
  finalPrimeModifierAttribute String

  finalCombatMastery   Int    @default(1)

  finalSaveMasteryMight Int
  finalSaveMasterityAgility Int
  finalSaveMasteryCharisma Int
  finalSaveMasteryIntelligence Int

  finalHPMax           Int
  finalSPMax           Int
  finalMPMax           Int

  finalPD              Int
  finalAD              Int

  finalPDR             String?
  finalEDR             String?
  finalMDR             String?

  finalSaveDC          Int
  finalDeathThreshold  Int
  finalMoveSpeed       Int
  finalJumpDistance    Int
  finalRestPoints      Int
  finalGritPoints      Int
  finalInitiativeBonus Int

  skillsJson           String // JSON string of skill data
  tradesJson           String // JSON string of trade data
  languagesJson        String // JSON string of language data

  ancestry1Name        String?
  ancestry2Name        String?
  selectedTraitsJson   String // JSON string of selected traits

  className            String
  classFeaturesLvl1Json String // JSON string of Lvl 1 class features

  equipmentJson        String // JSON string of equipment

  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}
````

## File: src/lib/rulesdata/ancestries.ts
````typescript
// src/lib/rulesdata/ancestries.ts

import type { IAncestry } from './types';

export const ancestriesData: IAncestry[] = [
  {
    id: 'human',
    name: 'Human',
    description: 'Humans are the most common ancestry in the world, known for their adaptability and resilience.',
    defaultTraitIds: ['human_attribute_increase', 'human_skill_expertise', 'human_resolve', 'human_undying'],
    expandedTraitIds: ['human_trade_expertise', 'human_determination', 'human_unbreakable', 'human_attribute_decrease'],
  },
  {
    id: 'elf',
    name: 'Elf',
    description: 'Elves are graceful and long-lived beings with a deep connection to nature.',
    defaultTraitIds: ['elf_elven_will', 'elf_nimble', 'elf_agile_explorer', 'elf_discerning_sight'],
    expandedTraitIds: ['elf_quick_reactions', 'elf_peerless_sight', 'elf_climb_speed', 'elf_speed_increase', 'elf_trade_expertise_elf', 'elf_plant_knowledge', 'elf_brittle', 'elf_frail', 'elf_might_decrease'],
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    description: 'Dwarves are a stout and resilient folk, known for their craftsmanship and deep connection to the earth.',
    defaultTraitIds: ['dwarf_tough', 'dwarf_toxic_fortitude', 'dwarf_physically_sturdy', 'dwarf_iron_stomach'],
    expandedTraitIds: ['dwarf_thick_skinned', 'dwarf_natural_combatant', 'dwarf_stone_blood', 'dwarf_minor_tremorsense', 'dwarf_stubborn', 'dwarf_trade_expertise', 'dwarf_earthen_knowledge', 'dwarf_charisma_attribute_decrease', 'dwarf_short_legged'],
  },
  {
    id: 'halfling',
    name: 'Halfling',
    description: 'Halflings are a small and nimble folk, known for their bravery and love of comfort.',
    defaultTraitIds: ['halfling_small_sized', 'halfling_elusive', 'halfling_bravery', 'halfling_endurance', 'halfling_deft_footwork', 'halfling_beast_whisperer'],
    expandedTraitIds: ['halfling_beast_insight', 'halfling_burst_of_bravery', 'halfling_trade_expertise', 'halfling_critter_knowledge', 'halfling_brittle', 'halfling_intelligence_attribute_decrease', 'halfling_short_legged'],
  },
  {
    id: 'gnome',
    name: 'Gnome',
    description: 'Gnomes are small and energetic folk, known for their inventiveness and connection to the feywild.',
    defaultTraitIds: ['gnome_small_sized', 'gnome_escape_artist', 'gnome_magnified_vision', 'gnome_mental_clarity', 'gnome_strong_minded', 'gnome_predict_weather'],
    expandedTraitIds: ['gnome_mana_increase', 'gnome_trapper', 'gnome_lightning_insulation', 'gnome_trade_expertise', 'gnome_storm_knowledge', 'gnome_agility_attribute_decrease', 'gnome_short_legged'],
  },
  {
    id: 'orc',
    name: 'Orc',
    description: 'Orcs are a strong and fierce folk, known for their martial prowess and intimidating presence.',
    defaultTraitIds: ['orc_cursed_mind', 'orc_rush', 'orc_brutal_strikes', 'orc_tough', 'orc_orcish_resolve', 'orc_already_cursed'],
    expandedTraitIds: ['orc_intimidating_shout', 'orc_dash', 'orc_finishing_blow', 'orc_imposing_presence', 'orc_provocation', 'orc_reckless'],
  },
  {
    id: 'dragonborn',
    name: 'Dragonborn',
    description: 'Dragonborn are a proud and powerful folk, who trace their lineage back to dragons.',
    defaultTraitIds: ['dragonborn_darkvision', 'dragonborn_draconic_resistance', 'dragonborn_draconic_breath_weapon', 'dragonborn_reptilian_superiority'],
    expandedTraitIds: ['dragonborn_mana_increase', 'dragonborn_thick_skinned', 'dragonborn_second_breath', 'dragonborn_concussive_breath', 'dragonborn_draconic_affinity', 'dragonborn_dying_breath', 'dragonborn_draconic_ward', 'dragonborn_draconic_protection', 'dragonborn_glide_speed', 'dragonborn_guardians_bond'],
    origin: { // Draconic Origin
      prompt: 'Choose a Draconic Origin:',
      options: ['cold', 'corrosion', 'fire', 'lightning', 'poison', 'sonic', 'psychic', 'radiant', 'umbral'],
    },
  },
  {
    id: 'giantborn',
    name: 'Giantborn',
    description: 'Giantborn are a large and powerful folk, who trace their lineage back to giants.',
    defaultTraitIds: ['giantborn_tough', 'giantborn_powerful_build', 'giantborn_unstoppable', 'giantborn_giants_resolve', 'giantborn_unyielding_movement'],
    expandedTraitIds: ['giantborn_giants_fortitude', 'giantborn_strong_body', 'giantborn_mighty_hurl', 'giantborn_titanic_toss', 'giantborn_mighty_leap', 'giantborn_brute', 'giantborn_heavy_riser', 'giantborn_clumsiness', 'giantborn_intelligence_attribute_decrease'],
  },
  {
    id: 'angelborn',
    name: 'Angelborn',
    description: 'Angelborn are a celestial folk, known for their grace and divine connection.',
    defaultTraitIds: ['angelborn_radiant_resistance', 'angelborn_celestial_magic', 'angelborn_healing_touch', 'angelborn_divine_glow'],
    expandedTraitIds: ['angelborn_mana_increase', 'angelborn_celestial_clarity', 'angelborn_angelic_insight', 'angelborn_gift_of_the_angels', 'angelborn_blinding_light', 'angelborn_glide_speed', 'angelborn_pacifist', 'angelborn_umbral_weakness'],
    variantTraits: [ // Fallen Angelborn
      { id: 'angelborn_fallen', name: 'Fallen', cost: 0, description: 'You can now spend your Ancestry Points on Fiendborn Traits.' }
    ],
  },
  {
    id: 'fiendborn',
    name: 'Fiendborn',
    description: 'Fiendborn are a fiendish folk, known for their cunning and infernal connection.',
    defaultTraitIds: ['fiendborn_fiendish_resistance', 'fiendborn_fiendish_magic', 'fiendborn_darkvision', 'fiendborn_lights_bane'],
    expandedTraitIds: ['fiendborn_mana_increase', 'fiendborn_silver_tongued', 'fiendborn_fiendish_aura', 'fiendborn_superior_darkvision', 'fiendborn_infernal_bravery', 'fiendborn_intimidator', 'fiendborn_charming_gaze', 'fiendborn_glide_speed', 'fiendborn_radiant_weakness', 'fiendborn_divine_dampening'],
    origin: { // Fiendish Origin
      prompt: 'Choose a Fiendish Origin:',
      options: ['cold', 'corrosion', 'fire', 'poison', 'umbral'],
    },
    variantTraits: [ // Fiendborn Redemption
      { id: 'fiendborn_redeemed', name: 'Redeemed', cost: 0, description: 'You can now spend your Ancestry Points on Angelborn Traits.' }
    ],
  },
  {
    id: 'beastborn',
    name: 'Beastborn',
    description: 'Beastborn are a diverse folk, who take on the characteristics of various beasts.',
    defaultTraitIds: [], // Beastborn has no Default Traits
    expandedTraitIds: [ // Listed under Beast Traits sections in PDF
      // Senses
      'beastborn_darkvision', 'beastborn_echolocation', 'beastborn_keen_sense', 'beastborn_sunlight_sensitivity',
      // Mobility
      'beastborn_quick_reactions', 'beastborn_climb_speed', 'beastborn_spider_climb', 'beastborn_web_walk', 'beastborn_water_breathing', 'beastborn_swim_speed', 'beastborn_speed_increase', 'beastborn_sprint', 'beastborn_charge', 'beastborn_burrow_speed',
      // Jumping
      'beastborn_jumper', 'beastborn_strong_jumper',
      // Flying
      'beastborn_glide_speed', 'beastborn_limited_flight', 'beastborn_full_flight', 'beastborn_flyby', 'beastborn_stealth_feathers', 'beastborn_winged_arms',
      // Body
      'beastborn_tough', 'beastborn_thick_skinned', 'beastborn_powerful_build', 'beastborn_long_limbed', 'beastborn_secondary_arms', 'beastborn_prehensile_appendage', 'beastborn_hazardous_hide', 'beastborn_natural_armor', 'beastborn_hard_shell', 'beastborn_shell_retreat', 'beastborn_camouflage', 'beastborn_prowler', 'beastborn_cold_resistance', 'beastborn_fire_resistance', 'beastborn_short_legged', 'beastborn_small_sized', 'beastborn_reckless',
      // Natural Weapons
      'beastborn_natural_weapon', 'beastborn_extended_natural_weapon', 'beastborn_natural_projectile', 'beastborn_natural_weapon_passive', 'beastborn_rend', 'beastborn_retractable_natural_weapon', 'beastborn_venomous_natural_weapon',
      // Miscellaneous
      'beastborn_fast_reflexes', 'beastborn_mimicry', 'beastborn_intimidating_shout', 'beastborn_toxic_fortitude', 'beastborn_shoot_webs',
    ],
    origin: { // Beastborn Origin
      prompt: 'Choose a type of Beast you are modeled after:',
      options: [], // Options are open-ended, based on GM/player choice
    },
  },
];
````

## File: src/lib/rulesdata/attributes.ts
````typescript
// src/lib/rulesdata/attributes.ts

import type { IAttributeData } from './types';
// To be placed in: src/lib/rulesdata/attributes.ts
export const attributesData: IAttributeData[] = [
// TODO: Replace bracketed placeholders with accurate information from the DC20 Beta 0.9.5 rulebook.
{
  id: 'might',
  name: 'Might',
  description: 'Your Strength of Body.',
  derivedStats: [ // Examples, verify/adjust based on actual rules for each attribute
    { statName: 'AD (area defense)', formula: '8 + CM + Might + Charisma + Bonuses' },
    { statName: 'Max HP', formula: 'Class HP + Might + Ancestry HP' }
  ]
},
{
  id: 'agility',
  name: 'Agility',
  description: 'Your Balance, Nimbleness, and Dexterity.',
  derivedStats: [
    { statName: 'PD (precision defense)', formula: '8 + CM + Agility + Intelligence + Bonuses' },
    { statName: 'Jump Distance', formula: 'Agility (min 1)' },
    { statName: 'Initiative', formula: 'CM + Agility' }
  ]
},
{
  id: 'charisma',
  name: 'Charisma',
  description: 'Your Charm, Presence, Persuasiveness, and Force of Will.',
  derivedStats: [
    { statName: 'Grit Points', formula: '2 + Charisma' }
  ]
},
{
  id: 'intelligence',
  name: 'Intelligence',
  description: 'Your Reasoning, Understanding, and Wisdom.',
  derivedStats: [
    { statName: 'Base Skill Points', formula: '5 + Intelligence' }
  ]
}
];
````

## File: src/lib/rulesdata/types.ts
````typescript
// src/lib/rulesdata/types.ts

// Interface for Attribute Data
export interface IAttributeData {
  id: 'might' | 'agility' | 'charisma' | 'intelligence';
  name: string;
  description: string;
  derivedStats?: Array<{ statName: string; formula: string; }>;
}

// Interface for Trait Effects
export interface ITraitEffect {
  type: string; // e.g., 'MODIFY_ATTRIBUTE', 'GRANT_SKILL_EXPERTISE', 'GRANT_FEATURE'
  target?: string; // e.g., attribute ID ('might'), skill ID ('athletics'), feature ID ('rage')
  value?: any; // e.g., number for attribute modification, object for skill expertise details
  condition?: string; // Optional condition for the effect to apply
  userChoiceRequired?: { // Details if the user needs to make a choice for this effect
    prompt: string; // Prompt shown to the user
    options?: string[]; // Optional list of specific options (e.g., skill IDs, attribute IDs)
  };
  descriptionOverride?: string; // Optional override for how this effect is described
  subFeature?: string; // Optional sub-feature identifier for complex effects
  schools?: string[]; // Optional list of spell schools associated with the effect
}

// Interface for Traits
export interface ITrait {
  id: string;
  name: string;
  description: string;
  cost: number; // Ancestry points cost
  isMinor?: boolean; // True if this is a Minor Trait
  isNegative?: boolean; // True if this is a Negative Trait (grants points)
  effects?: ITraitEffect[]; // Array of effects the trait grants
  prerequisites?: any[]; // Optional prerequisites for taking this trait
  sourceAncestryId?: string; // ID of the ancestry this trait belongs to (for combined lists)
}

// Interface for Ancestries
export interface IAncestry {
  id: string;
  name: string;
  description: string;
  defaultTraitIds?: string[]; // Traits automatically granted
  expandedTraitIds: string[]; // Traits available for selection
  origin?: { // Optional origin property for ancestries with specific origins (e.g., Dragonborn, Fiendborn, Beastborn)
    prompt: string; // Prompt shown to the user for choosing an origin
    options?: string[]; // Optional list of specific options for the origin
  };
  variantTraits?: ITrait[]; // Optional list of variant traits (e.g., Fallen Angelborn, Redeemed Fiendborn)
}

// Interface for Class Feature Choice Options
export interface IClassFeatureChoiceOption {
  value: string; // Internal value for the choice
  label: string; // Display label for the choice
  description?: string; // Optional description for the choice
  effectsOnChoice?: ITraitEffect[]; // Effects granted if this option is chosen
}

// Interface for Class Feature Choices
export interface IClassFeatureChoice {
  id: string; // Internal ID for the choice (e.g., 'sorcerousOrigin')
  prompt: string; // Prompt shown to the user
  type: 'select_one' | 'select_multiple'; // Type of selection
  maxSelections?: number; // Max number of options if type is 'select_multiple'
  options: IClassFeatureChoiceOption[]; // Available options for the choice
}

// Interface for Class Features
export interface IClassFeature {
  id: string;
  name: string;
  description: string;
  level: number; // Level at which the feature is gained
  effects?: ITraitEffect[]; // Effects granted by the feature
}

// Interface for Class Definitions
export interface IClassDefinition {
  id: string;
  name: string;
  description: string;
  // Base stats granted by the class at Level 1
  baseHpContribution: number;
  startingSP: number;
  startingMP: number;
  skillPointGrantLvl1?: number; // Additional skill points granted at Lvl 1 (beyond Int mod)
  tradePointGrantLvl1?: number; // Additional trade points granted at Lvl 1 (beyond Int mod)
  combatTraining?: string[]; // Array of combat training proficiencies (e.g., 'Weapons', 'All Armor')
  maneuversKnownLvl1?: string | number; // Maneuvers known at Level 1 (can be 'All Attack' or a number)
  techniquesKnownLvl1?: number; // Techniques known at Level 1
  saveDCBase: number;
  deathThresholdBase: number;
  moveSpeedBase: number;
  restPointsBase: number;
  gritPointsBase: number; // Base grit points (before Charisma mod)
  initiativeBonusBase: number; // Base initiative bonus (before Agility mod)
  // Add cantripsKnownLvl1, spellsKnownLvl1 if applicable (not for Barbarian L1)
  cantripsKnownLvl1?: number;
  spellsKnownLvl1?: number;

  level1Features: IClassFeature[]; // Features gained at Level 1
  featureChoicesLvl1?: IClassFeatureChoice[]; // Choices available for features at Level 1
  // ... other level-specific data to be added later
}

// Interface for Skill Data
export interface ISkillData {
  id: string;
  name: string;
  attributeAssociation: 'might' | 'agility' | 'charisma' | 'intelligence' | 'prime'; // Associated attribute
  description: string;
}

// Interface for Trade Data
export interface ITradeData {
  id: string;
  name: string;
  attributeAssociation: 'might' | 'agility' | 'charisma' | 'intelligence'; // Associated attribute
  description: string;
  tools?: string; // Required tools for the trade
}

// Interface for Language Data
export interface ILanguageData {
  id: string;
  name: string;
  type: 'standard' | 'exotic'; // Type of language
  description: string;
}
````

## File: src/routes/api/character/progress/stageA/+server.ts
````typescript
import { json, error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Constants for validation (should ideally be shared or sourced from rules data)
const ATTRIBUTE_MIN = -2;
const ATTRIBUTE_MAX_L1 = 3;
const POINT_BUY_BUDGET = 12;

export async function POST({ request }) {
  try {
    const { characterId, finalName, attribute_might, attribute_agility, attribute_charisma, attribute_intelligence } = await request.json();

    // Backend Validation
    if (!finalName || typeof finalName !== 'string' || finalName.trim().length === 0) {
        return error(400, { message: 'Character name is required.' });
    }
    // Optional: Add length constraints or character restrictions for finalName

    const attributes = {
      might: attribute_might,
      agility: attribute_agility,
      charisma: attribute_charisma,
      intelligence: attribute_intelligence,
    };

    // Validate attribute ranges
    for (const [name, value] of Object.entries(attributes)) {
      if (value < ATTRIBUTE_MIN || value > ATTRIBUTE_MAX_L1) {
        return error(400, { message: `Attribute ${name} is out of the allowed range (-2 to +3).` });
      }
    }

    // Validate total points spent
    const pointsSpent = (attributes.might - ATTRIBUTE_MIN) +
                        (attributes.agility - ATTRIBUTE_MIN) +
                        (attributes.charisma - ATTRIBUTE_MIN) +
                        (attributes.intelligence - ATTRIBUTE_MIN);

    if (pointsSpent !== POINT_BUY_BUDGET) {
      return error(400, { message: `Total points allocated must be exactly ${POINT_BUY_BUDGET}. You allocated ${pointsSpent}.` });
    }

    let updatedCharacter;

    if (characterId) {
      // Update existing character progress
      updatedCharacter = await prisma.characterInProgress.update({
        where: { id: characterId },
        data: {
          finalName: finalName.trim(), // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent, // Store points spent for consistency, though backend validates
          level: 1, // Hardcoded to 1 for MVP
          combatMastery: 1, // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]), // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]), // Initialize selected feature choices
          currentStep: 1, // Mark Stage A as complete
        },
      });
    } else {
      // Create new character progress (handles TD-002 for the first save)
      updatedCharacter = await prisma.characterInProgress.create({
        data: {
          finalName: finalName.trim(), // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent,
          level: 1, // Hardcoded to 1 for MVP
          combatMastery: 1, // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]), // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]), // Initialize selected feature choices
          currentStep: 1, // Mark Stage A as complete
        },
      });
      // Note: The frontend will need to update its store with this new ID
    }


    // Return success response with the character ID
    return json({ success: true, characterId: updatedCharacter.id });

  } catch (e) {
    console.error('Backend error saving Stage A data:', e);
    // Handle Prisma errors or other exceptions
    if (e instanceof Error) {
       return error(500, { message: `Internal server error: ${e.message}` });
    }
    return error(500, { message: 'An unknown error occurred while saving attributes.' });
  } finally {
    await prisma.$disconnect();
  }
}
````

## File: .svelte-kit/generated/client/app.js
````javascript
export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/character-creator": [3],
		"/character-creator/stage-a": [4],
		"/character-creator/stage-b": [5],
		"/test-ui": [6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';
````

## File: package.json
````json
{
  "type": "module",
  "devDependencies": {
    "@melt-ui/pp": "^0.3.2",
    "@sveltejs/adapter-auto": "^6.0.1",
    "@sveltejs/kit": "^2.21.5",
    "@sveltejs/vite-plugin-svelte": "^5.1.0",
    "@tailwindcss/typography": "^0.5.14",
    "autoprefixer": "^10.4.20",
    "prisma": "^6.7.0",
    "svelte": "^5.28.2",
    "tailwindcss": "^3.4.9",
    "vite": "^6.3.5"
  },
  "scripts": {
    "dev": "vite dev",
    "build": "vite build"
  },
  "dependencies": {
    "@melt-ui/svelte": "^0.86.6",
    "@prisma/client": "^6.7.0"
  }
}
````

## File: src/lib/rulesdata/classes.ts
````typescript
import type { IClassDefinition } from './types.js';

// IClassDefinition for Barbarian:
export const barbarianClass: IClassDefinition = {
  id: 'barbarian',
  name: 'Barbarian',
  description: 'Barbarians charge into battle with reckless abandon, ignoring their own safety as they brush off damage and deal even more in return. They trade defense for more offense and let out blood-crazed battle cries.',
  baseHpContribution: 9, // From class table p.118
  startingSP: 1, // From class table p.118
  startingMP: 0,
  skillPointGrantLvl1: 0,
  tradePointGrantLvl1: 0,
  combatTraining: ['Weapons', 'All Armor', 'All Shields'], // From p.118 "Barbarian Martial Path"
  maneuversKnownLvl1: 'All Attack', // From p.118 "Maneuvers Known" - "All Attack"
  techniquesKnownLvl1: 0, // From p.118 "Techniques Known" - 0
  saveDCBase: 8, // From p.118 "Save DC" - 8
  deathThresholdBase: 10, // From p.118 "Death Threshold" - 10
  moveSpeedBase: 30, // From p.118 "Move Speed" - 30
  restPointsBase: 4, // From p.118 "Rest Points" - 4
  gritPointsBase: 2, // From p.118 "Grit Points" - 2
  initiativeBonusBase: 0, // From p.118 "Initiative Bonus" - 0
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'barbarian_rage',
      name: 'Rage',
      level: 1,
      description: 'During Combat, you can spend 1 AP and 1 SP to enter a Rage for 1 minute. For the duration, you’re subjected to the following effects: You deal +1 damage on Melee Martial Attacks. You have ADV on Might Saves. Your PD decreases by 5. You gain Resistance (Half) to Elemental and Physical damage. Ending Early: Your Rage ends early if you fall Unconscious, die, or you choose to end it for free on your turn.',
      effects: [
          { type: 'GRANT_ABILITY', value: 'Rage_Mechanics_Bundle' } // Complex ability
      ]
    },
    {
      id: 'barbarian_berserker',
      name: 'Berserker',
      level: 1,
      description: 'Your primal savagery grants you the following benefits: Charge: When you make a Melee Martial Attack on your turn, you can move up to 2 Spaces immediately before making the Attack. Berserker Defense: While you aren’t wearing Armor you gain +2 AD. Fast Movement: You gain +1 Speed while not wearing Armor. Mighty Leap: You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling.',
      effects: [
        { type: 'GRANT_ABILITY', subFeature: 'Charge', descriptionOverride: 'Move 2 Spaces before Melee Martial Attack.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Berserker_Defense', descriptionOverride: '+2 AD when not wearing Armor.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Fast_Movement', descriptionOverride: '+1 Speed when not wearing Armor.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Mighty_Leap', descriptionOverride: 'Use Might for Jump Distance & Falling Damage calc.' }
      ]
    },
    {
      id: 'barbarian_shattering_force',
      name: 'Shattering Force (Flavor)',
      level: 1,
      description: 'When you Hit a structure or mundane object with a Melee Attack, it’s considered a Critical Hit.',
      effects: [{ type: 'FLAVOR_MECHANIC_NOTE', value: 'Melee attacks vs objects/structures are Critical Hits.' }]
    }
  ],
  featureChoicesLvl1: [] // No explicit user choices for L1 features for Barbarian
};

// IClassDefinition for Sorcerer:
export const sorcererClass: IClassDefinition = {
  id: 'sorcerer',
  name: 'Sorcerer',
  description: 'Sorcerers tap into the raw magic in their own bodies as a conduit to harness, manipulate, and sculpt magic with wild resolve. They can overload themselves and even cast Spells without Mana, pushing the limits of magic and their own bodies.',
  baseHpContribution: 8, // From class table p.149 Lvl 1 HP
  startingSP: 0,
  startingMP: 6, // From class table p.149 Lvl 1 MP
  skillPointGrantLvl1: 0, // From class table p.149
  tradePointGrantLvl1: 0, // From class table p.149
  combatTraining: ['Light Armor'], // From p.149 "Sorcerer Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.149
  techniquesKnownLvl1: 0, // From class table p.149
  cantripsKnownLvl1: 2, // From class table p.149
  spellsKnownLvl1: 3,   // From class table p.149
  saveDCBase: 8, // From p.149 "Save DC" - 8
  deathThresholdBase: 10, // From p.149 "Death Threshold" - 10
  moveSpeedBase: 30, // From p.149 "Move Speed" - 30
  restPointsBase: 4, // From p.149 "Rest Points" - 4
  gritPointsBase: 2, // From p.149 "Grit Points" - 2
  initiativeBonusBase: 0, // From p.149 "Initiative Bonus" - 0
  level1Features: [
    {
      id: 'sorcerer_innate_power',
      name: 'Innate Power',
      level: 1,
      description: 'Choose a Sorcerous Origin that grants you a benefit: Intuitive Magic, Resilient Magic, or Unstable Magic. Additionally, you gain the following benefits: Your Maximum MP increases by 1. Once per Long Rest, you can use a 1 MP Spell Enhancement without spending any MP (up to your Mana Spend Limit). You regain the ability to use this benefit when you roll for Initiative.',
      effects: [
          { type: 'MODIFY_MP_MAX', value: 1 },
          { type: 'GRANT_ABILITY', value: 'Free_1MP_Spell_Enhancement_Once_Per_Long_Rest' }
      ]
    },
    {
      id: 'sorcerer_overload_magic',
      name: 'Overload Magic',
      level: 1,
      description: 'You can spend 2 AP in Combat to channel raw magical energy for 1 minute, or until you become Incapacitated, die, or choose to end it early at any time for free. For the duration, your magic is overloaded and you’re subjected to the following effects: You gain +5 to all Spell Checks you make. You must immediately make an Attribute Save (your choice) against your Save DC upon using this Feature, and again at the start of each of your turns. Failure: You gain Exhaustion. You lose any Exhaustion gained in this way when you complete a Short Rest.',
      effects: [{ type: 'GRANT_ABILITY', value: 'Overload_Magic_Mechanics_Bundle' }]
    },
    {
      id: 'sorcerer_sorcery_flavor',
      name: 'Sorcery (Flavor)',
      level: 1,
      description: 'You learn the Sorcery Spell.',
      effects: [{ type: 'GRANT_SPELL_KNOWN', value: 'sorcery_cantrip_id' }]
    }
  ],
  featureChoicesLvl1: [
    {
      id: 'sorcerous_origin_choice', // Key for storing choice
      prompt: 'Choose your Sorcerous Origin (DC20 p.150):',
      type: 'select_one',
      options: [
        { value: 'intuitive_magic', label: 'Intuitive Magic', description: 'You learn an additional Spell and Cantrip from your Sorcerer Spell List.', effectsOnChoice: [{ type: 'GRANT_BONUS_SPELL_KNOWN' }, { type: 'GRANT_BONUS_CANTRIP_KNOWN'}] },
        { value: 'resilient_magic', label: 'Resilient Magic', description: 'You gain Dazed Resistance.', effectsOnChoice: [{ type: 'GRANT_CONDITION_RESISTANCE', target: 'Dazed'}] },
        { value: 'unstable_magic', label: 'Unstable Magic', description: 'When you Critically Succeed or Fail on a Spell Check, roll on the Wild Magic Table...', effectsOnChoice: [{ type: 'ENABLE_WILD_MAGIC_TABLE_ON_CRIT_SPELL_CHECK'}] }
      ]
    },
    {
      id: 'sorcerer_spell_list_choice', // Key for storing choice
      prompt: 'Choose Your Sorcerer Spell List (DC20 p.149):',
      type: 'select_one',
      options: [
        { value: 'arcane', label: 'Arcane Spell List' },
        { value: 'divine', label: 'Divine Spell List' },
        { value: 'primal', label: 'Primal Spell List' }
      ]
    }
  ]
};

// IClassDefinition for Bard:
export const bardClass: IClassDefinition = {
  id: 'bard',
  name: 'Bard',
  description: 'Bards utilize artistic expression through various forms to connect with the emotions and heart of magic. This includes a wide range of mediums such as musical instruments, singing, dancing, drawing, painting, sculpting, poetry, storytelling, inspirational speech, and more. They are great at bringing the best out in those around them through both helping and performing, showcasing high proficiency across multiple disciplines. Bards are remarkably flexible and adaptable spellcasters, capable of tapping into a wide array of magical abilities with the appropriate artistic expression.',
  baseHpContribution: 8, // From class table p.121
  startingSP: 0, // From class table p.121
  startingMP: 6, // From class table p.121
  skillPointGrantLvl1: 2, // From class table p.121
  tradePointGrantLvl1: 3, // From class table p.121
  combatTraining: ['Light Armor', 'Light Shields'], // From p.121 "Bard Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.121
  techniquesKnownLvl1: 0, // From class table p.121
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.121
  spellsKnownLvl1: 3,   // From class table p.121
  level1Features: [
    {
      id: 'bard_font_of_inspiration',
      name: 'Font of Inspiration',
      level: 1,
      description: 'You are an ever present source of aid for your allies. You gain the following benefits: Ranged Help Attack: The range of your Help Action when aiding an Attack increases to 10 Spaces. Help Reaction: When a creature you can see makes a Check, you can take the Help Action as a Reaction to aid them with their Check, provided you’re within range to do so.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'bard_remarkable_repertoire',
      name: 'Remarkable Repertoire',
      level: 1,
      description: 'You’ve picked up a few tricks along your travels, granting you the following benefits: Jack of All Trades: You gain 2 Skill Points. Magical Secrets: You learn any 2 Spells of your choice from any Spell List. Magical Expression: You learn to express your art in a unique manner, granting you the ability to alter how you cast Spells. Choose the manner of your expression: Visual or Auditory.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'bard_crowd_pleaser',
      name: 'Crowd Pleaser (Flavor Feature)',
      level: 1,
      description: 'When you spend at least 5 minutes performing an Artistry Trade for one or more people who are actively watching or listening to your performance, you can make an Artistry Trade Check Contested by the targets’ Charisma Save. Success: You gain ADV on Charisma Checks against the target for 1 hour or until you become hostile. Creatures have ADV on the Save if they’re considered hostile toward you.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Bard on p.122
};

// IClassDefinition for Champion:
export const championClass: IClassDefinition = {
  id: 'champion',
  name: 'Champion',
  description: 'Champions are weapon and armor specialists that push themselves to the limit in combat. They are able to master a wide variety of weapon types and learn their enemies as they fight them.',
  baseHpContribution: 9, // From class table p.124
  startingSP: 1, // From class table p.124
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.124
  tradePointGrantLvl1: 0, // From class table p.124
  combatTraining: ['Weapons', 'All Armors', 'All Shields'], // From p.124 "Champion Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.124
  techniquesKnownLvl1: 0, // From class table p.124
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'champion_master_at_arms',
      name: 'Master-at-Arms',
      level: 1,
      description: 'Your training in warfare has granted you greater offense, defense, and movement. Weapon Master: At the start of each of your turns, you can freely swap any Weapon you’re currently wielding in each hand for any other Weapon without provoking Opportunity Attacks. Maneuver Master: You learn 2 Maneuvers of your choice. Technique Master: You learn 1 Technique of your choice. Once per Combat, when you perform a Technique you can reduce its SP cost by 1.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'champion_fighting_spirit',
      name: 'Fighting Spirit',
      level: 1,
      description: 'You stand ready for Combat at any moment, granting you the following benefits: Combat Readiness: At the start of your first turn in Combat, you gain one of the following benefits: Brace: You gain the benefits of the Dodge Action and ADV on the next Save you make until the end of Combat. Advance: You gain the benefits of the Move Action and ADV on the next Physical Check you make until the end of Combat. Second Wind: Once per Combat when you start your turn Bloodied, you can regain 2 HP and 1 SP.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'champion_know_your_enemy',
      name: 'Know Your Enemy (Flavor Feature)',
      level: 1,
      description: 'You can spend 1 minute observing or interacting with a creature out of Combat (or spend 1 AP in Combat) to learn information about its physical capabilities compared to your own. Choose one of the following stats of the creature to assess: Might, Agility, PD, AD, and HP. Make a DC 10 Knowledge or Insight Check (your choice). Success: You learn if the chosen stat is higher, lower, or the same as yours.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Champion on p.125
};

// IClassDefinition for Cleric:
export const clericClass: IClassDefinition = {
  id: 'cleric',
  name: 'Cleric',
  description: 'Clerics can reach out and call upon the power of a deity to aid them in battle and to support them and their allies. Clerics can range from a knowledgeable priest, to a knight in holy armor. They reach out to heir deity to empower their magic in ways mortals normally cannot.',
  baseHpContribution: 8, // From class table p.127
  startingSP: 0, // From class table p.127
  startingMP: 6, // From class table p.127
  skillPointGrantLvl1: 2, // From class table p.127
  tradePointGrantLvl1: 3, // From class table p.127
  combatTraining: ['Light Armor', 'Light Shields'], // From p.127 "Cleric Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.127
  techniquesKnownLvl1: 0, // From class table p.127
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.127
  spellsKnownLvl1: 3,   // From class table p.127
  level1Features: [
    {
      id: 'cleric_cleric_order',
      name: 'Cleric Order',
      level: 1,
      description: 'Your connection to your deity grants you the following benefits: Divine Damage: Choose an Elemental or Mystical damage type. The chosen damage type becomes your Divine Damage which is used for some Cleric Features. Divine Domain: You gain the benefits of 2 Divine Domains of your choice.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'cleric_divine_blessing',
      name: 'Divine Blessing',
      level: 1,
      description: 'You can spend 1 AP to say a prayer and petition your deity for their divine blessing. Choose 1 of the blessings listed below. Each blessing has a listed MP cost that you must spend to gain the blessing. Once during the next minute, you can apply the blessing to a Spell you cast. If your Spell targets more than 1 creature, the blessing only applies to 1 target of your choice. Unused Blessing: You can only have 1 blessing at a time. If you petition your deity for a blessing while you already have a blessing, the first blessing immediately ends without granting any benefit. If the blessing ends without granting any benefit, you regain the MP spent to gain the blessing.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'cleric_divine_omen',
      name: 'Divine Omen (Flavor Feature)',
      level: 1,
      description: 'Once per Long Rest, you can spend 10 minutes to commune with your Deity. Question: You can ask them 1 question, which must be posed in a way that could be answered with a yes or no. Response: The deity responds to the best of their knowledge and intentions in one of the following responses: Yes, No, or Unclear. Communing Again: If you commune with your deity more than once per Long Rest, you must make a DC 15 Spell Check. Failure: You receive no answer. Each time you commune again before you complete a Long Rest, the DC increases by 5.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Cleric on p.128
};

// IClassDefinition for Commander:
export const commanderClass: IClassDefinition = {
  id: 'commander',
  name: 'Commander',
  description: 'Commanders are the leaders of the battlefield, inspiring their allies and leading them to victory. They can command their allies to attack or move around the battlefield, and are even able to “heal” allies by making them dig deep within themselves to push forward in combat.',
  baseHpContribution: 9, // From class table p.131
  startingSP: 1, // From class table p.131
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.131
  tradePointGrantLvl1: 0, // From class table p.131
  combatTraining: ['Weapons', 'All Armor', 'All Shields'], // From p.131 "Commander Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.131
  techniquesKnownLvl1: 0, // From class table p.131
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'commander_inspiring_presence',
      name: 'Inspiring Presence',
      level: 1,
      description: 'Whenever you spend SP while in Combat, you can restore an amount of HP equal to the SP spent. Choose any creatures within 5 Spaces that can see or hear you, and divide the HP among them.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'commander_commanders_call',
      name: 'Commander’s Call',
      level: 1,
      description: 'You can spend 1 AP and 1 SP to command a willing creature that you can see within 5 Spaces that can also see or hear you. The chosen creature can immediately take 1 of the following Actions of your choice as a Reaction for free. You can only use each of the following commands once on each of your turns: Attack: The creature makes an Attack with ADV. They can’t spend any resources on this Attack, such as AP, SP, or MP. Dodge: The creature takes the Full Dodge Action. Move: The creature moves up to their Speed without provoking Opportunity Attacks.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'commander_natural_leader',
      name: 'Natural Leader (Flavor Feature)',
      level: 1,
      description: 'You have ADV on Checks made to convince creatures that you are an authority figure. Additionally, you have ADV on the first Charisma Check made to interact with non-hostile members of military groups (such as soldiers, guards, etc.).',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Commander on p.132
};

// IClassDefinition for Druid:
export const druidClass: IClassDefinition = {
  id: 'druid',
  name: 'Druid',
  description: 'Druids tap into the power of nature, drawing upon the energies that flow through the world and creatures around them. and connect to plants, animals, and the plane itself. They can channel both the restorative and destructive forces of nature and shapeshift into wild beasts.',
  baseHpContribution: 8, // From class table p.134
  startingSP: 0, // From class table p.134
  startingMP: 6, // From class table p.134
  skillPointGrantLvl1: 2, // From class table p.134
  tradePointGrantLvl1: 3, // From class table p.134
  combatTraining: ['Light Armor'], // From p.134 "Druid Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.134
  techniquesKnownLvl1: 0, // From class table p.134
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.134
  spellsKnownLvl1: 3,   // From class table p.134
  level1Features: [
    {
      id: 'druid_druid_domain',
      name: 'Druid Domain',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to create your own Druid Domain that includes small plant life, sand, shallow water, or other naturally occurring features. You create up to 8 Domain Spaces along the ground or walls. The first Domain Space must be within 1 Space of you, and each additional Domain Space must be adjacent to another Domain Space. If you use this Feature again, the first Domain Space of it must be within 1 Space of you or another Domain Space. Domain Spaces: The area is considered to be Difficult Terrain for creatures of your choice, and when you cast a Spell, you can do so as if you were standing in any Space within your Domain. Losing Domain Spaces: A Domain Space also disappears if you end your turn farther than 15 Spaces away from it or you die. Domain Actions: While you have Domain Spaces, you can take any of the following Domain Actions: Nature’s Grasp, Move Creature, Move Object, Wild Growth.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'druid_wild_form',
      name: 'Wild Form',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to transform into a Wild Form of your choice. You can spend 1 AP on your turn to shift back and forth between your True Form and any Wild Forms you currently have available. Once per Long Rest, you can transform without spending MP or using MP enhancements. True Form: When you transform from your Wild Form to your True Form, your statistics return to normal. You immediately revert to your True Form when your Wild Form HP is reduced to 0 or you die. Wild Form: When you transform into a Wild Form, you gain the Wild Form’s current Wild Form HP (see Wild Form HP below), retaining any HP losses. Duration: Each Wild Form remains available until its Wild Form HP is reduced to 0 or you complete a Long Rest. Multiple Forms: You can have multiple Wild Forms available at a time which have their own Wild Form HP and Traits. Equipment: Your equipment falls to the ground or merges into your Wild Form (your choice for each item). You gain the benefits of Magic Items merged with your Wild Form, but you can’t activate them or spend their charges. Statistics: While in your Wild Form, you’re subjected to the following changes (unless otherwise stated): Stat Block: You use the Wild Form Stat Block below to determine your statistics. Identity: You maintain your personality, intellect, and ability to speak. Wild Form HP: You gain a secondary pool of Wild Form Health Points, which is 3 with a maximum of 3. Damage and healing effects target your Wild Form HP before your True Form HP, and any excess damage or healing carries over to your own HP. Natural Weapon: You have Natural Weapons (claws, horns, fangs, etc.) which you can use to make Unarmed Strikes that deal 1 Bludgeoning, Piercing, or Slashing damage (your choice when you use this Feature). Features & Talents: You don’t benefit from Talents or Class Features, except Druid Class Features, Subclass Features, and Talents. Additionally, you can’t cast Spells or perform Techniques. Traits: You don’t benefit from your Ancestry Traits, but you gain 3 Trait Points to spend on Beast Traits or Wild Form Traits of your choice. You can’t select negative Beast Traits. When you use this Feature, you can spend additional MP (up to your Mana Spend Limit) to gain 2 additional Trait Points per MP spent.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'druid_wild_speech',
      name: 'Wild Speech (Flavor Feature)',
      level: 1,
      description: 'You learn the Druidcraft Cantrip and can choose 1 of the following options: Animals: You can understand and speak with Beasts in a limited manner. You can understand the meaning of their movements, sounds, and behaviors, and they can understand the meanings of simple words, concepts, and emotions. Plants: You can understand and speak with Plants in a limited manner. You can understand the meaning of their swaying, folding, unfolding of their leaves and flowers, and they can understand the meanings of simple words, concepts, and emotions. Weather: You can reach out to nature and cast the Commune with Nature Spell as a Ritual once per Long Rest.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Druid on p.135
};

// IClassDefinition for Hunter:
export const hunterClass: IClassDefinition = {
  id: 'hunter',
  name: 'Hunter',
  description: 'Hunters are master survivalists and natural explorers. They mark their targets to better track them and take them down, using their mastery over terrain, traps, and weapons to their advantage.',
  baseHpContribution: 9, // From class table p.139
  startingSP: 1, // From class table p.139
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.139
  tradePointGrantLvl1: 0, // From class table p.139
  combatTraining: ['Weapons', 'Light Armor', 'Light Shields'], // From p.139 "Hunter Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.139
  techniquesKnownLvl1: 0, // From class table p.139
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'hunter_hunters_mark',
      name: 'Hunter’s Mark',
      level: 1,
      description: 'You can spend 1 AP and 1 SP to focus on and mark a creature you can see within 15 Spaces as your quarry. Alternatively, you can mark a creature by studying its tracks for at least 1 minute. While a creature is marked, you gain the following benefits: You have ADV on Awareness and Survival Checks made to find the target. The first Martial Attack against your target on your turn has ADV and ignores PDR. When you score a Heavy or Critical Hit against the target, you automatically grant a d8 Help Die to the next Attack made against the target before the start of your next turn. The target is marked as long as it’s on the same Plane of Existence as you, and vanishes early if you complete a Long Rest, fall Unconscious, or use this Feature again to mark another creature.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'hunter_favored_terrain',
      name: 'Favored Terrain',
      level: 1,
      description: 'You are particularly familiar with two types of environments and are adept at the skills unique to the region. Choose 2 types of Favored Terrain listed below. Coast, Desert, Forest, Grassland, Jungle, Mountain, Swamp, Tundra, Subterranean, Urban. Additionally, while you’re in one of your Favored Terrains, you have ADV on Stealth and Survival Checks and can’t be Surprised.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'hunter_bestiary',
      name: 'Bestiary (Flavor Feature)',
      level: 1,
      description: 'You have developed a trove of knowledge hunting creatures which you’ve recorded in your Bestiary. Your Bestiary can take the form of a book, a memory vault within your mind, or some other representation of your choice. You have ADV on Checks made to learn or recall information about any creature recorded in your Bestiary. Starting Entries: Choose a Creature Type: Aberration, Beast, Celestial, Construct, Dragon, Elemental, Fey, Fiend, Giant, Humanoid, Monstrosity, Ooze, Plant, or Undead. Your Bestiary includes prerecorded notes about various creatures of the chosen type. Making New Entries: You can spend 10 minutes of Light Activity recording information into your Bestiary about a specific creature you have slain within the last 24 hours.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Hunter on p.139
};

// IClassDefinition for Monk:
export const monkClass: IClassDefinition = {
  id: 'monk',
  name: 'Monk',
  description: 'Monks are master martial artists that perfect their mind and bodies utilizing the ebb and flow of their inner energy. They use their body as a weapon and can enter into different stances that drastically change their combat abilities.',
  baseHpContribution: 9, // From class table p.143
  startingSP: 1, // From class table p.143
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.143
  tradePointGrantLvl1: 0, // From class table p.143
  combatTraining: ['Weapons', 'Light Armor'], // From p.143 "Monk Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.143
  techniquesKnownLvl1: 0, // From class table p.143
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'monk_monk_training',
      name: 'Monk Training',
      level: 1,
      description: 'Your martial arts training grants you greater offense, defense, and movement. Iron Palm: Your limbs are considered Natural Weapons with the Impact Property that deal 1 Bludgeoning damage. Patient Defense: While you aren’t wearing Armor you gain +2 PD. Step of the Wind: While you aren’t wearing Armor, you gain the following benefits: You gain +1 Speed and Jump Distance. You can move a number of Spaces up to your Speed along vertical surfaces and across liquids without falling during your move. You can use your Prime Modifier instead of Agility to determine your Jump Distance and the damage you take from Falling.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'monk_monk_stance',
      name: 'Monk Stance',
      level: 1,
      description: 'You learn 2 Monk Stances from the list below. Entering & Exiting: In Combat, at the start of each of your turns you can freely enter or swap into one of your Monk Stances. You can also spend 1 SP on your turn to swap to a different stance. You can end your Stance at any moment for free. You can only be in 1 Monk Stance at a time. Bear Stance, Bull Stance, Cobra Stance, Gazelle Stance, Mantis Stance, Mongoose Stance, Scorpion Stance, Turtle Stance, Wolf Stance.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'monk_meditation',
      name: 'Meditation (Flavor Feature)',
      level: 1,
      description: 'You can enter a state of meditation during a Short Rest (1 hour) or longer. Choose 1 Charisma or Intelligence Skill. When you complete the Rest, your Skill Mastery level increases by 1 (up to your Skill Mastery Cap) for the chosen Skill until you complete another Short or longer Rest. While meditating, you remain alert to danger.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Monk on p.144
};

// IClassDefinition for Rogue:
export const rogueClass: IClassDefinition = {
  id: 'rogue',
  name: 'Rogue',
  description: 'Rogues are skilled, evasive, and cunning. They impose conditions onto enemies, then exploit those weaknesses to inflict even more harm.',
  baseHpContribution: 9, // From class table p.146
  startingSP: 1, // From class table p.146
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.146
  tradePointGrantLvl1: 0, // From class table p.146
  combatTraining: ['Weapons', 'Light Armor', 'Light Shields'], // From p.146 "Rogue Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.146
  techniquesKnownLvl1: 0, // From class table p.146
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'rogue_debilitating_strike',
      name: 'Debilitating Strike',
      level: 1,
      description: 'When you make an Attack with a Weapon, you can spend 1 SP to force the target to make a Physical Save against your Save DC. Save Failure: Until the start of your next turn, the target suffers 1 of the following effects of your choice: Deafened, Exposed, Hindered, or Slowed 2. A target can’t be affected by the same option more than once at a time.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'rogue_roguish_finesse',
      name: 'Roguish Finesse',
      level: 1,
      description: 'Cunning Action: You gain movement equal to half your Speed when you take the Disengage, Feint, or Hide Actions. You can use this movement immediately before or after you take the Action. Skill Expertise: Your Skill Mastery Limit increases by 1, up to Grandmaster (+10). A Skill can only benefit from one increase to its Mastery limit. Multi-Skilled: You gain 1 Skill Point.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'rogue_cypher_speech',
      name: 'Cypher Speech (Flavor Feature)',
      level: 1,
      description: 'You become Fluent in a Mortal Language of your choice. Additionally, you understand how to speak in code with a specific demographic of your choice (such as upper society, lower society, a faction, etc.). Your coded messages can be concealed in normal conversation and written communications. This allows you to leave simple messages such as “Safety”, “Threat”, or “Wealth”, or mark the location of a cache, a secret passageway, a safehouse, or an area of danger.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Rogue on p.147
};

// IClassDefinition for Spellblade:
export const spellbladeClass: IClassDefinition = {
  id: 'spellblade',
  name: 'Spellblade',
  description: 'Spellblades combine their combat prowess with their ability to harness and channel magic into weapons. They can form a bond with a weapon to imbue it with damage, call it back to them, and more. Spellblades can learn a wide range of disciplines depending on their unique combination of martial and spellcasting prowess. They even gain the ability to cast spells through their weapons.',
  baseHpContribution: 9, // From class table p.153
  startingSP: 1, // From class table p.153
  startingMP: 3, // From class table p.153
  skillPointGrantLvl1: 0, // From class table p.153
  tradePointGrantLvl1: 0, // From class table p.153
  combatTraining: ['Weapons', 'Light Armor', 'Light Shields'], // From p.153 "Spellblade Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.153
  techniquesKnownLvl1: 0, // From class table p.153
  saveDCBase: 8, // General for Hybrid Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 1, // From class table p.153
  spellsKnownLvl1: 1,   // From class table p.153
  level1Features: [
    {
      id: 'spellblade_bound_weapon',
      name: 'Bound Weapon',
      level: 1,
      description: 'During a Quick Rest, you can magically bond with 1 Weapon and choose an Elemental or Mystical damage type to become your Bound Damage type. This bond lasts until you end it for free or use this feature again. Your Bound Weapon gains the following properties: Smite, Illuminate, Recall. Ending Early: Your bond with the Weapon ends early if you use this Feature again, or you choose to end it for free.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'spellblade_spellblade_disciplines',
      name: 'Spellblade Disciplines',
      level: 1,
      description: 'You learn 2 Spellblade Disciplines from the list below. Magus, Warrior, Acolyte, Hex Warrior, Spell Breaker, Spell Warder, Blink Blade.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'spellblade_sense_magic',
      name: 'Sense Magic (Flavor Feature)',
      level: 1,
      description: 'You can spend 1 minute focusing your mind to detect the following creature types within 20 Spaces: Aberration, Celestial, Elemental, Fey, Fiend, or Undead. Make a Spell Check against each creature’s Mental Save. Check Success: You learn the target’s creature type and know its location until the end of your next turn. Check Failure: You learn nothing and can’t use this Feature against the target again until you complete a Long Rest.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Spellblade on p.154
};

// IClassDefinition for Warlock:
export const warlockClass: IClassDefinition = {
  id: 'warlock',
  name: 'Warlock',
  description: 'Warlocks make a pact with a powerful entity that grants them magic. Their body and soul are a part of this contract and as such, they can tap into their own life force to enhance and amplify their magic and capabilities as well as drain the life force of other living creatures. They also choose a type of pact to be made that grants more powers.',
  baseHpContribution: 9, // From class table p.158
  startingSP: 0, // From class table p.158
  startingMP: 6, // From class table p.158
  skillPointGrantLvl1: 0, // From class table p.158
  tradePointGrantLvl1: 0, // From class table p.158
  combatTraining: ['Light Armor'], // From p.158 "Warlock Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.158
  techniquesKnownLvl1: 0, // From class table p.158
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.158
  spellsKnownLvl1: 3,   // From class table p.158
  level1Features: [
    {
      id: 'warlock_warlock_contract',
      name: 'Warlock Contract',
      level: 1,
      description: 'You have a binding agreement with your patron that allows you to make sacrifices in exchange for boons. Hasty Bargain: Once per turn when you make a Check, you can spend 1 HP to gain ADV on the Check. Desperate Bargain: Once per Combat, you can spend 1 AP to regain an amount of HP equal to your Prime Modifier. When you do, you become Exposed until the end of your next turn.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'warlock_pact_boon',
      name: 'Pact Boon',
      level: 1,
      description: 'You gain a Pact Boon from your Patron. Choose 1 of the following options: Weapon, Armor, Cantrip, or Familiar.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'warlock_beseech_patron',
      name: 'Beseech Patron (Flavor Feature)',
      level: 1,
      description: 'During a Long Rest, while sleeping or meditating, you can access an Inner Sanctum within your mind. Its appearance is influenced by your psyche and is subject to change. While inside your Inner Sanctum, you can attempt to contact your Patron. If they choose to respond, they enter your mind and you might possibly be able to see or hear them. While connected to your Patron in this way, you’re aware of your surroundings but you can’t take actions or move. Your Patron chooses when to end the connection, or you can make a Mental Save against your own Save DC to force the connection to end.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Warlock on p.159
};

// IClassDefinition for Wizard:
export const wizardClass: IClassDefinition = {
  id: 'wizard',
  name: 'Wizard',
  description: 'Wizards learn to master each of the Spell Schools to control them in a structured and efficient way. They utilize sigils on the ground to enhance certain types of magic while they push spells to their limits.',
  baseHpContribution: 8, // From class table p.162
  startingSP: 0, // From class table p.162
  startingMP: 6, // From class table p.162
  skillPointGrantLvl1: 2, // From class table p.162
  tradePointGrantLvl1: 3, // From class table p.162
  combatTraining: ['Light Armor'], // From p.162 "Wizard Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.162
  techniquesKnownLvl1: 0, // From class table p.162
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.162
  spellsKnownLvl1: 3,   // From class table p.162
  level1Features: [
    {
      id: 'wizard_spell_school_initiate',
      name: 'Spell School Initiate',
      level: 1,
      description: 'You’ve completed training in a specialized School of Magic. Choose a Spell School. You gain the following benefits: School Magic: You learn 1 Arcane Cantrip and 1 Arcane Spell from this Spell School. Signature School: When you cast a Spell from the chosen School, you can reduce its MP cost by 1. Its total MP cost before the reduction still can’t exceed your Mana Spend Limit. You can use this Feature once per Long Rest, but regain the ability to use it again when you roll for Initiative.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'wizard_arcane_sigil',
      name: 'Arcane Sigil',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to create a 1 Space diameter Arcane Sigil on the ground beneath you that lasts for 1 minute. When you create an Arcane Sigil choose 1 Spell School (Enchantment, Necromancy, Protection, etc.) or 1 Spell Tag (Fire, Cold, Teleportation, etc.). The Arcane Sigil radiates magic of the chosen type. Using a Sigil: While a creature is within the area of your Arcane Sigil, it has ADV on Spell Checks to cast or produce the effects of Spells with the chosen Spell School or Spell Tag. Moving a Sigil: You can spend 1 AP to teleport one of your Sigils within 10 spaces to your current space, but multiple Sigils can’t coexist in the same Space.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'wizard_ritual_caster',
      name: 'Ritual Caster (Flavor Feature)',
      level: 1,
      description: 'You learn 1 Arcane Spell with the Ritual Spell Tag each time you gain a Wizard Class Feature (including this one). You can only gain this benefit once per Level. Additionally, when you encounter an Arcane Spell with the Ritual Spell Tag in a form you can study (such as a spellbook, a spell scroll, or from an instructor), you can spend a number of hours equal to the Spell’s base MP cost to learn it. You can only cast Spells you learn with this feature as Rituals, unless you learned it from another source.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Wizard on p.163
};


export const classesData: IClassDefinition[] = [
  barbarianClass,
  sorcererClass,
  bardClass,
  championClass,
  clericClass,
  commanderClass,
  druidClass,
  hunterClass,
  monkClass,
  rogueClass,
  spellbladeClass,
  warlockClass,
  wizardClass,
  // Add other classes here as they are populated
];
````

## File: src/lib/stores/characterInProgressStore.ts
````typescript
// src/lib/stores/characterInProgressStore.ts

import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { CharacterInProgress } from '@prisma/client'; // Assuming Prisma client is generated
import { classesData } from '../rulesdata/classes';

// Define the shape of the data stored in the characterInProgressStore
// This should mirror the CharacterInProgress Prisma model, plus any UI state
interface CharacterInProgressStoreData extends CharacterInProgress {
  // Add any UI-specific state here if needed, e.g., current step in wizard
  currentStep: number;
  // Add temporary state for trait selection overflow
  overflowTraitId: string | null;
  overflowAttributeName: string | null;
  // Add Level and Combat Mastery
  level: number;
  combatMastery: number; // Derived, but included in interface for clarity
}

// Initial state for the store, matching Prisma defaults and adding UI state
const initialCharacterInProgressState: CharacterInProgressStoreData = {
  id: '', // Will be set when a new character is started/loaded
  attribute_might: -2,
  attribute_agility: -2,
  attribute_charisma: -2,
  attribute_intelligence: -2,
  pointsSpent: 0,

  // Core Stats
  level: 1, // Default to Level 1 for MVP
  combatMastery: 1, // Calculated: Math.ceil(level / 2)

  ancestry1Id: null,
  ancestry2Id: null,
  selectedTraitIds: '', // JSON string of selected trait IDs
  ancestryPointsSpent: 0,

  classId: null,
  selectedFeatureChoices: '', // JSON string of selected feature choice IDs/values

  // Skills, Equipment, Details fields will be added/updated later
  finalName: null,
  finalPlayerName: null,

  createdAt: new Date(), // Placeholder, will be set by DB
  updatedAt: new Date(), // Placeholder, will be set by DB

  // UI State
  currentStep: 1, // Start at Stage A (Attributes)
  overflowTraitId: null,
  overflowAttributeName: null,
};

// Create the writable store
export const characterInProgressStore: Writable<CharacterInProgressStoreData> = writable(initialCharacterInProgressState);

// Helper function to get an attribute's modifier
// In DC20, the attribute score itself is the modifier.
// Handles null or undefined scores by returning 0.
export function getModifier(attributeScore: number | null | undefined): number {
  return attributeScore ?? 0;
}

// Constant for Level 1 Combat Mastery (DC20 p.22)
export const L1_COMBAT_MASTERY = 1; // Keep for reference, but use derived store

// --- Derived Stores ---

// Derived store for Combat Mastery (half level rounded up)
export const combatMastery = derived(
  characterInProgressStore,
  ($store) => {
    return Math.ceil(($store.level ?? 1) / 2); // Default to level 1 if store.level is null/undefined
  }
);

// Derived store for the Prime Modifier Value and Attribute
export const primeModifier = derived(
  characterInProgressStore,
  ($store) => {
    const attributes = [
      { name: 'Might', value: $store.attribute_might },
      { name: 'Agility', value: $store.attribute_agility },
      { name: 'Charisma', value: $store.attribute_charisma },
      { name: 'Intelligence', value: $store.attribute_intelligence },
    ];

    // Find the highest attribute score
    let highestAttribute = attributes[0];
    for (let i = 1; i < attributes.length; i++) {
      if (attributes[i].value > highestAttribute.value) {
        highestAttribute = attributes[i];
      }
    }

    // Handle ties: If there's a tie, the player chooses.
    // For now, we'll just pick the first one in case of a tie.
    // A more complex implementation might require user input on tie-breaking.
    // Add a defensive check for highestAttribute
    if (!highestAttribute) {
        console.error("Error calculating primeModifier: highestAttribute is undefined.");
        return { value: 0, attribute: 'Unknown' }; // Return a default safe value
    }

    const primeModifierValue = highestAttribute.value;
    const primeModifierAttribute = highestAttribute.name;

    return { value: primeModifierValue, attribute: primeModifierAttribute };
  }
);

// Derived store for Save Masteries (DC20 p.22)
export const saveMasteries = derived(
  [characterInProgressStore, primeModifier, combatMastery],
  ([$store, $primeModifier, $combatMastery]) => {
    const primeModValue = $primeModifier.value;
    const primeModAttribute = $primeModifier.attribute;

    // Save Mastery = Combat Mastery + Attribute Modifier
    // If the attribute is the Prime Modifier, use the Prime Modifier value.
    // Otherwise, use the attribute's own modifier (which is the score itself).
    // Use the derived combatMastery store
    const currentCombatMastery = $combatMastery;

    return {
      might: currentCombatMastery + (primeModAttribute === 'Might' ? primeModValue : getModifier($store.attribute_might)),
      agility: currentCombatMastery + (primeModAttribute === 'Agility' ? primeModValue : getModifier($store.attribute_agility)),
      charisma: currentCombatMastery + (primeModAttribute === 'Charisma' ? primeModValue : getModifier($store.attribute_charisma)),
      intelligence: currentCombatMastery + (primeModAttribute === 'Intelligence' ? primeModValue : getModifier($store.attribute_intelligence)),
    };
  }
);

// Derived store for Grit Points (Base + Charisma Modifier)
export const gritPoints = derived(
  characterInProgressStore,
  ($store) => {
    // Assuming base Grit Points are defined in class data, but for now use a placeholder
    const baseGrit = 2; // Placeholder, should come from class data
    return baseGrit + getModifier($store.attribute_charisma);
  }
);

// Derived store for Jump Distance (Agility Modifier, min 1)
export const jumpDistance = derived(
  characterInProgressStore,
  ($store) => {
    const agilityModifier = getModifier($store.attribute_agility);
    return agilityModifier < 1 ? 1 : agilityModifier;
  }
);

/**
 * Derived store for Starting SP (from class)
 */
export const startingSP = derived(
  characterInProgressStore,
  ($store) => {
    if (!$store.classId) return 0;
    const classData = classesData.find(c => c.id === $store.classId);
    return classData?.startingSP ?? 0;
  }
);

/**
 * Derived store for Starting MP (from class)
 */
export const startingMP = derived(
  characterInProgressStore,
  ($store) => {
    if (!$store.classId) return 0;
    const classData = classesData.find(c => c.id === $store.classId);
    return classData?.startingMP ?? 0;
  }
);

// Derived store for Provisional Skill Points (5 + Intelligence Modifier + Class Bonus)
export const provisionalSkillPoints = derived(
  characterInProgressStore,
  ($store) => {
    const intelligenceModifier = getModifier($store.attribute_intelligence);
    // Assuming class data is available to get skillPointGrantLvl1
    // For now, use a placeholder of 0 if classId is not set
    const classSkillBonus = 0; // Placeholder, should come from class data based on $store.classId
    return 5 + intelligenceModifier + classSkillBonus;
  }
);

// Derived store for Ancestry Points Remaining (Base 4 + Negative Traits - Spent)
export const ancestryPointsRemaining = derived(
  characterInProgressStore,
  ($store) => {
    const basePoints = 4; // DC20 p.16
    // Need to access traitsData to calculate points from negative traits
    // For now, this calculation is incomplete without access to traitsData
    const pointsFromNegativeTraits = 0; // Placeholder
    return basePoints + pointsFromNegativeTraits - $store.ancestryPointsSpent;
  }
);

/**
 * Derived store for Max HP (Class HP + Might Modifier + Ancestry HP)
 * Uses selected class's baseHpContribution, defaults to 8 if not set.
 */
export const maxHP = derived(
  characterInProgressStore,
  ($store) => {
    const classData = classesData.find(c => c.id === $store.classId);
    const classHP = classData?.baseHpContribution ?? 8;
    const mightModifier = getModifier($store.attribute_might);
    const ancestryHP = 0; // Assuming 0 for MVP until Ancestry HP is implemented
    return classHP + mightModifier + ancestryHP;
  }
);

// Derived store for Area Defense (8 + CM + Might Modifier + Charisma Modifier + Bonuses)
export const areaDefense = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const mightModifier = getModifier($store.attribute_might);
    const charismaModifier = getModifier($store.attribute_charisma);
    const bonuses = 0; // Assuming 0 for MVP until bonuses are implemented
    return 8 + $combatMastery + mightModifier + charismaModifier + bonuses;
  }
);

// Derived store for Precision Defense (8 + CM + Agility Modifier + Intelligence Modifier + Bonuses)
export const precisionDefense = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const agilityModifier = getModifier($store.attribute_agility);
    const intelligenceModifier = getModifier($store.attribute_intelligence);
    const bonuses = 0; // Assuming 0 for MVP until bonuses are implemented
    return 8 + $combatMastery + agilityModifier + intelligenceModifier + bonuses;
  }
);

// Derived store for Initiative (CM + Agility Modifier)
export const initiative = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const agilityModifier = getModifier($store.attribute_agility);
    return $combatMastery + agilityModifier;
  }
);
````

## File: src/routes/character-creator/stage-a/+page.svelte
````
<script lang="ts">
  import { writable, derived } from 'svelte/store';
  import { goto } from '$app/navigation'; // Import goto for navigation
  import { characterInProgressStore, primeModifier, saveMasteries, gritPoints, jumpDistance, provisionalSkillPoints, getModifier, L1_COMBAT_MASTERY, combatMastery, maxHP, areaDefense, precisionDefense, initiative } from '$lib/stores/characterInProgressStore';
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
      <!-- Display calculated stats with transparent formulas -->
      <p>HP = Base(8) + Might({$characterInProgressStore.attribute_might}) + Ancestry(0) = {$maxHP}</p>
      <p>SP = Class SP</p>
      <p>MP = Class MP</p>
      <p>PD = Base(8) + CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) + Intelligence({$characterInProgressStore.attribute_intelligence}) + Bonuses(0) = {$precisionDefense}</p>
      <p>AD = Base(8) + CM({$combatMastery}) + Might({$characterInProgressStore.attribute_might}) + Charisma({$characterInProgressStore.attribute_charisma}) + Bonuses(0) = {$areaDefense}</p>
      <p>Initiative = CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) = {$initiative}</p>
      <p>Grit Points = Base(2) + Charisma({$characterInProgressStore.attribute_charisma}) = {$gritPoints}</p>
      <p>Jump Distance = Agility({$characterInProgressStore.attribute_agility}) (min 1) = {$jumpDistance}</p>
      <p>Base Skill Points = Base(5) + Intelligence({$characterInProgressStore.attribute_intelligence}) = {$provisionalSkillPoints}</p>
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
````

## File: src/routes/character-creator/stage-b/+page.svelte
````
<script lang="ts">
    import { characterInProgressStore, primeModifier } from '$lib/stores/characterInProgressStore';
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
    // Removed pointsFromNegativeTraits as it's no longer needed for total budget calculation
    $: totalAncestryPointsAvailable = ancestryPointsBudget; // Always 5
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

        // The calculation for pointsFromNegativeTraits is now done locally within handleTraitSelection
        // The enforcement of the max +2 point gain from Negative Traits is also handled there.

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
                <select id="ancestry1" bind:value={selectedAncestry1_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
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
                 <select id="ancestry2" bind:value={selectedAncestry2_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
                    <option value={null}>None</option>
                    {#if ancestries}
                        {#each ancestries as ancestry}
                            <option value={ancestry.id}>{ancestry.name}</option>
                        {/each}
                    {/if}
                </select>
    </div>
</div>

<style lang="postcss">
    /* Apply dark background to select elements and options */
    select.bg-dark-bg-secondary {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */
        @apply text-purple-300; /* Apply text color using @apply */
    }

    /* Attempt to style dropdown options - browser support varies */
    select.bg-dark-bg-secondary option {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */
        @apply text-light-text-primary; /* Use light text for options */
    }
</style>
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
            <!-- Display derived stats -->
            <p class="col-span-2">Prime Modifier: <span class="font-bold text-yellow-accent">{$primeModifier.attribute} ({$primeModifier.value >= 0 ? '+' : ''}{$primeModifier.value})</span></p>
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
````

## File: projectPlan/stage0.md
````markdown
# AI Generation Guide: Character Creator - Stage 0 (Foundation and UI Setup)

## I. Overall Stage Objective
To establish a stable, working, and verifiable foundation for the SvelteKit application. This involves initializing the project, installing all core UI dependencies (TailwindCSS, Melt UI), and confirming that they work together correctly through a simple, testable example. This stage must be completed before any character creation logic or components from `stage1.md` are implemented.

## II. Rationale
Previous development iterations have shown that jumping directly into complex component logic (Stage A) without first validating the foundational UI stack is risky and can lead to failure. This "Stage 0" de-risks the entire frontend development process by breaking down the setup into atomized, verifiable steps. The goal is to build confidence and momentum with small, incremental wins, ensuring that the toolchain is not a blocker. We will build upon a proven and working installation.

## III. Step-by-Step Implementation Plan

### Step 1: Initialize the SvelteKit Project
The SvelteKit project was initialized directly within the existing `c:/Prog/dc20` directory, rather than creating a new subdirectory using `npm create svelte@latest`.

The initialization was performed manually by:
1.  Installing core SvelteKit-related dependencies (`@sveltejs/kit`, `@sveltejs/adapter-auto`, `@sveltejs/vite-plugin-svelte`, `vite`) as development dependencies via `npm install --save-dev`.
2.  Creating the standard SvelteKit configuration files: `svelte.config.js` and `vite.config.js`.
3.  Creating essential SvelteKit application files: `src/app.html` and `src/routes/+page.svelte`.
4.  Updating the `package.json` file to include `"type": "module"` for correct ES module handling and adding the necessary `dev` and `build` scripts.

This manual setup inherently provides TypeScript support as SvelteKit is configured for it. However, options like ESLint and Prettier, which would typically be selectable via `npm create svelte@latest`, were not explicitly configured during this manual process.

**Verification:** The development server was successfully started using `npm run dev`, confirming that the basic SvelteKit skeleton is functional and accessible at `http://localhost:5173`.

### Step 2: Add and Configure TailwindCSS
Next, we integrate our styling engine. We will use the `svelte-add` utility for a seamless installation.

1.  **Run the TailwindCSS adder:**
    ```bash
    npx svelte-add@latest tailwindcss
    ```
    This command will automatically create `tailwind.config.js`, `postcss.config.js`, and import the necessary CSS into a new `src/app.css` file, which it then links in `src/routes/+layout.svelte`.

2.  **Install the new dependencies:**
    ```bash
    npm install
    ```

3.  **Create a test page:** Create a new file at `src/routes/test-ui/+page.svelte`.

4.  **Verification:** Add a simple, styled element to `src/routes/test-ui/+page.svelte`:
    ```svelte
    <!-- src/routes/test-ui/+page.svelte -->
    <h1 class="text-2xl p-4">UI Test Page</h1>
    <div class="bg-blue-500 w-24 h-24 m-4"></div>
    ```
    Run `npm run dev` and navigate to `http://localhost:5173/test-ui`. You should see a blue square. This confirms TailwindCSS is working.

### Step 3: Integrate Custom Tailwind Theme
Now, apply our project's specific design system.

1.  **Update `tailwind.config.js`:** Open `projectPlan/tailwind.config.js` and copy its entire contents. Paste it into the `tailwind.config.js` file at the root of your new project, replacing the default content.

2.  **Verification:** Modify the test page to use a color from our custom theme.
    ```svelte
    <!-- src/routes/test-ui/+page.svelte -->
    <h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1>
    <div class="bg-purple-primary w-24 h-24 m-4"></div>
    ```
    The square on the test page should now be the project's primary purple color, and the title should be the accent yellow. This confirms the custom configuration is loaded.

### Step 4: Set Up the Inter Font
The theme specifies the 'Inter' font, but we need to load it.

1.  **Add the font link:** Open `src/routes/+layout.svelte`. Inside the `<svelte:head>` section, add the link to Google Fonts.
    ```svelte
    <!-- src/routes/+layout.svelte -->
    <svelte:head>
      <title>DC20 Character Creator</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    </svelte:head>

    <slot />
    ```

2.  **Verification:** The text on the test page should now render using the Inter font. You can confirm this using your browser's developer tools by inspecting the `<h1>` element and checking its `font-family` CSS property.

### Step 5: Install and Verify Melt UI
Finally, let's install the UI primitives library, set up its preprocessor, and verify the UI foundation.

1.  **Install the package:**
    ```bash
    npm install @melt-ui/svelte @melt-ui/pp
    ```

2.  **Set up the Preprocessor:**
    *   Open `svelte.config.js`.
    *   Import the preprocessor: `import { preprocessMeltUI } from '@melt-ui/pp';`
    *   Ensure `sequence` is imported from `@sveltejs/kit/hooks`: `import { sequence } from '@sveltejs/kit/hooks';`
    *   Add `preprocessMeltUI()` to the `preprocess` array, typically within `sequence()` if other preprocessors are present:
        ```javascript
        preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
        ```
    *   Restart the development server for the configuration changes to take effect.

3.  **Verification:** We will verify that Melt UI has been installed and its preprocessor is working correctly, and that our styling setup works with Melt UI components. We will add a simple, functional, and styled Melt UI collapsible component to our test page.
    ```svelte
    <!-- src/routes/test-ui/+page.svelte -->
    <h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1>
    <div class="bg-purple-primary w-24 h-24 m-4"></div>

    <button
      class="p-2 px-4 m-4 bg-orange-secondary text-light-text-primary rounded-lg font-semibold hover:bg-opacity-80"
      on:click={() => alert('Styled HTML button works!')}>
      Test Styled Button
    </button>

    <script lang="ts">
      import { createCollapsible, melt } from '@melt-ui/svelte';
      const {
        elements: { root, content, trigger },
        states: { open },
      } = createCollapsible();
    </script>

    <div use:melt={$root} class="mt-4 p-2 border border-purple-primary rounded">
      <button use:melt={$trigger} class="p-2 bg-purple-primary text-light-text-primary rounded w-full text-left">
        Collapsible Trigger (Click to {$open ? 'Close' : 'Open'})
      </button>
      {#if $open}
        <div use:melt={$content} class="p-2 mt-2 bg-dark-bg-secondary text-light-text-primary rounded">
          Collapsible Content - Now Visible!
        </div>
      {/if}
    </div>
    ```
    Navigate to the `/test-ui` page. You should see the styled HTML button and a new, styled collapsible component. Clicking the "Collapsible Trigger" should toggle the visibility of the styled "Collapsible Content". This proves that Melt UI is installed, its preprocessor is active, and its components can be styled correctly with our TailwindCSS theme, confirming the UI foundation is solid.

## IV. Stage Outcome
Upon successful completion of all steps, we will have:
1.  A functional SvelteKit project.
2.  TailwindCSS installed and configured with our project's custom theme.
3.  The Inter font loaded and applied.
4.  Melt UI installed, its preprocessor configured, and the overall UI foundation verified.

The project is now in a known-good state. The foundational UI layer is proven. We can now proceed with confidence to implement the application logic and components described in `projectPlan/stage1.md`.

The project is now in a known-good state. The foundational UI layer is proven. We can now proceed with confidence to implement the application logic and components described in `projectPlan/stage1.md`.
````

## File: .svelte-kit/generated/server/internal.js
````javascript
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<title>" + message + "</title>\r\n\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\t--bg: white;\r\n\t\t\t\t--fg: #222;\r\n\t\t\t\t--divider: #ccc;\r\n\t\t\t\tbackground: var(--bg);\r\n\t\t\t\tcolor: var(--fg);\r\n\t\t\t\tfont-family:\r\n\t\t\t\t\tsystem-ui,\r\n\t\t\t\t\t-apple-system,\r\n\t\t\t\t\tBlinkMacSystemFont,\r\n\t\t\t\t\t'Segoe UI',\r\n\t\t\t\t\tRoboto,\r\n\t\t\t\t\tOxygen,\r\n\t\t\t\t\tUbuntu,\r\n\t\t\t\t\tCantarell,\r\n\t\t\t\t\t'Open Sans',\r\n\t\t\t\t\t'Helvetica Neue',\r\n\t\t\t\t\tsans-serif;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\theight: 100vh;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.error {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmax-width: 32rem;\r\n\t\t\t\tmargin: 0 1rem;\r\n\t\t\t}\r\n\r\n\t\t\t.status {\r\n\t\t\t\tfont-weight: 200;\r\n\t\t\t\tfont-size: 3rem;\r\n\t\t\t\tline-height: 1;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\ttop: -0.05rem;\r\n\t\t\t}\r\n\r\n\t\t\t.message {\r\n\t\t\t\tborder-left: 1px solid var(--divider);\r\n\t\t\t\tpadding: 0 0 0 1rem;\r\n\t\t\t\tmargin: 0 0 0 1rem;\r\n\t\t\t\tmin-height: 2.5rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t.message h1 {\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t@media (prefers-color-scheme: dark) {\r\n\t\t\t\tbody {\r\n\t\t\t\t\t--bg: #222;\r\n\t\t\t\t\t--fg: #ddd;\r\n\t\t\t\t\t--divider: #666;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"error\">\r\n\t\t\t<span class=\"status\">" + status + "</span>\r\n\t\t\t<div class=\"message\">\r\n\t\t\t\t<h1>" + message + "</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n"
	},
	version_hash: "v09y8u"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
````
