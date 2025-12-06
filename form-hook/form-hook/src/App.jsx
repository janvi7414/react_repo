import React from 'react'
import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  
const { 
  register,
  handleSubmit,
  watch,
  formState: {errors},

} = useForm();

function submitFunction(data){
  console.log("form submitted..!", data);
}

  return (
    <div>
      <form onSubmit={handleSubmit(submitFunction)}>
        <div>
          <label htmlFor="first-Name">First Name: </label>
          <input id="first-Name" {...register("firstName")}/>
        </div>
        <div>
          <label htmlFor="middleName">Middle Name: </label>
          <input id="middleName" {...register("middleName")}/>
        </div>
        <div>
          <label htmlFor="lastNane">Last Name: </label>
          <input id="lastName" {...register("lastName")}/>
        </div>
        <button>
          submit
        </button>
      </form>
    </div>
  
  )
}

export default App

/*
  <input {...register("email")} />   -> returns a JavaScript object containing several properties that React Hook Form needs to control the input. 
  
  js object -> key:value paired datatype in js

  using react form hook we can set 

    <input
      onChange={fn}
      onBlur={fn}
      name="email"
      ref={fn}
    />


    The spread operator (...) takes the contents of an object and “spreads” its key–value pairs into another place.

      const props = {
          name: "email",
          required: true
        };

        INSTEAD OF:

        <input name="email" required={true} />

        USE:

        <input {...props} />


        To pass other functions:
        <input
            {...register("email")}
                onChange={(event) => {
                register("email").onChange(event);
                console.log("My custom change!");
            }}
        />


handleSubmit does:
  It wraps your submit function and makes React Hook Form:
    gather all form values
    run validation
    check errors
    only call your function if everything is valid

in html
  <form onSubmit={mySubmitFunction}>

in react form hook
  <form onSubmit={handleSubmit(mySubmitFunction)}>

  RHF → Validates form → If OK → Calls your function



  const {
  register: function,
  handleSubmit: function,
  watch: function,
  reset: function,
  formState: { ... },
  ...more
}

  Call useForm()

Take only the properties named register and handleSubmit from the returned object

Save them as local variables
same as:
  const formFunctions = useForm();
  const register = formFunctions.register;
  const handleSubmit = formFunctions.handleSubmit;

  "register" used to connect input elements to React Hook Form.

  */
