import React from 'react'

export default function Login({findAndRedirect}) {

    return (
        <section>
            <h3>For clients looking to improve their injuries in between appointments...</h3>
            <h2>Welcome to</h2>
            <h1>The HomeStretch</h1>
            
            <form onSubmit={findAndRedirect}>
                <input type="text" name="name" placeholder="name"/>
                <input type="email" name="email" placeholder="email" required />
                <button>Check In</button>
            </form>
            
        </section>
    )
}
