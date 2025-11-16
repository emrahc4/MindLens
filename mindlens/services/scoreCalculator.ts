import { UserResponse, Profile, TraitDeltas, Test } from '../types';

// Simple normalization function to scale a value from its own range to a 0-100 range.
const normalize = (value: number, min: number, max: number): number => {
  if (max === min) return 50; // Avoid division by zero
  const scaled = ((value - min) / (max - min)) * 100;
  return Math.max(0, Math.min(100, Math.round(scaled))); // Clamp between 0 and 100
};

export const calculateScores = (responses: UserResponse[], test: Test): Profile => {
  if (responses.length === 0) return [];

  const totalDeltas: TraitDeltas = {};

  // Initialize all possible traits for this test with 0
  Object.keys(test.traitBounds).forEach(trait => {
      totalDeltas[trait] = 0;
  });

  // Sum up all the deltas from user responses
  responses.forEach(response => {
    const deltas = response.answer.trait_deltas;
    for (const trait in deltas) {
      if (trait in totalDeltas) {
        totalDeltas[trait] += deltas[trait];
      }
    }
  });

  const normalizedProfile: Profile = Object.keys(totalDeltas).map(traitName => {
      const bounds = test.traitBounds[traitName] || { min: -20, max: 20 }; // Default bounds
      const value = totalDeltas[traitName];
      return {
          name: traitName,
          value: normalize(value, bounds.min, bounds.max)
      };
  });

  return normalizedProfile;
};
