import { useState } from 'react';
import React, { useEffect } from 'react';

const Logger = () => {

    const [count,setCount] = useState(10);

    useEffect(() => {
        console.log("component rendered");
    })

    function updateCount(){
        setCount(count+1);
    }


  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={updateCount}>increment</button>
    </div>
  )
}

export default Logger
