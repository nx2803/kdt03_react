import React, { useEffect, useRef, useState } from 'react'
import TailCard2 from '../components/TailCard2';
import TailInput from '../components/TailInput';
import TailButton from '../components/tailButton';
const apikey = import.meta.env.VITE_TRA_API;


export default function FestGallary() {
    
    const kwRef = useRef(); 

    const [originalData, setOriginalData] = useState([]);
    const [tdata, setTdata] = useState([]); 
    const [gdata, setGdata] = useState(['전체']); 
    const [sgdata, setSgdata] = useState('전체'); 

    const baseurl = '/api/6260000/FestivalService/getFestivalKr';
    
    const getFetchData = async () => {
        let url = `${baseurl}?serviceKey=${apikey}&pageNo=1&numOfRows=50&resultType=json`;

        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                const text = await resp.text();
                throw new Error(`HTTP Error ${resp.status}: ${text}`);
            }
            const tdataJson = await resp.json();
            
            let dataArray = tdataJson.getFestivalKr?.item;

            if (dataArray) {
                if (!Array.isArray(dataArray)) {
                    dataArray = [dataArray];
                }
                
                setOriginalData(dataArray); 
                setTdata(dataArray); 
                
                const guguns = dataArray
                    .map(item => item.GUGUN_NM)
                    .filter((gugun, index, self) => gugun && self.indexOf(gugun) === index)
                    .sort();
                    
                setGdata(['전체', ...guguns]);

            } else {
                console.warn("오류:", tdataJson);
                setOriginalData([]);
                setTdata([]);
                setGdata(['전체']);
            }
        } catch (err) {
            console.error("Fetch Error:", err);
            setOriginalData([]);
            setTdata([]);
            setGdata(['전체']);
        }
    }
    
    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        if (sgdata === '전체') {
            setTdata(originalData);
        } else {
            const filtered = originalData.filter(item => item.GUGUN_NM === sgdata);
            setTdata(filtered);
        }
    }, [sgdata, originalData]);

    const handleGugunChange = (e) => {
        setSgdata(e.target.value);
    };
    
    return (
        <div className='w-full h-200 flex flex-col items-center '>

            <h1 className='text-white text-4xl font-bold mb-8 mt-4'>부산 축제 정보 </h1>

            <div className='flex flex-row mb-12'>

                <select 
                    className='bg-white p-2 rounded text-black w-50 text-center'
                    onChange={handleGugunChange}
                    value={sgdata}
                >
                    {gdata.map(gugun => (
                        <option key={gugun} value={gugun}>
                            {gugun}
                        </option>
                    ))}
                </select>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl'>
                {tdata.length > 0 ? (
                    tdata.map((item) => (

                        <TailCard2 
                            key={item.UC_SEQ} 
                            itemId={item.UC_SEQ} 
                            item={item} 
                            img={item.MAIN_IMG_NORMAL}
                        />
                    ))
                ) : (
                    <div className='col-span-full justify-center items-center text-center text-4xl text-white'>
                        {sgdata && sgdata !== '전체' ? `${sgdata} 지역의 축제 결과없음` : '결과없음'}
                    </div>
                )}

            </div>
        </div>
    )
}