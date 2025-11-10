import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaBuilding, FaClock, FaBolt } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

import map from '../assets/map.png'
import TailButton from '../components/TailButton';
const getBorderColorClass = (stat) => {
    switch (stat) {
        case '2':
            return 'bg-linear-to-tl from-neutral-800 from 70% to-green-500/40 border-green-500';
        case '3':
            return 'bg-linear-to-tl from-neutral-800 to-yellow-500/50 border-yellow-500';
        case '4':
        case '5':
            return 'bg-linear-to-tl from-neutral-800 to-red-500 border-red-500';
        case '9':
            return 'bg-linear-to-tl from-neutral-800 to-cyan-500/50 border-cyan-500';
        default:
            return 'bg-linear-to-tl from-neutral-800 to-neutral-500/50 border-neutral-300';
    }
};

const StatusBadge = ({ stat }) => {
    let colorClass;
    let statusText;

    const statusMap = {
        '1': '통신이상', '2': '충전가능', '3': '충전중', '4': '운영중지',
        '5': '점검중', '9': '예약가능', '0': '알 수 없음'
    };

    statusText = statusMap[stat] || '미확인';

    if (stat === '2') colorClass = 'bg-green-600 text-white';
    else if (stat === '3') colorClass = 'bg-yellow-600 text-white';
    else if (stat === '4' || stat === '5') colorClass = 'bg-red-600 text-white';
    else if (stat === '9') colorClass = 'bg-cyan-600 text-white';
    else colorClass = 'bg-neutral-600 text-white';

    return (
        <span className={`px-3 py-1 text-base font-semibold rounded-full ${colorClass}`}>
            {statusText}
        </span>
    );
};


export default function ChargeContents() {
    const location = useLocation();
    const navigate = useNavigate();
    const item = location.state?.contents;
    const bgColorClass = getBorderColorClass(item.stat);
    const kakaoMapUrl =
        (item.lat && item.lng)
            ? `https://map.kakao.com/link/map/${encodeURIComponent(item.statNm)},${item.lat},${item.lng}`
            : `https://map.kakao.com/link/search/${encodeURIComponent(item.statNm + ' ' + addr)}`;
    if (!item) {
        return (
            <div className="w-full max-w-3xl mx-auto p-10 text-center text-white">
                <p className="text-2xl mb-6">충전소 정보를 불러올 수 없습니다.</p>
                <button
                    onClick={() => navigate(-1)}
                    className=" text-white text-4xl py-2 px-3 rounded-lg  transition duration-150 cursor-pointer"
                >
                    <IoClose />
                </button>
            </div>
        );
    }

    const {
        statNm, addr, useTime, busiNm, busiCall,
        chgerType, output, stat
    } = item;

    return (
        <div className="w-full max-w-6xl mx-auto text-left text-white animate-fadeIn">
            <div className={` rounded-xl ${bgColorClass}  overflow-hidden border `} >


                <div className="p-6 md:p-8 bg-black/20">
                    <div className="flex flex-col md:flex-row justify-between md:items-start mb-2">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 md:mb-0">
                            {statNm}
                        </h1>
                        <div className="flex-shrink-0">
                            <button
                                onClick={() => navigate(-1)}
                                className=" text-white text-4xl py-2 px-3 rounded-lg  transition duration-150 cursor-pointer"
                            >
                                <IoClose />
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-300 text-lg">{addr}</p>
                </div>


                <div className="md:grid md:grid-cols-4 gap-6 p-6 md:p-8">


                    <div className="md:col-span-2 mb-6 md:mb-0">
                        <div className="bg-neutral-900/50 p-5 rounded-lg  space-y-4 h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-white flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-gray-400" /> 위치 및 경로
                                </h2>

                                <p className="text-base font-light text-gray-200">{addr}</p>
                            </div>


                            <a href={kakaoMapUrl} className='ml-2' target="_blank"><img src={map} className='w-6 h-6'></img></a>



                        </div>
                    </div>


                    <div className="md:col-span-2 space-y-5 mb-6 md:mb-0">
                        <div className="bg-neutral-900/50 p-5 rounded-lg border border-white/10 h-full">
                            <h2 className="text-xl font-bold mb-3 text-white flex items-center">
                                <FaBuilding className="mr-2 text-gray-400" /> 운영 기관
                            </h2>
                            <p className="text-xl font-semibold text-white">{busiNm || '정보 없음'}</p>
                            <p className="text-sm text-gray-300 mt-1">연락처: {busiCall || '미상'}</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-5">
                        <div className="bg-neutral-900/50 p-5 rounded-lg border border-white/10 h-full">
                            <h2 className="text-xl font-bold mb-3 text-white flex items-center">
                                <FaClock className="mr-2 text-gray-400" /> 이용 가능 시간
                            </h2>
                            <p className="text-lg font-semibold text-white">{useTime || '24시간'}</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-5">
                        <div className="bg-neutral-900/50 p-5 rounded-lg border border-white/10 h-full">
                            <h2 className="text-xl font-bold mb-3 text-white flex items-center">
                                <FaBolt className="mr-2 text-gray-400" /> 충전기 스펙
                            </h2>
                            <p className="text-base text-gray-300">타입: {chgerType || '정보 없음'}</p>
                            <p className="text-base text-gray-300">출력: {output ? `${output}kW` : '정보 없음'}</p>
                        </div>
                    </div>

                </div>


                <div className="p-6 bg-black/20 border-t border-white/10 flex justify-end">

                    <StatusBadge stat={stat} />
                </div>

            </div>
        </div>
    );
}