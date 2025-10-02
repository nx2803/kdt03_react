// import { useState } from 'react'
import { FaReact } from "react-icons/fa";
import './App.css'
import Hello from "./01/Hello"
import CurrentTime from "./02/CurrentTime";
import Clock from "./02/Clock";
import MyClock from "./02/MyClock";
import MyDiv1 from "./03/MyDiv1";
import MyListCard from "./04/MyListCard";
import MyList from "./04/MyList";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-full lg:h-screen flex flex-col bg-gray-800 justify-center items-center py-10 border-dotted border-4 border-white'>
      {/* <Hello/>
      <MyClock/> */}
    {/* <MyDiv1/> */}
        <MyList/>
     
    </div>
  )
}

export default App
