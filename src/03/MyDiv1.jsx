import React from 'react'
import MyDiv2 from './MyDiv2'

export default function MyDiv1() {
    const dname1 = "div1";
    const dname2 = 'div2';
    const dname3 = 'div3';

  return (
    
    <div className='bg-green-800 w-5 h-5' >
    <p>{dname1}</p>    
      <MyDiv2/>
    </div>
  )
}
