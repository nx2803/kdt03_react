import React from 'react'

export default function TrafficResBox({ title, res }) {
    return (
        <div className='flex flex-col w-60' >
            <div className='bg-neutral-700 mx-3 rounded-t font-bold  ' >
                {title}
            </div>
            <div className='bg-white mx-3 text-black font-bold rounded-b'>
                {res}
            </div>
        </div>
    )
}
