import React from 'react'

const Child = React.memo(
    (props) => {

    console.log("child component rendered");
    
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.btnName}
      </button>
    </div>
  )
}
)

export default Child
