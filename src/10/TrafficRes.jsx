import React from 'react'
import TrafficResBox from './TrafficResBox'

export default function TrafficRes({a, k, h, l, r}) {
  return (
    <div className='flex flex-row mt-10 justify-between w-full'>
      {/* <span>사고건수 : {a}</span><span>사망자수 : {k}</span><span>중상자수 : {h}</span><span>경상자수 : {l}</span><span>부상신고자수 : {r}</span> */}
      <TrafficResBox title='사고건수' res={a}/>
      <TrafficResBox title='사망자수' res={k}/>
      <TrafficResBox title='중상자수' res={h}/>
      <TrafficResBox title='경상자수' res={l}/>
      <TrafficResBox title='부상신고자수' res={r}/>
    </div>
  )
}
