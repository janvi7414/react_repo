import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');


  return (
    <themeContext.Provider value={{theme,setTheme}}>
      {/* passing multiple values {} */}
      <div className="container" style={{backgroundColor: theme==='light'?("beige"):("grey")}}>
        <ChildA/>
      </div>
    </themeContext.Provider>


  )
}

export default App
export {themeContext}

/*useContext is a React Hook that lets you access context values without needing to pass props down manually through multiple component levels.

What is Context?
Context is React’s way to share data across many components without prop drilling. */