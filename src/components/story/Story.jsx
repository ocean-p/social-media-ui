import React from 'react'
import UserAvatar from '../../assets/tzuyu-2.png'

const Story = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center'>
      <img src={UserAvatar} alt="user avatar" 
        className='w-16 h-16 rounded-full object-cover'
      />
      <p>Name</p>
    </div>
  )
}

export default Story