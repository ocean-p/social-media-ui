import React from 'react'
import { StoryViewer } from '../../components'

const stories = [
  {
    image: 'https://pbs.twimg.com/media/Fq8wpSeXgAANtCB.jpg:large'
  },
  {
    image: 'https://dbkpop.com/wp-content/uploads/2023/03/twice_ready_to_be_bcut_making_of_tzuyu_2.jpg'
  },
  {
    image: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/9/13/red-velvet-irene-x-2n-documents-3-16946093810781913845409.jpeg'
  },
  {
    image: 'https://image.vtc.vn/resize/th/upload/2021/07/07/9bf01e373633b54a3f7ab4df0c1ea9b4-06261492.jpg'
  },
]

const StoryPage = () => {
  return (
    <div>
      <StoryViewer stories={stories}/>
    </div>
  )
}

export default StoryPage