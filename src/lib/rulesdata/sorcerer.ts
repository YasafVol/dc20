import { IClassDefinition } from './types';

// IClassDefinition for Sorcerer:
export const sorcererClass: IClassDefinition = {
  id: 'sorcerer',
  name: 'Sorcerer',
  description: '[Extract "Source of Power" for Sorcerer from DC20 p.149]',
  baseHpContribution: 8, // From class table p.149 Lvl 1 HP
  startingSP: 0,
  startingMP: 6, // From class table p.149 Lvl 1 MP
  combatTraining: ['Light Armor'], // From p.149 "Sorcerer Spellcasting Path"
  cantripsKnownLvl1: 2, // From class table p.149
  spellsKnownLvl1: 3,   // From class table p.149
  saveDCBase: 0, // Placeholder, need actual value from DC20
  deathThresholdBase: 0, // Placeholder, need actual value from DC20
  moveSpeedBase: 0, // Placeholder, need actual value from DC20
  restPointsBase: 0, // Placeholder, need actual value from DC20
  gritPointsBase: 0, // Placeholder, need actual value from DC20
  initiativeBonusBase: 0, // Placeholder, need actual value from DC20
  // No maneuvers/techniques for base Sorcerer L1
  level1Features: [
    {
      id: 'sorcerer_innate_power',
      name: 'Innate Power',
      level: 1,
      description: '[Summarize Innate Power from DC20 p.150: Choose Sorcerous Origin. Max MP +1. Once per Long Rest, use 1MP Spell Enhancement free (regain on Initiative roll).]',
      effects: [
          { type: 'MODIFY_MP_MAX', value: 1 },
          { type: 'GRANT_ABILITY', value: 'Free_1MP_Spell_Enhancement_Once_Per_Long_Rest' }
      ]
    },
    {
      id: 'sorcerer_overload_magic',
      name: 'Overload Magic',
      level: 1,
      description: '[Summarize Overload Magic from DC20 p.150: 2 AP for 1 min: +5 Spell Checks. Start & each turn: Attribute Save (your choice) vs own Save DC or gain Exhaustion. Ends early if Incapacitated/die/choose. Lose gained Exhaustion on Short Rest.]',
      effects: [{ type: 'GRANT_ABILITY', value: 'Overload_Magic_Mechanics_Bundle' }]
    },
    {
      id: 'sorcerer_sorcery_flavor',
      name: 'Sorcery (Flavor)',
      level: 1,
      description: '[DC20 p.150: "You learn the Sorcery Spell." (Sorcery Spell is on p.178)]',
      effects: [{ type: 'GRANT_SPELL_KNOWN', value: 'sorcery_cantrip_id' }]
    }
  ],
  featureChoicesLvl1: [
    {
      id: 'sorcerous_origin_choice', // Key for storing choice
      prompt: 'Choose your Sorcerous Origin (DC20 p.150):',
      type: 'select_one',
      options: [
        { value: 'intuitive_magic', label: 'Intuitive Magic', description: '[DC20 p.150: "You learn an additional Spell and Cantrip from your Sorcerer Spell List."]', effectsOnChoice: [{ type: 'GRANT_BONUS_SPELL_KNOWN' }, { type: 'GRANT_BONUS_CANTRIP_KNOWN'}] },
        { value: 'resilient_magic', label: 'Resilient Magic', description: '[DC20 p.150: "You gain Dazed Resistance."]', effectsOnChoice: [{ type: 'GRANT_CONDITION_RESISTANCE', target: 'Dazed'}] },
        { value: 'unstable_magic', label: 'Unstable Magic', description: '[DC20 p.150: "When you Critically Succeed or Fail on a Spell Check, roll on the Wild Magic Table..."]', effectsOnChoice: [{ type: 'ENABLE_WILD_MAGIC_TABLE_ON_CRIT_SPELL_CHECK'}] }
      ]
    },
    {
      id: 'sorcerer_spell_list_choice', // Key for storing choice
      prompt: 'Choose Your Sorcerer Spell List (DC20 p.149):',
      type: 'select_one',
      options: [
        { value: 'arcane', label: 'Arcane Spell List' },
        { value: 'divine', label: 'Divine Spell List' },
        { value: 'primal', label: 'Primal Spell List' }
      ]
    }
  ]
}
