import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('The first recipe', 'A recipe that we test', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Roasted_Chicken_Dinner_Plate%2C_Broccoli%2C_Demi_Glace.jpg'),
    new Recipe('Apple Pie', 'A recipe that we test', 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Chicken_Pie.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
