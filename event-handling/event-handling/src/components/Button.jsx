import React from 'react'
import "./Button.css"

const Button = () => {

function handleClick(){
    alert("button clicked");
}

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Button
