import React, { useEffect, useState } from 'react'
import './StoryProgressBar.css'

const StoryProgressBar = ({index, activeIndex, duration}) => {
  const [progress, setProgress] = useState(0)

  const isActive = index === activeIndex

  console.log(progress)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if(prev < 100) return prev+1
        //clearInterval(interval)
        return prev
      })
    }, duration/100)

    return () => {
      clearInterval(interval)
    }
  }, [duration, activeIndex])

  useEffect(() => {
    setProgress(0)
  }, [activeIndex])

  return (
    <div className={`progress-bar-container ${isActive ? 'active': ''}`}>
      <div className={`${isActive ? 'progress-bar': ''}`}
        style={{width:`${progress}%`}}>

      </div>
    </div>
  )
}

export default StoryProgressBar