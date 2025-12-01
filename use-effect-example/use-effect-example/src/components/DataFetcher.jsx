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
