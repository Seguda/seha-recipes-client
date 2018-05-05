import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';
import Recipe from '../recipe/recipe';

describe('<Recipe />', () => {
    it('Renders without crashing', () => {
        shallow(<Recipe store={store} />);
    });


});