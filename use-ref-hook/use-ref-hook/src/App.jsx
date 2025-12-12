import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let value = 1;
  let value2 = useRef(1);
  //creating a ref usign useRef;
  let btn = useRef();

  function handleClick(){
    setCount(count+1);
  }

  function changeColor(){
    btn.current.style.backgroundColor = "red";
  }

  useEffect(()=>{
    //runs on every render
    console.log("new render");
    //it will be set to initial value for every rerender
    value=value+1;
    console.log("value: ",value);
    //value2 persists it's value independent of rerender and updation in it's value does not lead to rerender
    value2.current = value2.current+1;
    console.log("value2: ",value2.current);

  })

  return (
   <div>
    <button  ref={btn} onClick={handleClick}>Increment</button>
    <h2>Count: {count}</h2>
    {/* linking the ref */}
    <button onClick={changeColor}>
      change color of above button
    </button>
   </div>
  )
}

export default App

/*useRef has uses
  a.  when a var is defined as usual inside useState it does not remember it's past value as page rerenders this is solved in useRef that is page does not rerender on updation of useref value

  b. allows to access any element from the DOM without useQuery, etc using create reference using useRef and then link it with an element


  useRef returns an object with it's value stored in current field i.e. value.current

  forward Ref : allows a parent component to directly access a child’s DOM element.

  //code in parent
    import { useRef } from "react";
    import InputBox from "./InputBox";

    function App() {
      const inputRef = useRef();

      const handleFocus = () => {
        inputRef.current.focus();
      };

      return (
        <>
          <InputBox ref={inputRef} />
          <button onClick={handleFocus}>Focus Input</button>
        </>
      );
    }



  //code in child component InputBox.jsx
  import React, { forwardRef } from "react";

    const InputBox = forwardRef((props, ref) => {
      return <input ref={ref} type="text" />;
    });

    export default InputBox;

  */
