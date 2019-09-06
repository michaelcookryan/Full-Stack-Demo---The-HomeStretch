import React from 'react'
import YouTube from 'react-youtube';

export default function VideoPlayer({ current }) {
    
   
    return (
        <div className="video-player">
        <YouTube videoId={current} />
        </div>
        
    )
}
