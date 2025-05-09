// src/lib/rulesdata/traits.ts

import type { ITrait } from './types';

export const traitsData: ITrait[] = [
  // Human Traits
  {
    id: 'human_attribute_increase',
    name: 'Attribute Increase',
    description: '[DC20 p.108: "Choose an Attribute. The chosen Attribute increases by 1 (up to the Attribute Limit)."]',
    cost: 2, // From DC20 p.108
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: 1, userChoiceRequired: { prompt: "Choose an Attribute to increase by 1" } }]
  },
  {
    id: 'human_skill_expertise',
    name: 'Skill Expertise',
    description: '[DC20 p.108: "Choose a Skill. Your Mastery Cap and Mastery Level in the chosen Skill both increase by 1..."]',
    cost: 2, // From DC20 p.108
    effects: [{ type: 'GRANT_SKILL_EXPERTISE', value: { skillId: 'any_skill_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a skill for Expertise" } }]
  },
  {
    id: 'human_resolve',
    name: 'Human Resolve',
    description: '[DC20 p.108: "Your Death’s Door Threshold value is expanded by 1."]',
    cost: 1, // From DC20 p.108
    effects: [{ type: 'MODIFY_DEATH_THRESHOLD_MODIFIER', value: 1 }]
  },
  {
    id: 'human_undying',
    name: 'Undying',
    description: '[DC20 p.108: "You have ADV on Saves against the Doomed Condition."]',
    cost: 0, // From DC20 p.108
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Doomed' }]
  },
  {
    id: 'human_trade_expertise',
    name: 'Trade Expertise',
    description: '[DC20 p.108: "Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1..."]',
    cost: 1, // From DC20 p.108
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'human_attribute_decrease', // Example of a negative trait
    name: 'Attribute Decrease',
    description: '[DC20 p.108: "Choose an Attribute. You decrease the chosen Attribute by 1 (to a minimum of -2)."]',
    cost: -1, // From DC20 p.108
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: -1, userChoiceRequired: { prompt: "Choose an Attribute to decrease by 1" } }]
  },
  // ITraits for Elf:
  // Default Traits:
  {
    id: 'elf_elven_will',
    name: 'Elven Will',
    description: '[DC20 p.108: "You have ADV on Checks and Saves against being Charmed and put to Sleep."]',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Charmed' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Sleep_Magic' }]
  },
  {
    id: 'elf_nimble',
    name: 'Nimble',
    description: '[DC20 p.108: "When you take the Dodge Action, you instead gain the benefits of the Full Dodge Action."]',
    cost: 2,
    effects: [{ type: 'MODIFY_ACTION_BENEFIT', target: 'Dodge_Action', value: 'Full_Dodge_Benefit' }]
  },
  {
    id: 'elf_agile_explorer',
    name: 'Agile Explorer',
    description: '[DC20 p.108: "You’re not affected by Difficult Terrain."]',
    cost: 2,
    effects: [{ type: 'IGNORE_DIFFICULT_TERRAIN' }]
  },
  {
    id: 'elf_discerning_sight',
    name: 'Discerning Sight',
    description: '[DC20 p.108: "You have ADV on Checks and Saves made to discern through visual illusions."]',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_SAVES_VS_ILLUSION_VISUAL' }]
  },
  // Expanded Traits (Examples - populate ALL from DC20 p.108):
  {
    id: 'elf_quick_reactions',
    name: 'Quick Reactions',
    description: '[DC20 p.108: "While you aren’t wearing Armor, you gain +1 PD."]',
    cost: 1,
    effects: [{ type: 'MODIFY_PD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'elf_peerless_sight',
    name: 'Peerless Sight',
    description: '[DC20 p.108: "Your Darkvision increases by 30 feet."]',
    cost: 1,
    effects: [{ type: 'MODIFY_DARKVISION', value: 30 }]
  },
  {
    id: 'elf_climb_speed',
    name: 'Climb Speed',
    description: '[DC20 p.108: "You gain a Climb Speed equal to your Speed."]',
    cost: 1,
    effects: [{ type: 'GRANT_CLIMB_SPEED_EQUAL_TO_SPEED' }]
  },
  {
    id: 'elf_speed_increase',
    name: 'Speed Increase',
    description: '[DC20 p.108: "Your Speed increases by 5 feet."]',
    cost: 1,
    effects: [{ type: 'MODIFY_SPEED', value: 5 }]
  },
  {
    id: 'elf_trade_expertise_elf',
    name: 'Trade Expertise (Elf)',
    description: '[DC20 p.108: "Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1..."]',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'elf_plant_knowledge',
    name: 'Plant Knowledge',
    description: '[DC20 p.108: "You have ADV on Checks made to identify plants and fungi."]',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_VS_PLANT_IDENTIFICATION' }]
  },
  {
    id: 'elf_brittle',
    name: 'Brittle',
    description: '[DC20 p.108: "Your PD decreases by 1."]',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_PD', value: -1 }]
  },
  {
    id: 'elf_frail',
    name: 'Frail',
    description: '[DC20 p.108: "Your HP maximum decreases by 2."]',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: -2 }] // Use a specific type for static HP modification
  },
  {
    id: 'elf_might_decrease',
    name: 'Might Decrease',
    description: '[DC20 p.108: "Your Might decreases by 1 (to a minimum of -2)."]',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'might', value: -1 }]
  },
];
