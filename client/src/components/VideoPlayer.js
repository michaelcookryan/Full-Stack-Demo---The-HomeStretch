import React from 'react'

export default function VideoPlayer({current}) {
    return (
        <div className="video-player">
            <video className="video" src={current} poster="" controls ></video>
        </div>
    )
}
