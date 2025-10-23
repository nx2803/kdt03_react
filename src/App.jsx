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
import MyToggle from "./05/MyToggle";
import { RiHome3Line } from "react-icons/ri";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lotto from "./06/Lotto";
import FoodMain from "./07/FoodMain";
import MyEffect from "./08/MyEffect";
import BoxOffice from "./09/BoxOffice";
import Traffic from "./10/Traffic";
import MyRef from "./11/MyRef";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-full flex flex-col overflow-hidden bg-neutral-800 '>
      <Header />
      <div className="w-full  border-y-8 border-double border-red-700 flex justify-center items-center">
        <main className="container mx-auto flex-1 p-4 overflow-x-hidden text-center text-white overflow-y-auto ">
        
          
          <MyClock />
          <BoxOffice/>
          <Traffic/>
        
        </main>
      </div>
      <Footer />

    </div>
  )
}

export default App
