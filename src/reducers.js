import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILURE
} from './constants';

const initialStateSearch = {
    searchFieldValue: '',
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    console.log(`Action is ${JSON.stringify(action)}`);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: {
            return Object.assign({}, state, { searchFieldValue: action.payload });
        }
        default: {
            return state;
        }
    }
};

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
    console.log(`Action is ${JSON.stringify(action)}`);
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING: {
            return Object.assign({}, state, { isPending: true });
        }
        case REQUEST_ROBOTS_SUCCESS: {
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        }
        case REQUEST_ROBOTS_FAILURE: {
            return Object.assign({}, state, { error: action.payload, isPending: false });
        }
        default: {
            return state;
        }
    }
};