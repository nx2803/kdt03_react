import React from 'react'
import busan from '../assets/busan.png'
export default function TailCard() {
    return (
        <div className='bg-white text-neutral-800 flex flex-col rounded'>
            <img className='rounded-t'src={busan}></img>
            <div className=' text-start p-5'>
                <p>카드카드카드카드</p>
                <p>카드카드에용</p>
            </div>

        </div>
    )
}
