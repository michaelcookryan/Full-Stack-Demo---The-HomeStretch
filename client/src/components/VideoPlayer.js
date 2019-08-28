import React from 'react'
import YouTube from 'react-youtube';

export default function VideoPlayer({current}) {
    return (

        <YouTube videoId={current}/>
    )
}
