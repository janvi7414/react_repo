import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

const contextA = createContext();
const contextB = createContext();

function App() {
  const [countA, setCountA] = useState(10);
  const [countB, setCountB] = useState(100);

  return (

      <div>
        <contextA.Provider value={{countA,setCountA}}>
          <contextB.Provider value={{countB, setCountB}}>
            <ChildA/>
          </contextB.Provider>
        </contextA.Provider>        
      </div>

  )
}

export default App
export {contextA}
export {contextB}
