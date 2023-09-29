import {AiFillCompass, AiFillHeart, AiFillHome, AiFillMessage, 
  AiFillPlusCircle, AiOutlineCompass, AiOutlineHeart, 
  AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai'
import {RiVideoFill, RiVideoLine} from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import {ImSearch} from 'react-icons/im'
import {FaUserCircle} from 'react-icons/fa'

const style = 'text-2xl mr-5'

export const menuIcons = [
  {
    title: 'Home',
    icon: <AiOutlineHome className={style}/>,
    activeIcon: <AiFillHome className={style}/>
  },
  {
    title: 'Search',
    icon: <AiOutlineSearch className={style}/>,
    activeIcon: <ImSearch className={style}/>
  },
  {
    title: 'Explore',
    icon: <AiOutlineCompass className={style}/>,
    activeIcon: <AiFillCompass className={style}/>
  },
  {
    title: 'Reels',
    icon: <RiVideoLine className={style}/>,
    activeIcon: <RiVideoFill className={style}/>
  },
  {
    title: 'Message',
    icon: <AiOutlineMessage className={style}/>,
    activeIcon: <AiFillMessage className={style}/>
  },
  {
    title: 'Notification',
    icon: <AiOutlineHeart className={style}/>,
    activeIcon: <AiFillHeart className={style}/>
  },
  {
    title: 'Create',
    icon: <AiOutlinePlusCircle className={style}/>,
    activeIcon: <AiFillPlusCircle className={style}/>
  },
  {
    title: 'Profile',
    icon: <CgProfile className={style}/>,
    activeIcon: <FaUserCircle className={style}/>
  },
]