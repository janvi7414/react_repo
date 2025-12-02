import React, { useContext } from 'react'
import { themeContext } from '../App'

const ChildC = () => {

const {theme, setTheme} = useContext(themeContext);
 function handleClick(){
    console.log("toggles");
    if(theme==='light'){
        setTheme('dark')
    }else{
        setTheme('light')
    }
 }

  return (


    <div>
      <button onClick={handleClick}>
        Toggle Theme
      </button>
    </div>
  )
}

export default ChildC
