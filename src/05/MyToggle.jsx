import React from 'react'
import MyToggleBox from './MyToggleBox'


export default function MyToggle() {
  const colors = ['red', 'blue', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='w-8/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <MyToggleBox color="blue" caption="파란색" />
        <MyToggleBox color="orange" caption="주황색" />
        <MyToggleBox color="lime" caption="라임색" />
      </div>
    </div>

  )
}