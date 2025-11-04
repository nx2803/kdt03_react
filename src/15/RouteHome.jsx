import React from 'react'
import TailButton from '../components/TailButton'
import { useNavigate } from 'react-router-dom'

export default function RouteHome() {
   const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='flex'>
        <TailButton color="bp" caption="페이지" onClick={()=>{navigate('/p1')}}></TailButton>

      </div>
    </div>
  )
}
