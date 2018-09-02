import React from 'react';

const SearchBox = ({ onChange }) => {
    return (
        <div className='pa2'>
            <input
                aria-label='Search Robots'
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search for robots'
                onChange={ onChange }
            />
        </div>
    )
};
export default SearchBox;