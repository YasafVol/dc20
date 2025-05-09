// src/lib/rulesdata/ancestries.ts

import type { IAncestry } from './types';

export const ancestriesData: IAncestry[] = [
  {
    id: 'human',
    name: 'Human',
    description: 'Humans are the most common ancestry in the world, known for their adaptability and resilience.',
    defaultTraitIds: ['human_resolve'], // Example default trait
    expandedTraitIds: [ // Example expanded traits available for selection
      'human_attribute_increase',
      'human_skill_expertise',
      'negative_trait_example', // Include example negative trait
      'minor_trait_example', // Include example minor trait
    ],
  },
  {
    id: 'elf',
    name: 'Elf',
    description: 'Elves are graceful and long-lived beings with a deep connection to nature.',
    defaultTraitIds: ['elf_keen_senses'], // Example default trait
    expandedTraitIds: [ // Example expanded traits available for selection
      'elf_fey_ancestry',
      'elf_long_strider',
      'negative_trait_example', // Include example negative trait
      'minor_trait_example', // Include example minor trait
    ],
  },
  // Add other ancestries as needed
];
