import recipeReducer from './index';
import {
    fetchRecipeRequest,
    FETCH_RECIPE_REQUEST,
    fetchRecipeSuccess,
    FETCH_RECIPE_SUCCESS,
    fetchRecipeError,
    FETCH_RECIPE_ERROR,
    createrecipe,
    CREATE_RECIPE,
    createform,
    CREATE_FORM
} from '../actions/index';

describe('recipeReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const newState = recipeReducer(undefined, {
            type: '__UNKNOWN'
        });

        expect(newState.recipes).toEqual([]);
        loading:false;
        error:null
        });
    });
    
it('should return the current state on an unknown action', () => {
    const state = {
        recipes: [{ name: 'food' }],
        loading: true,
        error: true,
    };

    const newState = recipeReducer(state, {
        type: '__unknownaction'
    });
    expect(newState).toEqual(state);
});
it('should handle the fetchRecipeRequest action', () => {
    const state = {
        recipes: [],
        loading: false,
        error: null,
    };

    const newState = recipeReducer(state, fetchRecipeRequest());
    expect(newState).toEqual({
       recipes: [],
        loading: true,
        error: null,
    })
});

//     it('calls request and success actions if the fetch response was successful', () => {


// });