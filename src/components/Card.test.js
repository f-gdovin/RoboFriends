import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

it('should render Card component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
});