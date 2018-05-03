import recipeReducer from './index';
import {
    FETCH_RECIPE_REQUEST,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_ERROR,
    CREATE_RECIPE,
    CREATE_FORM
} from '../actions/index';

describe('recipeReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const newState = recipeReducer(undefined, {
            type: '__UNKNOWN'
        });

        expect(newState.recipes).toEqual([]);
        
        });
    });
    

//     it('calls request and success actions if the fetch response was successful', () => {


// });