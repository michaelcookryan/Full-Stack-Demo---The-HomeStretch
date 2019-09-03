import React from 'react'
import YouTube from 'react-youtube';
const opts = {
    height: '731',
    width: '100%',
}
export default function VideoPlayer({ current }) {
    
   
    return (
        <div className="video-player">
        <YouTube videoId={current} opts={opts} />
        </div>
        
    )
}
