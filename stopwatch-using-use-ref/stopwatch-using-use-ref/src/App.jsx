import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  function handleStart(){
    //setInterval returns an object whose value is needed to be presisted in order to update it everysecond thus is it stored in timerRef.current
    //setInterval rerenders the component

    //to prevent setInterval every time without deleting earlier created
    if(timerRef.current == null){
      timerRef.current = setInterval(() => {
        setSeconds(seconds => seconds+1);
      },1000)
    }else{
      return;
    }

  }
  function handleStop(){
    //this stops interval from running again
    clearInterval(timerRef.current);
    //this doesnot forgets or resets the react state value does not delete variables also does not cause rerender
    timerRef.current = null;
  }
  function handleReset(){
    handleStop();
    setSeconds(0);
  }

  return (
   <div>
    <h1>stopwatch: {seconds} seonds</h1>
    <br/>
    <button onClick={handleStart}>Start</button>
    <br/>
    <br/>
    <button onClick={handleStop}>Stop</button>
    <br/>
    <br/>
    <button onClick={handleReset}>Reset</button>
   </div>
  )
}

export default App
