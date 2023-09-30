import React from 'react'
import Tzuyu from '../../assets/tzuyu-1.jpg'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './ProfilePostCard.css'

const ProfilePostCard = () => {
  return (
    <div className='post w-[calc(33.33%-0.5rem)]'>
      <div className='h-[300px]'>
        <img src={Tzuyu} alt="Tzuyu" className='cursor-pointer object-cover'/>
        <div className='overlay'>
          <div className='overlay-text flex justify-between'>
            <div className='flex items-center'>
              <AiFillHeart/> <span>10K</span>
            </div>
            <div className='flex items-center'>
              <FaComment/> <span>5K</span>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePostCard