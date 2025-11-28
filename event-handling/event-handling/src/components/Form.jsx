import React from 'react'
import "./Form.css"

const Form = () => {

    function submitFunction(e){
        e.preventDefault();
        alert("do you want to submit");
    }

    function changeFunction(e){
        console.log("change on input field is: ", e.target.value);
    }

  return (
    <div>
        <form onSubmit={submitFunction}>
            <input type="text" onChange={changeFunction}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
