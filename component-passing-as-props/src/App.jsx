import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Card>
          <p>This all elements inside Card are children</p>
          <h3>Heading </h3>
          <p>another element</p>
        </Card>
        <Card children="if nothing padding inside Card as an element this will appear">
        </Card>
    </div>
  )
}

export default App
//this is useful to access code which is not defined if what will it be

