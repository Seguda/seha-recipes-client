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

// describe('fetchRecipeSuccess', () => {
//     it('Should return the action', () => {
//         const recipes = [{ 'name': 'Red Lentil Balls', 'author': 'test1', 'type': 'test2', 'ethnicity': 'test3', 'servings': 'test4', 'ingredients': 'test5', 'directions': 'test6', 'file': 'default.jpg', '_id': '23525', 'created':'2018-04-30T03:11:19.101Z'}];
//         const action = fetchRecipeSuccess(recipe);
//         expect(action).toEqual({
//             type: FETCH_RECIPE_SUCCESS,
//             recipes
            
//         });
//     });
// });