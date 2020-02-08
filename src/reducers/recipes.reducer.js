import { GET_RECIPES, GET_RECIPE } from '../action-types';
import helper from '../services/helper.service';

export const recipesReducer = (state = {
    data: helper.getSavedRecipes() || [],
    loading: true
}, action = {type: ''}) => {
    switch (action.type) {
        case GET_RECIPES:
            const { data = null } = action.payload;
            const newData = data && data.length ? data : [];
            return {
                data: [...state.data, ...newData],
                loading: action.payload.loading
            };
        default:
            return state;
    }
};

export const recipeReducer = (state = {
    data: {},
    loading: true
}, action = {type: ''}) => {
    switch (action.type) {
        case GET_RECIPE:
            const { data = null } = action.payload;
            const newData = data && data.length ? data : {};
            return {
                data: newData,
                loading: action.payload.loading
            };
        default:
            return state;
    }
};