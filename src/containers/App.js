import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchFieldValue } from '../actions';
import MainPage from '../components/MainPage';
import './App.css';

const mapStateToProps = state => {
    return {
        searchFieldValue: state.searchRobots.searchFieldValue,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchValueChange: (event) => dispatch(setSearchFieldValue(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

class App extends Component {
    render() {
        return <MainPage { ...this.props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)