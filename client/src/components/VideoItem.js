import React from 'react';
import {Link} from 'react-router-dom';

export default function VideoItem({videoId,title, clientId, unique}) {

        return (
            <Link to={`/clients/${clientId}/${videoId}`}>
            
                <li key={unique} className="video-thumb">
                                    
                    <div className="video-thumb__copy">
                        <h4 className="video-thumb__copy--title">
                            {title}
                        </h4>
                       
                       
                    </div>
                  
            </li> 
        </Link > 
        )
    }
