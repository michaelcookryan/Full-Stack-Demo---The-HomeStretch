import React from 'react'

export default function VideoOptions({allVideos, assigned, admin}) {

    const options = allVideos.map(video => {

        let locationId = admin + video.videoId
        let searched = assigned.indexOf(video.videoId)

        if(searched !== -1){

        return (

            <div className="video-options" key={video._id}>
                <input className="video-options__checkbox" type="checkbox" id={locationId} name="assignedVideos" value={video.videoId} defaultChecked /><label htmlFor={locationId}>{video.title}</label>
            </div>

        );
        }else {

            return (

                <div className="video-options" key={video._id}>
                    <input className="video-options__checkbox" type="checkbox" id={locationId} name="assignedVideos" value={video.videoId} /><label htmlFor={locationId}>{video.title}</label>                  
                </div>

            );
        }
    });

    return options;

    
}
