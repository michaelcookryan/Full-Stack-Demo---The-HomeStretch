import React from 'react'
// import { Link } from 'react-router-dom';
// import EditItem from './EditItem';

export default function ClientItem({ clientId, email, name, videos, removeClient, showEditor}) {


    return (
      
            <div className="clientList__item">
                <div className="clientList__item--name">{name}</div>
                <div className="clientList__item--id">{clientId}</div>
                <div className="clientList__item--email">{email}</div>
                <div className="clientList__item--videos">{videos.length} videos assigned</div>
                <div className="clientList__item--buttons">

                    <button className="item__edit" onClick={(event)=>showEditor(event,clientId)}>Edit</button>

                    <button className="item__delete" onClick={(event)=>removeClient(event, clientId)}>Delete</button>

                </div>

            </div>
        

        
    )
}
