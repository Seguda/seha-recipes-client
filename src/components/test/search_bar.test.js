import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './search_bar';
import store from '../store';

describe('<SearchBar/>', () => {
    it('Renders without crashing', () => {
        shallow(<SearchBar store={store}/>);
    });

});