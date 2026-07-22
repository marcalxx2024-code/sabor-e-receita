export type Difficulty = 'Fácil' | 'Médio' | 'Difícil';
export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  type: string[];
  difficulty: Difficulty;
  preparationTime: number;
  cookingTime: number;
  servings: number;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  instructions: string[];
  nutrition: { calories: number; protein: string; carbohydrates: string; fat: string };
  tags: string[];
  featured: boolean;
}
