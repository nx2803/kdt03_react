import React, { useRef, useState } from 'react'
import SubwayBox from './SubwayBox'
import scode from './scode.json'
import sarea from './sarea.json'
import TailSelect from '../components/TailSelect'
export default function subway() {
  const apikey = import.meta.env.VITE_TRA_API;
  const baseurl = '/dataApi/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey='

  const [tdata, setTdata] = useState([]);
  const selAreaRef = useRef();
  const handleChange = () => {
    console.log(selAreaRef.current.value)
    getFetchData();
  }
  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const getFetchData = async () => {
    let url = `${baseurl}${apikey}&pageNo=1&numOfRows=24&resultType=json&controlnumber=${getToday()}&areaIndex=${selAreaRef.current.value}`
    console.log(url);


    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const fetchedItems = data.response?.body?.items?.item || [];
      const sortedItems = [...fetchedItems].sort((a, b) => {

        const controlA = Number(a.controlnumber);
        const controlB = Number(b.controlnumber);


        return controlA - controlB;
      });

      setTdata(sortedItems);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-200 flex flex-col items-center '>
      <div className='flex flex-row gap-50 mb-10'  >
        <h1 className='text-5xl flex items-center'>부산 실내공기질 정보</h1>
        <TailSelect id="selArea" ref={selAreaRef} title="측정소" opk={sarea.map(item => item["코드"])} opv={sarea.map(item => item["측정소"])} handleChange={handleChange} className='w-100' />
      </div>
      <div className='overflow-auto'>
        {
          tdata.map((item, idx) => <div key={item.controlnumber || idx}
            data={item}
          >
            <SubwayBox tdata={item} />
          </div>
          )
        }
      </div>
    </div>
  )
}
