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
      <p className=' text-7xl m-5 p-3 mt-10 w-300 justify-center items-center text-center text-zinc-100  '>현재 시각 : {CurrentT.toLocaleTimeString('ko-KR')}</p>
    </div>
  )
}
export default CurrentTime;