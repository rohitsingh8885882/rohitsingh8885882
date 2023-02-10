import React, { useState } from 'react'
import './App.css'



export default function App() {
  const firstval = 0;

  function increase(){
    setState(count + 1);
  }

  function decrease(){
    setState(count - 1);
  }

  const [count, setState] = useState(firstval);
  return (
    <main className='main'>
      <div className='body'>
      <h1>{count}</h1>
      <button onClick={decrease} type="button" className="btn btn-success mx-4">-</button>
      <button onClick={increase} type="button" className="btn btn-success">+</button>
      </div>
    </main>
  )
} 