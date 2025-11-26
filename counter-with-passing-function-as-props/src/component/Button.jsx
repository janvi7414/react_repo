import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <div>
     {props.children}
     <button onClick={props.handleClick} class ="btn">
        {props.text}
     </button>
    </div>
  )
}

export default Button
