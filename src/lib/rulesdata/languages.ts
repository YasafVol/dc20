import type { ILanguageData } from './types';

export const languagesData: ILanguageData[] = [
  {
    id: 'common',
    name: 'Common',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Simple and universal language... All PCs start Fluent.]'
  },
  {
    id: 'elvish',
    name: 'Elvish',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Elves]'
  },
  {
    id: 'draconic',
    name: 'Draconic',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Dragons, Dragonkin]'
  },
  {
    id: 'dwarvish',
    name: 'Dwarvish',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Dwarves]'
  },
  {
    id: 'gnomish',
    name: 'Gnomish',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Gnomes]'
  },
  {
    id: 'goblin',
    name: 'Goblin',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Goblins, Hobgoblins, Bugbears]'
  },
  {
    id: 'halfling',
    name: 'Halfling',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Halflings]'
  },
  {
    id: 'orcish',
    name: 'Orcish',
    type: 'standard', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Orcs]'
  },
  {
    id: 'primordial',
    name: 'Primordial',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Elementals]'
  },
  {
    id: 'celestial',
    name: 'Celestial',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Celestials]'
  },
  {
    id: 'abyssal',
    name: 'Abyssal',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Demons]'
  },
  {
    id: 'infernal',
    name: 'Infernal',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Devils]'
  },
  {
    id: 'undercommon',
    name: 'Undercommon',
    type: 'exotic', // From DC20 p.18
    description: '[DC20 p.18: Typical Speakers: Drow, Underdark inhabitants]'
  }
];
