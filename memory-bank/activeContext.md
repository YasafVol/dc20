# Active Context

This document tracks the current work focus, recent changes, and next steps for the project.

## Current Work Focus

The primary focus has shifted to addressing the Vercel deployment issues. A new, systematic migration plan (`projectPlan/cleanVercelMigration.md`) has been adopted, emphasizing incremental testing and deployment to the production environment at each phase. This ensures that deployment-related problems are identified and resolved early.

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

The immediate next steps follow the `cleanVercelMigration.md` plan:

### Phase 1: Baseline Verification (Vercel)
1.  Create a new SvelteKit skeleton project in a `dc20-clean` directory.
2.  Install `@sveltejs/adapter-vercel` and configure `svelte.config.js`.
3.  **Test Point 1: Deploy to Vercel.**
    *   **Goal:** Confirm the fundamental build process and Vercel adapter are working correctly before adding any of our code.

Subsequent phases (Database Layer, API Logic, UI/Integration) will follow, each with a dedicated Vercel deployment test point.

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

The successful merge of Stages A, B, and C into a single page, along with the creation of a unified API, represents a significant architectural shift from the initial stage-by-stage plan. This approach simplifies the user flow and frontend state management for the initial steps. The completion of static rule data population provides the necessary foundation for implementing the remaining stages and backend calculations.

The current priority is the Vercel migration. The `cleanVercelMigration.md` plan emphasizes a "clean repository" approach, creating a new `dc20-clean` directory and a new GitHub repository to ensure a fresh start and avoid legacy issues. This strategy is considered the safest and most effective for resolving the persistent deployment failures. Addressing the Melt UI SSR issue (TD-005) will be revisited after the successful Vercel migration.

---
**Last Updated:** 6/25/2025
