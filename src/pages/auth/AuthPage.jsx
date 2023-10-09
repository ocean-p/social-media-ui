import React from 'react'
import './AuthPage.css'
import Phone from '../../assets/login-phone.png'
import { SignIn, Register } from '../../components'
import { useLocation } from 'react-router-dom'

const AuthPage = () => {
  const location = useLocation()

  return (
    <div>
      <div className='flex items-center justify-center h-[100vh] space-x-5'>
        <div className='hidden lg:block'>
          <div className='h-[35rem] w-[23rem] relative'>
            <img src={Phone} alt="thumbnail" 
              className='h-full w-full'  
            />
            <div className='mobile-wallpaper h-[33rem] w-[15.6rem] absolute top-6 left-[6.4rem]'>
            </div>
          </div>
        </div>

        <div className='w-[80vw] sm:w-[40vw] lg:w-[26vw]'>
          {location.pathname === '/signin' ? <SignIn/> : <Register/>}
        </div>
      </div>
    </div>
  )
}

export default AuthPage