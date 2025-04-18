import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white");
  

  return (
    <>
    <div
      className="w-full h-screen duration-200 relative"
      style={{ backgroundColor: color }}
    >
        <div className='fixed flex flex-wrap justify-center bottom-12 text-black inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
            <button 
            onClick={()=>{setColor("red")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "red"}}
            >Red</button>
            <button 
            onClick={()=>{setColor("green")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Green"}}
            >Green</button>
            <button 
            onClick={()=>{setColor("blue")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "blue"}}
            >Blue</button>
            <button 
            onClick={()=>{setColor("yellow")}}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "yellow"}}
            >Yellow</button>
            <button 
            onClick={()=>{setColor("black")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "black"}}
            >Black</button>
            <button 
            onClick={()=>{setColor("gray")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "gray"}}
            >Gray</button>
            <button 
            onClick={()=>{setColor("pink")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "pink"}}
            >Pink</button>
            <button 
            onClick={()=>{setColor("lavender")}}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "lavender"}}
            >Lavender</button>
            <button 
            onClick={()=>{setColor("olive")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "olive"}}
            >Olive</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
