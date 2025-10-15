import React from 'react'
const BTStyle = {
    blue : {
        base : "bg-blue-400",
        hover : "bg-blue-600"
    },
    orange : {
        base : "bg-orange-400",
        hover : "bg-orange-600"
    },
    lime : {
        base : "bg-lime-400",
        hover : "bg-lime-700"
    },
}

export default function TailButton({color, caption, onHandle}) {
    const btstyle = BTStyle[color];
    return (
        <div>
            <button className={`${btstyle.base} rounded text-white hover:${btstyle.hover}  px-5 py-3 hover:font-bold`} onClick={onHandle}>{caption}</button>
        </div>
    )
}
