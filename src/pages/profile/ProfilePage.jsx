import React from 'react'
import {ProfilePost, ProfileUser} from '../../components'

const ProfilePage = () => {
  return (
    <div className='px-20'>
      <div>
        <ProfileUser/>
      </div>
      <div className='pb-10'>
        <ProfilePost/>
      </div>
    </div>
  )
}

export default ProfilePage