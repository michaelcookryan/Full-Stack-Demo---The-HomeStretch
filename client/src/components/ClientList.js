import React from 'react'
import ClientItem from './ClientItem'

export default function ClientList({ clients }) {
    
    const allClients = clients.map(client => {

            return (

                <ClientItem
                    key={client.id}
                    clientId={client.id}
                    name={client.name}
                    email={client.email}
                    videos={client.videos}
                />
            )

        })
    return (
        <div>
            <h2>Client List</h2>
            <ul>{allClients}</ul>
        </div>
    )
}
