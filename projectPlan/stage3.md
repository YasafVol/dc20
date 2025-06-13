# AI Generation Guide: Character Creator - Stage C (Class Selection)

## I. Overall Stage Objective
Create a Svelte component (e.g., `StageC_Class.svelte`) that allows the user to:
1.  Browse and select a Character Class from a list of options.
2.  View a detailed description, Level 1 features, and specific Level 1 benefits (HP, SP/MP, skill/trade points, starting known abilities) for the selected class.
3.  Make any necessary Level 1 feature choices specific to the selected class.
4.  See the `CharacterSnapshotPanel` update with finalized HP, SP, MP, and adjusted skill/trade point pools based on the class selection.
5.  Persist these choices to a Svelte store and, upon proceeding, save to the `CharacterInProgress` table via a backend API call.

## II. Svelte Component: `StageC_Class.svelte`

### A. Props:
*   `characterInProgressStore`: Writable Svelte store (holds `attributesFromStageA`, `selectedAncestries`, `selectedTraits`, `selectedClassID`, `classFeatureChoicesLvl1`, etc.).
*   `staticRuleData`: Object containing all class definitions, features, Lvl 1 benefits, etc.

### B. Internal State (Reactive Svelte Variables):
*   `selectedClassID`: String | null (bound to the Svelte store)
*   `currentFeatureChoices`: Object (e.g., `{ sorcererOrigin: null, clericDomain1: null }` - specific to class, bound to Svelte store)
*   `derivedSelectedClassData`: Reactive/Derived Object (`$: derivedSelectedClassData = $staticRuleData.classes.find(c => c.id === $selectedClassID)`)

### C. UI Structure & Components (Melt UI + TailwindCSS):

**1. Main Container & Stage Title:**
    *   Container (`div`): Tailwind: `p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary`
    *   Title (`h2`): "Step 3: Choose Your Class" (Tailwind: `text-2xl font-semibold mb-6 text-yellow-accent`)

**2. Class Selection Area (`div`):**
    *   Layout: CSS Grid (`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8`)
    *   **For each Class in `staticRuleData.classes`:**
        *   **`SelectionCard.svelte` Component (or custom styled `div` with Melt UI `Toggle` behavior):**
            *   Props: `classData`, `isSelected`, `onSelect`.
            *   Displays: Class Name (`h4 text-lg font-medium text-yellow-accent`), Short Description (`p text-xs text-light-text-secondary`).
            *   Tailwind: `p-4 border rounded-lg cursor-pointer transition-all dark:border-gray-700 dark:hover:bg-dark-bg-primary ui-selected:bg-purple-primary/30 ui-selected:border-purple-primary ui-selected:ring-2 ui-selected:ring-purple-primary`
            *   On click: calls `onSelect(classData.id)`.

**3. Selected Class Details Area (`div` - Conditional: `{#if $selectedClassID}`):**
    *   Tailwind: `mt-6 p-4 bg-dark-bg-primary rounded-lg`
    *   Selected Class Name (`h3`): `{$derivedSelectedClassData.name}` (Tailwind: `text-xl font-bold text-yellow-accent mb-2`)
    *   Full Description (`p`): `{$derivedSelectedClassData.fullDescription}` (Tailwind: `mb-4 text-light-text-primary leading-relaxed`)

    *   **Level 1 Class Features (`div`):**
        *   Title (`h4`): "Level 1 Features" (Tailwind: `text-lg font-medium mb-3 text-blue-info`)
        *   List (`ul`):
            *   For each feature in `$derivedSelectedClassData.level1Features`:
                *   Item (`li` - Tailwind: `mb-3 p-3 bg-dark-bg-secondary rounded`):
                    *   Feature Name (`strong`): `{feature.name}` (Tailwind: `text-light-text-primary`)
                    *   Feature Description (`p`): `{feature.description}` (Tailwind: `text-sm text-light-text-secondary mt-1`)
                    *   Melt UI `Tooltip` for any complex terms.

    *   **Level 1 Feature Choices (Conditional - `{#if $derivedSelectedClassData.featureChoicesLvl1 && $derivedSelectedClassData.featureChoicesLvl1.length > 0}`):**
        *   Title (`h4`): "Feature Choices" (Tailwind: `text-lg font-medium my-3 text-blue-info`)
        *   For each choice definition in `$derivedSelectedClassData.featureChoicesLvl1`:
            *   Label (Melt UI `Label`): `{choice.prompt}` (Tailwind: `block mb-1 font-medium`)
            *   If single select (e.g., Sorcerer Origin):
                *   Melt UI `Select` (`<Select.Root bind:value={$currentFeatureChoices[choice.id]}>`):
                    *   Styled `Select.Trigger` and `Select.Content` with `Select.Item` for each option.
            *   If multi-select (e.g., Cleric Domains - limit to 2):
                *   Group of Melt UI `Checkbox` components, each with a `Label`.
                *   Logic to enforce selection limits.

    *   **Level 1 Class Benefits Summary (`div`):**
        *   Title (`h4`): "Level 1 Benefits" (Tailwind: `text-lg font-medium my-3 text-blue-info`)
        *   Layout: Grid or flex list.
        *   `p`: "Base HP Increase: +{$derivedSelectedClassData.baseHpBonus}"
        *   `p`: "Starting Stamina Points: {$derivedSelectedClassData.startingSP}"
        *   `p`: "Starting Mana Points: {$derivedSelectedClassData.startingMP}"
        *   `p`: "Skill Points Granted: +{$derivedSelectedClassData.skillPointGrantLvl1 || 0}"
        *   `p`: "Trade Points Granted: +{$derivedSelectedClassData.tradePointGrantLvl1 || 0}"
        *   `p`: "Combat Training: {$derivedSelectedClassData.combatTraining.join(', ')}"
        *   `p`: "Starting Cantrips Known: {$derivedSelectedClassData.cantripsKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Spells Known: {$derivedSelectedClassData.spellsKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Maneuvers Known: {$derivedSelectedClassData.maneuversKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Techniques Known: {$derivedSelectedClassData.techniquesKnownLvl1 || 0}" (list if specific)

**4. Character Snapshot Panel (`CharacterSnapshot.svelte` - Reusable Component):**
    *   Props: `characterDataStore` (the main store from `StageC_Class.svelte`).
    *   Displays: Attributes, Prime Mod, Saves, Grit, Jump, **Final HP, Final SP, Final MP**, Provisional PD, Provisional AD, **Updated Skill/Trade Point Totals.**
    *   Tailwind: Positioned consistently, perhaps in a sidebar or a distinct section on the page. Values should reactively update when class is selected or feature choices are made that impact these stats.

### D. Functions & Logic:
*   `selectClass(classId)`:
    *   Updates `$characterInProgressStore.selectedClassID = classId`.
    *   Resets `$characterInProgressStore.classFeatureChoicesLvl1` to defaults for the new class.
    *   Triggers recalculation of HP, SP, MP, and skill/trade point pools in the main store, which the Snapshot Panel listens to.
*   Event handlers for feature choice inputs (updates `$characterInProgressStore.classFeatureChoicesLvl1`).
*   Validation: Ensure all required Level 1 feature choices are made before allowing "Next Step".
*   Function to persist current state to `characterInProgressStore` and call backend API.

### E. Static Rule Data Structure (Example Snippet for `staticRuleData.classes`):
```typescript
// Example for a class object
{
  id: 'sorcerer',
  name: 'Sorcerer',
  shortDescription: 'Channels raw magic from within.',
  fullDescription: 'Sorcerers tap into the raw magic in their own bodies...',
  baseHpBonus: 0, // Added to (Might + Ancestry HP + Class Table HP progression)
  startingSP: 0,
  startingMP: 6, // From Class Table
  skillPointGrantLvl1: 0, // Additional points beyond background
  tradePointGrantLvl1: 0,
  combatTraining: ['Light Armor'],
  cantripsKnownLvl1: 2, // From Class Table
  spellsKnownLvl1: 3,   // From Class Table
  level1Features: [
    { name: 'Innate Power', description: 'Choose a Sorcerous Origin...' },
    { name: 'Overload Magic', description: 'You can spend 2 AP to channel raw energy...' },
    { name: 'Sorcery (Flavor)', description: 'You learn the Sorcery Spell.' }
  ],
  featureChoicesLvl1: [
    {
      id: 'sorcerousOrigin', // Key for store
      prompt: 'Choose your Sorcerous Origin:',
      type: 'select', // 'select' or 'multiselect'
      options: [
        { value: 'intuitive_magic', label: 'Intuitive Magic' },
        { value: 'resilient_magic', label: 'Resilient Magic' },
        { value: 'unstable_magic', label: 'Unstable Magic' }
      ]
    }
  ],
  // ... other class specific data like spell list access
}