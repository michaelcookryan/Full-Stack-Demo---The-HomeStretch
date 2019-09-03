import React from 'react';
import {Link} from 'react-router-dom';

export default function VideoItem({videoId,title, clientId, unique, handleClick}) {

        return (
            <Link id={videoId} className="video" to={`/clients/${clientId}/${videoId}`} onClick={()=>{handleClick(videoId)}}>
            
                <div className="video-link" key={unique} >
                                    
                    <div className="video-link__details">
                        <h5 className="video-link__details--title">
                            {title}
                        </h5>                       
                       
                    </div>                 
                </div> 
            </Link > 
        )
    }
