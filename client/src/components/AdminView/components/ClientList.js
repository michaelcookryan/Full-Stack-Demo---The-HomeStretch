import React from 'react'
import ClientItem from './ClientItem'

export default function ClientList({ clients, removeClient, showEditor, isActive}) {
    
    const allClients = clients.map(client => {

        if (client.role !== "Admin") {
            return (

                <ClientItem
                    key={client._id}
                    clientId={client.clientId}
                    name={client.name}
                    email={client.email}
                    videos={client.videos}
                    removeClient={removeClient}
                    showEditor={showEditor}
                    isActive={isActive}
                />
            )
        }

        })
    return (
        <div className="admin__clientList">
            {/* <h2>Client List</h2> */}
            <div className="clientList">{allClients}</div>
        </div>
    )
}
