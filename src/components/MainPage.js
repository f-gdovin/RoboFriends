import React, {Component} from 'react';
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './MainPage.css';

class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    };

    filterRobots = () => {
        const { robots, searchFieldValue } = this.props;
        return robots.filter(robot =>
            robot.name.toLowerCase().includes(searchFieldValue.toLowerCase()));
    };

    render() {
        const { isPending, onSearchValueChange } = this.props;

        return (isPending ?
                <h1>Loading robots...</h1> :
                (<div className='tc'>
                    <Header />
                    <SearchBox onChange={ onSearchValueChange }/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ this.filterRobots() }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>)
        )
    }
}

export default MainPage;