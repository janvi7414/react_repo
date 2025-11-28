import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

function mouseOver(){
  alert("Mouse overed");
}

  return (
      <div>
        <Form/>
        <p onMouseOver={mouseOver}  style={{border:"solid black 1px" , padding:"0.5rem"}}>hover the Mouse on para</p>
       <Button/> 
    </div>
  )
}

export default App
