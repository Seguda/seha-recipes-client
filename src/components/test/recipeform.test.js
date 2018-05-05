import React from 'react';
import { shallow } from 'enzyme';
import RecipeForm from '../recipeform/recipeform';
//import Button from './create_button';
import { reset } from 'redux-form';
import { createNewRecipe } from '../../actions/index';

describe('<RecipeForm />', () => {
    it('Renders without crashing', () => {
        shallow(<RecipeForm />);
    });

// it('Should dispatch createform when the form is submitted', () => {
//     const dispatch = jest.fn();
//     const wrapper = shallow(<CreateRecipeForm dispatch={dispatch} />);
//     const button=wrapper.find('.add_recipe');
//     button.simulate('submit');
//     expect(dispatch).toHaveBeenCalledWith(createNewRecipe());
// });
 });