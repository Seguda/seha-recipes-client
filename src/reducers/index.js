import * as actions from '../actions';
import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';

const initialState = {
    recipes: [],
    loading: false,
    error: null,
    createFormHidden: false
};

const recipeReducer = (state = initialState, action) => {
    console.log(action);
    if (action.type === actions.FETCH_RECIPE_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === actions.FETCH_RECIPE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            recipes: action.recipes
        });
    } else if (action.type === actions.FETCH_RECIPE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if(action.type === actions.CREATE_FORM) {
        console.log("in reducer");
        console.log(state);
        console.log(action);
        var x = Object.assign({}, state, {
            createFormHidden: action.createFormHidden
        });
        console.log(x);
        return x;
    } else if (action.type === actions.RECIPE_SUBMIT) {

    }

    return state;
}

export const fetchRecipes = () => dispatch => {
    return fetch(`${API_BASE_URL}/recipes`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            dispatch(actions.fetchRecipeSuccess(data))
        })
        .catch(err => dispatch(actions.fetchRecipeError(err)));

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
    )
}
export default recipeReducer;