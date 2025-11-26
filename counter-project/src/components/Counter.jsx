import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count,setCount] = useState(0);
    //here useState give two things 1. var 2. func 
    // here intial value of var count is set 0
  return (
   <div className='container'>
       <p className='text'>You've clicked button {count} times</p>
       <button className='btn' onClick={()=>{ setCount(count+1) } } >Click me</button>
    </div>
  )

  //here onClick func is used to update the state
}//to change the value of count var wer use setCount(value)

export default Counter


/*
Hook: it is used to use the functionalities provided by jsx 
for e.g. useState is one of the functionalities used to 
manage states 
*/
