import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';

export interface FeatureState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
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

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}