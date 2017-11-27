import { Recipe } from '../recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';

import * as RecipeActions from './recipe.actions';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>('https://recipe-book-a8717.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (recipes) => {
        console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    );

  constructor(private actions$: Actions,
              private httpClient: HttpClient) {}
}
