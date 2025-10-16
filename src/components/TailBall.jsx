import React from 'react'

const BallColor = [
  "border-yellow-500",
  "border-blue-500",
  "border-red-500",
  "border-black",
  "border-green-500"
]
export default function TailBall({n}) {
  
  return (
    <div className= {`rounded-full m-2 border-2 w-20 h-20 font-bold ${BallColor[Math.floor(n/10)]}
     justify-center items-center text-2xl flex text-white`}>
      {n}
    </div>
  )
}
