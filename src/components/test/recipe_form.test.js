import React from 'react';
import { shallow } from 'enzyme';
import CreateRecipeForm from './recipe_form';

describe('<CreateRecipeForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateRecipeForm />);
    });
});