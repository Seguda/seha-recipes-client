import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './recipe_list';
import store from '../store';

describe('<RecipeList />', () => {
    it('Renders without crashing', () => {
        shallow(<RecipeList store={store} />);
    });

});