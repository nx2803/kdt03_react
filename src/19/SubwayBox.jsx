import React from 'react'

export default function SubwayBox({ tdata }) {
  const formatDay = (control) => {
        if (!control || control.length < 10) {
            return control || ""; 
        }
        const year = control.substring(0, 4);    
        const month = control.substring(4, 6);   
        const day = control.substring(6, 8);     
        const hour = control.substring(8, 10);   
        return `${year}년 ${month}월 ${day}일 ${hour}시`;
    };
  return (
    <div className='text-white'>
      <h1 className='text-2xl text-start mb-3'>
        {tdata.site} {tdata.city} (시각 : {formatDay(tdata.controlnumber)})
      </h1>
      <div className='flex flex-rows gap-5 mb-10'>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700 '>미세먼지</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(pm10)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.pm10}㎍/㎥</div>
        </div>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700'>이산화탄소</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(co2)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.co2}ppm</div>
        </div>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700'>일산화탄소</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(co)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.co}ppm</div>
        </div>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700'>이산화질소</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(no2)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.no2}ppm</div>
        </div>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700'>일산화질소</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(no)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.no}ppm</div>
        </div>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700'>질소산화물</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(nox)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.nox}ppm</div>
        </div>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700'>오존</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(o3)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.o3}ppm</div>
        </div>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700'>초미세먼지</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(pm25)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.pm25}㎍/㎥</div>
        </div>
        
        <div className='flex flex-col justify-center w-35 rounded items-center'>
          <div className='rounded-t w-full px-2 pt-1 bg-zinc-700'>폼알데하이드</div>
          <div className='w-full px-2 pb-1 bg-zinc-700'>(fad)</div>
          <div className='bg-white text-black w-full px-2 py-1 rounded-b'>{tdata.fad}㎍/㎥</div>
        </div>
        
      </div>
    </div>
  )
}