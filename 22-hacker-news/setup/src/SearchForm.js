import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {handleSearch} = useGlobalContext();
  // how do we set the query property in the state object
  // 

  return <h2>search form</h2>
}

export default SearchForm
