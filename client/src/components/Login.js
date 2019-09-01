import React from 'react'

export default function Login({findAndRedirect}) {

    return (
        <section className="login">
            <h1 className="login__title">The HomeStretch</h1>
            <h3 className="login__subtitle">Instructional videos for clients to maintain their recovery progress in between appointments</h3>
            
            
            <form className="login__form" onSubmit={findAndRedirect}>
                <input type="text" name="name" placeholder="name"/>
                <input type="email" name="email" placeholder="email" required />
                <button>Check In</button>
            </form>
            
        </section>
    )
}
