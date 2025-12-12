import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorSwitch from './component/ColorSwitch'

function App() {
  const [count, setCount] = useState(0)

  function updateCount(){
    setCount(count+1);
  }

  function getRandomLightColor()
  {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }
  // Math.random returns a random float between 0 (inclusive) and 1 (exclusive)
  // Math.round rounds nearest to 5
  // Low RGB numbers (0–80) → dark colors
  // Medium RGB numbers (80–150) → mid-tone colors
  // High RGB numbers (150–255) → light/pastel colors
  // thus adding 150 creates pastel colors
  // rgb(${r}, ${g}, ${b}) is a string

  function handleChangeColor(){
    let element = document.querySelector('.myDiv');
    element.style.backgroundColor = getRandomLightColor();
  }


  return (
  <div onClick={updateCount} className='myDiv'>
    <ColorSwitch onChangeColor={handleChangeColor}/>
    <h2>Clicks on the page: {count} </h2>

  </div>
  )
}

export default App

/*Stop propagation in React prevents an event from bubbling up to parent elements.
If you click a child div, normally the parent’s click event also fires.
Using event.stopPropagation() inside the child’s handler stops the parent’s handler from running.
 */

/*here if stop propagation was not applied when the child button
would have clicked it would have fulfilled the event on the button
first then it would have bubble to fulfill the event applied on the 
parent div also which is to increment the count 

event.stopPropagation()
Stops event from bubbling any further.

event.stopImmediatePropagation()
Stops bubbling and also prevents other event listeners on the same element from running.*/