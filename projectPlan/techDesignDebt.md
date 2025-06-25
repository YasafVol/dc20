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
*   **Area/Component:** Character Creation Page (`src/routes/character-creator/+page.svelte`), Character Store (`characterInProgressStore.ts`), Unified Backend API (`src/routes/api/character/progress/complete/+server.ts`).
*   **Issue Description:** The `primeModifier` derived store in `characterInProgressStore.ts` currently defaults to selecting the first attribute in its internal list in the event of a tie for the highest attribute score. The UI on the merged character creation page allows the user to explicitly choose their Prime Modifier in such a tie. This explicit user choice is now persisted in the store and database. However, the derived store's logic might still default to the first attribute if not explicitly updated to prioritize the user's choice.
*   **Current Approach/Decision:** The merged page component manages the user's selection for the Prime Modifier tie-breaker and updates the `primeModifierAttributeChoice` field in the `characterInProgressStore`. This field is saved via the unified `/complete` API. The UI on the merged page uses this persisted choice for display.
*   **Rationale for Current Approach:** Allows the user's choice to be captured and persisted. The UI correctly displays the chosen prime modifier.
*   **Identified Limitations/Impact:** The `primeModifier` derived store in `characterInProgressStore.ts` needs to be updated to consistently use the `primeModifierAttributeChoice` field when a tie exists, ensuring downstream calculations (if any) use the correct attribute. The UI for displaying the Prime Modifier *outside* the main character creation page (e.g., on the final character sheet) must also use the persisted `primeModifierAttributeChoice`.
*   **Proposed Future Solution/Refinement:**
    1.  **Derived Logic Update:** Modify the `primeModifier` derived store in `characterInProgressStore.ts` to prioritize the `primeModifierAttributeChoice` field if it is set and a tie exists among the highest attributes.
    2.  **Consistency:** Ensure all downstream calculations and displays (especially on the final character sheet page) correctly use the persisted user choice for the Prime Modifier attribute.
*   **Priority:** Medium (Potential for specific character build inaccuracies if not addressed before features relying on precise prime attribute choice are implemented).
*   **Status:** Open

---

### TD-002: Character ID Management for CharacterInProgress
*   **Date Identified:** 2025-06-19
*   **Area/Component:** Character Creation Page (`src/routes/character-creator/+page.svelte`), Unified Backend API (`src/routes/api/character/progress/complete/+server.ts`), `characterInProgressStore.ts`.
*   **Issue Description:** The precise mechanism for creating a new `CharacterInProgress` record and retrieving/managing its `id` for new characters versus resuming existing characters needs refinement. The `characterInProgressStore` initializes its `id` field to `null`. The unified `/complete` API endpoint handles both `create` (if no ID is provided) and `update` (if an ID is provided) operations.
*   **Current Approach/Decision:** The unified `/api/character/progress/complete/+server.ts` endpoint is designed to handle both the initial creation of a `CharacterInProgress` record (when the frontend sends data without an ID) and subsequent updates (when the frontend sends data with an existing ID). The frontend is responsible for storing the returned ID (e.g., in the Svelte store and potentially `localStorage` for resume).
*   **Rationale for Current Approach:** Allows the single `/complete` endpoint to manage the lifecycle of the `CharacterInProgress` record for the A-B-C data block.
*   **Identified Limitations/Impact:** While functional, having the primary save endpoint also handle creation is slightly less clean than a dedicated "create new character" endpoint. The frontend logic for initializing the store (checking `localStorage`, calling the API) needs careful implementation to handle both new and resumed sessions.
*   **Proposed Future Solution/Refinement:**
    1.  Implement a dedicated API endpoint (e.g., `/api/character/new`) that specifically handles the creation of a new `CharacterInProgress` record, returning its ID.
    2.  Modify the frontend character creation page to call `/api/character/new` on initial load if no character ID is found (e.g., in `localStorage`).
    3.  Update the unified `/complete` endpoint to *only* handle `update` operations, requiring a valid character ID in the payload.
    4.  Refine frontend logic for resume functionality using `localStorage`.
*   **Priority:** Medium (Essential for robust save/resume functionality).
*   **Status:** Open

---

### TD-003: Attribute Structure in Svelte Store vs. Component Plan
*   **Date Identified:** 2025-06-19
*   **Area/Component:** `characterInProgressStore.ts`, Character Creation Page (`src/routes/character-creator/+page.svelte`).
*   **Issue Description:** The `characterInProgressStore.ts` uses a flat structure for attribute storage (e.g., `attribute_might: -2`). The initial plan for the Stage A component described using a nested object for attributes within the component's state (e.g., `attributes: { Might: -2, Agility: -2, ... }`).
*   **Current Approach/Decision:** The merged character creation page component adapts to the store's flat structure for reading and writing attributes. This means directly accessing `$characterInProgressStore.attribute_might`, etc.
*   **Rationale for Current Approach:** Simplifies interaction with the existing store structure and avoids unnecessary mapping layers within the component for this specific aspect. The store's flat structure aligns directly with the Prisma model.
*   **Identified Limitations/Impact:** Minor. If a nested `attributes` object was strongly preferred for internal component logic or for passing to sub-components, this direct adaptation means that preference isn't met. However, it's functionally equivalent.
*   **Proposed Future Solution/Refinement:** This is a very minor issue. If a compelling reason arises for a nested `attributes` object within the store itself or for broader component usage, the store could be refactored. For now, the current approach is acceptable.
*   **Priority:** Very Low.
*   **Status:** Resolved.

---

### TD-004: Save Masteries Calculation Documentation Alignment
*   **Date Identified:** 2025-06-19
*   **Area/Component:** `characterInProgressStore.ts` (derived store `saveMasteries`), Documentation (`projectPlan/stage1.md`).
*   **Issue Description:** The `saveMasteries` derived store in `characterInProgressStore.ts` implements a calculation that is more nuanced and likely more rule-accurate than the simpler formula described in the now-archived `projectPlan/stage1.md`.
*   **Current Approach/Decision:** The merged character creation page component directly uses the `saveMasteries` derived store from `characterInProgressStore.ts` for displaying save mastery values. The outdated description in `projectPlan/stage1.md` is now part of an archived document.
*   **Rationale for Current Approach:** Utilizes existing, more accurate logic in the central store, promoting consistency and reducing redundant calculations in the component. The outdated documentation is now marked as historical.
*   **Identified Limitations/Impact:** The archived documentation (`projectPlan/stage1.md`) still contains the less accurate description.
*   **Proposed Future Solution/Refinement:** Ensure any new documentation or active planning documents accurately describe the `saveMasteries` calculation as implemented in `characterInProgressStore.ts`. No changes are strictly necessary for the archived `stage1.md` beyond the archival notice.
*   **Priority:** Very Low (Documentation/Alignment).
*   **Status:** Open (For awareness/documentation update in *active* documents).

---

### TD-005: Melt UI SSR Compatibility Issue with Wrapped Components
*   **Date Identified:** 2025-06-19
*   **Area/Component:** Melt UI Wrapper Components (`src/lib/components/ui/`), SvelteKit SSR, Character Creation Page (`src/routes/character-creator/+page.svelte`).
*   **Issue Description:** Attempting to wrap Melt UI primitives (specifically `RadioGroupPrimitive`) in custom Svelte components and import them via `$lib/components/ui/` paths results in a `TypeError: Cannot read properties of undefined (reading 'Root')` during SvelteKit's server-side rendering (SSR). This indicates that the Melt UI primitive object is `undefined` in the SSR environment when accessed at the module level within the wrapper component's script or index file.
*   **Current Approach/Decision:** Full Melt UI integration was deferred for components exhibiting this SSR issue (like RadioGroup) in the merged character creation page. The UI for affected elements uses standard HTML elements (`<button>`, `<input>`, `<label>`, `<input type="radio">`) and Svelte reactivity, with styling applied directly via TailwindCSS classes.
*   **Rationale for Current Approach:** Allowed progress on the core character creation functionality without being blocked by the Melt UI SSR compatibility issue. Provides a functional UI using standard web technologies.
*   **Identified Limitations/Impact:**
    *   Does not leverage Melt UI's accessibility features and primitive logic for the affected components in the initial implementation.
    *   Requires manual implementation of behaviors that Melt UI primitives would normally provide (e.g., keyboard navigation, ARIA attributes for radio groups).
    *   The UI components in `src/lib/components/ui/` that were intended as wrappers for Melt UI primitives are currently incomplete or non-functional due to this issue.
*   **Proposed Future Solution/Refinement:**
    1.  Investigate the root cause of the Melt UI SSR issue in the SvelteKit environment. This may involve consulting Melt UI documentation, community forums, or experimenting with different import/initialization patterns for SSR.
    2.  Once a solution or workaround is found, refactor the affected UI wrapper components (`src/lib/components/ui/`) to correctly integrate the Melt UI primitives in an SSR-compatible manner.
    3.  Update the character creation page (and any future components) to use the refactored Melt UI wrapper components.
    4.  Ensure accessibility features provided by Melt UI are correctly implemented in the wrappers.
*   **Priority:** Medium (Impacts accessibility and consistency of UI component library usage).
*   **Status:** Open

---

### TD-006: Persistent Environmental/TypeScript Errors
*   **Date Identified:** 2025-06-20
*   **Area/Component:** SvelteKit Development Environment, TypeScript Configuration.
*   **Issue Description:** Encountered persistent TypeScript errors that seemed related to tooling or environment setup, including issues with Svelte file indexing, `./$types` imports, and implicit `any` types. These errors initially prevented successful file modifications.
*   **Current Approach/Decision:** Performed a comprehensive environment reset (deleted `.svelte-kit`, `node_modules`, `package-lock.json`, reinstalled dependencies, and restarted the dev server). Addressed specific syntax errors and type errors in code related to indexing and store initialization by modifying the code directly.
*   **Rationale for Current Approach:** Necessary steps to resolve environmental and code-level issues blocking development progress. The environment reset is a standard troubleshooting step for tooling-related problems in SvelteKit. Code modifications were required to fix specific syntax and type mismatches identified by the TypeScript compiler.
*   **Identified Limitations/Impact:** The root cause of the initial environmental/tooling errors is not definitively known, although the environment reset and type regeneration likely cleared any corrupted build artifacts or caches. The specific code issues were addressed, but similar issues could arise if complex TypeScript/template interactions are not carefully managed.
*   **Proposed Future Solution/Refinement:** Monitor the development environment for the recurrence of similar persistent errors. If they reappear, further investigation into the SvelteKit build process, TypeScript configuration, and potential interactions with other dependencies may be required. Ensure careful attention to TypeScript compatibility when writing Svelte template logic.
*   **Priority:** High (Initially blocked development).
*   **Status:** Resolved.
