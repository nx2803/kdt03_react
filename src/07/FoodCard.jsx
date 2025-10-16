import React from 'react'
import busan from '../assets/busan.png'
import market from '../assets/market.png'
import bank from '../assets/bank.png'
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa6";
import { useState } from 'react'

export default function FoodCard({title, juche, location, gub, phone, fax}) {
const [isActive, setIsActive] = useState(true);

    // 2. handleClick 함수: 클릭 시 상태를 반전시킨다.
    const handleClick = () => {
        // 배경을 제거하고 싶다면, false로 명시적으로 설정해도 된다.
        setIsActive(prev => !prev); 
    };
    const bgColor = isActive ? 'bg-white' : 'bg-transparent';
  return (
    <div className='border-3 border-dashed border-white text-white flex flex-row'>
      <img src={gub == "광역지원센터" ? busan : gub == "기초푸드뱅크" ? bank : market }/>
      <div className='w-3/4 flex flex-col mx-6 mt-6 justify-between gap-y-1'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <h1 className='text-2xl font-bold'>{juche}</h1>
        <p>{location}</p>
        <div className={`flex flex-row h-10 mt-6 mb-4 gap-x-2 items-center shadow ${bgColor}`} onClick={handleClick}>
          
        {!isActive && (
                        // 요소들이 사라질 때, Fragment(<>)로 묶여 있어 깔끔하다.
                        <>
                            <FaPhone />
                            <p>{phone}</p>
                            <FaFax />
                            <p>{fax}</p>
                        </>
                    )}
          
        </div>
      </div>

    </div>
  )
}
