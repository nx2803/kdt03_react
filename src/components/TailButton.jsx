import React from 'react'
const BTStyle = {
    blue : {
        base : "bg-blue-400",
        hover : "bg-blue-600",
        text : "text-white"
    },
    orange : {
        base : "bg-orange-400",
        hover : "bg-orange-600",
        text : "text-white"
    },
    lime : {
        base : "bg-lime-400",
        hover : "bg-lime-700",
        text : "text-white"
    },
    white : {
        base : "bg-white",
        hover : "bg-gray-400",
        text : "text-black"
    }
}

export default function TailButton({color, caption, onClick}) {
    const btstyle = BTStyle[color];
    return (
        <div>
            <button className={`${btstyle.base} rounded ${btstyle.text}hover:${btstyle.hover} px-5 py-3 hover:font-bold `} onClick={onClick}>{caption}</button>
        </div>
    )
}
