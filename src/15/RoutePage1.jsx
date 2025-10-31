import React from 'react'
import { useParams } from 'react-router-dom'
export default function RoutePage1() {
    const {item1, item2} = useParams();

  return (
    <div>
      {item1} {item2}
    </div>
  )
}
