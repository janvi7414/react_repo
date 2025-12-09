import { useCallback, useEffect, useEffectEvent, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const previousFunction = useRef();

  function handleClick(){

    setCount(count+1)
  }

  const expensiveCalculation = useCallback(
    () => {
    console.log("running expensive func");
    let result =0;
    for(let i=0;i<1000000;++i){
      result+=i;
    }
    return result;
  },[count])

  useEffect(()=>{
    if(previousFunction.current){
      if(previousFunction.current === expensiveCalculation){
        console.log("function not recreated");
      }else{
        console.log("function got recreated");
      }
    }else{
        previousFunction.current = expensiveCalculation;
      }
  }, [expensiveCalculation])

  return (
    <div>
      <input
        placeholder='enter text'
        value={text}
        type='text'
        onChange={ (e)=>{
          setText(e.target.value)
        }}
      />
      <br/>
      <br/>
      <h2>Count: {count}</h2>
      <br/>
      <br/>
      <h2>Expensive result: {expensiveCalculation()}</h2>
      <br/>
      <br/>
      <button onClick={handleClick}>
        Increment
      </button>


    </div>
  )
}

export default App

/*React.memo prevent funciton from recreating whereas it is run everytime i.e. func is not prevented form running 

usecallback prevent recreation of that func when rerendered but here it is run

when no React.memo or callback is used expensive calculation is run either when input text is add or button is clicked

with passing count in callback we are running expensive fun only when count updates and not when input field is updated and also useEffect is used thus func is recreated only when the count is updated and not when input text is added but expensive calculation is run always*/
