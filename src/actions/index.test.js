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
} from './index';

describe('fetchRecipeRequest', () => {
    it('Should return the action', () => {
        const action = fetchRecipeRequest();
        expect(action).toEqual({
            type: FETCH_RECIPE_REQUEST
        });
    });
});

describe('fetchRecipeSuccess', () => {
    it('Should return the action', () => {
        const recipes = [{ 'name': 'Red Lentil Balls', 'author': 'test1', 'type': 'test2', 'ethnicity': 'test3', 'servings': 'test4', 'ingredients': 'test5', 'directions': 'test6', 'file': 'default.jpg'}];
        const action = fetchRecipeSuccess(recipes);
        expect(action).toEqual({
            type: FETCH_RECIPE_SUCCESS,
            recipes
            
        });
    });
});

describe('fetchRecipeError', () => {
    it('Should return the action', () => {
        const error = 'food';
        const action = fetchRecipeError(error);
        expect(action).toEqual({
            type: FETCH_RECIPE_ERROR,
            error
        });
    });
});

describe('createrecipe', () => {
    it('Should return the action', () => {
        const recipe = {
            'name': 'a',
            'author': 'b',
            'type': 'c',
            'ethnicity': 'd',
            'servings': 'e',
            'ingredients':'f',
            'directions' : 'g',
            'file': 'default.jpg'
        };
        const action = createrecipe(recipe);
        expect(action).toEqual({
            type: CREATE_RECIPE,
            recipe
        });
    });
});



