import React from 'react';
import {Link} from 'react-router-dom';

export default function VideoThumb({id,title}) {

        return (
            <Link to={`/clients/${id}`}>
           <li key={id} className="video-thumb">
                
                    
                    
                    <div className="video-thumb__copy">
                        <h4 className="video-thumb__copy--title">
                            {title}
                        </h4>
                        <h4 className="video-thumb__copy--id">
                            {id}
                        </h4>
                       
                    </div>
                  
            </li> 
        </Link > 
        )
    }
