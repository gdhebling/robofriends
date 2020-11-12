import React from 'react';

function SearchBox({ searchChange }) {
    return (
        <div className="pa1 ma2">
            <input
                type="search"
                placeholder="search robots"
                name=""
                id=""
                className="pa3 ba bg-lightest-blue"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox