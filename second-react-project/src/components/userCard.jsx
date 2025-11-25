import React from 'react'
import "./UserCard.css"
import profile1 from '../assets/profile1.png'

const UserCard = () => {
  return (
    <div className="user_div">
      <p id="user_name" >Janvi</p>
      <img id="user_img" src={profile1} alt="i" />
      <p id="user_desc">Description of the tile</p>
    </div>
  )
}

export default UserCard

// here instead of class className is used
/*
naming project name using terminal
  ✔ all lowercase
  ✔ numbers allowed
  ✔ hyphens allowed
  ✔ NO underscores
  ✔ NO uppercase
  ✔ NO spaces
naming file name in src
  ✔ lowercase or uppercase
  ✔ hyphens (-)
  ✔ underscores (_)
  ✔ numbers
  ✔ CamelCase reactCode (recommended for React components)
naming component
  ✔ start with Caps letter
*/