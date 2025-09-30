// import { useState } from 'react'
import { FaReact } from "react-icons/fa";
import './App.css'
import Hello from "./01/Hello"
import CurrentTime from "./02/CurrentTime";
import Clock from "./02/Clock";
import MyClock from "./02/MyClock";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-col bg-gray-800 justify-center items-center py-10 border-dotted border-4 border-white'>
      <Hello/>
      <MyClock/>
    </div>
  )
}

export default App
