import React from 'react';
import MainPage from './MainPage';
import { shallow } from 'enzyme';

let wrapper;

const testRobots = [
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
    },
    {
        id: 4,
        name: 'Jamie',
        email: 'jamie@gmail.com'
    }
];

beforeEach(() => {
    const propsMock = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchFieldValue: '',
        isPending: false,
    };
    wrapper = shallow(<MainPage { ...propsMock}/>)
});

it('should render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly when empty search field value and empty robots', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly when non-empty search field value and empty robots', () => {
    const propsMock = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchFieldValue: 'john',
        isPending: false,
    };
    wrapper = shallow(<MainPage { ...propsMock}/>);
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly when empty search field value and non-empty robots', () => {
    const propsMock = {
        onRequestRobots: jest.fn(),
        robots: testRobots,
        searchFieldValue: '',
        isPending: false,
    };
    wrapper = shallow(<MainPage { ...propsMock}/>);
    expect(wrapper.instance().filterRobots()).toEqual(testRobots);
});

it('filters robots correctly when non-empty search field value and non-empty robots - not matching', () => {
    const propsMock = {
        onRequestRobots: jest.fn(),
        robots: testRobots,
        searchFieldValue: 'elise',  // not present in the array
        isPending: false,
    };
    wrapper = shallow(<MainPage { ...propsMock}/>);
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly when non-empty search field value and non-empty robots - matching', () => {
    const robotsWithJa = [
        {
            id: 2,
            name: 'Jane',
            email: 'jane@gmail.com'
        },
        {
            id: 4,
            name: 'Jamie',
            email: 'jamie@gmail.com'
        }
    ];
    const propsMock = {
        onRequestRobots: jest.fn(),
        robots: testRobots,
        searchFieldValue: 'Ja',  // Jane and Jamie
        isPending: false,
    };
    wrapper = shallow(<MainPage { ...propsMock}/>);
    expect(wrapper.instance().filterRobots()).toEqual(robotsWithJa);
});