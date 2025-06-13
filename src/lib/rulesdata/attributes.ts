// src/lib/rulesdata/attributes.ts

import type { IAttributeData } from './types';
// To be placed in: src/lib/rulesdata/attributes.ts
export const attributesData: IAttributeData[] = [
// TODO: Replace bracketed placeholders with accurate information from the DC20 Beta 0.9.5 rulebook.
{
  id: 'might',
  name: 'Might',
  description: 'Your Strength of Body.',
  derivedStats: [ // Examples, verify/adjust based on actual rules for each attribute
    { statName: 'Part of Area Defense calculation', formula: 'AD = 8 + CM + Might + Charisma + Bonuses' },
    { statName: 'Contributes to Max HP', formula: 'Max HP = Class HP + Might + Ancestry HP' }
  ]
},
{
  id: 'agility',
  name: 'Agility',
  description: 'Your Balance, Nimbleness, and Dexterity.',
  derivedStats: [
    { statName: 'Part of Precision Defense calculation', formula: 'PD = 8 + CM + Agility + Intelligence + Bonuses' },
    { statName: 'Determines Jump Distance', formula: 'Jump Distance = Agility (min 1)' },
    { statName: 'Contributes to Initiative', formula: 'Initiative = CM + Agility' }
  ]
},
{
  id: 'charisma',
  name: 'Charisma',
  description: 'Your Charm, Presence, Persuasiveness, and Force of Will.',
  derivedStats: [
    { statName: 'Part of Area Defense calculation', formula: 'AD = 8 + CM + Might + Charisma + Bonuses' },
    { statName: 'Determines Grit Points', formula: 'Grit Points = 2 + Charisma' }
  ]
},
{
  id: 'intelligence',
  name: 'Intelligence',
  description: 'Your Reasoning, Understanding, and Wisdom.',
  derivedStats: [
    { statName: 'Part of Precision Defense calculation', formula: 'PD = 8 + CM + Agility + Intelligence + Bonuses' },
    { statName: 'Determines Base Skill Points', formula: 'Skill Points = 5 + Intelligence' }
  ]
}
];
