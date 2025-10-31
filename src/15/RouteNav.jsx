import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RouteNav() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/p2/수박/망고");
    }
  return (
    <div  className='w-full h-40 flex justify-center items-center space-x-20 text-2xl font-bold'>
      <Link to="/" className='bg-gray-700/80 hover:bg-linear-65 from-cyan-500/80 to-pink-400/80 rounded  py-2 w-40 cursor-pointer'>
      
        홈
      </Link>
      <Link to="/p1/사과/바나나" className='bg-gray-700/80 hover:bg-linear-65 from-cyan-500/80 to-pink-400/80 rounded w-40 py-2 cursor-pointer'>
        페이지1
      </Link>
      <Link to="/p2?item1=수박&item2=망고" className='bg-gray-700/80 hover:bg-linear-65 from-cyan-500/80 to-pink-400/80 rounded  py-2  w-40 cursor-pointer' >
        페이지2
      </Link>
    </div>
  )
}
