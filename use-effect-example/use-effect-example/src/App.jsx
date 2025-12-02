import { useState } from 'react'
import './App.css'
import Logger from './components/Logger'
import Timer from './components/Timer'
import DataFetcher from './components/DataFetcher'
import Resize from './components/Resize'
import MultiUseEffect from './components/MultiUseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        {/* use every component one by one */}
    </div>
  )
}

export default App

/*useState allows a component to:
    Store a value
    Update that value
    Re-render when the value changes */
