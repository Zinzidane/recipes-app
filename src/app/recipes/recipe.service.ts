import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
      new Recipe('The first recipe', 'A recipe that we test', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Roasted_Chicken_Dinner_Plate%2C_Broccoli%2C_Demi_Glace.jpg'),
      new Recipe('Apple Pie', 'A recipe that we test', 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Chicken_Pie.JPG')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}