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


/*this is called IMMEDIATE INVOKE and it will give alret even before the
button is pressed as this is incorrect way to add event

<button onClick={alert("button clicked")}>
  Click me
</button>*/


/*this is called calling a function which is incorrect
  <button onClick={handleClick()}>

  </button> */

  /*this is correct way called passing the function This tells React to remember it and only call your function when the user clicks the button.
  
  <button onClick={handleClick}>

  </button>
  */
