import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeList from './recipe_list';
import store from '../store';
import { fetchRecipes, FETCH_RECIPE_SUCCESS, fetchRecipeRequest, fetchRecipeSuccess} from '../actions';
import { API_BASE_URL } from '../config';

describe('<RecipeList />', () => {
    it('Renders without crashing', () => {
        shallow(<RecipeList store={store} />);
    });

    it('Renders a list of recipes', () => {
        const newVals = [{ 'name': 'Red Lentil Balls' }]
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ 
                ok:true,
                json(){return newVals} 
                
            });
        })
        const values = [{ 'name': 'Red Lentil Balls', 'author': 'test1', 'type': 'test2', 'ethnicity': 'test3', 'servings': 'test4', 'ingredients': 'test5', 'directions': 'test6', 'file': 'default.jpg' }];
        const dispatch =jest.fn();
        return fetchRecipes()(dispatch).then(()=>{
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipes`);
            expect(dispatch).toHaveBeenCalledWith(fetchRecipeRequest());
        })
    });
});