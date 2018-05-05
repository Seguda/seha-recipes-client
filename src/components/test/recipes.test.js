import React from 'react';
import { shallow } from 'enzyme';
import Recipes  from '../recipes/recipes';
import store from '../store';

describe('<Recipes />', () => {

    it('Renders without crashing', () => {
        shallow(<Recipes store={store}/>);
    });

});
