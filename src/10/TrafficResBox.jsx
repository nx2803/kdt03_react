import React from 'react'

export default function TrafficResBox({ title, res }) {
    return (
        <div className='flex flex-col w-60' >
            <div className='bg-red-700 rounded-t font-bold border-red-700 border-3 ' >
                {title}
            </div>
            <div className='bg-white text-black font-bold border-red-700 border-x-3 border-b-3 rounded-b'>
                {res}
            </div>
        </div>
    )
}
