import React from 'react'
import {Sidebar} from '../../components'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../home/HomePage'
import ProfilePage from '../profile/ProfilePage'

const Router = () => {
  return (
    <div>
      <div className='flex'>
        <div className='w-[18%] border-r border-slate-300'>
          <Sidebar/>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router