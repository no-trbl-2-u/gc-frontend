import React from 'react'

import VideoSource from './Live_Gameplay.mp4'
import './BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <video
      preload="auto"
      autoPlay
      loop
      muted
      color="black"
      className="BackgroundVideo"
    >
      <source src={ VideoSource } type="video/mp4" />
    </video>
  )
}

export default BackgroundVideo