import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  console.log(Event);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="search-form" onSubmit={(e) => onSubmit(e)}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
