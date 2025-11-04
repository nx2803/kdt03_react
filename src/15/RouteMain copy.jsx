import React from 'react'
import RouteHome from './RouteHome'
import RouteNav from './RouteNav'
import RoutePage1 from './RoutePage1'
import RoutePage2 from './RoutePage2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyClock from '../02/MyClock'
import Lotto from '../06/Lotto'
import BoxOffice from '../09/BoxOffice'
import Gallary from '../13/Gallary'
import FestGallary from '../14/FestGallary'

export default function RouteMain() {
  return (
    <BrowserRouter>
      <div className='w-full flex flex-col justify-center items-center'>
        <RouteNav />
        <Routes>
          <Route path='/MyClock' element={<MyClock />} />
          <Route path='/Lotto/:item1/:item2' element={<Lotto />} />
          <Route path='/BoxOffice' element={<BoxOffice />} />
          <Route path='/Gallery' element={<Gallary />} />
          <Route path='/Festival' element={<FestGallary />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}
