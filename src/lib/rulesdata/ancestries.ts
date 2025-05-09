// src/lib/rulesdata/ancestries.ts

import type { IAncestry } from './types';

export const ancestriesData: IAncestry[] = [
  {
    id: 'human',
    name: 'Human',
    description: '[Brief flavor description for Human, e.g., "Adaptable and varied..."]',
    defaultTraitIds: ['human_attribute_increase', 'human_skill_expertise', 'human_resolve', 'human_undying'], // Verify IDs match trait definitions below
    expandedTraitIds: ['human_trade_expertise', 'human_determination', 'human_unbreakable', 'human_attribute_decrease'], // Add all from DC20 p.108
  },
  {
    id: 'elf',
    name: 'Elf',
    description: '[Brief flavor description for Elf, e.g., "Graceful and perceptive..."]',
    defaultTraitIds: ['elf_elven_will', 'elf_nimble', 'elf_agile_explorer', 'elf_discerning_sight'], // Verify IDs
    expandedTraitIds: ['elf_quick_reactions', 'elf_peerless_sight', 'elf_climb_speed', 'elf_speed_increase', 'elf_trade_expertise_elf', 'elf_plant_knowledge', 'elf_brittle', 'elf_frail', 'elf_might_decrease'] // Add all from DC20 p.108
  },
  // Add other ancestries as needed
];
