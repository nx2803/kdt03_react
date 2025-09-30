import React from 'react'

function CurrentTime() {
    const time = new Date;
  return (
    <div>
      <p className='text-gray-800 text-4xl m-5 p-3 font-extrabold bg-white rounded-2xl'>현재 시각 : {time.toLocaleTimeString()}</p>
    </div>
  )
}
export default CurrentTime;