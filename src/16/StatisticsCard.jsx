import React from 'react';

const getStatColorClass = (title) => {
    switch (title) {
        case "총 충전소 수":
            return 'bg-gradient-to-tl from-neutral-900 to-white/30 border-white';
        case "통신 이상":
            return 'bg-gradient-to-tl from-neutral-900 to-gray-500/30 border-gray-500';
        case "충전 가능":
            return 'bg-gradient-to-tl from-neutral-900 to-green-500/30 border-green-500';
        case "충전 중":
            return 'bg-gradient-to-tl from-neutral-900 to-yellow-500/30 border-yellow-500';
        case "예약 가능":
            return 'bg-gradient-to-tl from-neutral-900 to-cyan-500/30 border-cyan-500';
        case "기타/점검":
            return 'bg-gradient-to-tl from-neutral-900 to-red-500/30 border-red-500';
        default:
            return 'bg-neutral-800 border-neutral-600';
    }
};

const StatisticsCard = ({ title, count }) => {
    const colorClass = getStatColorClass(title);

    return (
        <div 
            className={`
                flex flex-col items-center justify-center p-3 sm:p-4 rounded
                border-2 
                ${colorClass} 
                min-w-[100px] sm:min-w-[150px] 
            `}
        >
            <span className="font-medium text-white text-center line-clamp-1">{title}</span>
            <span className="text-2xl sm:text-4xl font-bold text-white mt-1">{count}</span>
        </div>
    );
};

export default StatisticsCard;