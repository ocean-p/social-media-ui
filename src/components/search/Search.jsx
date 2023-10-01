import React from 'react'
import './Search.css'
import SearchResultCard from '../sidebar/SearchResultCard'

const Search = () => {
  return (
    <div className='search-container'>
      <div className='mb-2 px-4 py-2'>
        <h1 className='text-2xl font-semibold mb-2'>Search</h1>
        <input type="text" placeholder='Search' 
          className='search-input'/>
      </div>
      <hr />
      <div className='px-4 mt-2'>
        {[30,31,32].map(item => <SearchResultCard key={item}/>)}
      </div>
    </div>
  )
}

export default Search