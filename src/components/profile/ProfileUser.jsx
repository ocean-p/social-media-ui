import React from 'react'
import avatar from '../../assets/user-avatar.png'
import { TbCircleDashed } from 'react-icons/tb'

const ProfileUser = () => {
  return (
    <div className='py-10 w-full'>
      <div className='flex items-center'>
        <div className='mr-8'>
          <img src={avatar} alt="user avatar" 
            className='w-36 h-36 rounded-full'/>
        </div>
        <div className='space-y-5'>
          <div className='flex items-center space-x-10'>
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed/>
          </div>
          <div className='flex space-x-10'>
            <div>
              <span className='font-semibold mr-2'>10</span>
              <span>posts</span>
            </div>
            <div>
              <span className='font-semibold mr-2'>10</span>
              <span>followers</span>
            </div>
            <div>
              <span className='font-semibold mr-2'>10</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className='font-semibold'>Full name</p>
            <p className='font-thin text-sm'>💻 Code, Coffee, and Creativity ☕️✨</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUser