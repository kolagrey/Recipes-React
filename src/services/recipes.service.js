import * as axios from 'axios';

const recipeService = {
    async getAllRecipes(start) {
        try {
            const perpage = 21;
        const response = await axios.get('https://api.dolapogrey.com/recipe/api/recipes/all/min/app/'+perpage+'/'+start);
        return response.data;
        } catch (err) {
            return err;
        }
    },

    async getRecipe(id) {
        try {
            const response = await axios.get('https://api.dolapogrey.com/recipe/api/recipes/single/'+id);
        return response.data;
        } catch (err) {
            return err;
        }
    }
};

export default recipeService;