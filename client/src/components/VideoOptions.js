import React from 'react'


export default function VideoOptions({videos}) {

    const options = videos.map(video => {
      
        return <div className="video__checkbox"><label>{video.title}</label><input type="checkbox"  name={video.title} value={video.url} /></div> 
    })
       
    return (
        
               <div className="video__options">{options}</div>
          
    )
}
