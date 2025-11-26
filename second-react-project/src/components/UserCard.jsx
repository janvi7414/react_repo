import React from 'react'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className="user_div">
      <p id="user_name" >{props.name}</p>
      <img id="user_img" src={props.image} alt="i" />
      <p id="user_desc">{props.desc}</p>
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


props i.e. attribute :  data being transferend between files
*/