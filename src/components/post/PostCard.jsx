import React, { useState } from 'react'
import UserAvatar from '../../assets/tzuyu-2.png'
import {BsEmojiSmile, BsThreeDots} from 'react-icons/bs'
import PostImg from '../../assets/tzuyu-4.jpg'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {RiSendPlaneLine} from 'react-icons/ri'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { MdOutlineBookmark, MdOutlineBookmarkBorder } from 'react-icons/md'
import './PostCard.css'
import Comment from '../comment/Comment'
import { useDisclosure } from '@chakra-ui/react'

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleShowDropDown = () => {
    setShowDropDown(prev => !prev)
  }

  const handleLikePost = () => {
    setIsLiked(prev => !prev)
  }

  const handleSavePost = () => {
    setIsSaved(prev => !prev)
  }

  const handleOpenCommentModal = () => {
    onOpen()
  }

  return (
    <div>
      <div className='border rounded-md w-full'>
        <div className='flex justify-between items-center w-full py-4 px-5'>
          <div className='flex items-center'>
            <img src={UserAvatar} alt="user avatar" 
              className='h-12 w-12 rounded-full object-cover'/>
            <div className='pl-3'>
              <p className='font-semibold text-base'>name</p>
              <p className='font-thin text-sm'>location</p>
            </div>
          </div>
          <div className='dropdown'>
            <BsThreeDots onClick={handleShowDropDown} className='dots'/>
            <div className='dropdown-content'>
              {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md 
                cursor-pointer'>
                Delete
              </p>}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <img src={PostImg} alt="image" className='w-full'/>
        </div>

        <div className='flex justify-between items-center w-full px-5 mt-2'>
          <div className='flex items-center space-x-3'>
            {isLiked ? 
              <AiFillHeart onClick={handleLikePost} 
                className='text-3xl hover:opacity-60 cursor-pointer 
                  text-red-500'/> : 
              <AiOutlineHeart onClick={handleLikePost} 
                className='text-3xl hover:opacity-60 cursor-pointer'/>
            }
            <HiOutlineChatBubbleOvalLeft onClick={handleOpenCommentModal}
              className='text-3xl hover:opacity-60 cursor-pointer'/>
            <RiSendPlaneLine className='text-3xl hover:opacity-60 cursor-pointer'/>
          </div>
          <div className='cursor-pointer'>
            {isSaved ? 
              <MdOutlineBookmark onClick={handleSavePost}
                className='text-3xl hover:opacity-60 cursor-pointer'/> : 
              <MdOutlineBookmarkBorder onClick={handleSavePost}
                className='text-3xl hover:opacity-60 cursor-pointer'/>
            }
          </div>
        </div>
        <div className='w-full my-2 px-5'>
          <p>10K likes</p>
          <p className='opacity-50 mt-2 cursor-pointer'>view all 5K comments</p>
        </div>
        <div className='border-t w-full'>
          <div className='flex w-full items-center px-5'>
            <BsEmojiSmile/>
            <input type="text" placeholder='Add a comment ...' 
              className='comment-input'/>
          </div>
        </div>
      </div>

      <Comment onClose={onClose} isOpen={isOpen} isLiked={isLiked} 
        isSaved={isSaved} handleLikePost={handleLikePost} 
        handleSavePost={handleSavePost}/>
    </div>
  )
}

export default PostCard