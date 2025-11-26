import UserCard from "./components/UserCard"
import "./App.css"
import profile1 from './assets/profile1.png'
import profile2 from './assets/profile2.png'
import profile3 from './assets/profile3.png'


function App() {
  
  return (
      <div className="AppDiv">
        <UserCard name="Raj" desc="Hello this is Raj form IND" image={profile1} style={{"border" : "solid yellow 5px"}}/>
        <UserCard name="Suraj" desc="Glad to see you here" image={profile2}/>
        <UserCard name="Shreya" desc="Bonjour commo ca va?" image={profile3}/>

      </div>
  )
}

export default App
