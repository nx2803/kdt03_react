import TailButton from "../components/TailButton"

import JotaiBt from "./JotaiBt";
import { useAtomValue } from "jotai";
import { cntAtom, dbCntAtom } from "./atomsCnt";


export default function JotaiCnt() {
    const cnt = useAtomValue(cntAtom);
    const dbcnt = useAtomValue(dbCntAtom);

    return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="mt-10 text-3xl font-bold text-center">
        전역 상태관리
      </h1>

      <div className="w-full bg-gray-600 
                      flex flex-col justify-start items-center
                      p-4 my-8 text-2xl font-bold">
        <div>
          count : {cnt}
        </div>    
        <div>
          double count : {dbcnt}
        </div>                
      </div>
        <JotaiBt/>
      
    </div>
  )
}