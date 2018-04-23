import { FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_ERROR } from '../actions/recipes';

const initialState = {
    recipes: [],
    loading: false,
    error: null
};

export function recipeReducer(state = initialState, action) {
    if (action.type === FETCH_RECIPE_REQUEST) {
        return Object.assign({}, state, { loading: true });
    }

    if (action.type === FETCH_RECIPE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            recipes: action.recipes
        });
    }

    if (action.type === FETCH_RECIPE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }

    return state;
}