import React from 'react';
import { shallow } from 'enzyme';
import Button from './create_button';
import store from '../store';

describe('<Button />', () => {

    it('Renders without crashing', () => {
        shallow(<Button store={store} />);
    });

});
