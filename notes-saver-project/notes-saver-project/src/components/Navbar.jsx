import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className=' flex flex-row font-medium bg-amber-200 gap-8 w-full justify-center mb-4'>
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
