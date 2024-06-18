import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header' >
            <h3>
                Bibliothèque
            </h3>
            <div className="links d-flex align-items-center">
                <Link to="/efm2"  >
                    Home
                </Link>
                <Link to="details" >
                    Détails
                </Link>
            </div>
        </div>
    )
}

export default Header