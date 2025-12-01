import { useState } from 'react'
import './App.css'
import Logger from './components/Logger'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       <Logger/>
    </div>
  )
}

export default App

/*useState allows a component to:
  Store a value
  Update that value
  Re-render when the value changes */
