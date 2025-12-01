import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Timer(){

    const [seconds,setSeconds] = useState(0);

    //this starts as soon as page renders
    //timmer will stop when you manually deletes this component from app.jsx

    useEffect(() => {
        const intervalId =  setInterval(() => {
            console.log("setInterval executed");
            setSeconds(prevSeconds => prevSeconds+1);
        },1000);

        return () => {
            console.log("cleared");
            clearInterval(intervalId);
        }
    },[]);
    //this runs on first render only

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  );
}

export default Timer
