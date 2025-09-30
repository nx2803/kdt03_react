import { FaReact } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import { PiEmptyBold } from "react-icons/pi";


function Hello() {
    let name = 'YUN'

    return (
        <>
        <div className="flex flex-row text-white font-bold text-6xl"> 
            <MdOutlineWavingHand /> &nbsp; {name !='' ? name : <PiEmptyBold/>} &nbsp;<FaReact  className="text-cyan-500"/>
        </div>
        
        </>
    )
}

export default Hello ;
