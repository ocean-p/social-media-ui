import React from 'react'
import {Sidebar} from '../../components'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../home/HomePage'
import ProfilePage from '../profile/ProfilePage'
import StoryPage from '../story/StoryPage'

const Router = () => {
  return (
    <div>
      <div className='flex'>
        <div className='w-[300px] border-r border-slate-300'>
          <Sidebar/>
        </div>
        <div className='w-full'>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/story' element={<StoryPage/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router