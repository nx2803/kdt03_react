import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import map from '../assets/map.png'

export default function FestivalContents() {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1); 
    };
    const location = useLocation();
    const contents = location.state?.contents || {};
    const OverlayClasses = 'absolute inset-0 bg-black/20';
    let title = (contents.MAIN_TITLE || '제목 없음').replace(/\s*\(\s*한\s*,\s*영\s*,\s*중간\s*,\s*중번\s*,\s*일\s*\)/, '');
    const kakaoMapUrl =
        `https://map.kakao.com/link/map/${contents?.MAIN_PLACE.replace(',', '').replace('', '')},${contents?.LAT},${contents?.LNG}`;
    console.log(contents);
    return (
        <div
            data-id={contents.UC_SEQ}
            className='relative w-full h-220 rounded-xl overflow-hidden shadow-2xl '
        >

            <img
                className='absolute inset-0 w-full h-full object-cover '
                src={contents.MAIN_IMG_NORMAL}
                alt={title}
            />


            <div className={OverlayClasses}></div>
            <button 
                onClick={handleClose} 
                className='absolute top-4 right-4 z-50 text-3xl text-white bg-black/50 hover:bg-black/70 rounded-full w-13 h-13 flex items-center justify-center transition duration-200'
            >
                ✖
            </button>

            <div className='absolute top-0 left-0 right-0 p-4 z-20 text-white'>
                <h1
                    className='text-5xl font-bold line-clamp-2 mt-5 text-center'
                    title={title}
                >
                    {title}
                </h1>
            </div>



            <div className='absolute bottom-0 left-0 right-0 p-6 z-10 text-white flex flex-col space-y-4 '>
                <div className='pt-8'>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2 text-3xl'>
                        <div className='flex flex-col  space-y-2 '>
                            <p>주소</p>
                            {contents.USAGE_DAY_WEEK_AND_TIME && <p>날짜</p>}
                            {contents.CNTCT_TEL && <p>전화번호</p>}
                            {contents.HOMEPAGE_URL && <p>홈페이지</p>}
                        </div>

                        <div className='flex flex-col space-y-2 text-3xl text-white'>
                            <p title="지도보기" className='flex flex-row justify-center items-center' >{contents.ADDR1} <a href={kakaoMapUrl} className='ml-2' target="_blank"><img src={map} className='w-6 h-6'></img></a></p>
                            {contents.USAGE_DAY_WEEK_AND_TIME && <p>{contents.USAGE_DAY_WEEK_AND_TIME}</p>}
                            {contents.CNTCT_TEL && <p>{contents.CNTCT_TEL}</p>}
                            {contents.HOMEPAGE_URL && <a href={contents.HOMEPAGE_URL} target="_blank" className='hover:text-blue-500 line-clamp-1'>{contents.HOMEPAGE_URL}</a>}
                        </div>
                    </div>

                    <hr className='border-white my-4' />


                    <div className='pt-1'>
                        <p className='text-xl line-clamp-15 text-start'>
                            {contents.ITEMCNTNTS}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}