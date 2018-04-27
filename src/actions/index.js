export const RECIPE_SUBMIT = 'RECIPE_SUBMIT';
export const submitNewRecipe = () => ({
    type: RECIPE_SUBMIT
});

export const FETCH_RECIPE_REQUEST = 'FETCH_RECIPE_REQUEST';
export const fetchRecipeRequest = () => ({
    type: FETCH_RECIPE_REQUEST
});

export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const fetchRecipeSuccess = recipes => ({
    type: FETCH_RECIPE_SUCCESS,
    recipes
});

export const FETCH_RECIPE_ERROR = 'FETCH_RECIPE_ERROR';
export const fetchRecipeError = error => ({
    type: FETCH_RECIPE_ERROR,
    error
});

export const CREATE_RECIPE = 'CREATE_RECIPE'
export const createrecipe = (recipe) => ({
    type: CREATE_RECIPE,
    recipe
})

export const CREATE_FORM = 'CREATE_FORM'
export const createform = function(createFormHidden)  {
    console.log(createFormHidden);
    return {
    type: CREATE_FORM,
    createFormHidden: createFormHidden
    }
}
