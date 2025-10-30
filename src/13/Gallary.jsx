import React, { useEffect, useRef, useState } from 'react'
import TailCard from '../components/TailCard'
import TailInput from '../components/TailInput';
import TailButton from '../components/tailButton';
const apikey = import.meta.env.VITE_TRA_API;


export default function Gallary() {



    const kwRef = useRef();
    const [tdata, setTdata] = useState([]);
    const baseurl = '/api/B551011/PhotoGalleryService1/gallerySearchList1';
    let keyword = kwRef.current?.value;
    const getFetchData = async() => {
        let url = `${baseurl}?serviceKey=${apikey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURIComponent(keyword)}&_type=json`
        fetch(url)
            .then(resp => {    
                if (!resp.ok) {
                    return resp.text().then(text => {
                        throw new Error(`HTTP Error ${resp.status}: ${text}`);
                    });
                }
                return resp.json();
            })
            .then(tdata => {
                if (tdata.response &&
                    tdata.response.body &&
                    tdata.response.body.items &&
                    Array.isArray(tdata.response.body.items.item)) {
                    let dataArray = tdata.response.body.items.item;
                    if (!Array.isArray(dataArray)) {
                        dataArray = [dataArray];
                    }
                    setTdata(dataArray);

                } else {
                    // 데이터가 없거나 API 오류가 발생했을 때
                    console.warn("데이터를 찾을 수 없거나 API 응답 오류:", tdata.response.header.resultMsg);
                    setTdata([]);
                }
            })
            .catch(err => console.error("Fetch Error:", err))
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log(tdata);
        getFetchData();
    }
    const handleCancel = (e) => {
        e.preventDefault();
        if (kwRef.current) {
            kwRef.current.value = '';
        }
        setTdata([]);
    }

    useEffect(() => {
            kwRef.current.focus();
        }, []);
    return (
        <div className='w-full h-200 flex flex-col items-center '>

            <h1 className='text-white text-4xl font-bold mb-4'>한국관광공사 사진 정보 서비스</h1>

            <div className='flex flex-row'>

                <TailInput type='text' name='keyword' ref={kwRef}></TailInput>
                <div className='flex flex-row gap-4 ml-4 justify-center items-center'>
                    <TailButton color="red" caption="검색" onClick={handleClick} />
                    <TailButton color="white" caption="취소" onClick={handleCancel} />
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4 max-w-7xl'>
                {tdata.length > 0 ? (
                    tdata.map((item) => (

                        <TailCard key={item.galContentId} itemId={item.galContentId} item={item}/>
                    ))
                ) : (

                    <div className='col-span-full justify-center items-center text-center text-4xl text-white'>
                        결과없음
                    </div>
                )}

            </div>
        </div>
    )
}
