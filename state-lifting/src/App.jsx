import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'


function App() {
  const [value, setValue] = useState('');

  return (
      <div>
       <Card setValue={setValue} value={value}/>
       <Card2 setValue={setValue} value={value}/>
       <p>Value inside Parent is = {value}</p>
    </div>
  )
}

export default App

/*
state lifting is used to transfer the state or memory from child to the
parent so that other siblings can access the same

syntax:
function ChildA() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

function ChildB({ value }) {
  return <p>{value}</p>;
}
*/