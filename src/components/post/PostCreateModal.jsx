import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { FaPhotoVideo } from 'react-icons/fa'
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import UserAvatar from '../../assets/tzuyu-2.png'
import './PostCreateModal.css'
import { useDispatch } from 'react-redux'

const PostCreateModal = ({onClose, isOpen}) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [file, setFile] = useState()
  const [caption, setCaption] = useState('')
  const dispatch = useDispatch()

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.file[0]
    if(droppedFile.type.startsWith('image/') || 
      droppedFile.type.startsWith('video/')
    ){
      setFile(droppedFile)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    if(file && (file.type.startsWith('image/') || file.type.startsWith('video/'))){
      setFile(file)
    } else{
      setFile(null)
      alert('Please select image or video!')
    }
  }

  const handleChangeCaption = (e) => {
    setCaption(e.target.value)
  }

  const handleCreatePost = () => {

  }

  return (
    <div>
      <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between py-1 px-10 items-center'>
            <p>Create New Post</p>
            <Button variant='ghost' size='sm' colorScheme='blue'
              className=''
              onClick={handleCreatePost}
            >
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className='h-[70vh] flex justify-between'>
              <div className='flex flex-[1.2] justify-center'>
                {!file && <div onDrop={handleDrop} onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave} 
                  className='drag-drop h-full'>
                  <div>
                    <FaPhotoVideo className='text-4xl'/>
                    <p>Drag Photos or Videos here</p>
                  </div>
                  <label htmlFor="file-upload" 
                    className='custom-file-upload'>
                    Select From Computer
                  </label>
                  <input type="file" id='file-upload' accept='image/*, video/*'
                    onChange={handleChange}/>
                </div>}
                {file && 
                 <img src={URL.createObjectURL(file)} alt='image upload'
                  className='max-h-full'/>
                }
              </div>
              <div className='flex-1'>
                <div className='flex items-center px-2'>
                  <img src={UserAvatar} alt="user avatar" 
                    className='w-9 h-9 rounded-full object-cover'/>
                  <p className='font-semibold ml-4'>username</p>
                </div>
                <div className='px-2'>
                  <textarea className='caption-input' placeholder='Write a caption here' 
                    name="caption" rows="8" onChange={handleChangeCaption}>
                    </textarea>
                </div>
                <div className='flex justify-between px-2 mb-2'>
                  <GrEmoji/>
                  <p className='opacity-70'>{caption.length}/500</p>
                </div>
                <hr />
                <div className='p-2 flex justify-between items-center'>
                  <input type="text" placeholder='location' 
                    className='location-input'/>
                  <GoLocation/>
                </div>
                <hr />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default PostCreateModal