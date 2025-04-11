import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    console.log("value added",counter);
    counter=counter+1
    setCounter(counter)
  }
  const removeValue = () => {
    if(counter > 0){
    console.log("value removed",counter);
    setCounter(counter-1)}
    else{
      console.log("counter cant go less then zero");
      
      
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
