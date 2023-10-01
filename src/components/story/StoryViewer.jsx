import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StoryProgressBar from './StoryProgressBar'

const StoryViewerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`

const StoryImages = styled.img`
  max-height: 90vh;
  object-fit: contain;
`

const StoryViewer = ({stories}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextStory()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentStoryIndex])

  const handleNextStory = () => {
    if(currentStoryIndex < stories.length-1){
      setCurrentStoryIndex(prev => prev + 1)
      setActiveIndex(prev => prev + 1)
    } else if(currentStoryIndex === stories.length-1){
      setCurrentStoryIndex(0)
      setActiveIndex(0)
    }
  }

  return (
    <div className='relative w-full'>
      <StoryViewerContainer>
        <StoryImages src={stories[currentStoryIndex]?.image}/>
        <div className='absolute top-0 flex w-full'>
          {stories.map((item, index) => 
            <StoryProgressBar
              key={index}
              duration={3000}
              index={index}
              activeIndex={activeIndex}
            />
          )}
        </div>
      </StoryViewerContainer>
    </div>
  )
}

export default StoryViewer