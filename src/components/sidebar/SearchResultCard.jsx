import React from 'react'

const SearchResultCard = () => {
  return (
    <div className='py-2 cursor-pointer'>
      <div className='flex items-center'>
        <img src="https://cdn.baoquocte.vn/stores/news_dataimages/2023/042023/20/15/ngam-nhan-sac-jisoo-blackpink-20230420155704.jpg?rt=20230420193926" alt="user avatar" 
          className='w-9 h-9 rounded-full object-cover'/>
        <div className='ml-3'>
          <p>Jisso</p>
          <p className='opacity-70'>Full name</p>
        </div>
      </div>
    </div>
  )
}

export default SearchResultCard