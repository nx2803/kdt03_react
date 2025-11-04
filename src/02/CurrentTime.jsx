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
      <p className=' text-5xl w-150 m-5 p-3 mt-10 font-extrabold justify-center items-center text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300  '>현재 시각 : {CurrentT.toLocaleTimeString('ko-KR')}</p>
    </div>
  )
}
export default CurrentTime;