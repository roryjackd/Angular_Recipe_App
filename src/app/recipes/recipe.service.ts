import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
 
  private recipes: Recipe[] = [
    new Recipe('Fish & Chips', 
      'This is simply a test', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fish_and_chips.jpg/800px-Fish_and_chips.jpg', 
      [
        new Ingredient('Cod', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Cheeseburger', 
      'This is simply a test', 
      'https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Onion Rings', 20),
      ])
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
}