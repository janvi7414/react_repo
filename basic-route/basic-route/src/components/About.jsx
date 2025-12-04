import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/dashboard')
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>
        Navigate to Dashboard
      </button>
    </div>
  )
}

export default About
