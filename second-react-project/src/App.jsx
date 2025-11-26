import UserCard from "./components/UserCard"
import "./App.css"


function App() {
  
  return (
      <div className="AppDiv">
        <UserCard name="Name1" desc="desc1" />
        <UserCard name="Name2" desc="desc2"/>
        <UserCard name="Name3" desc="desc3"/>

      </div>
  )
}

export default App
