import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  function expensiveTask(num){
    console.log("inside expensive task");
    //to make it expensive
    for(let i=0; i<=1000000000; ++i){}
    return num*2;
  }

  let doubleValue = useMemo(() => expensiveTask(inputValue),[inputValue]);


  return (
    <div>
      <button onClick={handleClick}>
        Increment
      </button>
      <br/>
      <br/>
      <h2>Count: {count}</h2>
      <br/>
      <br/>
      <h2>Double: {doubleValue}</h2>
      <br/>
      <br/>
      <input
        placeholder='enter value'
        type='number'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

    </div>
  )
}

export default App

/*useMemo is used to memoize results which are obtained by running a function whose result is stored and is given directly without running the function thus saves time 
useMemo(() => fn, [dependencies])
 
expensive tasks are time consuming and memory consuming

usememo remebers the last result if the result to be calculated is for the same input then it is directly used due to useMemo

here when button is clicked it rerenders the whole compoenet thus the expensive task also get rerun thus when the button is clicked multiple times it delays the updation of count on UI as the loop takes time 

here every time the result of expensive task is 8 as the input is always 4


React.memo this prevents rerendering of component
React.memo(Component)
React.memo is used to stop a component from re-rendering when its props do NOT change.

If the parent re-renders, the child will also re-render—even if name is the same.

//code in parent
  function Parent() {
    const [count, setCount] = useState(0);

    return (
      <>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <Child name="John" />
      </>
    );
  }

//code in parent
  const Child = ({ name }) => {
    console.log("Child rendered");
    return <h1>{name}</h1>;
  };

  export default React.memo(Child);


*/