import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({videos, clientId}) {
    
         const assignedVideos = videos.map(video => {

                return (

                    <VideoItem
                        key={video._id}
                        videoId={video.videoId}
                        title={video.title}
                        clientId={clientId}
                        unique={video._id}
                        
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
