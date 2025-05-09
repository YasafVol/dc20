// src/lib/rulesdata/classes.ts

import type { IClassDefinition } from './types';

export const classesData: IClassDefinition[] = [
  {
    id: 'barbarian',
    name: 'Barbarian',
    description: 'A fierce warrior of primitive background who can enter a battle rage.',
    baseHpContribution: 12, // DC20 p.118
    startingSP: 0, // DC20 p.118
    startingMP: 0, // DC20 p.118
    skillPointGrantLvl1: 0, // DC20 p.118
    saveDCBase: 8, // DC20 p.118
    deathThresholdBase: 10, // DC20 p.118
    moveSpeedBase: 30, // DC20 p.118
    restPointsBase: 4, // DC20 p.118
    gritPointsBase: 2, // DC20 p.118 (Base Grit, before Charisma mod)
    initiativeBonusBase: 0, // DC20 p.118 (Base Initiative, before Agility mod)
    level1Features: [
      {
        id: 'barbarian_rage',
        name: 'Rage',
        description: 'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.', // DC20 p.118 (Summarized)
        level: 1,
        effects: [], // Effects of Rage are complex, likely handled in character sheet logic
      },
      {
        id: 'barbarian_unarmored_defense',
        name: 'Unarmored Defense',
        description: 'While you are wearing no armor, your Armor Class equals 10 + your Agility modifier + your Might modifier.', // DC20 p.118
        level: 1,
        effects: [], // Effect applied in defense calculation logic
      },
    ],
    featureChoicesLvl1: [], // Barbarian has no Lvl 1 feature choices listed on p.118
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    description: 'A spellcaster who draws on inherent magic from a gift or bloodline.',
    baseHpContribution: 6, // DC20 p.149
    startingSP: 0, // DC20 p.149
    startingMP: 6, // DC20 p.149
    skillPointGrantLvl1: 0, // DC20 p.149
    saveDCBase: 8, // DC20 p.149
    deathThresholdBase: 10, // DC20 p.149
    moveSpeedBase: 30, // DC20 p.149
    restPointsBase: 4, // DC20 p.149
    gritPointsBase: 2, // DC20 p.149 (Base Grit, before Charisma mod)
    initiativeBonusBase: 0, // DC20 p.149 (Base Initiative, before Agility mod)
    level1Features: [
      {
        id: 'sorcerer_spellcasting',
        name: 'Spellcasting',
        description: 'You can cast spells.', // DC20 p.149 (Summarized)
        level: 1,
        effects: [], // Spellcasting is complex, handled elsewhere
      },
      {
        id: 'sorcerer_sorcerous_origin',
        name: 'Sorcerous Origin',
        description: 'Choose a sorcerous origin, which describes the source of your innate magical power.', // DC20 p.149
        level: 1,
        effects: [], // The choice itself grants effects, not this base feature
      },
    ],
    featureChoicesLvl1: [
      {
        id: 'sorcerous_origin_choice',
        prompt: 'Choose your Sorcerous Origin:',
        type: 'select_one',
        options: [
          {
            value: 'draconic_bloodline',
            label: 'Draconic Bloodline',
            description: 'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors.', // DC20 p.150 (Summarized)
            effectsOnChoice: [
              { type: 'GRANT_FEATURE', target: 'draconic_bloodline_feature' }, // Placeholder for granting origin features
              { type: 'GRANT_HP_PER_LEVEL', value: 1 }, // Draconic Resilience HP increase
              { type: 'GRANT_UNARMORED_AC', value: { formula: '13 + Agility' } }, // Draconic Resilience AC
            ],
          },
          {
            value: 'intuitive_magic',
            label: 'Intuitive Magic',
            description: 'Your magic comes from a deep, innate understanding of the weave.', // DC20 p.151 (Summarized)
            effectsOnChoice: [
               { type: 'GRANT_FEATURE', target: 'intuitive_magic_feature' }, // Placeholder for granting origin features
               { type: 'MODIFY_STAT', target: 'skillPointGrantLvl1', value: 2 }, // Gain 2 additional skill points
            ],
          },
          // Add other origins as needed
        ],
      },
    ],
  },
  // Add other classes as needed
];
