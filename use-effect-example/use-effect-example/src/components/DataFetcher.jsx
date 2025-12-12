import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const DataFetcher = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then (data => {
        setData(data);
        setLoading(false);
      }
      )

    }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading..!</h2>
      ) : (
        <ul>
          {/* here post is the parameter and arrow func is written in shortform as there is single parameter also return is not used */}
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      )
      }
    </div>
  )
}

export default DataFetcher

//to make loading visible set the network to lower version 

/*Code      Part	Why Used?	    Datatype
  fetch()	  ---	Function --- returning a Promise
  .then()	--- Handle Promise result	--- Method that takes a function
  response => ...	--- Small callback function	--- Function
  response.json()	--- Convert to JSON	--- Promise
  data => {...}	--- Handle JSON	--- Function
  setData(data)	--- Save API data	--- Function call
  setLoading(false)	--- Stop loading	--- Function call
  false	--- Boolean value	--- Boolean


  JavaScript lets you create functions in 3 main ways:
    function myFunc() {},
    const myFunc = function() {},
    const myFunc = () => {}.

    map() is a method used on arrays
          array.map((item, index) => {
      // return something
    });

    item = current element
    index = (optional) position of element

    ✔ map() always returns a new array
    ✔ Original array stays the same
    ✔ You must return something inside map
    ✔ In React, each mapped element needs a key

    | Feature            | Normal Function       | Arrow Function              |
| ------------------ | --------------------- | --------------------------- |
| Syntax             | Longer                | Shorter                     |
| Own `this`         | ✔ Yes                 | ❌ No                        |
| Can be constructor | ✔ Yes                 | ❌ No                        |
| Has `arguments`    | ✔ Yes                 | ❌ No                        |
| Hoisted            | ✔ Yes                 | ❌ No                        |
| Best for           | Methods, constructors | Callbacks, React components |

  
    */
