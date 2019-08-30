import React from 'react'

export default function VideoOptions({allVideos, assigned}) {
    
    let clientList = assigned
    let mainList = allVideos

    const options = mainList.map(video => {

        let searched = clientList.indexOf(video.videoId)

        if(searched !== -1){

        return (

            <div className="video__checkbox" key={video._id}>
                <label>{video.title}</label>
                <input type="checkbox" name="assignedVideos" value={video.videoId} defaultChecked/>
            </div>

        );
        }else {

            return (

                <div className="video__checkbox" key={video._id}>
                    <label>{video.title}</label>
                    <input type="checkbox" name="assignedVideos" value={video.videoId} />
                </div>

            );
        }
    });

    return options;

    
}
