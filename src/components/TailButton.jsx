import React from 'react'
const BTStyle = {
    blue: {
        base: "bg-blue-400",
        hover: "bg-blue-600",
        text: "text-white"
    },
    orange: {
        base: "bg-orange-400",
        hover: "bg-orange-600",
        text: "text-white"
    },
    lime: {
        base: "bg-lime-400",
        hover: "bg-lime-700",
        text: "text-white"
    },
    white: {
        base: "bg-white",
        hover: "bg-neutral-400",
        text: "text-black"
    },
    gray: {
        base: "bg-neutral-500",
        hover: "bg-neutral-500",
        text: "text-white"
    },
    cyan: {
        base: "bg-[#39b4ca]",
        hover: "bg-cyan-700",
        text: "text-white"
    },
    red: {
        base: "bg-red-700",
        hover: "bg-red-800",
        text: "text-white"
    }
}

export default function TailButton({ color, caption, onClick }) {
    const btstyle = BTStyle[color];
    return (
        <div>
            <button className={`${btstyle.base} rounded ${btstyle.text} hover:${btstyle.hover} px-5 py-3 cursor-pointer hover:scale-115 transition-all  duration-100 ease-in-out `} onClick={onClick}>{caption}</button>
        </div>
    )
}
