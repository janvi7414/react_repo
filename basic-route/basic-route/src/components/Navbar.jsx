import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/' className={({isActive}) => isActive ? ("active-link") : ("")}>
            home
          </NavLink>
        </li>
         <li>
          <NavLink to='/about' className={({isActive}) => isActive ? ("active-link") : ("")}>
            about
          </NavLink>
        </li>
         <li>
          <NavLink to='/dashboard'  className={({isActive}) => isActive ? ("active-link") : ("")}>
            dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

// we are using either <Link> or <NavLink>
// <NavLink> provides the reference calles isActive to mark active link 
// not using <a> as this refreshes the whole page every time which we don't want
//here className is defined on the basis of a variable i.e. if the link is acive isAcive is true thus the className is provided else none

export default Navbar
