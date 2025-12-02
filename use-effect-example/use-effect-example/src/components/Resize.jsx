import React, { useEffect, useState } from 'react'

const Resize = () => {

    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        console.log("Event listener added");

        function handleWidth(){
            setWindowWidth(window.innerWidth);
        }

        //this event listener will run every time width changes but the useEffect will run only on first render only

        window.addEventListener('resize', handleWidth);

        return () =>{
            console.log("removed");
            window.removeEventListener('resize', handleWidth);
        }

    }, [])

  return (
    <div>
      <h1>Window Width is: {windowWidth} px</h1>
    </div>
  )
}

export default Resize
