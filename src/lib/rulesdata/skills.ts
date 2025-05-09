import type { ISkillData } from './types';

export const skillsData: ISkillData[] = [
  {
    id: 'athletics',
    name: 'Athletics',
    attributeAssociation: 'might',
    description: '[DC20 p.12: Covers activities that involve physical prowess, such as climbing, swimming, jumping, grappling.]'
  },
  {
    id: 'awareness',
    name: 'Awareness',
    attributeAssociation: 'prime', // Uses Prime Modifier
    description: '[DC20 p.13: Governs your ability to detect the presence of other creatures or objects using your senses.]'
  },
  // TODO: Add ALL other Skills from DC20 p.11-13 here
];
