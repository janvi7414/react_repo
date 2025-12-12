
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset, incrementByAmount} from './features/counter/counterSlice';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);

  //fetching var from state
   const count = useSelector((state) => state.counter.value);
   //to dispatch
   const dispatch = useDispatch();

  function handleInc(){
    dispatch(increment())
  }
  function handleDec(){
    dispatch(decrement());
  }
  function handleRst(){
    dispatch(reset());
  }
  function handleAmtInc(){
    dispatch(incrementByAmount(amount));
  }

  return (
   <div className='container'>
    <button onClick={handleInc}>+</button>
    <h2>Count: {count}</h2>
    <button onClick={handleDec}>-</button>
    <br/>
    <br/>
    <button onClick={handleRst}>reset</button>
    <br/>
    <br/>
    <input
      placeholder='Enter amount'
      type='Number'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      />
    <br/>
    <br/>
    <button onClick={handleAmtInc}>Inc by Amt</button>
   </div>
    
  )
}

export default App

/*
Redux is a state management library used with react it helps to manage "global states" to prevent props(property) drilling 
Think of Redux as a central data store where your app’s state lives.

Terms:
  Action: it wraps event or event+payload it is mandatory to mention it's type
  Reducer: func that takes current state and an action and gives next state
  Dispatch: func to send actions, Dispatch triggers reducers → reducers update state → UI re-renders.
  Provider: makes store available to React
  Store: centeral container for app state
  State: actual data in the store
  Slice: it is like an object(key-value) containing state, reducers, actions, name

  Steps of execution:
    onClick event is triggered-> handleClick() func is executed-> action is dispatched-> goes to the store-> reducer is called for increment-> updates count value in the store-> UI updated 

    using terminal
    "npm install @reduxjs/toolkit"

    "npm install react-redux"
 */
