import React from 'react'
import ClientItem from './ClientItem'

export default function ClientList({ clients, removeClient, showEditor, isActive, updateClient}) {
    console.log("clientList :", clients)
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
                    updateClient={updateClient}
                />
            )
        }

        })
    return (
        <div className="admin__clientList">
            <div className="clientList">{allClients}</div>
        </div>
    )
}
