import React from 'react'
import time from '../assets/time.png'
import clogif from '../assets/clock.gif'
import { GiTimeDynamite } from "react-icons/gi";
export default function Clock() {
  return (
    <div className='text-center flex justify-center'>
      {/* <GiTimeDynamite className='w-100 h-100 font-bold text-white m-7'/> */}
      <img src={clogif} className='w-100 h-100'/>
    </div>
  )
}
