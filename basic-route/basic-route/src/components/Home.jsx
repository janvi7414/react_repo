import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/about')
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>
        Navigate to About page
      </button>
    </div>
  )
}

export default Home
