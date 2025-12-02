import React, { useEffect, useState } from 'react'

const MultiUseEffect = () => {

const [count, setCount] = useState(5);
const [seconds, setSeconds] = useState(0);

//useEffect for counter and runs only on first render and when count changes
useEffect(() => {
    console.log("count chaged: ",count);
}, [count]);

//useEffect for seconds runs on first render
useEffect(() =>{


    const intervalId = setInterval(() => {
        console.log("secods started");
        setSeconds(prevSeconds => prevSeconds+1);
    },1000);
    
    return () => {
        console.log("timer stopped");
        clearInterval(intervalId);
    }

}, []);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() =>
        setCount(count+1)}>increment</button>
      <h1>seconds: {seconds}</h1>
    </div>
  )
}

export default MultiUseEffect
