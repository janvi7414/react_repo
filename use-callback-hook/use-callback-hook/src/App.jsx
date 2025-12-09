import { useCallback, useState } from 'react'
import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)

  // function handleClick(){
  //   setCount(count+1)
  // }

  const handleClick = useCallback(
    () => {
      setCount(count+1);
    },[count])

  const secondFunc = () => {
    console.log("child is rerendered only when count updates")
  }

  return (
  <div>
    <button onClick={handleClick}>
      increment
    </button>
    <br/>
    <br/>
    <h2>Count: {count}</h2>
    <br/>
    <br/>
    <Child 
      btnName='Click me' 
      handleClick = {handleClick}
    />
    <br/>
    <br/>
    {/* React.memo, freezing, with count in dep list */}
    <button onClick={secondFunc}>
      click no child rerender
    </button>
  </div>
  )
}

export default App

/*
when we have a child component inside parent component here <App/> count is incremented it rerenders the whole <App/> component thus the child component is also rerendered but we dont want it so we wrap the child component inside React.memo() and this prevents rerendering of the component even if parent rerenders and to do this it should be arrow funciton () => {}

without React.memo() if you click increment button it will rerender <App/> thus child component rendered will print everytime 

thus it is used to prevent unnecessary rerenders but when the props value is changed here btnName it will get rerendered

but this is usefull only if props passed are values and not function so when we are passing even funcitons we need to freeze the function using "useCallback()" with dependency list but this will have initial value of count as 0 (here) always and thus will update it to 1 only everytime so child will get rerendered when either of the buttons are clicked with using React.memo() and func is passed as props

when we are using React.memo() using freezing the handleClick func with dependency list empty it will update to 1 only and the child component is not rerendered ever

when we are using React.memo() using freezing the handleClick func with dependency list having "count" it will update to 1 only and the child component is rerendered when count is updated

with freezing we are preventing rerendering of a func



 */
