import React, { useContext } from 'react'
import { contextA, contextB } from '../App'

const ChildC = () => {

const {countA, setCountA} = useContext(contextA);
const {countB, setCountB} = useContext(contextB);

function incrementA(){
  setCountA(countA+1)
  incrementB();
}
function incrementB(){
  setCountB(countB+1)
}

  return (
    <div>
      <h1>count A: {countA}</h1>
      <button onClick={incrementA}>Increment A</button>
      <h1>count B: {countB}</h1>
      <button onClick={incrementB}>Increment B</button>
    </div>
  )
}

export default ChildC

//if A increase B increases by 1 and B increases independently

