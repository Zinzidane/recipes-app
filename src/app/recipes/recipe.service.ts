import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
      new Recipe(
        'Roasted chicken', 
        'So delicious', 
        'https://upload.wikimedia.org/wikipedia/commons/1/1b/Roasted_Chicken_Dinner_Plate%2C_Broccoli%2C_Demi_Glace.jpg',
        [new Ingredient('Chicken', 1), new Ingredient('Broccoli', 4)]),
      new Recipe(
        'Apple Pie', 
        'Never never gonna give you up!', 
        'https://upload.wikimedia.org/wikipedia/commons/f/f2/Chicken_Pie.JPG',
        [new Ingredient('Apple', 3), new Ingredient('Eggs', 4), new Ingredient('Sugar', 1)])
  ];

  constructor(private slService: ShoppingListService) {} 

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}