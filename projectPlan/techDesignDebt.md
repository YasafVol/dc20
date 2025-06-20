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
