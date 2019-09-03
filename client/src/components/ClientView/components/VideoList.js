import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({videos, clientId}) {
    
    const handleClick = (id) => {

        let turnOffLast = document.querySelector("a.isOpen")
       
        if (turnOffLast !== null && turnOffLast !== id) {

            turnOffLast.classList.toggle('isOpen')

            const playing = document.getElementById(id);
            playing.classList.toggle('isOpen')

        } else { 
            
            const playing = document.getElementById(id);
            playing.classList.toggle('isOpen')
        }

    }

         const assignedVideos = videos.map(video => {

                return (

                    <VideoItem
                        key={video._id}
                        videoId={video.videoId}
                        title={video.title}
                        clientId={clientId}
                        unique={video._id}
                        handleClick={handleClick}
                    />
                )

            })
    
        
        return (
        <div className="next-videos">
            <h2 className="next-videos__title">Assigned Videos</h2>
                <div className="next-videos__list">{assignedVideos}</div>
        </div>
    )
    
}
