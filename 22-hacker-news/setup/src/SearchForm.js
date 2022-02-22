import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  // how do we set the query property in the state object
  // state.query = ?

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
