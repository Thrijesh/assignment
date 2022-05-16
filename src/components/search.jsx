import React from 'react'

function Search({ setQuery }) {
  return <input className='Search' type='text' onChange={(e) => setQuery(e.target.value)} placeholder="Search Videos..." />
}

export default Search