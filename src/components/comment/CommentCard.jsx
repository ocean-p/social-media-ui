import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CommentCard = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleLikeComment = () => {
    setIsLiked(prev => !prev)
  }

  return (
    <div>
      <div className='flex justify-between items-center py-3'>
        <div className='flex items-center'>
          <div>
            <img src="https://image-us.24h.com.vn/upload/2-2020/images/2020-05-05/1588683745-32-untitled-1fgh-1588650681-width640height480.jpg" 
              alt="user avatar" 
              className='w-9 h-9 rounded-full object-cover'/>
          </div>
          <div className='ml-4'>
            <p>
              <span className='font-semibold'>username</span>
              <span className='ml-2'>nice post</span>
            </p>
            <div className='flex items-center space-x-3 text-sm opacity-60'>
              <span>1 min ago</span>
              <span>1K likes</span>
            </div>
          </div>
        </div>

        {isLiked ? 
          <AiFillHeart
            onClick={handleLikeComment}
            className='text-sm hover:opacity-60 cursor-pointer text-red-500'
          /> :
          <AiOutlineHeart
            onClick={handleLikeComment}
            className='text-sm hover:opacity-60 cursor-pointer'
          />
        }
      </div>
    </div>
  )
}

export default CommentCard