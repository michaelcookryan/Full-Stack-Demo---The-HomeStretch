import React from 'react'
import ClientItem from './ClientItem'

export default function ClientList({ clients }) {
    
    const allClients = clients.map(client => {

        if (client.role !== "Admin") {
            return (

                <ClientItem
                    key={client._id}
                    clientId={client.id}
                    name={client.name}
                    email={client.email}
                    videos={client.videos}
                />
            )
        }

        })
    return (
        <div className="admin__clientList">
            <h2>Client List</h2>
            <div className="clientList">{allClients}</div>
        </div>
    )
}
