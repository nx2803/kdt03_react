import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function RoutePage2() {
    const [Params] = useSearchParams();
    
  return (
    <div>
      RoutePage2 {`${Params.get("item1")} ${Params.get("item2")}`}
    </div>
  )
}
