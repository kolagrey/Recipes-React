import { combineReducers } from "redux";
import { recipeReducer, recipesReducer } from './recipes.reducer';

export default combineReducers({
    recipe: recipeReducer,
    recipes: recipesReducer
});
