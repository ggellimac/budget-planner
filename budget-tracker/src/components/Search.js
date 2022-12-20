import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Search = () => {
    const { dispatch } = useContext(AppContext);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event);

        dispatch({
            type: 'SEARCH',
            payload: event,
        });
    };

    console.log(search);
    return (
        <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            value={search}
            placeholder="Search..."
            onChange={(event) => handleSearch(event.target.value)}>
        </input>
    );
};

export default Search;