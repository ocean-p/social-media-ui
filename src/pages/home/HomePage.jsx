import React from 'react'
import Story from '../../components/story/Story'
import { HomeRight, PostCard } from '../../components'

const HomePage = () => {
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[64%] px-10'>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md 
            justify-start w-full'>
            {[1,2,3].map(item => <Story key={item}/>)}
          </div>
          <div className='space-y-10 w-full mt-10'>
            {[7,8,9].map(item => <PostCard key={item}/>)}
          </div>
        </div>
        <div className='w-[35%] pr-10'>
          <HomeRight/>
        </div>
      </div>
    </div>
  )
}

export default HomePage