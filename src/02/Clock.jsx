import React from 'react'
import time from '../assets/time.png'
import { GiTimeDynamite } from "react-icons/gi";
export default function Clock() {
  return (
    <div className='text-center flex justify-center'>
      <GiTimeDynamite className='w-100 h-100 font-bold text-white m-7'/>
      {/* <img src={time} className='w-100 h-100'/> */}
    </div>
  )
}
