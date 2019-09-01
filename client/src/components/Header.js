import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({logOut}) {
  
    return (
        <header>
            <section className="header__section">
                <Link to="/"><h2 className="header__title">The HomeStretch</h2></Link>
                <Link to="/login"><button onClick={logOut}>Check Out</button></Link>
            </section>            
        </header>
    )
}
