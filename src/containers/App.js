import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchFieldValue } from '../actions';
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
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

    componentDidMount() {
        this.props.onRequestRobots();
    };

    render() {
        const { robots, isPending, searchFieldValue, onSearchValueChange } = this.props;

        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchFieldValue.toLowerCase()));
        return (isPending ?
                <h1>Loading robots...</h1> :
                (<div className='tc'>
                    <Header />
                    <SearchBox onChange={ onSearchValueChange }/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filteredRobots }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)