import React from 'react'
import { useState } from 'react';
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
export default function MyListCard({ title, imgUrl, content }) {
    const [scnt, setscnt] = useState(0);
    const [dcnt, detscnt] = useState(0);
    const handleClick = () => {
        setscnt(scnt + 1);
    }
    const handleClick2 = () => {
        detscnt(dcnt + 1);

    }
    // const title = "HTML";
    // const imgUrl = "./img/html.png";
    // const content = "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
    return (
        <div className='flex flex-row bg-white border-6 border-dashed border-gray-800 '>
            <img src={imgUrl} className='w-40  h-40' />

            <div className='flex flex-col mx-15 mt-6 justify-between'>
                <div>
                    <h1 className='text-5xl font-bold mb-5'>{title}</h1>
                    <p className='text-2xl'>{content}</p>
                </div>
                <div className=' flex flex-row justify-end mt-10 mb-5 text-right text-2xl  font-bold ' >
                    <FaRegThumbsUp className='mr-3 cursor-pointer hover:text-cyan-300 o' onClick={handleClick} /> {scnt}

                    <FaRegThumbsDown className='ml-5 mr-3 cursor-pointer hover:text-red-400 o' onClick={handleClick2} /> {dcnt}
                </div>
            </div>

        </div>
    )
}
