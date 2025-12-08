
import './App.css'

function App() {

  return (
   <div>

   </div>
  )
}

export default App

/*
Redux is a state management library used with react it helps to manage "global states" to prevent props(property) drilling 
Think of Redux as a central data store where your app’s state lives.

Terms:
  Action: it wraps event or event+payload it is mandatory to mention it's type
  Reducer: func that takes initial state and an action
  Slice: 
  Dispatch: func to send actions, Dispatch triggers reducers → reducers update state → UI re-renders.
  Provider: makes store available to React
  Store: centeral container for app state
  State: actual data in the store
  Slice: it is like an object(key-value) containing state,reducers, actions,name

  Steps of execution:
    onClick event is triggered-> handleClick() func is executed-> action is dispatched-> goes to the store-> reducer is called for increment-> updates count value in the store-> UI updated 
 */
