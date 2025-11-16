
export interface TraitDeltas {
  [trait: string]: number;
}

export interface Answer {
  text: string;
  trait_deltas: TraitDeltas;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export interface Test {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  // Estimated min/max values for normalization, specific to this test
  traitBounds: {
    [trait: string]: { min: number; max: number; };
  }
}

export interface UserResponse {
  questionId: string;
  answer: Answer;
  responseTime: number;
}

export interface ProfileTrait {
  name: string;
  value: number;
}

export type Profile = ProfileTrait[];