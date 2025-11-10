import React from 'react'

export default function TailInput({type, name, ref}) {
  return (
    <div>
      <input type={type} name={name} ref={ref} className='bg-white text-black rounded shadow p-3 text-center font-bold'></input>
    </div>
  )
}
