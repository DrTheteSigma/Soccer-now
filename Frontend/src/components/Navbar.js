import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
          <Link style={{textDecoration: 'none'}}  to="/">
           <h2 className='logo'>Soccery</h2>
          </Link>
        </div>

        <div className='navbar-btns'>

          <Link to="/login">
           <button className='btn log-in'>Log in</button>
          </Link>

          <Link to="/create-account">

           <button className='btn sign-up'>Sign up</button>
          </Link>
        </div>
    </nav>

  )
}

export default Navbar