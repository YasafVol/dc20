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
geminiTasks.md
memory-bank/activeContext.md
memory-bank/productContext.md
memory-bank/progress.md
memory-bank/projectbrief.md
memory-bank/systemPatterns.md
memory-bank/techContext.md
package.json
prisma/migrations/20250526210112_init/migration.sql
prisma/migrations/migration_lock.toml
prisma/schema.prisma
projectPlan/mvp.md
projectPlan/stage1.md
projectPlan/stage2.md
projectPlan/tailwind.config.js
repomix-output.xml
repomix.config.json
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
```

# Files

## File: prisma/migrations/20250526210112_init/migration.sql
```sql
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
```

## File: prisma/migrations/migration_lock.toml
```toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
```

## File: .gitignore
```
*.pdf
```

## File: .repomixignore
```
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
*.pdf
```

## File: geminiTasks.md
```markdown
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
```

## File: memory-bank/activeContext.md
```markdown
# Active Context

This document tracks the current work focus, recent changes, and next steps for the project.

## Current Work Focus

The current focus is on implementing the core features defined in the MVP, specifically the Character Creation Wizard for Level 1 characters. This involves building the frontend Svelte components for each stage (A, B, C) and the corresponding backend SvelteKit endpoints for data persistence and validation.

## Recent Changes

The memory bank documentation has been updated based on the detailed planning documents found in the `projectPlan/` directory (`mvp.md`, `stage1.md`, `stage2.md`). This includes:
- Defining the specific scope and features for the MVP (Stages A, B, C).
- Detailing the required UI components, internal state, functions, and logic for Stage A (Attributes) and Stage B (Ancestry).
- Outlining the backend API endpoints/Form Actions needed for stages A and B, including validation requirements.
- Incorporating details about the chosen technologies (SvelteKit, Melt UI, TailwindCSS, Prisma, PostgreSQL) and their usage patterns.
- Documenting the data models (`CharacterInProgress`, `CharacterSheetData`) and initial static rule data structure.
- Clarifying specific planning decisions like state management approach, calculation responsibilities (frontend provisional, backend authoritative), error handling, and basic resume functionality.

## Next Steps

1.  Implement the Svelte component and logic for Stage A (Attributes) based on `projectPlan/stage1.md`.
2.  Implement the backend endpoint/Form Action for Stage A data persistence and validation.
3.  Implement the Svelte component and logic for Stage B (Ancestry) based on `projectPlan/stage2.md`, including the attribute overflow helper panel.
4.  Implement the backend endpoint/Form Action for Stage B data persistence and validation.
5.  Implement the Svelte component and logic for Stage C (Class) based on `projectPlan/stage3.md` (once detailed).
6.  Implement the backend endpoint/Form Action for Stage C data persistence and validation.
7.  Implement the final character calculation and `CharacterSheetData` creation logic on the backend.
8.  Implement the Character Page component to display the finalized character sheet.
9.  Implement the basic resume functionality using browser `localStorage`.
10. Configure TailwindCSS using the provided `tailwind.config.js`.

## Active Decisions and Considerations

- Using Melt UI primitives for accessible UI components, styled with TailwindCSS.
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

The detailed planning documents have provided a solid foundation and clear steps for the MVP implementation. The complexity of handling attribute cap overflows during trait selection in Stage B highlights the need for careful state management and validation logic on both the frontend and backend. The structure of the static rule data in TypeScript is defined, which will guide the implementation of data loading and lookups.
```

## File: memory-bank/productContext.md
```markdown
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
```

## File: memory-bank/progress.md
```markdown
# Progress

This document summarizes the current status of the project, including what has been completed, what remains, and any known issues.

## What Works

- The memory bank documentation has been successfully updated to reflect the project plan detailed in the `projectPlan/` directory.
- The core technologies, UI design principles, MVP feature scope, data modeling (Prisma schema), key backend logic, key frontend logic, and specific planning decisions for the Level 1 Character Creator MVP have been documented.
- Detailed plans for Stage A (Attributes) and Stage B (Ancestry) of the character creation wizard have been incorporated into the documentation.

## What's Left to Build

- Implement the frontend Svelte component and logic for Stage A (Attributes).
- Implement the backend endpoint/Form Action for Stage A data persistence and validation.
- Implement the frontend Svelte component and logic for Stage B (Ancestry), including the attribute overflow helper panel.
- Implement the backend endpoint/Form Action for Stage B data persistence and validation.
- Detail and implement Stage C (Class) of the character creation wizard.
- Implement the backend logic for final character calculation and `CharacterSheetData` creation.
- Implement the frontend component for displaying the finalized character sheet.
- Implement the basic resume functionality using browser `localStorage`.
- Configure TailwindCSS based on `tailwind.config.js`.
- Implement static rule data in TypeScript files (`src/lib/rulesdata/`).

## Current Status

The project is in the planning and initial documentation phase for the MVP of the Level 1 Character Creator. The core requirements, scope, and technical approach are defined. Detailed plans for the first two stages of the wizard are documented. The next steps involve translating these plans into code, starting with Stage A.

## Known Issues

- Stage C of the character creation wizard is not yet detailed in the planning documents.
- The implementation of static rule data in TypeScript files needs to be completed.
- The attribute overflow helper panel logic in Stage B requires careful implementation and testing to ensure correct attribute reallocation and validation.

## Evolution of Project Decisions

- The decision to initially store static rule data in TypeScript files was made for simplicity during the MVP phase, with a potential future plan to move it to the database.
- The character creation wizard stages were re-ordered from the original DC20 steps to A-Attributes, B-Ancestry, C-Class, D-Background, E-Review, F-Equipment for a more streamlined digital workflow.
- A specific dark mode color palette and font (Inter) have been chosen for the UI aesthetics.
```

## File: memory-bank/projectbrief.md
```markdown
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
```

## File: memory-bank/systemPatterns.md
```markdown
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
- **Melt UI:** Selected for providing accessible, unstyled UI primitives that can be easily styled with TailwindCSS.
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
```

## File: memory-bank/techContext.md
```markdown
# Technical Context

This document details the technologies, development setup, and technical constraints of the project.

## Technologies Used

- **Framework:** SvelteKit (Full-stack JavaScript/TypeScript)
- **UI Primitives:** Melt UI (Primary), potentially `shadcn-svelte` (using Bits UI) / Bits UI as fallback.
- **Styling:** TailwindCSS
- **ORM & Migrations:** Prisma
- **Database:** PostgreSQL (hosted on Render Free tier)
- **Frontend State Management:** Svelte stores (writable and derived)
- **Rule Data Storage:** TypeScript objects/arrays (initially hardcoded in `src/lib/rulesdata/`)

## Development Setup

- Requires Node.js and npm/yarn/pnpm.
- Prisma CLI for database migrations.
- Standard SvelteKit development environment.
- TailwindCSS setup (configuration in `tailwind.config.js`).

## Technical Constraints

- Render Free tier database limitations (e.g., connection limits, sleep times).
- Initial static rule data is hardcoded, requiring code changes for rule updates.
- Level 1 attribute cap of +3.
- Ancestry Point allocation rules (5 points, 1 Minor Trait limit, +2 points max from Negative Traits).

## Dependencies

- SvelteKit
- Melt UI
- TailwindCSS
- Prisma
- PostgreSQL driver (e.g., `pg`)
- Other standard SvelteKit dependencies.

## Tool Usage Patterns

- Using Prisma CLI for schema definition and migrations.
- Using TailwindCSS for styling components.
- Using SvelteKit's built-in features for routing, API endpoints (Form Actions), and server-side logic.
- Using Melt UI primitives for building accessible UI components.
```

## File: package.json
```json
{
  "devDependencies": {
    "prisma": "^6.7.0",
    "svelte": "^5.28.2"
  },
  "dependencies": {
    "@prisma/client": "^6.7.0"
  }
}
```

## File: prisma/schema.prisma
```
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
```

## File: projectPlan/tailwind.config.js
```javascript
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
```

## File: repomix.config.json
```json
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
```

## File: src/lib/rulesdata/languages.ts
```typescript
import type { ILanguageData } from './types';

export const languagesData: ILanguageData[] = [
  {
    id: 'common',
    name: 'Common',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Simple and universal language... All PCs start Fluent.]'
  },
  {
    id: 'elvish',
    name: 'Elvish',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Elves]'
  },
  {
    id: 'draconic',
    name: 'Draconic',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Dragons, Dragonkin]'
  },
  {
    id: 'dwarvish',
    name: 'Dwarvish',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Dwarves]'
  },
  {
    id: 'gnomish',
    name: 'Gnomish',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Gnomes]'
  },
  {
    id: 'goblin',
    name: 'Goblin',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Goblins, Hobgoblins, Bugbears]'
  },
  {
    id: 'halfling',
    name: 'Halfling',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Halflings]'
  },
  {
    id: 'orcish',
    name: 'Orcish',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Orcs]'
  },
  {
    id: 'primordial',
    name: 'Primordial',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Elementals]'
  },
  {
    id: 'celestial',
    name: 'Celestial',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Celestials]'
  },
  {
    id: 'abyssal',
    name: 'Abyssal',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Demons]'
  },
  {
    id: 'infernal',
    name: 'Infernal',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Devils]'
  },
  {
    id: 'undercommon',
    name: 'Undercommon',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Drow, Underdark inhabitants]'
  }
];
```

## File: src/lib/rulesdata/skills.ts
```typescript
import type { ISkillData } from './types';

export const skillsData: ISkillData[] = [
  {
    id: 'athletics',
    name: 'Athletics',
    attributeAssociation: 'might',
    description: '[DC20 p.12: Covers activities that involve physical prowess, such as climbing, swimming, jumping, grappling.]'
  },
  {
    id: 'awareness',
    name: 'Awareness',
    attributeAssociation: 'prime', // Uses Prime Modifier
    description: '[DC20 p.13: Governs your ability to detect the presence of other creatures or objects using your senses.]'
  },
  // TODO: Add ALL other Skills from DC20 p.11-13 here
];
```

## File: src/lib/rulesdata/sorcerer.ts
```typescript
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
```

## File: src/lib/rulesdata/trades.ts
```typescript
import { ITradeData } from './types';

export const tradesData: ITradeData[] = [
  {
    id: 'alchemy',
    name: 'Alchemy',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.15: Practice of creating something by combining or changing other things...]',
    tools: 'Alchemist’s Supplies'
  },
  {
    id: 'history',
    name: 'History',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.16: Study of past events, ancient lore, and how civilizations have shaped the present.]',
    tools: undefined // Knowledge trade
  },
  {
    id: 'arcana',
    name: 'Arcana',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.14: Study of magic, its history, theories, and the planes of existence.]',
    tools: undefined // Knowledge trade
  },
  {
    id: 'architecture',
    name: 'Architecture',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.14: Knowledge of building design, construction, and structural integrity.]',
    tools: undefined // Knowledge trade
  },
  {
    id: 'blacksmithing',
    name: 'Blacksmithing',
    attributeAssociation: 'might',
    description: '[DC20 p.15: Crafting and repairing metal objects, including weapons and armor.]',
    tools: 'Smith’s Tools'
  },
  {
    id: 'brewing',
    name: 'Brewing',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.15: Art of creating beverages through fermentation, such as beer, wine, and spirits.]',
    tools: 'Brewer’s Supplies'
  },
  {
    id: 'calligraphy',
    name: 'Calligraphy',
    attributeAssociation: 'agility',
    description: '[DC20 p.15: Art of decorative handwriting and lettering.]',
    tools: 'Calligrapher’s Supplies'
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    attributeAssociation: 'might',
    description: '[DC20 p.15: Crafting and repairing wooden objects and structures.]',
    tools: 'Carpenter’s Tools'
  },
  {
    id: 'cartography',
    name: 'Cartography',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.15: Art and science of mapmaking.]',
    tools: 'Cartographer’s Tools'
  },
  {
    id: 'cobbling',
    name: 'Cobbling',
    attributeAssociation: 'agility',
    description: '[DC20 p.15: Crafting and repairing footwear.]',
    tools: 'Cobbler’s Tools'
  },
  {
    id: 'cooking',
    name: 'Cooking',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.15: Preparation of food for consumption.]',
    tools: 'Cook’s Utensils'
  },
  {
    id: 'deciphering',
    name: 'Deciphering',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.15: Understanding coded messages, ancient scripts, or hidden meanings.]',
    tools: undefined // Knowledge trade
  },
  {
    id: 'disguise',
    name: 'Disguise',
    attributeAssociation: 'charisma',
    description: '[DC20 p.15: Altering one’s appearance to resemble someone else or a different type of person.]',
    tools: 'Disguise Kit'
  },
  {
    id: 'forgery',
    name: 'Forgery',
    attributeAssociation: 'agility',
    description: '[DC20 p.16: Creating convincing copies of documents, signatures, or objects.]',
    tools: 'Forgery Kit'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    attributeAssociation: 'charisma',
    description: '[DC20 p.16: Proficiency in various games of chance or skill.]',
    tools: 'Gaming Set'
  },
  {
    id: 'herbalism',
    name: 'Herbalism',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.16: Knowledge of plants, their properties, and uses.]',
    tools: 'Herbalism Kit'
  },
  {
    id: 'jeweler',
    name: 'Jeweler',
    attributeAssociation: 'agility',
    description: '[DC20 p.16: Crafting and repairing jewelry.]',
    tools: 'Jeweler’s Tools'
  },
  {
    id: 'leatherworking',
    name: 'Leatherworking',
    attributeAssociation: 'agility',
    description: '[DC20 p.16: Crafting and repairing leather goods.]',
    tools: 'Leatherworker’s Tools'
  },
  {
    id: 'linguistics',
    name: 'Linguistics',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.16: Study of languages, their structure, and origins.]',
    tools: undefined // Knowledge trade
  },
  {
    id: 'masonry',
    name: 'Masonry',
    attributeAssociation: 'might',
    description: '[DC20 p.16: Working with stone to build structures or objects.]',
    tools: 'Mason’s Tools'
  },
  {
    id: 'medicine',
    name: 'Medicine',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.16: Knowledge and practice of healing injuries and treating diseases.]',
    tools: 'Healer’s Kit'
  },
  {
    id: 'music',
    name: 'Music',
    attributeAssociation: 'charisma',
    description: '[DC20 p.16: Performance of music using instruments or voice.]',
    tools: 'Musical Instrument'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.16: Determining one’s position and plotting a course.]',
    tools: 'Navigator’s Tools'
  },
  {
    id: 'painting',
    name: 'Painting',
    attributeAssociation: 'agility',
    description: '[DC20 p.16: Creating art using paints.]',
    tools: 'Painter’s Supplies'
  },
  {
    id: 'poisoner',
    name: 'Poisoner',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.17: Knowledge and creation of poisons.]',
    tools: 'Poisoner’s Kit'
  },
  {
    id: 'pottery',
    name: 'Pottery',
    attributeAssociation: 'agility',
    description: '[DC20 p.17: Crafting objects from clay.]',
    tools: 'Potter’s Tools'
  },
  {
    id: 'religion',
    name: 'Religion',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.17: Knowledge of deities, religious practices, and holy texts.]',
    tools: undefined // Knowledge trade
  },
  {
    id: 'sculpting',
    name: 'Sculpting',
    attributeAssociation: 'might',
    description: '[DC20 p.17: Creating three-dimensional art from various materials.]',
    tools: 'Sculptor’s Tools'
  },
  {
    id: 'smithing',
    name: 'Smithing',
    attributeAssociation: 'might',
    description: '[DC20 p.17: General knowledge of working with metals.]',
    tools: 'Smith’s Tools' // Often overlaps with Blacksmithing, but can be broader
  },
  {
    id: 'survival',
    name: 'Survival',
    attributeAssociation: 'intelligence',
    description: '[DC20 p.17: Knowledge and skills needed to survive in the wilderness.]',
    tools: undefined // Knowledge trade, though often associated with tools like a hunting trap or fishing tackle
  },
  {
    id: 'tailoring',
    name: 'Tailoring',
    attributeAssociation: 'agility',
    description: '[DC20 p.17: Crafting and repairing clothing and textiles.]',
    tools: 'Weaver’s Tools' // Or Tailor's Tools, depending on specific terminology
  },
  {
    id: 'thieves',
    name: 'Thieves’',
    attributeAssociation: 'agility',
    description: '[DC20 p.17: Knowledge and skills related to thievery, including lockpicking and disarming traps.]',
    tools: 'Thieves’ Tools'
  },
  {
    id: 'vehicles_land',
    name: 'Vehicles (Land)',
    attributeAssociation: 'agility',
    description: '[DC20 p.17: Proficiency in operating land-based vehicles.]',
    tools: undefined // Proficiency, not tool-based
  },
  {
    id: 'vehicles_water',
    name: 'Vehicles (Water)',
    attributeAssociation: 'agility',
    description: '[DC20 p.17: Proficiency in operating water-based vehicles.]',
    tools: undefined // Proficiency, not tool-based
  },
  {
    id: 'woodcarving',
    name: 'Woodcarving',
    attributeAssociation: 'agility',
    description: '[DC20 p.17: Creating art or objects from wood.]',
    tools: 'Woodcarver’s Tools'
  }
];
```

## File: src/lib/stores/characterInProgressStore.ts
```typescript
// src/lib/stores/characterInProgressStore.ts

import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { CharacterInProgress } from '@prisma/client'; // Assuming Prisma client is generated

// Define the shape of the data stored in the characterInProgressStore
// This should mirror the CharacterInProgress Prisma model, plus any UI state
interface CharacterInProgressStoreData extends CharacterInProgress {
  // Add any UI-specific state here if needed, e.g., current step in wizard
  currentStep: number;
  // Add temporary state for trait selection overflow
  overflowTraitId: string | null;
  overflowAttributeName: string | null;
}

// Initial state for the store, matching Prisma defaults and adding UI state
const initialCharacterInProgressState: CharacterInProgressStoreData = {
  id: null, // Will be set when a new character is started/loaded
  attribute_might: -2,
  attribute_agility: -2,
  attribute_charisma: -2,
  attribute_intelligence: -2,
  pointsSpent: 0,

  ancestry1Id: null,
  ancestry2Id: null,
  selectedTraitIds: '', // JSON string of selected trait IDs
  ancestryPointsSpent: 0,

  classId: null,
  selectedFeatureChoices: '', // JSON string of selected feature choice IDs/values

  // Skills, Equipment, Details fields will be added/updated later
  finalName: null,
  finalPlayerName: null,

  finalCharacterSheet: null, // This will be populated when creation is complete

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
export const L1_COMBAT_MASTERY = 1;

// --- Derived Stores ---

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
    const primeModifierValue = highestAttribute.value;
    const primeModifierAttribute = highestAttribute.name;

    return { value: primeModifierValue, attribute: primeModifierAttribute };
  }
);

// Derived store for Save Masteries (DC20 p.22)
export const saveMasteries = derived(
  [characterInProgressStore, primeModifier],
  ([$store, $primeModifier]) => {
    const primeModValue = $primeModifier.value;
    const primeModAttribute = $primeModifier.attribute;

    // Save Mastery = Combat Mastery + Attribute Modifier
    // If the attribute is the Prime Modifier, use the Prime Modifier value.
    // Otherwise, use the attribute's own modifier (which is the score itself).
    return {
      might: L1_COMBAT_MASTERY + (primeModAttribute === 'Might' ? primeModValue : getModifier($store.attribute_might)),
      agility: L1_COMBAT_MASTERY + (primeModAttribute === 'Agility' ? primeModValue : getModifier($store.attribute_agility)),
      charisma: L1_COMBAT_MASTERY + (primeModAttribute === 'Charisma' ? primeModValue : getModifier($store.attribute_charisma)),
      intelligence: L1_COMBAT_MASTERY + (primeModAttribute === 'Intelligence' ? primeModValue : getModifier($store.attribute_intelligence)),
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

// TODO: Add more derived stores for other calculated stats (HP, SP, MP, Defenses, etc.)
```

## File: projectPlan/mvp.md
```markdown
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
```

## File: projectPlan/stage1.md
```markdown
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
```

## File: projectPlan/stage2.md
```markdown
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
```

## File: repomix-output.xml
```xml
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
4. Repository files, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

<additional_info>

</additional_info>

</file_summary>

<directory_structure>
geminiTasks.md
memory-bank/activeContext.md
memory-bank/productContext.md
memory-bank/progress.md
memory-bank/projectbrief.md
memory-bank/systemPatterns.md
memory-bank/techContext.md
package.json
prisma/schema.prisma
projectPlan/mvp.md
projectPlan/stage1.md
projectPlan/stage2.md
projectPlan/tailwind.config.js
src/lib/rulesdata/ancestries.ts
src/lib/rulesdata/attributes.ts
src/lib/rulesdata/classes.ts
src/lib/rulesdata/traits.ts
src/lib/rulesdata/types.ts
src/lib/stores/characterInProgressStore.ts
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="geminiTasks.md">
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
</file>

<file path="memory-bank/activeContext.md">
# Active Context

This document tracks the current work focus, recent changes, and next steps for the project.

## Current Work Focus

The current focus is on implementing the core features defined in the MVP, specifically the Character Creation Wizard for Level 1 characters. This involves building the frontend Svelte components for each stage (A, B, C) and the corresponding backend SvelteKit endpoints for data persistence and validation.

## Recent Changes

The memory bank documentation has been updated based on the detailed planning documents found in the `projectPlan/` directory (`mvp.md`, `stage1.md`, `stage2.md`). This includes:
- Defining the specific scope and features for the MVP (Stages A, B, C).
- Detailing the required UI components, internal state, functions, and logic for Stage A (Attributes) and Stage B (Ancestry).
- Outlining the backend API endpoints/Form Actions needed for stages A and B, including validation requirements.
- Incorporating details about the chosen technologies (SvelteKit, Melt UI, TailwindCSS, Prisma, PostgreSQL) and their usage patterns.
- Documenting the data models (`CharacterInProgress`, `CharacterSheetData`) and initial static rule data structure.
- Clarifying specific planning decisions like state management approach, calculation responsibilities (frontend provisional, backend authoritative), error handling, and basic resume functionality.

## Next Steps

1.  Implement the Svelte component and logic for Stage A (Attributes) based on `projectPlan/stage1.md`.
2.  Implement the backend endpoint/Form Action for Stage A data persistence and validation.
3.  Implement the Svelte component and logic for Stage B (Ancestry) based on `projectPlan/stage2.md`, including the attribute overflow helper panel.
4.  Implement the backend endpoint/Form Action for Stage B data persistence and validation.
5.  Implement the Svelte component and logic for Stage C (Class) based on `projectPlan/stage3.md` (once detailed).
6.  Implement the backend endpoint/Form Action for Stage C data persistence and validation.
7.  Implement the final character calculation and `CharacterSheetData` creation logic on the backend.
8.  Implement the Character Page component to display the finalized character sheet.
9.  Implement the basic resume functionality using browser `localStorage`.
10. Configure TailwindCSS using the provided `tailwind.config.js`.

## Active Decisions and Considerations

- Using Melt UI primitives for accessible UI components, styled with TailwindCSS.
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

The detailed planning documents have provided a solid foundation and clear steps for the MVP implementation. The complexity of handling attribute cap overflows during trait selection in Stage B highlights the need for careful state management and validation logic on both the frontend and backend. The structure of the static rule data in TypeScript is defined, which will guide the implementation of data loading and lookups.
</file>

<file path="memory-bank/productContext.md">
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
</file>

<file path="memory-bank/progress.md">
# Progress

This document summarizes the current status of the project, including what has been completed, what remains, and any known issues.

## What Works

- The memory bank documentation has been successfully updated to reflect the project plan detailed in the `projectPlan/` directory.
- The core technologies, UI design principles, MVP feature scope, data modeling (Prisma schema), key backend logic, key frontend logic, and specific planning decisions for the Level 1 Character Creator MVP have been documented.
- Detailed plans for Stage A (Attributes) and Stage B (Ancestry) of the character creation wizard have been incorporated into the documentation.

## What's Left to Build

- Implement the frontend Svelte component and logic for Stage A (Attributes).
- Implement the backend endpoint/Form Action for Stage A data persistence and validation.
- Implement the frontend Svelte component and logic for Stage B (Ancestry), including the attribute overflow helper panel.
- Implement the backend endpoint/Form Action for Stage B data persistence and validation.
- Detail and implement Stage C (Class) of the character creation wizard.
- Implement the backend logic for final character calculation and `CharacterSheetData` creation.
- Implement the frontend component for displaying the finalized character sheet.
- Implement the basic resume functionality using browser `localStorage`.
- Configure TailwindCSS based on `tailwind.config.js`.
- Implement static rule data in TypeScript files (`src/lib/rulesdata/`).

## Current Status

The project is in the planning and initial documentation phase for the MVP of the Level 1 Character Creator. The core requirements, scope, and technical approach are defined. Detailed plans for the first two stages of the wizard are documented. The next steps involve translating these plans into code, starting with Stage A.

## Known Issues

- Stage C of the character creation wizard is not yet detailed in the planning documents.
- The implementation of static rule data in TypeScript files needs to be completed.
- The attribute overflow helper panel logic in Stage B requires careful implementation and testing to ensure correct attribute reallocation and validation.

## Evolution of Project Decisions

- The decision to initially store static rule data in TypeScript files was made for simplicity during the MVP phase, with a potential future plan to move it to the database.
- The character creation wizard stages were re-ordered from the original DC20 steps to A-Attributes, B-Ancestry, C-Class, D-Background, E-Review, F-Equipment for a more streamlined digital workflow.
- A specific dark mode color palette and font (Inter) have been chosen for the UI aesthetics.
</file>

<file path="memory-bank/projectbrief.md">
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
</file>

<file path="memory-bank/systemPatterns.md">
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
- **Melt UI:** Selected for providing accessible, unstyled UI primitives that can be easily styled with TailwindCSS.
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
</file>

<file path="memory-bank/techContext.md">
# Technical Context

This document details the technologies, development setup, and technical constraints of the project.

## Technologies Used

- **Framework:** SvelteKit (Full-stack JavaScript/TypeScript)
- **UI Primitives:** Melt UI (Primary), potentially `shadcn-svelte` (using Bits UI) / Bits UI as fallback.
- **Styling:** TailwindCSS
- **ORM & Migrations:** Prisma
- **Database:** PostgreSQL (hosted on Render Free tier)
- **Frontend State Management:** Svelte stores (writable and derived)
- **Rule Data Storage:** TypeScript objects/arrays (initially hardcoded in `src/lib/rulesdata/`)

## Development Setup

- Requires Node.js and npm/yarn/pnpm.
- Prisma CLI for database migrations.
- Standard SvelteKit development environment.
- TailwindCSS setup (configuration in `tailwind.config.js`).

## Technical Constraints

- Render Free tier database limitations (e.g., connection limits, sleep times).
- Initial static rule data is hardcoded, requiring code changes for rule updates.
- Level 1 attribute cap of +3.
- Ancestry Point allocation rules (5 points, 1 Minor Trait limit, +2 points max from Negative Traits).

## Dependencies

- SvelteKit
- Melt UI
- TailwindCSS
- Prisma
- PostgreSQL driver (e.g., `pg`)
- Other standard SvelteKit dependencies.

## Tool Usage Patterns

- Using Prisma CLI for schema definition and migrations.
- Using TailwindCSS for styling components.
- Using SvelteKit's built-in features for routing, API endpoints (Form Actions), and server-side logic.
- Using Melt UI primitives for building accessible UI components.
</file>

<file path="package.json">
{
  "devDependencies": {
    "prisma": "^6.7.0",
    "svelte": "^5.28.2"
  },
  "dependencies": {
    "@prisma/client": "^6.7.0"
  }
}
</file>

<file path="prisma/schema.prisma">
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite" // Using SQLite for simplicity in MVP
  url      = env("DATABASE_URL")
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
</file>

<file path="projectPlan/tailwind.config.js">
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
</file>

<file path="src/lib/rulesdata/ancestries.ts">
// src/lib/rulesdata/ancestries.ts

import type { IAncestry } from './types';

export const ancestriesData: IAncestry[] = [
  {
    id: 'human',
    name: 'Human',
    description: 'Humans are the most common ancestry in the world, known for their adaptability and resilience.',
    defaultTraitIds: ['human_resolve'], // Example default trait
    expandedTraitIds: [ // Example expanded traits available for selection
      'human_attribute_increase',
      'human_skill_expertise',
      'negative_trait_example', // Include example negative trait
      'minor_trait_example', // Include example minor trait
    ],
  },
  {
    id: 'elf',
    name: 'Elf',
    description: 'Elves are graceful and long-lived beings with a deep connection to nature.',
    defaultTraitIds: ['elf_keen_senses'], // Example default trait
    expandedTraitIds: [ // Example expanded traits available for selection
      'elf_fey_ancestry',
      'elf_long_strider',
      'negative_trait_example', // Include example negative trait
      'minor_trait_example', // Include example minor trait
    ],
  },
  // Add other ancestries as needed
];
</file>

<file path="src/lib/rulesdata/attributes.ts">
// src/lib/rulesdata/attributes.ts

import type { IAttributeData } from './types';

export const attributesData: IAttributeData[] = [
  {
    id: 'might',
    name: 'Might',
    description: 'Your Strength of Body. (DC20 p.9)',
    derivedStats: [
      { statName: 'Precision Defense (PD)', formula: '8 + CM + Might + Intelligence + Equip' },
      { statName: 'Area Defense (AD)', formula: '8 + CM + Might + Charisma + Equip' },
      { statName: 'Jump Distance', formula: 'Agility < 1 ? 1 : Agility' }, // Jump distance is based on Agility, but Might contributes to AD
    ],
  },
  {
    id: 'agility',
    name: 'Agility',
    description: 'Your Balance, Nimbleness, and Dexterity. (DC20 p.9)',
    derivedStats: [
      { statName: 'Precision Defense (PD)', formula: '8 + CM + Might + Intelligence + Equip' },
      { statName: 'Jump Distance', formula: 'Agility < 1 ? 1 : Agility' },
      { statName: 'Initiative Bonus', formula: 'Base + Agility' },
    ],
  },
  {
    id: 'charisma',
    name: 'Charisma',
    description: 'Your Charm, Presence, Persuasiveness, and Force of Will. (DC20 p.9)',
    derivedStats: [
      { statName: 'Area Defense (AD)', formula: '8 + CM + Might + Charisma + Equip' },
      { statName: 'Grit Points', formula: 'Base + Charisma' },
      { statName: 'Save DC', formula: '8 + CM + Prime Modifier Value + Charisma' }, // Assuming Charisma is used for Save DC calculation if not Prime Mod
    ],
  },
  {
    id: 'intelligence',
    name: 'Intelligence',
    description: 'Your Reasoning, Understanding, and Wisdom. (DC20 p.9)',
    derivedStats: [
      { statName: 'Precision Defense (PD)', formula: '8 + CM + Might + Intelligence + Equip' },
      { statName: 'Skill Points', formula: '5 + Intelligence Modifier' },
      { statName: 'Save DC', formula: '8 + CM + Prime Modifier Value + Intelligence' }, // Assuming Intelligence is used for Save DC calculation if not Prime Mod
    ],
  },
];
</file>

<file path="src/lib/rulesdata/classes.ts">
// src/lib/rulesdata/classes.ts

import type { IClassDefinition } from './types';

export const classesData: IClassDefinition[] = [
  {
    id: 'barbarian',
    name: 'Barbarian',
    description: 'A fierce warrior of primitive background who can enter a battle rage.',
    baseHpContribution: 12, // DC20 p.118
    startingSP: 0, // DC20 p.118
    startingMP: 0, // DC20 p.118
    skillPointGrantLvl1: 0, // DC20 p.118
    saveDCBase: 8, // DC20 p.118
    deathThresholdBase: 10, // DC20 p.118
    moveSpeedBase: 30, // DC20 p.118
    restPointsBase: 4, // DC20 p.118
    gritPointsBase: 2, // DC20 p.118 (Base Grit, before Charisma mod)
    initiativeBonusBase: 0, // DC20 p.118 (Base Initiative, before Agility mod)
    level1Features: [
      {
        id: 'barbarian_rage',
        name: 'Rage',
        description: 'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.', // DC20 p.118 (Summarized)
        level: 1,
        effects: [], // Effects of Rage are complex, likely handled in character sheet logic
      },
      {
        id: 'barbarian_unarmored_defense',
        name: 'Unarmored Defense',
        description: 'While you are wearing no armor, your Armor Class equals 10 + your Agility modifier + your Might modifier.', // DC20 p.118
        level: 1,
        effects: [], // Effect applied in defense calculation logic
      },
    ],
    featureChoicesLvl1: [], // Barbarian has no Lvl 1 feature choices listed on p.118
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    description: 'A spellcaster who draws on inherent magic from a gift or bloodline.',
    baseHpContribution: 6, // DC20 p.149
    startingSP: 0, // DC20 p.149
    startingMP: 6, // DC20 p.149
    skillPointGrantLvl1: 0, // DC20 p.149
    saveDCBase: 8, // DC20 p.149
    deathThresholdBase: 10, // DC20 p.149
    moveSpeedBase: 30, // DC20 p.149
    restPointsBase: 4, // DC20 p.149
    gritPointsBase: 2, // DC20 p.149 (Base Grit, before Charisma mod)
    initiativeBonusBase: 0, // DC20 p.149 (Base Initiative, before Agility mod)
    level1Features: [
      {
        id: 'sorcerer_spellcasting',
        name: 'Spellcasting',
        description: 'You can cast spells.', // DC20 p.149 (Summarized)
        level: 1,
        effects: [], // Spellcasting is complex, handled elsewhere
      },
      {
        id: 'sorcerer_sorcerous_origin',
        name: 'Sorcerous Origin',
        description: 'Choose a sorcerous origin, which describes the source of your innate magical power.', // DC20 p.149
        level: 1,
        effects: [], // The choice itself grants effects, not this base feature
      },
    ],
    featureChoicesLvl1: [
      {
        id: 'sorcerous_origin_choice',
        prompt: 'Choose your Sorcerous Origin:',
        type: 'select_one',
        options: [
          {
            value: 'draconic_bloodline',
            label: 'Draconic Bloodline',
            description: 'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors.', // DC20 p.150 (Summarized)
            effectsOnChoice: [
              { type: 'GRANT_FEATURE', target: 'draconic_bloodline_feature' }, // Placeholder for granting origin features
              { type: 'GRANT_HP_PER_LEVEL', value: 1 }, // Draconic Resilience HP increase
              { type: 'GRANT_UNARMORED_AC', value: { formula: '13 + Agility' } }, // Draconic Resilience AC
            ],
          },
          {
            value: 'intuitive_magic',
            label: 'Intuitive Magic',
            description: 'Your magic comes from a deep, innate understanding of the weave.', // DC20 p.151 (Summarized)
            effectsOnChoice: [
               { type: 'GRANT_FEATURE', target: 'intuitive_magic_feature' }, // Placeholder for granting origin features
               { type: 'MODIFY_STAT', target: 'skillPointGrantLvl1', value: 2 }, // Gain 2 additional skill points
            ],
          },
          // Add other origins as needed
        ],
      },
    ],
  },
  // Add other classes as needed
];
</file>

<file path="src/lib/rulesdata/traits.ts">
// src/lib/rulesdata/traits.ts

import type { ITrait } from './types';

export const traitsData: ITrait[] = [
  // Human Traits
  {
    id: 'human_resolve',
    name: 'Human Resolve',
    description: 'Gain +1 to your Death Threshold.',
    cost: 1,
    effects: [{ type: 'MODIFY_STAT', target: 'deathThresholdBase', value: 1 }],
  },
  {
    id: 'human_attribute_increase',
    name: 'Attribute Increase',
    description: 'Increase one attribute of your choice by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: 1, userChoiceRequired: { prompt: "Choose an attribute to increase by 1" } }],
  },
  {
    id: 'human_skill_expertise',
    name: 'Skill Expertise',
    description: 'Gain Expertise in one skill of your choice. Your mastery cap for this skill increases by 1, and your mastery level increases by 1.',
    cost: 1,
    effects: [{ type: 'GRANT_SKILL_EXPERTISE', value: { skillId: 'any_skill_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a skill for Expertise" } }],
  },
  // Elf Traits
  {
    id: 'elf_keen_senses',
    name: 'Keen Senses',
    description: 'You have advantage on Perception checks.', // Placeholder effect type
    cost: 1,
    effects: [{ type: 'ADVANTAGE_ON_SKILL', target: 'perception' }],
  },
  {
    id: 'elf_fey_ancestry',
    name: 'Fey Ancestry',
    description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.', // Placeholder effect type
    cost: 1,
    effects: [
      { type: 'ADVANTAGE_ON_SAVE_TYPE', target: 'charmed' },
      { type: 'IMMUNITY_TO_EFFECT_TYPE', target: 'magical_sleep' },
    ],
  },
  {
    id: 'elf_long_strider',
    name: 'Long Strider',
    description: 'Your base movement speed increases by 5 feet.',
    cost: 1,
    effects: [{ type: 'MODIFY_STAT', target: 'moveSpeedBase', value: 5 }],
  },
  // Example Negative Trait
   {
    id: 'negative_trait_example',
    name: 'Example Negative Trait',
    description: 'This is an example of a negative trait.',
    cost: -1, // Grants 1 point
    isNegative: true,
    effects: [], // Negative traits might not have positive effects
  },
   // Example Minor Trait
   {
    id: 'minor_trait_example',
    name: 'Example Minor Trait',
    description: 'This is an example of a minor trait.',
    cost: 1,
    isMinor: true,
    effects: [], // Minor traits might not have effects, or minor ones
  },
];
</file>

<file path="src/lib/rulesdata/types.ts">
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
}

// Interface for Ancestries
export interface IAncestry {
  id: string;
  name: string;
  description: string;
  defaultTraitIds?: string[]; // Traits automatically granted
  expandedTraitIds: string[]; // Traits available for selection
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
  // ... other base stats like Save DC, Death Threshold, Move Speed, Rest Points, Grit Points, Initiative Bonus
  saveDCBase: number;
  deathThresholdBase: number;
  moveSpeedBase: number;
  restPointsBase: number;
  gritPointsBase: number; // Base grit points (before Charisma mod)
  initiativeBonusBase: number; // Base initiative bonus (before Agility mod)

  level1Features: IClassFeature[]; // Features gained at Level 1
  featureChoicesLvl1?: IClassFeatureChoice[]; // Choices available for features at Level 1
  // ... other level-specific data to be added later
}

// Interface for Skill Data
export interface ISkillData {
  id: string;
  name: string;
  attributeAssociation: 'might' | 'agility' | 'charisma' | 'intelligence'; // Associated attribute
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
}
</file>

<file path="src/lib/stores/characterInProgressStore.ts">
// src/lib/stores/characterInProgressStore.ts

import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { CharacterInProgress } from '@prisma/client'; // Assuming Prisma client is generated

// Define the shape of the data stored in the characterInProgressStore
// This should mirror the CharacterInProgress Prisma model, plus any UI state
interface CharacterInProgressStoreData extends CharacterInProgress {
  // Add any UI-specific state here if needed, e.g., current step in wizard
  currentStep: number;
  // Add temporary state for trait selection overflow
  overflowTraitId: string | null;
  overflowAttributeName: string | null;
}

// Initial state for the store, matching Prisma defaults and adding UI state
const initialCharacterInProgressState: CharacterInProgressStoreData = {
  id: null, // Will be set when a new character is started/loaded
  attribute_might: -2,
  attribute_agility: -2,
  attribute_charisma: -2,
  attribute_intelligence: -2,
  pointsSpent: 0,

  ancestry1Id: null,
  ancestry2Id: null,
  selectedTraitIds: '', // JSON string of selected trait IDs
  ancestryPointsSpent: 0,

  classId: null,
  selectedFeatureChoices: '', // JSON string of selected feature choice IDs/values

  // Skills, Equipment, Details fields will be added/updated later
  finalName: null,
  finalPlayerName: null,

  finalCharacterSheet: null, // This will be populated when creation is complete

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
export const L1_COMBAT_MASTERY = 1;

// --- Derived Stores ---

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
    const primeModifierValue = highestAttribute.value;
    const primeModifierAttribute = highestAttribute.name;

    return { value: primeModifierValue, attribute: primeModifierAttribute };
  }
);

// Derived store for Save Masteries (DC20 p.22)
export const saveMasteries = derived(
  [characterInProgressStore, primeModifier],
  ([$store, $primeModifier]) => {
    const primeModValue = $primeModifier.value;
    const primeModAttribute = $primeModifier.attribute;

    // Save Mastery = Combat Mastery + Attribute Modifier
    // If the attribute is the Prime Modifier, use the Prime Modifier value.
    // Otherwise, use the attribute's own modifier (which is the score itself).
    return {
      might: L1_COMBAT_MASTERY + (primeModAttribute === 'Might' ? primeModValue : getModifier($store.attribute_might)),
      agility: L1_COMBAT_MASTERY + (primeModAttribute === 'Agility' ? primeModValue : getModifier($store.attribute_agility)),
      charisma: L1_COMBAT_MASTERY + (primeModAttribute === 'Charisma' ? primeModValue : getModifier($store.attribute_charisma)),
      intelligence: L1_COMBAT_MASTERY + (primeModAttribute === 'Intelligence' ? primeModValue : getModifier($store.attribute_intelligence)),
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

// TODO: Add more derived stores for other calculated stats (HP, SP, MP, Defenses, etc.)
</file>

<file path="projectPlan/mvp.md">
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
</file>

<file path="projectPlan/stage1.md">
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
</file>

<file path="projectPlan/stage2.md">
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
</file>

</files>
```

## File: src/lib/rulesdata/ancestries.ts
```typescript
// src/lib/rulesdata/ancestries.ts

import type { IAncestry } from './types';

export const ancestriesData: IAncestry[] = [
  {
    id: 'human',
    name: 'Human',
    description: '[Brief flavor description for Human, e.g., "Adaptable and varied..."]',
    defaultTraitIds: ['human_attribute_increase', 'human_skill_expertise', 'human_resolve', 'human_undying'], // Verify IDs match trait definitions below
    expandedTraitIds: ['human_trade_expertise', 'human_determination', 'human_unbreakable', 'human_attribute_decrease'], // Add all from DC20 p.108
  },
  {
    id: 'elf',
    name: 'Elf',
    description: '[Brief flavor description for Elf, e.g., "Graceful and perceptive..."]',
    defaultTraitIds: ['elf_elven_will', 'elf_nimble', 'elf_agile_explorer', 'elf_discerning_sight'], // Verify IDs
    expandedTraitIds: ['elf_quick_reactions', 'elf_peerless_sight', 'elf_climb_speed', 'elf_speed_increase', 'elf_trade_expertise_elf', 'elf_plant_knowledge', 'elf_brittle', 'elf_frail', 'elf_might_decrease'] // Add all from DC20 p.108
  },
  // Add other ancestries as needed
];
```

## File: src/lib/rulesdata/attributes.ts
```typescript
// src/lib/rulesdata/attributes.ts

import type { IAttributeData } from './types';
// To be placed in: src/lib/rulesdata/attributes.ts
export const attributesData: IAttributeData[] = [
// TODO: Replace bracketed placeholders with accurate information from the DC20 Beta 0.9.5 rulebook.
{
  id: 'might',
  name: 'Might',
  description: '[Extract description for Might from DC20 p.9]',
  derivedStats: [ // Examples, verify/adjust based on actual rules for each attribute
    { statName: 'Part of Area Defense calculation', formula: 'AD = 8 + CM + Might + Charisma + Bonuses' },
    { statName: 'Contributes to Max HP', formula: 'Max HP = Class HP + Might + Ancestry HP' }
  ]
},
{
  id: 'agility',
  name: 'Agility',
  description: '[Extract description for Agility from DC20 p.9]',
  derivedStats: [
    { statName: 'Part of Precision Defense calculation', formula: 'PD = 8 + CM + Agility + Intelligence + Bonuses' },
    { statName: 'Determines Jump Distance', formula: 'Jump Distance = Agility (min 1)' },
    { statName: 'Contributes to Initiative', formula: 'Initiative = CM + Agility' }
  ]
},
{
  id: 'charisma',
  name: 'Charisma',
  description: '[Extract description for Charisma from DC20 p.9]',
  derivedStats: [
    { statName: 'Part of Area Defense calculation', formula: 'AD = 8 + CM + Might + Charisma + Bonuses' },
    { statName: 'Determines Grit Points', formula: 'Grit Points = 2 + Charisma' }
  ]
},
{
  id: 'intelligence',
  name: 'Intelligence',
  description: '[Extract description for Intelligence from DC20 p.9]',
  derivedStats: [
    { statName: 'Part of Precision Defense calculation', formula: 'PD = 8 + CM + Agility + Intelligence + Bonuses' },
    { statName: 'Determines Base Skill Points', formula: 'Skill Points = 5 + Intelligence' }
  ]
}
];
```

## File: src/lib/rulesdata/classes.ts
```typescript
import { IClassDefinition } from './types';

// To be placed in: src/lib/rulesdata/classes.ts

// IClassDefinition for Barbarian:
export const barbarianClass: IClassDefinition = {
  id: 'barbarian',
  name: 'Barbarian',
  description: '[Extract "Source of Power" description for Barbarian from DC20 p.118]',
  baseHpContribution: 9, // From "Class HP" in char creation p.93, which is Lvl 1 value from class table p.118
  startingSP: 1, // From class table p.118, Lvl 1 Stamina Points
  startingMP: 0,
  skillPointGrantLvl1: 0, // Any L1 skill point grants beyond background
  tradePointGrantLvl1: 0, // Any L1 trade point grants beyond background
  combatTraining: ['Weapons', 'All Armor', 'All Shields'], // From p.118 "Barbarian Martial Path"
  // Add cantripsKnownLvl1, spellsKnownLvl1 if applicable (not for Barbarian L1)
  maneuversKnownLvl1: 'All Attack', // Plus additional from table, table says "+4" - this needs to be interpreted as a number of *choices* if not all are granted. Assume "All Attack" + 4 choices for now. Or just 4 choices total if "All Attack" is implicit to Martial Path.
  techniquesKnownLvl1: 0, // From Lvl 1 on class table p.118 (Note: table says known, but L1 is 0 usually, L2 gives 1)
  saveDCBase: 0, // Placeholder, need actual value from DC20
  deathThresholdBase: 0, // Placeholder, need actual value from DC20
  moveSpeedBase: 0, // Placeholder, need actual value from DC20
  restPointsBase: 0, // Placeholder, need actual value from DC20
  gritPointsBase: 0, // Placeholder, need actual value from DC20
  initiativeBonusBase: 0, // Placeholder, need actual value from DC20
  cantripsKnownLvl1: 0, // Not applicable for Barbarian L1
  spellsKnownLvl1: 0, // Not applicable for Barbarian L1
  level1Features: [
    {
      id: 'barbarian_rage',
      name: 'Rage',
      level: 1,
      description: '[Summarize Rage from DC20 p.119. Effects: +1 dmg Melee Martial Attacks, ADV Might Saves, PD -5, Resistance (Half) to Elemental and Physical damage. Lasts 1 min. Costs 1 AP, 1 SP.]',
      effects: [
          { type: 'GRANT_ABILITY', value: 'Rage_Mechanics_Bundle' } // Complex ability
      ]
    },
    {
      id: 'barbarian_berserker',
      name: 'Berserker',
      level: 1,
      description: '[Summarize Berserker benefits from DC20 p.119: Charge, Berserker Defense, Fast Movement, Mighty Leap.]',
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
      description: '[DC20 p.119: "When you Hit a structure or mundane object with a Melee Attack, it’s considered a Critical Hit."]',
      effects: [{ type: 'FLAVOR_MECHANIC_NOTE', value: 'Melee attacks vs objects/structures are Critical Hits.' }]
    }
  ],
  featureChoicesLvl1: [] // No explicit user choices for L1 features for Barbarian
}
```

## File: src/lib/rulesdata/traits.ts
```typescript
// src/lib/rulesdata/traits.ts

import type { ITrait } from './types';

export const traitsData: ITrait[] = [
  // Human Traits
  {
    id: 'human_attribute_increase',
    name: 'Attribute Increase',
    description: '[DC20 p.108: "Choose an Attribute. The chosen Attribute increases by 1 (up to the Attribute Limit)."]',
    cost: 2, // From DC20 p.108
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: 1, userChoiceRequired: { prompt: "Choose an Attribute to increase by 1" } }]
  },
  {
    id: 'human_skill_expertise',
    name: 'Skill Expertise',
    description: '[DC20 p.108: "Choose a Skill. Your Mastery Cap and Mastery Level in the chosen Skill both increase by 1..."]',
    cost: 2, // From DC20 p.108
    effects: [{ type: 'GRANT_SKILL_EXPERTISE', value: { skillId: 'any_skill_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a skill for Expertise" } }]
  },
  {
    id: 'human_resolve',
    name: 'Human Resolve',
    description: '[DC20 p.108: "Your Death’s Door Threshold value is expanded by 1."]',
    cost: 1, // From DC20 p.108
    effects: [{ type: 'MODIFY_DEATH_THRESHOLD_MODIFIER', value: 1 }]
  },
  {
    id: 'human_undying',
    name: 'Undying',
    description: '[DC20 p.108: "You have ADV on Saves against the Doomed Condition."]',
    cost: 0, // From DC20 p.108
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Doomed' }]
  },
  {
    id: 'human_trade_expertise',
    name: 'Trade Expertise',
    description: '[DC20 p.108: "Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1..."]',
    cost: 1, // From DC20 p.108
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'human_attribute_decrease', // Example of a negative trait
    name: 'Attribute Decrease',
    description: '[DC20 p.108: "Choose an Attribute. You decrease the chosen Attribute by 1 (to a minimum of -2)."]',
    cost: -1, // From DC20 p.108
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: -1, userChoiceRequired: { prompt: "Choose an Attribute to decrease by 1" } }]
  },
  // ITraits for Elf:
  // Default Traits:
  {
    id: 'elf_elven_will',
    name: 'Elven Will',
    description: '[DC20 p.108: "You have ADV on Checks and Saves against being Charmed and put to Sleep."]',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Charmed' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Sleep_Magic' }]
  },
  {
    id: 'elf_nimble',
    name: 'Nimble',
    description: '[DC20 p.108: "When you take the Dodge Action, you instead gain the benefits of the Full Dodge Action."]',
    cost: 2,
    effects: [{ type: 'MODIFY_ACTION_BENEFIT', target: 'Dodge_Action', value: 'Full_Dodge_Benefit' }]
  },
  {
    id: 'elf_agile_explorer',
    name: 'Agile Explorer',
    description: '[DC20 p.108: "You’re not affected by Difficult Terrain."]',
    cost: 2,
    effects: [{ type: 'IGNORE_DIFFICULT_TERRAIN' }]
  },
  {
    id: 'elf_discerning_sight',
    name: 'Discerning Sight',
    description: '[DC20 p.108: "You have ADV on Checks and Saves made to discern through visual illusions."]',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_SAVES_VS_ILLUSION_VISUAL' }]
  },
  // Expanded Traits (Examples - populate ALL from DC20 p.108):
  {
    id: 'elf_quick_reactions',
    name: 'Quick Reactions',
    description: '[DC20 p.108: "While you aren’t wearing Armor, you gain +1 PD."]',
    cost: 1,
    effects: [{ type: 'MODIFY_PD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'elf_peerless_sight',
    name: 'Peerless Sight',
    description: '[DC20 p.108: "Your Darkvision increases by 30 feet."]',
    cost: 1,
    effects: [{ type: 'MODIFY_DARKVISION', value: 30 }]
  },
  {
    id: 'elf_climb_speed',
    name: 'Climb Speed',
    description: '[DC20 p.108: "You gain a Climb Speed equal to your Speed."]',
    cost: 1,
    effects: [{ type: 'GRANT_CLIMB_SPEED_EQUAL_TO_SPEED' }]
  },
  {
    id: 'elf_speed_increase',
    name: 'Speed Increase',
    description: '[DC20 p.108: "Your Speed increases by 5 feet."]',
    cost: 1,
    effects: [{ type: 'MODIFY_SPEED', value: 5 }]
  },
  {
    id: 'elf_trade_expertise_elf',
    name: 'Trade Expertise (Elf)',
    description: '[DC20 p.108: "Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1..."]',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'elf_plant_knowledge',
    name: 'Plant Knowledge',
    description: '[DC20 p.108: "You have ADV on Checks made to identify plants and fungi."]',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_VS_PLANT_IDENTIFICATION' }]
  },
  {
    id: 'elf_brittle',
    name: 'Brittle',
    description: '[DC20 p.108: "Your PD decreases by 1."]',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_PD', value: -1 }]
  },
  {
    id: 'elf_frail',
    name: 'Frail',
    description: '[DC20 p.108: "Your HP maximum decreases by 2."]',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: -2 }] // Use a specific type for static HP modification
  },
  {
    id: 'elf_might_decrease',
    name: 'Might Decrease',
    description: '[DC20 p.108: "Your Might decreases by 1 (to a minimum of -2)."]',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'might', value: -1 }]
  },
];
```

## File: src/lib/rulesdata/types.ts
```typescript
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
}

// Interface for Ancestries
export interface IAncestry {
  id: string;
  name: string;
  description: string;
  defaultTraitIds?: string[]; // Traits automatically granted
  expandedTraitIds: string[]; // Traits available for selection
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
```
