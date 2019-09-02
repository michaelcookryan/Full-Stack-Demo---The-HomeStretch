import React from 'react'

export default function VideoOptions({allVideos, assigned}) {

    const options = allVideos.map(video => {

        let searched = assigned.indexOf(video.videoId)

        if(searched !== -1){

        return (

            <div className="video-options" key={video._id}>
                <input className="video-options__checkbox" type="checkbox" id={video.videoId} name="assignedVideos" value={video.videoId} defaultChecked /><label htmlFor={video.videoId}>{video.title}</label>
            </div>

        );
        }else {

            return (

                <div className="video-options" key={video._id}>
                    <input className="video-options__checkbox" type="checkbox" id={video.videoId} name="assignedVideos" value={video.videoId} /><label htmlFor={video.videoId}>{video.title}</label>                  
                </div>

            );
        }
    });

    return options;

    
}
