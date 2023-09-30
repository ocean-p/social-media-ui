import React from 'react'
import UserAvatar from '../../assets/tzuyu-2.png'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img 
                src={UserAvatar} 
                alt="user avatar" 
                className='w-12 h-12 rounded-full object-cover'
              />
            </div>
            <div className='ml-3'>
              <p>username</p>
              <p>location</p>
            </div>
          </div>
          <div>
            <p className='text-blue-600 text-sm font-semibold'>Switch</p>
          </div>
        </div>
        <div className='space-y-6 mt-10'>
          {[20,21,22].map(item => <SuggestionCard key={item}/>)}
        </div>
      </div>
    </div>
  )
}

export default HomeRight