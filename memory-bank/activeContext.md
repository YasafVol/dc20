# Active Context

This document tracks the current work focus, recent changes, and next steps for the project.

## Current Work Focus

With the successful merge of Character Creation Stages A, B, and C into a single page and the completion of static rule data population, the current focus is on testing the merged character creation page (`src/routes/character-creator/+page.svelte`) and planning/implementing the subsequent stages (D-F).

## Recent Changes

**Character Creation Stages A, B, C Merged:**
- Successfully merged the functionality of the original Stage A (Attributes), Stage B (Ancestry), and Stage C (Class) into a single Svelte page component (`src/routes/character-creator/+page.svelte`).
- Created a new unified API endpoint (`src/routes/api/character/progress/complete/+server.ts`) to handle saving all data for the merged stages in a single request.
- The old stage-specific page components and API endpoints have been superseded and moved to a backup directory (`_backup_merge_stages_20250621/`).

**Static Rule Data Population Completed:**
- The static rule data files (`src/lib/rulesdata/*.ts`) have been fully populated with detailed information for attributes, ancestries, classes, skills, traits, languages, and trades based on the DC20 Beta 0.9.5 rulebook. This completes a major step in preparing the necessary data for the Character Creation process.

**Core UI Foundation Completed:**
- Functional SvelteKit project initialized and configured.
- TailwindCSS installed and configured with the project's custom theme, verified.
- The Inter font loaded and applied.
- Melt UI (`@melt-ui/svelte`) installed, and its preprocessor (`@melt-ui/pp`) correctly configured.

## Next Steps

1.  Thoroughly test the merged character creation page (`src/routes/character-creator/+page.svelte`) and the unified save API endpoint (`src/routes/api/character/progress/complete/+server.ts`).
2.  Address any bugs or issues found during testing.
3.  Detail and implement Stage D (Background) of the character creation process.
4.  Detail and implement Stage E (Review) of the character creation process.
5.  Detail and implement Stage F (Equipment) of the character creation process.
6.  Implement the backend logic for final character calculation and `CharacterSheetData` creation upon completion of Stage F.
7.  Implement the frontend component for displaying the finalized character sheet.
8.  Refine UI/UX based on testing and feedback.

## Active Decisions and Considerations

- Using Melt UI primitives for accessible UI components, styled with TailwindCSS. This requires configuring the `@melt-ui/pp` preprocessor in `svelte.config.js`. Note: Some Melt UI components had SSR issues, leading to the use of standard HTML elements in the merged page, which is tracked as technical debt (TD-005).
- Implementing a dark mode first theme.
- Storing static rule data in TypeScript files (`src/lib/rulesdata/`) for the MVP.
- Utilizing a single writable Svelte store (`characterInProgressStore`) for frontend state management, with derived stores for calculated values.
- Backend is the source of truth for all final calculations and validation.
- The merged page handles the specific logic for attribute point allocation (Point Buy), Ancestry Point allocation, and Class/Feature selection within a single view.
- The unified `/complete` API endpoint handles the initial save for the A-B-C data block.

## Important Patterns and Preferences

- Component-based development for the frontend.
- Clear separation of concerns between frontend UI/provisional logic and backend validation/authoritative calculation.
- Adherence to the defined dark mode color palette and Inter font.
- Using SvelteKit API routes for backend interactions (specifically the new `/complete` endpoint for the initial save).

## Learnings and Project Insights

The successful merge of Stages A, B, and C into a single page, along with the creation of a unified API, represents a significant architectural shift from the initial stage-by-stage plan. This approach simplifies the user flow and frontend state management for the initial steps. The completion of static rule data population provides the necessary foundation for implementing the remaining stages and backend calculations. Addressing the Melt UI SSR issue (TD-005) remains a priority for improving component library usage and accessibility.

---
**Last Updated:** 6/25/2025
