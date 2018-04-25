import * as actions from '../actions';

const initialState = {
    recipes: [],
    loading: false,
    error: null
};


export const reducer = (state = initialState, action) => {
    if (action.type === actions.FETCH_RECIPE_REQUEST) {
        return Object.assign({}, state, { loading: true });
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
    }
    return state;
}
