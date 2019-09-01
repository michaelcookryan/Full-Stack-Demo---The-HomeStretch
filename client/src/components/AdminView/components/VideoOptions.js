import React from 'react'

export default function VideoOptions({allVideos, assigned}) {

    const options = allVideos.map(video => {

        let searched = assigned.indexOf(video.videoId)

        if(searched !== -1){

        return (

            <div className="video-options" key={video._id}>
                {/* <label>{video.title}</label> */}
                {/* <label> */}
                    <input className="video-options__checkbox" type="checkbox" name="assignedVideos" value={video.videoId} defaultChecked />{video.title}
                {/* </label> */}
            </div>

        );
        }else {

            return (

                <div className="video-options" key={video._id}>
                    {/* <label>{video.title}</label> */}
                    <label>
                    <input className="video-options__checkbox" type="checkbox" name="assignedVideos" value={video.videoId} />{video.title}
                    </label>
                </div>

            );
        }
    });

    return options;

    
}
