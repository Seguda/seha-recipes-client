import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';

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
export const createform= createFormHidden =>({
    type: CREATE_FORM,
    createFormHidden
})

export const fetchRecipes = () => dispatch => {
    return fetch(`${API_BASE_URL}/recipes`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            dispatch(fetchRecipeSuccess(data))
        })
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
            // .then(res => res.json())
            // .then((body) => console.log(body))
            .then(() => this.props.dispatch(fetchRecipes()))
            .then(() => this.props.reset())
            .catch(err => {
                const { reason, message, location } = err;
                if (reason === 'Validation Error') {
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting recipe'
                    })
                ); 
        })
    )}
