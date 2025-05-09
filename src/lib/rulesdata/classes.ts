import { IClassDefinition } from './types';

// To be placed in: src/lib/rulesdata/classes.ts

// IClassDefinition for Barbarian:
export const barbarianClass: IClassDefinition = {
  id: 'barbarian',
  name: 'Barbarian',
  description: '[Extract "Source of Power" description for Barbarian from DC20 p.118]',
  baseHpContribution: 9, // From "Class HP" in char creation p.93, which is Lvl 1 value from class table p.118
  startingSP: 1, // From class table p.118, Lvl 1 Stamina Points
  startingMP: 0,
  skillPointGrantLvl1: 0, // Any L1 skill point grants beyond background
  tradePointGrantLvl1: 0, // Any L1 trade point grants beyond background
  combatTraining: ['Weapons', 'All Armor', 'All Shields'], // From p.118 "Barbarian Martial Path"
  // Add cantripsKnownLvl1, spellsKnownLvl1 if applicable (not for Barbarian L1)
  maneuversKnownLvl1: 'All Attack', // Plus additional from table, table says "+4" - this needs to be interpreted as a number of *choices* if not all are granted. Assume "All Attack" + 4 choices for now. Or just 4 choices total if "All Attack" is implicit to Martial Path.
  techniquesKnownLvl1: 0, // From Lvl 1 on class table p.118 (Note: table says known, but L1 is 0 usually, L2 gives 1)
  saveDCBase: 0, // Placeholder, need actual value from DC20
  deathThresholdBase: 0, // Placeholder, need actual value from DC20
  moveSpeedBase: 0, // Placeholder, need actual value from DC20
  restPointsBase: 0, // Placeholder, need actual value from DC20
  gritPointsBase: 0, // Placeholder, need actual value from DC20
  initiativeBonusBase: 0, // Placeholder, need actual value from DC20
  cantripsKnownLvl1: 0, // Not applicable for Barbarian L1
  spellsKnownLvl1: 0, // Not applicable for Barbarian L1
  level1Features: [
    {
      id: 'barbarian_rage',
      name: 'Rage',
      level: 1,
      description: '[Summarize Rage from DC20 p.119. Effects: +1 dmg Melee Martial Attacks, ADV Might Saves, PD -5, Resistance (Half) to Elemental and Physical damage. Lasts 1 min. Costs 1 AP, 1 SP.]',
      effects: [
          { type: 'GRANT_ABILITY', value: 'Rage_Mechanics_Bundle' } // Complex ability
      ]
    },
    {
      id: 'barbarian_berserker',
      name: 'Berserker',
      level: 1,
      description: '[Summarize Berserker benefits from DC20 p.119: Charge, Berserker Defense, Fast Movement, Mighty Leap.]',
      effects: [
        { type: 'GRANT_ABILITY', subFeature: 'Charge', descriptionOverride: 'Move 2 Spaces before Melee Martial Attack.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Berserker_Defense', descriptionOverride: '+2 AD when not wearing Armor.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Fast_Movement', descriptionOverride: '+1 Speed when not wearing Armor.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Mighty_Leap', descriptionOverride: 'Use Might for Jump Distance & Falling Damage calc.' }
      ]
    },
    {
      id: 'barbarian_shattering_force',
      name: 'Shattering Force (Flavor)',
      level: 1,
      description: '[DC20 p.119: "When you Hit a structure or mundane object with a Melee Attack, it’s considered a Critical Hit."]',
      effects: [{ type: 'FLAVOR_MECHANIC_NOTE', value: 'Melee attacks vs objects/structures are Critical Hits.' }]
    }
  ],
  featureChoicesLvl1: [] // No explicit user choices for L1 features for Barbarian
}
