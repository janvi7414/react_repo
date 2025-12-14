import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {

  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");


  return (
    <div className='flex flex-row justify-between gap-1.5'>
     <input
      placeholder='Enter title'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className='flex flex-row justify-start p-1 w-2/3 rounded-sm'
     />

     <button className=' rounded-sm border w-1/3 font-medium'>
      {/* the text on button depends 
          create my paste -> when user clicks it from home i.e. url "/" and update my paste -> when user clicked it after visiting pastes i.e. list of paste thus url contains let pasteId "localhost:5173/?pasteId=abc" thus we are using searchParams to get the pasteId  */}
          {pasteId ? "Update My Paste" : "Create My Paste"}
     </button>
    </div>
  )
}

export default Home

/*
searchParams = Read-only object to get values from URL query string
setSearchParams =	function that Updates query params and modifies the URL without reload

useSearchParams() in React Router returns an array of two items,
 */
