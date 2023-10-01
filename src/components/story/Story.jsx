import React from 'react'
import UserAvatar from '../../assets/tzuyu-2.png'
import { useNavigate } from 'react-router-dom'

const Story = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/story')
  }

  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
      <img src={UserAvatar} alt="user avatar" 
        className='w-16 h-16 rounded-full object-cover'
      />
      <p>Name</p>
    </div>
  )
}

export default Story