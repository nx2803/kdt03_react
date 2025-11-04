import React from 'react'
import TailSelect from '../components/TailSelect'
import zcode from "./zcode.json"
import zscode from "./zscode.json"
import kind from "./kind.json"
import kinddetail from "./kinddetail.json"
import TailButton from '../components/TailButton'

export default function ChargeInfo() {
    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className='mb-20 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300 font-bold '>전기차 충전소 정보</h1>
            <div className='flex flex-row justify-start items-center gap-5'>
                <TailSelect id="sel1" title="시도" opk={Object.keys(zcode)} opv={Object.values(zcode)}/>
                {/* <TailSelect id="sel2" title="지역동" opk={Object.keys(zscode)} opv={Object.values(zscode)}/> */}
                <TailSelect id="sel3" title="충전소구분" opk={Object.keys(kind)} opv={Object.values(kind)}/>
                {/* <TailSelect id="sel4" title="충전소상세" opk={Object.keys(kinddetail)} opv={Object.values(kinddetail)}/> */}
                <TailButton color='bp' caption="검색" onClick={{}}/>
                <TailButton color='white' caption="취소" onClick={{}}/>
            </div>

        </div>
    )
}
