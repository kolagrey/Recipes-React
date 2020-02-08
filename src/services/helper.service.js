const helper = {
    kFormatter(num) {
        if(num > 999999999)
            return (num/1000000000).toFixed(1) + 'b';
        if (num > 999999)
            return (num/1000000).toFixed(1) + 'm';
        if (num > 999)
            return (num/1000).toFixed(1) + 'k';
        if (num < 999)
            return num;
    },
    saveRecipes({data}) {
        sessionStorage.setItem('recipes', JSON.stringify(data));
    },
    getSavedRecipes() {
        return JSON.parse(sessionStorage.getItem('recipes') || '[]');
    },
    saveRecipe({id, data}) {
        sessionStorage.setItem(id, JSON.stringify(data));
    },
    getSavedRecipe({id}) {
        return JSON.parse(sessionStorage.getItem(id) || '{}');
    }
};

export default helper;