# Active Context

This document tracks the current work focus, recent changes, and next steps for the project.

## Current Work Focus

The current focus is on implementing the core features defined in the MVP, specifically the Character Creation Wizard for Level 1 characters. This involves building the frontend Svelte components for each stage (A, B, C) and the corresponding backend SvelteKit endpoints for data persistence and validation.

## Recent Changes

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
