import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import PostImg from '../../assets/tzuyu-4.jpg'
import UserAvatar from '../../assets/tzuyu-2.png'
import { BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { RiSendPlaneLine } from 'react-icons/ri'
import { MdOutlineBookmark, MdOutlineBookmarkBorder } from 'react-icons/md'
import './Comment.css'

const Comment = ({onClose, isOpen, isLiked, isSaved, handleLikePost, handleSavePost}) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[50%] flex flex-col justify-center">
                <img src={PostImg} alt="image" className="max-h-full w-full" />
              </div>
              <div className="w-[55%] pl-6 relative">
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <div>
                      <img
                        src={UserAvatar}
                        alt="user avatar"
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <p>username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div className="comment">
                  {[10, 11, 12, 13, 14, 15, 16].map((item) => (
                    <CommentCard key={item} />
                  ))}
                </div>

                <div className="absolute bottom-0 w-full">
                  <div className="flex justify-between items-center w-full pb-2">
                    <div className="flex items-center space-x-3">
                      {isLiked ? (
                        <AiFillHeart
                          onClick={handleLikePost}
                          className="text-3xl hover:opacity-60 cursor-pointer 
                        text-red-500"
                        />
                      ) : (
                        <AiOutlineHeart
                          onClick={handleLikePost}
                          className="text-3xl hover:opacity-60 cursor-pointer"
                        />
                      )}
                      <HiOutlineChatBubbleOvalLeft className="text-3xl hover:opacity-60 cursor-pointer" />
                      <RiSendPlaneLine className="text-3xl hover:opacity-60 cursor-pointer" />
                    </div>
                    <div className="cursor-pointer pr-4">
                      {isSaved ? (
                        <MdOutlineBookmark
                          onClick={handleSavePost}
                          className="text-3xl hover:opacity-60 cursor-pointer"
                        />
                      ) : (
                        <MdOutlineBookmarkBorder
                          onClick={handleSavePost}
                          className="text-3xl hover:opacity-60 cursor-pointer"
                        />
                      )}
                    </div>
                  </div>

                  <div className="w-full">
                    <p>10K likes</p>
                    <p className="opacity-50 text-sm">1 day ago</p>
                  </div>
                  <div className="flex w-full items-center border-t">
                    <BsEmojiSmile />
                    <input
                      type="text"
                      placeholder="Add a comment ..."
                      className="comment-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Comment