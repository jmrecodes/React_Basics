import React from 'react';

const Search = ({ onSearch, children}) =>     
    <form>
        { children } <input type="text" onChange={ onSearch } />
    </form>


export default Search;