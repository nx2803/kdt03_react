import React from 'react'
import MyDiv2 from './MyDiv2'

export default function MyDiv1() {
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';

  return (
    <div className='text-white md:w-7/10 w-full h-1/2
                    flex flex-col justify-start items-start
                    p-10 text-2xl font-bold bg-cyan-800 border-2 border-dotted border-white'>
      <h1>{d1}</h1>
      <MyDiv2 dv1 ={d1} dv2={d2} dv3={d3}/>
    </div>
  )
}