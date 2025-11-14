import React, { useEffect, useState } from 'react'
import TailCard2 from '../components/TailCard2';
import { Link } from 'react-router-dom';

const apikey = import.meta.env.VITE_TRA_API;
const SESSION_KEY = 'selectedGugun';

export default function FestGallary() {

    const initialGugun = sessionStorage.getItem(SESSION_KEY) || '전체';
    const [selectedGugun, setSelectedGugun] = useState(initialGugun);
    
    const [originalData, setOriginalData] = useState([]);
    const [tdata, setTdata] = useState([]);
    const [gdata, setGdata] = useState(['전체']);

    const baseurl = '/dataApi/6260000/FestivalService/getFestivalKr';

    const handleFilter = (gugun) => {
        const selectedValue = gugun;
        
        sessionStorage.setItem(SESSION_KEY, selectedValue);

        if (selectedValue === '전체') {
            setTdata(originalData);
        } else {
            const filtered = originalData.filter(item => item.GUGUN_NM === selectedValue);
            setTdata(filtered);
        }
    };
    
    const handleChange = (e) => {
        const newGugun = e.target.value;
        setSelectedGugun(newGugun);
        handleFilter(newGugun);
    }


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
                
                const guguns = dataArray
                    .map(item => item.GUGUN_NM)
                    .filter((gugun, index, self) => gugun && self.indexOf(gugun) === index)
                    .sort();

                setGdata(['전체', ...guguns]);
                const initialFilterValue = sessionStorage.getItem(SESSION_KEY) || '전체';
                
                if (initialFilterValue !== '전체') {
                    const filtered = dataArray.filter(item => item.GUGUN_NM === initialFilterValue);
                    setTdata(filtered);
                } else {
                    setTdata(dataArray);
                }

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

    return (
        <div className='w-full h-200 flex flex-col items-center scroll-smooth '>

            <h1 className='text-5xl mb-8 mt-4 font-semibold '>부산 축제 정보 </h1>

            <div className='flex flex-row mb-12'>

                <select
                    className='bg-neutral-700 shadow-2xl p-2 rounded text-white w-50 text-center '
                    value={selectedGugun}
                    onChange={handleChange}>
                    {gdata.map(gugun => (
                        <option key={gugun} value={gugun}>
                            {gugun}
                        </option>
                    ))}
                </select>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl'>
                {
                    tdata.map((item, idx) => (
                        <Link to="/festival/contents" state={{contents:item}} key={item.UC_SEQ + idx}>
                            <TailCard2
                                itemId={item.UC_SEQ}
                                item={item}
                                img={item.MAIN_IMG_NORMAL}
                            />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}