import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPasteArr } from '../redux/pasteSlice';

const Paste = () => {

  const pasteArr = useSelector((state) => state.paste.pasteArr);

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filteredData = pasteArr.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(removeFromPasteArr(pasteId));
  }


  return (
    <div>
      <input
        className='w-2/3 border p-1 rounded-sm pl-2 focus:border-2'
        type='search'
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='mt-4 p-2 rounded-sm border bg-gray-200'>
          {
            filteredData.length >0 && filteredData.map(
              (paste) =>{
                return (
                  <div className='border mt-8 p-2 rounded-b-sm bg-white m-2'>
                    <div>
                      {paste.title}
                    </div>
                    <div>
                      {paste.content}
                    </div>
                    <div className='buttonDiv flex flex-row justify-evenly m-4'>
                      <button className='pl-4 pr-4 focus:border-2 border '>
                        Edit
                      </button>
                      <button className='pl-4 pr-4 focus:border-2 border '>
                        View
                      </button>
                      <button className='pl-4 pr-4 focus:border-2 border ' onClick={() => handleDelete(paste?._id)}>
                        Delete
                      </button>
                      <button className='pl-4 pr-4 focus:border-2 border '>
                        Copy
                      </button>
                      <button className='pl-4 pr-4 focus:border-2 border '>
                        Share
                      </button>

                    </div>
                  </div>
                )
                 
              }
            )
          }
      </div>
    </div>
  )
}

export default Paste
