import React, { useEffect, useState } from 'react'


function CurrentTime() {
  const [CurrentT, setCurrentT] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentT(new Date());
    }, 1000);
  });
  
  return (

    <div className=' flex justify-center items-center'>
      <p className='text-gray-800 text-4xl w-150 m-5 p-3 font-extrabold justify-center items-center text-center bg-white border-7 border-double '>현재 시각 : {CurrentT.toLocaleTimeString('ko-KR')}</p>
    </div>
  )
}
export default CurrentTime;