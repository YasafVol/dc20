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

- **Import necessary stores and data:** Import `characterInProgressStore`, derived stats (`maxHP`, `areaDefense`, etc.), `attributesData`, `ancestriesData`, `traitsData`, and `classesData`.
- **Combine HTML Structure:**
    - Copy the HTML structure from `src/routes/character-creator/stage-a/+page.svelte` for the Character Name and Attribute Allocation sections.
    - Copy the HTML structure from `src/routes/character-creator/stage-b/+page.svelte` for the Ancestry Selection and Trait Allocation sections.
    - Add a new section for **Class Selection**. This will involve:
        - Displaying available classes (using `classesData`).
        - Allowing the user to select one class.
        - Conditionally displaying Class Features and Feature Choices based on the selected class (referencing `level1Features` and `featureChoicesLvl1` in `classesData`).
        - Implementing UI for any required feature choices (e.g., radio buttons or selects for Sorcerer Origin, Bard Magical Expression, etc.).
    - Add a section to display **Final Provisional Stats** (HP, SP, MP, Defenses, Saves, etc.) based on the combined effects of Attributes, Ancestry Traits, and Class. This will leverage the existing derived stores and potentially require new ones for class-specific calculations (like base HP/SP/MP from class).
- **Combine Svelte Script Logic:**
    - Merge the script sections from Stage A and Stage B.
    - Adapt the `handleAttributeChange` and `handleTraitSelection` functions to work within the single component.
    - Implement logic for Class Selection:
        - Update the `characterInProgressStore` with the selected `classId`.
        - Handle saving any `selectedFeatureChoices` to the store (as a JSON string, similar to `selectedTraitIds`).
    - Ensure all reactive declarations (`$:`) and derived stores function correctly with the combined state.
    - Implement a single `handleSubmitCharacter` function that gathers all data from the store and sends it to the new `/api/character/progress/complete` endpoint.
- **Combine Styling:** Merge the CSS from both pages, resolving any conflicts.

### 3. State Management (`src/lib/stores/characterInProgressStore.ts`)

- The existing `characterInProgressStore` and derived stores (`maxHP`, `areaDefense`, etc.) are well-suited for this merged approach as they already hold the necessary data fields (`attribute_might`, `ancestry1Id`, `selectedTraitIds`, `classId`, `selectedFeatureChoices`).
- Ensure derived stores correctly incorporate class-specific data (e.g., using `classId` to look up base HP/SP/MP from `classesData` when calculating `maxHP`, `startingSP`, `startingMP`). This might require modifying existing derived stores or adding new ones.

### 4. API Design (`src/routes/api/character/progress/complete/+server.ts`)

- Create a new POST endpoint.
- It should receive the complete character data object from the frontend (including character name, attributes, ancestry IDs, selected trait IDs, class ID, selected feature choices).
- Implement comprehensive backend validation:
    - Validate character name.
    - Validate attribute values and point buy total (existing Stage A logic).
    - Validate ancestry selections (up to 2, valid IDs).
    - Validate selected trait IDs against the chosen ancestries and point budget (existing Stage B logic).
    - Validate class selection (valid ID).
    - Validate selected feature choices against the chosen class definition.
    - Validate cross-stage dependencies (e.g., attribute caps after ancestry traits).
- Use a Prisma transaction to either save all data or roll back if any validation fails or a database error occurs.
- Update the `CharacterInProgress` record in the database with all the collected data.
- Return a success response with the character ID or detailed error messages on failure.

### 5. Validation Strategy

- **Frontend Validation:** Provide immediate feedback to the user as they make choices (e.g., point budget remaining, trait selection rules, attribute overflow). Disable the submit button until all sections are valid.
- **Backend Validation:** Implement robust validation in the `/api/character/progress/complete` endpoint as the authoritative source of truth before saving to the database.

### 6. Migration Steps

1. **Backup:** Create backups of `src/routes/character-creator/stage-a/+page.svelte`, `src/routes/character-creator/stage-b/+page.svelte`, `src/routes/api/character/progress/stageA/+server.ts`, and `src/routes/api/character/progress/stageB/+server.ts`.
2. **Create New Files:** Create `src/routes/character-creator/+page.svelte` and `src/routes/api/character/progress/complete/+server.ts`.
3. **Copy & Combine UI:** Copy the relevant HTML and Svelte script logic from the old stage files into the new `src/routes/character-creator/+page.svelte`.
4. **Implement Class Section:** Add the UI and logic for Class Selection and Feature Choices in the new Svelte page.
5. **Update Derived Stores:** Modify or add derived stores in `src/lib/stores/characterInProgressStore.ts` to correctly incorporate class data into stat calculations.
6. **Implement New API Endpoint:** Write the backend logic in `src/routes/api/character/progress/complete/+server.ts` for receiving, validating, and saving all data.
7. **Update Routing:** Modify SvelteKit routing to point `/character-creator` to the new merged page.
8. **Test:** Thoroughly test the merged page, ensuring all inputs work, validations trigger correctly, stats update dynamically, and the final save works via the new API endpoint.
9. **Cleanup:** Once confident the new page works, remove or archive the old stage files and API endpoints.

### 7. Testing Strategy

- **Unit Tests:** (If applicable) Test individual functions for attribute changes, trait selection rules, and class feature logic.
- **Component Tests:** Test the merged Svelte component to ensure UI elements are displayed correctly, interactions work, and frontend validation is active.
- **API Tests:** Test the `/api/character/progress/complete` endpoint with various valid and invalid data payloads to ensure backend validation and saving work correctly.
- **End-to-End Tests:** Manually or automatically go through the entire character creation process on the merged page to ensure a character can be successfully created and saved. Verify the saved data in the database.

This plan provides a roadmap for consolidating the character creation flow into a single, more integrated experience.
