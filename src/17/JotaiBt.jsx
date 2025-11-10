import React from 'react'
import TailButton from '../components/TailButton'
import { useAtom } from 'jotai'
import { cntAtom } from './atomsCnt'
export default function JotaiBt() {
    const [cnt, setCnt] = useAtom(cntAtom);
  return (
    <div className="w-full flex justify-center gap-5">
        <TailButton caption="증가" color="cyan" onClick={()=> setCnt(cnt + 1)} />
        <TailButton caption="감소" color="pink" onClick={()=> setCnt(cnt - 1)} />
    
      </div>
  )
}
