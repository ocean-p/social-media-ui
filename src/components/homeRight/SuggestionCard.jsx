import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img 
          src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/9/13/red-velvet-irene-x-2n-documents-3-16946093810781913845409.jpeg" 
          alt="user avatar"
          className='w-12 h-12 rounded-full object-cover' 
        />
        <div className='ml-3'>
          <p className='font-semibold text-base'>username</p>
          <p className='text-sm opacity-70'>Follow you</p>
        </div>
      </div>
      <p className='text-blue-600 text-sm font-semibold'>
        Follow
      </p>
    </div>
  )
}

export default SuggestionCard