import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper grey darken-4">
                <div className="container">
                    <Link to='/' className="brand-logo">The Pup Bundle</Link>
                    <ul className="right">
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


