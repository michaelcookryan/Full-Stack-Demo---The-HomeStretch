import React from 'react'

export default function Login({findAndRedirect}) {

    return (
        <section>
            <h1>Login</h1>

            <form onSubmit={findAndRedirect}>
                <input type="text" name="name" placeholder="name"/>
                <input type="email" name="email" placeholder="email" required />
                <button>Sign In</button>
            </form>
            
        </section>
    )
}
