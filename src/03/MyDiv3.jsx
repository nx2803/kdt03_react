import React from 'react'
// export default function MyDiv3(props)
export default function MyDiv3({dv1, dv2, dv3}) {
  return (
    <div className='text-white w-9/10  h-9/10
                    flex flex-col m-10 justify-start items-start
                    p-10 text-2xl font-bold bg-cyan-300 border-2 border-dotted border-white'>
      {/* <h1>{props.dv1} &gt; {props.dv2} &gt; {props.dv3}</h1> */}
      <h1>{dv1} &gt; {dv2} &gt; {dv3}</h1>

    </div>
  )
}
