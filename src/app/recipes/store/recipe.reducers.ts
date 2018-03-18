import { Recipe } from '../recipe.model';
imprt { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';

export interface FeatureState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
};

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
      const updateRecipe = {
        ...recipe,
        ...action.payload.updateRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updateRecipe;
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