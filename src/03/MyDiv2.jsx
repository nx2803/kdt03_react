import React from 'react'
import MyDiv3 from './MyDiv3'

// export default function MyDiv2(props)
export default function MyDiv2({dv1, dv2, dv3}) {
  return (
    <div className='text-white w-9/10  h-9/10
                    flex flex-col m-10 justify-start items-start
                    p-10 text-2xl font-bold bg-cyan-500 border-2 border-dotted border-white'>
      <h1>{dv1} &gt; {dv2}</h1>
    <MyDiv3 dv1={dv1}  dv2={dv2}  dv3={dv3} />
          {/* <h1>{props.dv1} &gt; {props.dv2}</h1>
    <MyDiv3 dv1={props.dv1}  dv2={props.dv2}  dv3={props.dv3} /> */}
    </div>
  )
}
