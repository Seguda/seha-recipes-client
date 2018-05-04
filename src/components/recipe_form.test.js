import React from 'react';
import { shallow } from 'enzyme';
import CreateRecipeForm from './recipe_form';
import Button from './create_button';
import { reset } from 'redux-form';
import { createNewRecipe } from '../actions';

describe('<CreateRecipeForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateRecipeForm />);
    });

// it('Should dispatch createform when the form is submitted', () => {
//     const dispatch = jest.fn();
//     const wrapper = shallow(<CreateRecipeForm dispatch={dispatch} />);
//     const button=wrapper.find('.add_recipe');
//     button.simulate('submit');
//     expect(dispatch).toHaveBeenCalledWith(createNewRecipe());
// });
 });