import React from 'react'

const BallColor = [
  "border-yellow-400",
  "border-blue-400",
  "border-red-400",
  "border-gray-400",
  "border-green-400"
]
export default function TailBall({n}) {
  
  return (
    <div className= {`rounded-full m-2 border-3 w-20 h-20 font-bold ${BallColor[Math.floor(n/10)]}
     justify-center items-center text-2xl flex text-white`}>
      {n}
    </div>
  )
}
