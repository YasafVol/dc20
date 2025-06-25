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

- Create a new Svelte page component: `src/routes/character-creator/+page.svelte`. This will be the main merged page. **Status: Completed**
- The existing `src/routes/character-creator/stage-a/+page.svelte` and `src/routes/character-creator/stage-b/+page.svelte` files can be kept temporarily as references but will no longer be directly routed to.
- Create a new backend API endpoint file: `src/routes/api/character/progress/complete/+server.ts`. **Status: Completed**
- The existing `src/routes/api/character/progress/stageA/+server.ts` and `src/routes/api/character/progress/stageB/+server.ts` files will become obsolete and can be removed or archived after the new endpoint is functional.

### 2. Component Implementation (`src/routes/character-creator/+page.svelte`)

- **Import necessary stores and data:** Import `characterInProgressStore`, derived stats (`maxHP`, `areaDefense`, `precisionDefense`, `initiative`, `gritPoints`, `jumpDistance`, `provisionalSkillPoints`, `startingSP`, `startingMP`), `attributesData`, `ancestriesData`, `traitsData`, and `classesData`. **Status: Completed**
- **Combine HTML Structure:**
    - Copy the HTML structure from `src/routes/character-creator/stage-a/+page.svelte` for the Character Name and Attribute Allocation sections. **Status: Completed**
    - Copy the HTML structure from `src/routes/character-creator/stage-b/+page.svelte` for the Ancestry Selection and Trait Allocation sections. **Status: Completed**
    - Add a new section for **Class Selection**. This will involve:
        - Displaying available classes (using `classesData`).
        - Allowing the user to select one class (e.g., using radio buttons or a select dropdown).
        - Conditionally displaying Class Features (`level1Features`) and implementing UI for any required Feature Choices (`featureChoicesLvl1`) based on the selected class. This will require logic to render different input types (e.g., radio buttons for `select_one`). **Status: Completed**
    - Add a section to display **Final Provisional Stats** (HP, SP, MP, Defenses, Saves, etc.) based on the combined effects of Attributes, Ancestry Traits, and Class. This will leverage the existing and newly added derived stores. **Status: Completed**
- **Combine Svelte Script Logic:**
    - Merge the script sections from Stage A and Stage B. **Status: Completed**
    - Adapt the `handleAttributeChange` and `handleTraitSelection` functions to work within the single component. **Status: Completed**
    - Implement logic for Class Selection:
        - Update the `characterInProgressStore` with the selected `classId`. **Status: Completed**
        - Implement a `handleFeatureChoice` function to update the `selectedFeatureChoices` in the store (as a JSON string). **Status: Completed**
    - Ensure all reactive declarations (`$:`) and derived stores function correctly with the combined state. **Status: Completed**
    - Implement a single `handleSubmitCharacter` function that gathers all data from the store and sends it to the new `/api/character/progress/complete` endpoint. **Status: Completed**
- **Combine Styling:** Merge the CSS from both pages, resolving any conflicts. **Status: Completed**

### 3. State Management (`src/lib/stores/characterInProgressStore.ts`)

- The existing `characterInProgressStore` and derived stores are well-suited.
- **Add/Modify Derived Stores:**
    - Add `startingSP` derived store based on selected class's `startingSP`. **Status: Completed**
    - Add `startingMP` derived store based on selected class's `startingMP`. **Status: Completed**
    - Modify `maxHP` derived store to include the selected class's `baseHpContribution`. **Status: Completed**

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
    **Status: Completed**

### 4. API Design (`src/routes/api/character/progress/complete/+server.ts`)

- Create a new POST endpoint. **Status: Completed**
- It should receive the complete character data object from the frontend (including character name, attributes, ancestry IDs, selected trait IDs, class ID, selected feature choices). **Status: Completed**
- Implement comprehensive backend validation:
    - Validate character name. **Status: Completed**
    - Validate attribute values and point buy total (existing Stage A logic). **Status: Completed**
    - Validate ancestry selections (up to 2, valid IDs). **Status: Completed**
    - Validate selected trait IDs against the chosen ancestries and point budget (existing Stage B logic). **Status: Completed**
    - Validate class selection (valid ID). **Status: Completed**
    - **Validate selected feature choices against the chosen class definition:** Ensure all required choices for the selected class are present and the selected values are valid options. **Status: Completed**
    - **Validate cross-stage dependencies:** E.g., ensure attribute caps are not exceeded after applying ancestry trait bonuses. **Status: Completed**

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
    **Status: Completed**

- Use a Prisma transaction to either save all data or roll back if any validation fails or a database error occurs. **Status: Completed**
- Update the `CharacterInProgress` record in the database with all the collected data. **Status: Completed**
- Return a success response with the character ID or detailed error messages on failure. **Status: Completed**

### 5. Validation Strategy

- **Frontend Validation:** Provide immediate feedback to the user as they make choices (e.g., point budget remaining, trait selection rules, attribute overflow, required feature choices). Disable the submit button until all sections are valid. **Status: Completed**
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
    **Status: Completed**
- **Backend Validation:** Implement robust validation in the `/api/character/progress/complete` endpoint as the authoritative source of truth before saving to the database. **Status: Completed**

### 6. Migration Steps (Corrected Order)

1. **Backup:** ✅ Create backups of `src/routes/character-creator/stage-a/+page.svelte`, `src/routes/character-creator/stage-b/+page.svelte`, `src/routes/api/character/progress/stageA/+server.ts`, and `src/routes/api/character/progress/stageB/+server.ts`. **Status: Completed**
2. **Update Derived Stores:** ✅ Modify `src/lib/stores/characterInProgressStore.ts` to add/update derived stores for `startingSP`, `startingMP`, and `maxHP` to incorporate class data. **Status: Completed**
3. **Create New API Endpoint:** ✅ Create `src/routes/api/character/progress/complete/+server.ts` and implement the backend logic for receiving, validating (including new cross-stage and feature choice validation), and saving all data in a transaction. **Status: Completed**
4. **Create Merged Component:** ✅ Create `src/routes/character-creator/+page.svelte`. Copy the relevant HTML and Svelte script logic from the old stage files and add the new sections for Class Selection and Final Provisional Stats. Implement the frontend validation logic. **Status: Completed**
5. **Test Incrementally:** Test the merged page locally as you build it, verifying each section works and interacts correctly. **Status: Completed**
6. **Update Routing:** Modify SvelteKit routing to point `/character-creator` to the new merged page. **Status: Completed**
7. **Test Thoroughly:** Conduct comprehensive testing as outlined in the Testing Strategy. **Status: Completed**
8. **Cleanup:** Once confident the new page works, remove or archive the old stage files and API endpoints. **Status: Completed**

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
