import React from 'react'

function Video() {
  return (
     <div>
      <video 
        width="100%" 
        height="50%" 
        controls 
        autoPlay 
        loop 
        muted
      >
        <source src="/video/myvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
