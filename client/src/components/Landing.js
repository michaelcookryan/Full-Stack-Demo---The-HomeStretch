import React from 'react'

export default function Landing() {
    return (
        <section>
            <h1>Landing Page</h1>
            <form>
                <input type="text" name="Name" placeholder="name"/>
                <input type="email" name="Email" placeholder="email" required />
                <input type="text" name="Id" placeholder="client id provided to you by therapist" required />
                <input type="password" name="Password" placeholder="password"required />

                <button>Login</button>
            </form>
        </section>
    )
}
