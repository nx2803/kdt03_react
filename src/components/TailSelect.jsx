import React, { useEffect, useState } from 'react'

export default function TailSelect({ id, title, opk, opv}) {

    return (
        <div className='flex flex-col justify-center items-center bg-white rounded text-black'>
            <label htmlFor={title} className='my-1  flex justify-center items-center'>
            {title}
            </label>
            <select label={id} className='bg-white text-black w-50 h-10 rounded-b border-t-1 border-gray-400/50'>
               <option value="">{title}을 선택하세요.</option>
               {
                opk.map((op, idx) => 
                    <option key={op} value={op}>
                        {opv[idx]}
                    </option>
                )
               }
            </select>
        </div>
    )
}
