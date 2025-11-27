import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login_button from './components/Login_button'
import Logout_button from './components/Logout_button'

function App() {
  const [isLogged, setLog] = useState(false)



if(!isLogged)
{
  return (
    <Login_button/>
  )
}
//execution stops here if satisfied

return (
  <Logout_button/>
)

  
}

export default App

/*
way1: using if-else
    if(isLogged){
    return (
      <Logout_button/>
    )
    
  }else{
    return (
      <Login_button/>
    )
  }

way2: using ternary operator
   return (
    <div>
    {isLogged? (<Logout_button/>) : (<Login_button/>)}
    </div>
  )

way3: logical operator like AND
  return (
  <div>
      {isLogged && <Logout_button/>}

      {!isLogged && <Login_button/>}
  </div>
 )


 way4: early return i.e. something is returned before checking
  if(!isLogged)
{
  return (
    <Login_button/>
  )
}
//execution stops here if satisfied

return (
  <Logout_button/>
)

*/
