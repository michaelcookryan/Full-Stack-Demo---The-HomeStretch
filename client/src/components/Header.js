import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({logOut}) {
  
    return (
        <header>
            <section>
                <Link to="/"><h2>The HomeStretch</h2></Link>
                <Link to="/login"><button onClick={logOut}>Check Out</button></Link>
            </section>            
        </header>
    )
}
