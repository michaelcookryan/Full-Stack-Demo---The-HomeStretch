import React from 'react'
import YouTube from 'react-youtube';

export default function VideoPlayer({current}) {
    return (

        <YouTube videoId={current}/>
        // <iframe width="560" height="315" src={`https://www.youtube.com/embed/${current}`} frameBorder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}
