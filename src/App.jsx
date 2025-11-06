// import { useState } from 'react'
import { FaReact } from "react-icons/fa";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hello from "./01/Hello"
import CurrentTime from "./02/CurrentTime";
import Clock from "./02/Clock";
import MyClock from "./02/MyClock";
import MyDiv1 from "./03/MyDiv1";
import MyListCard from "./04/MyListCard";
import MyList from "./04/MyList";
import MyToggle from "./05/MyToggle";
import { RiHome3Line } from "react-icons/ri";
import Lotto from "./06/Lotto";
import FoodMain from "./07/FoodMain";
import MyEffect from "./08/MyEffect";
import BoxOffice from "./09/BoxOffice";
import Traffic from "./10/Traffic";
import MyRef from "./11/MyRef";
import RefCal from "./12/RefCal";
import Gallary from "./13/Gallary";
import FestGallary from "./14/FestGallary";
import RouteHome from "./15/RouteHome";
import RouteMain from "./15/RouteMain";
import FestivalContents from "./14/FestivalContents";
import ChargeInfo from "./16/ChargeInfo";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter className="flex flex-col justify-between">
      <div className='w-full h-screen  flex flex-col overflow-hidden bg-radial-[at_top_left] from-gray-800 to-neutral-900'>
        <Header />
        <div className="w-full h-screen border-b-2 my-1 border-white/20 flex justify-center items-center">
          <main className="container  mx-auto flex-1 p-4 overflow-x-hidden text-center text-white overflow-y-auto ">
          

            <div className='w-full flex flex-col justify-center items-center'>
              <Routes>
                <Route path='/' element={<MyClock />} />
                <Route path='/Lotto' element={<Lotto />} />
                <Route path='/BoxOffice' element={<BoxOffice />} />
                <Route path='/Traffic' element={<Traffic />} />
                <Route path='/Gallery' element={<Gallary />} />
                <Route path='/Festival' element={<FestGallary />} />
                <Route path='/Festival/contents' element={<FestivalContents />} />
                <Route path='/Charge' element={<ChargeInfo />} />
              </Routes>
            </div>



          </main>
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
