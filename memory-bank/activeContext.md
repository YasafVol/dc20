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
