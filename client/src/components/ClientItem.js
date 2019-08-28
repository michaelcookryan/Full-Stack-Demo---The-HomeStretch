import React from 'react'
import { Link } from 'react-router-dom';

export default function ClientItem({ clientId, email, name, videos }) {
    return (
        <Link to={`/admin/${clientId}`} className="clientList__link">
            <div className="clientList__item">
                <div className="clientList__item--name">{name}</div>
                <div className="clientList__item--id">{clientId}</div>
                <div className="clientList__item--email">{email}</div>
                <div className="clientList__item--videos">{videos.length} videos assigned</div>
                <div className="clientList__item--buttons">
                    <button className="item__edit">Edit</button>
                    <button className="item__delete">Delete</button>
                </div>
            </div>
        </Link>
    )
}
