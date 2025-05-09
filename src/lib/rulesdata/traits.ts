// src/lib/rulesdata/traits.ts

import type { ITrait } from './types';

export const traitsData: ITrait[] = [
  // Human Traits
  {
    id: 'human_resolve',
    name: 'Human Resolve',
    description: 'Gain +1 to your Death Threshold.',
    cost: 1,
    effects: [{ type: 'MODIFY_STAT', target: 'deathThresholdBase', value: 1 }],
  },
  {
    id: 'human_attribute_increase',
    name: 'Attribute Increase',
    description: 'Increase one attribute of your choice by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: 1, userChoiceRequired: { prompt: "Choose an attribute to increase by 1" } }],
  },
  {
    id: 'human_skill_expertise',
    name: 'Skill Expertise',
    description: 'Gain Expertise in one skill of your choice. Your mastery cap for this skill increases by 1, and your mastery level increases by 1.',
    cost: 1,
    effects: [{ type: 'GRANT_SKILL_EXPERTISE', value: { skillId: 'any_skill_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a skill for Expertise" } }],
  },
  // Elf Traits
  {
    id: 'elf_keen_senses',
    name: 'Keen Senses',
    description: 'You have advantage on Perception checks.', // Placeholder effect type
    cost: 1,
    effects: [{ type: 'ADVANTAGE_ON_SKILL', target: 'perception' }],
  },
  {
    id: 'elf_fey_ancestry',
    name: 'Fey Ancestry',
    description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.', // Placeholder effect type
    cost: 1,
    effects: [
      { type: 'ADVANTAGE_ON_SAVE_TYPE', target: 'charmed' },
      { type: 'IMMUNITY_TO_EFFECT_TYPE', target: 'magical_sleep' },
    ],
  },
  {
    id: 'elf_long_strider',
    name: 'Long Strider',
    description: 'Your base movement speed increases by 5 feet.',
    cost: 1,
    effects: [{ type: 'MODIFY_STAT', target: 'moveSpeedBase', value: 5 }],
  },
  // Example Negative Trait
   {
    id: 'negative_trait_example',
    name: 'Example Negative Trait',
    description: 'This is an example of a negative trait.',
    cost: -1, // Grants 1 point
    isNegative: true,
    effects: [], // Negative traits might not have positive effects
  },
   // Example Minor Trait
   {
    id: 'minor_trait_example',
    name: 'Example Minor Trait',
    description: 'This is an example of a minor trait.',
    cost: 1,
    isMinor: true,
    effects: [], // Minor traits might not have effects, or minor ones
  },
];
