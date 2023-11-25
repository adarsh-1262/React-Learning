import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // let counter = 0;

  let [Counter, setCounter] = useState(0);

  const addValue = () => {
    // Counter = Counter + 1;
    
    setCounter(Counter + 1);

  }

  const removeValue = () => {
    setCounter(Counter - 1);
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: {Counter}</h2>

     <button
     onClick={addValue}
     >Add Value  {Counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove Value  { Counter}</button>
     <p>footer:  {Counter}</p>
    </>
  )
}

export default App
