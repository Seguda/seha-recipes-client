import { API_BASE_URL } from '../config';



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

export const IS_CLICKED = 'IS_CLICKED'
export const isClicked=()=>({
    type:IS_CLICKED,
})

export const fetchRecipes = () => dispatch => {
    dispatch(fetchRecipeRequest());
    return fetch(API_BASE_URL)
    //return fetch('https://seha-recipes.herokuapp.com/recipes/?results=500')
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => dispatch(fetchRecipeSuccess(data)))
        .catch(err => dispatch(fetchRecipeError(err)));

};
export const createNewRecipe = (name, author, type, ethnicity, servings, ingredients, directions, image) => dispatch => {
        return (
        fetch(`${API_BASE_URL}/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                author,
                type,
                ethnicity,
                servings,
                ingredients,
                directions,
                image
            })
        })
        .then(res => {
        if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return;
        })
            .then(res => res.json())
            .then((body) => console.log(body))
    );
}

   
