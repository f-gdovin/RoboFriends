import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

it('should render CardList component', () => {
    const robotsMock = [
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com'
        },

        {
            id: 2,
            name: 'Jane',
            email: 'jane@gmail.com'
        },

        {
            id: 3,
            name: 'Jessie',
            email: 'jessie@gmail.com'
        }
    ];
    expect(shallow(<CardList robots={robotsMock}/>)).toMatchSnapshot();
});