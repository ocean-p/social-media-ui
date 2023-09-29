import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import {BiBookmark} from 'react-icons/bi'
import ProfilePostCard from './ProfilePostCard'

const tabs = [
  {
    tab: 'Posts',
    icon: <AiOutlineTable/>,
    activeTab: ''
  },
  {
    tab: 'Reels',
    icon: <RiVideoAddLine/>,
    activeTab: ''
  },
  {
    tab: 'Saved',
    icon: <BiBookmark/>,
    activeTab: ''
  },
  {
    tab: 'Tagged',
    icon: <AiOutlineUser/>,
    activeTab: ''
  },
]

const ProfilePost = () => {
  const [activeTab, setActiveTab] = useState('Posts')

  return (
    <div>
      <div className='flex space-x-14 border-t relative'>
        {tabs.map(item => (
          <div onClick={() => setActiveTab(item.tab)} key={item.tab} 
            className={`${activeTab === item.tab ? 'border-t border-black' : 'opacity-60'} 
            flex items-center cursor-pointer py-2`}>
            <p>{item.icon}</p>
            <p className='ml-1'>{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className='flex flex-wrap gap-2'>
          {[1,2,3,4,5].map(item => <ProfilePostCard/>)}
        </div>
      </div>
    </div>
  )
}

export default ProfilePost