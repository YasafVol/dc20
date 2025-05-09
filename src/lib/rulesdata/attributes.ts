// src/lib/rulesdata/attributes.ts

import type { IAttributeData } from './types';

export const attributesData: IAttributeData[] = [
  {
    id: 'might',
    name: 'Might',
    description: 'Your Strength of Body. (DC20 p.9)',
    derivedStats: [
      { statName: 'Precision Defense (PD)', formula: '8 + CM + Might + Intelligence + Equip' },
      { statName: 'Area Defense (AD)', formula: '8 + CM + Might + Charisma + Equip' },
      { statName: 'Jump Distance', formula: 'Agility < 1 ? 1 : Agility' }, // Jump distance is based on Agility, but Might contributes to AD
    ],
  },
  {
    id: 'agility',
    name: 'Agility',
    description: 'Your Balance, Nimbleness, and Dexterity. (DC20 p.9)',
    derivedStats: [
      { statName: 'Precision Defense (PD)', formula: '8 + CM + Might + Intelligence + Equip' },
      { statName: 'Jump Distance', formula: 'Agility < 1 ? 1 : Agility' },
      { statName: 'Initiative Bonus', formula: 'Base + Agility' },
    ],
  },
  {
    id: 'charisma',
    name: 'Charisma',
    description: 'Your Charm, Presence, Persuasiveness, and Force of Will. (DC20 p.9)',
    derivedStats: [
      { statName: 'Area Defense (AD)', formula: '8 + CM + Might + Charisma + Equip' },
      { statName: 'Grit Points', formula: 'Base + Charisma' },
      { statName: 'Save DC', formula: '8 + CM + Prime Modifier Value + Charisma' }, // Assuming Charisma is used for Save DC calculation if not Prime Mod
    ],
  },
  {
    id: 'intelligence',
    name: 'Intelligence',
    description: 'Your Reasoning, Understanding, and Wisdom. (DC20 p.9)',
    derivedStats: [
      { statName: 'Precision Defense (PD)', formula: '8 + CM + Might + Intelligence + Equip' },
      { statName: 'Skill Points', formula: '5 + Intelligence Modifier' },
      { statName: 'Save DC', formula: '8 + CM + Prime Modifier Value + Intelligence' }, // Assuming Intelligence is used for Save DC calculation if not Prime Mod
    ],
  },
];
