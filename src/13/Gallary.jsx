import React, { useRef, useState } from 'react'
import TailCard from '../components/TailCard'
import TailInput from '../components/TailInput';
import TailButton from '../components/TailButton';


export default function Gallary() {
    const kwRef = useRef();
    const [data, setData] = useState([]);
    const apikey = import.meta.env.VITE_TRA_API;
    const baseurl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=";
    let keyword = kwRef.current?.value;
    const getFetchData = () => {
        let url = `${baseurl}${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setData(data.item);
            })
            .catch(err => console.log(err))
    }
    const handleClick = (e) => {
        e.preventDefault();
        getFetchData();
    }
    return (
        <div className='w-full h-200 flex flex-col justify-center items-center '>
            
            <h1 className='text-white text-4xl font-bold mb-10'>한국관광공사 사진 정보 서비스</h1>
           
            <div className='flex flex-row'>
                
                <TailInput type='text' name='keyword' ref={kwRef}></TailInput>
                <div className='flex flex-row gap-4 ml-4 justify-center items-center'>
                    <TailButton color="red" caption="검색"/>
                <TailButton color="white" caption="취소"/>
                </div>
            </div>

            <div className='w-full h-full grid grid-cols-3 gap-6 mt-10'>
                <TailCard/>
                <TailCard/>
                <TailCard/>
                <TailCard/>
                <TailCard/>
            </div>
        </div>
    )
}
