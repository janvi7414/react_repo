import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navDiv'>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/pastes">
        All Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
