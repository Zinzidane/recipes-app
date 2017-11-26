import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';

export interface State {
  recipes: Recipe[];
}

export const state: State = {
  recipes: [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1, 'piece'),
        new Ingredient('French Fries', 20, 'pieces')
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2, 'pieces'),
        new Ingredient('Meat', 1, 'piece')
      ])
  ];
}

export function recipeReducer(state, action) {
  return state;
}