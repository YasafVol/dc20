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
