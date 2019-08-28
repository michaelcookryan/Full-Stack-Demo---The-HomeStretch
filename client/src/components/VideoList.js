import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({videos}) {
    
         const assignedVideos = videos.map(video => {
console.log("from the list: ",videos)
             console.log(typeof video)
                return (

                    <VideoItem
                        key={video._id}
                        id={video.id}
                        title={video.title}
                        
                    />
                )

            })
    
        
        return (
        <div className="next-videos">
            <h5 className="next-videos__title">Assigned Videos</h5>
            <ul className="video-list">{assignedVideos}</ul>
        </div>
    )
    
}
