import React from 'react';
import { shallow } from 'enzyme';
import { Recipes } from './recipes';

describe('<Recipes />', () => {

    it('Renders without crashing', () => {
        shallow(<Recipes />);
    });

});
