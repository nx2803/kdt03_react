import React from 'react'

export default function TrafficResBox({ title, res }) {
    return (
        <div className='flex flex-col w-60' >
            <div className='bg-linear-65 mx-3 from-cyan-500/90 to-pink-400/90 rounded-t font-bold  ' >
                {title}
            </div>
            <div className='bg-white mx-3 text-black font-bold rounded-b'>
                {res}
            </div>
        </div>
    )
}
