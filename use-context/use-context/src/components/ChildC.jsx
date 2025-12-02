import React, { useCallback, useContext } from 'react'
import { myContext } from '../App';

const ChildC = () => {

    const user = useContext(myContext);

  return (
    <div>
      data: {user.name}
    </div>
  )
}

export default ChildC
