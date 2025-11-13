import React, { useEffect, useState } from 'react'

export default function TailSelect({ id, title, ref, opk, opv, handleChange, disabled, className}) {

    return (
        <div className={`flex flex-col justify-center items-center bg-zinc-700 rounded text-white shadow-2xl ${className}`}>
            <label htmlFor={title} className='h-10  flex justify-center items-center'>
            {title}
            </label>
            <select label={id} className={`bg-zinc-700 text-white w-full h-10 rounded-b border-t-1 border-gray-400/50 text-center appearance-none `} onChange={handleChange} disabled={disabled} ref={ref}>
               <option value=""> - </option>
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
