import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

 //create context
  const myContext = createContext();



function App() {
  const [user, setUser] = useState({name: "Charlie"})

 

  return (
    <>
      <div>
        <myContext.Provider value={user}>
          <ChildA/>
        </myContext.Provider>
      </div>
    </>
  )
}

export default App
export { myContext }


/*  step 1: create context using createContex() also export it
    step 2: wrap all the heirachical children in  provider i.e. <"name".Provider></>
    step 3: pass value
    step 4: access the value in consumer child also import the context
    
    */
   /* prop drilling: usually when there are multiple heirachical children to a parent when any deeper child wants to access the data form parent in between nodes need to unncessarily read the data thus useContext helps to  make parent provider and the child consumer only desired child becomes consumer to the data

   React Context provides a way to share data across the component tree without manually passing props down through every level, a practice known as "prop drilling." It is particularly useful for managing "global" state or data that needs to be accessible by many components at different nesting levels, such as themes, user authentication status, or language preferences. 
   
   
   */
