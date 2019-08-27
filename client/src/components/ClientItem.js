import React from 'react'
import { Link } from 'react-router-dom';

export default function ClientItem({ clientId, email, name, videos }) {
    return (
        <Link to={`/admin/${clientId}`}>
        <li>
            <div>{name}</div>
            <div>{clientId}</div>
            <div>{email}</div>
            <div>{videos.length}</div>
            </li>
        </Link>
    )
}
