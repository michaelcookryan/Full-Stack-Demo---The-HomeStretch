import React from 'react'

export default function VideoOptions({allVideos, assigned}) {

    const options = allVideos.map(video => {

        let searched = assigned.indexOf(video.videoId)

        if(searched !== -1){

        return (

            <div className="video__checkbox" key={video._id}>
                {/* <label>{video.title}</label> */}
                <input type="checkbox" name="assignedVideos" value={video.videoId} defaultChecked />{video.title}
            </div>

        );
        }else {

            return (

                <div className="video__checkbox" key={video._id}>
                    {/* <label>{video.title}</label> */}
                    <input type="checkbox" name="assignedVideos" value={video.videoId} />{video.title}
                </div>

            );
        }
    });

    return options;

    
}
