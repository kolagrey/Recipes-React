import recipeService from '../services/recipes.service';
import { GET_RECIPES, GET_RECIPE } from '../action-types';
import { dispatcher } from './action.helper';

export const getRecipes = ({start}) => async dispatch => {
    dispatcher(dispatch, GET_RECIPES, []);
    const result = await recipeService.getAllRecipes({start});
    dispatcher(dispatch, GET_RECIPES, result, false);
};

export const getRecipe = ({ id }) => async dispatch => {
    dispatcher(dispatch, GET_RECIPE, {});
    const result = await recipeService.getRecipe({id});
    dispatcher(dispatch, GET_RECIPE, result, false);
};
