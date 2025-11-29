import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total,setTotal] = useState(10);

  //variation 1: runs on every render
  // useEffect(() => {
  //   alert("runs on every render");
  //   //this will run twice due to <StrictMode/> in main.jsx
  // })


  //variation 2: runs on first render only
  // useEffect(() => {
  //   alert("this will run on first render only");
  //   //here empty dependencies list is passed
  // }, [] )


  // variation 3: runs every time when there is update in one of the dependencies passed

  // useEffect(() => {
  //   alert("this will run on first render and whereever the count updates");
  //   //it is not applied on updation of total var
  //   //it also runs for initial value set for the count

  // },[count])


  //variation 4: runs for multiple dependencies
  //   useEffect(() => {
  //   alert("this will run on first render and whereever the count/total updates");
  // },[count,total])

  //variation 5: adding cleanup function
  useEffect(() => {
    
    //this runs before the value of count is updated 
    alert("this will run for first render and also when count is updated")
    
    return () => {
      //this runs when the current value of count is cleared
      alert("count is unmounted from UI");
    }
  }, [count])


  function handleClick(){
    setCount(count+1);
  }

  function handleTotal(){
    setTotal(total+1);
  }

  return (
  <div>
    <button onClick={handleClick}>
      update count
    </button>
    <p>Count is: {count}</p>
        <button onClick={handleTotal}>
      update total
    </button>
    <p>Total is: {total}</p>
  </div>

  )
}


export default App

/*
P
useEffect is used to run a side ieffect (any function) when there is any change or the page renders
 
The useEffect Hook takes two arguments:
1. A function that contains the side effect code.
2. function for cleanup (optional) i.e. when something is to be cleared to update it 
3. An optional dependency array that specifies when the effect should re-run.



*/
