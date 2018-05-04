import React from 'react';
import { shallow } from 'enzyme';

import RecipeListItem from './recipe_list_item';

describe('<RecipeListItem />', () => {
    it('Renders without crashing', () => {
        shallow(<RecipeListItem />);
    });


});