import React from 'react'
import TailButton from '../components/TailButton'
import { useState } from 'react';
const BOXStyle = {
      blue : {
        on : "bg-blue-200",
        off : "border-dotted border-2 border-blue-200"
    },
    orange : {
        on : "bg-orange-200",
        off : "border-dotted border-2 border-orange-200"
    },
    lime : {
        on : "bg-lime-200",
        off : "border-dotted border-2 border-lime-200"
    },
}
export default function MyToggleBox({color, caption}) {
const boxstyle = BOXStyle[color];
const [isActive, setisActive] = useState(false);

const handleClick = () => {
 setisActive(prev => !prev);
}

  return (
    <div className={` w-full h-60 flex flex-col justify-center items-center text-white font-bold rounded  ${isActive ? boxstyle.on : boxstyle.off}`}>
      <h1 className={`text-3xl ${isActive ? 'text-black' : 'text-white'}`}>ToggleBox</h1>
      
      <TailButton color={color} caption = {caption} onClick={handleClick}/>
      <p className={`text-sm ${isActive ? 'text-black' : 'text-white'}`}>현재 상태 : {isActive ? 'on' : 'off'}</p>
    </div>
  )
}