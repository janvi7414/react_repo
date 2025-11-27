import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e) => props.setValue(e.target.value)}/>
      <p>Value inside the Card is =  {props.value}</p>
      </div>
  )
}

export default Card
