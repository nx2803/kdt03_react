import React, { useCallback, useEffect, useRef, useState } from 'react'
import TailSelect from '../components/TailSelect'
import zcode from "./zcode.json"
import zscode from "./zscode.json"
import kind from "./kind.json"
import kinddetail from "./kinddetail.json"
import TailButton from '../components/TailButton'
import TailCard3 from '../components/TailCard3'
import StatisticsCard from './StatisticsCard'




export default function ChargeInfo() {
    const [selZcode, setSelZcode] = useState('');
    const [selZscode, setSelZscode] = useState('');
    const [selKind, setSelKind] = useState('');
    const [selKdetail, setSelKdetail] = useState('');
    const [sCodeOptions, setSCodeOptions] = useState({});
    const [kDetailOptions, setKDetailOptions] = useState({});
    const [cdata, setCdata] = useState([]);
    const [statistics, setStatistics] = useState({
        total: 0, stat1: 0, stat2: 0, stat3: 0, stat9: 0, etc: 0
    });

    const apikey = import.meta.env.VITE_TRA_API;
    const baseurl = "/dataApi/B552584/EvCharger/getChargerInfo?serviceKey="

    const sel1Ref = useRef();
    const sel2Ref = useRef();
    const sel3Ref = useRef();
    const sel4Ref = useRef();

    const getFetchData = async () => {
        let url = `${baseurl}${apikey}&dataType=JSON&numOfRows=9999`
        if (selZcode) url += `&zcode=${selZcode}`;
        if (selZscode) url += `&zscode=${selZscode}`;
        if (selKind) url += `&kind=${selKind}`;
        if (selKdetail) url += `&kindDetail=${selKdetail}`;
        console.log(url);
        fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    return resp.text().then(text => {
                        throw new Error(`HTTP Error ${resp.status}: ${text}`);
                    });
                }
                return resp.json();
            })
            .then(cdata => {
                const items = cdata?.items?.item;
                if (items) {
                    let dataArray = Array.isArray(items) ? items : [items];
                    setCdata(dataArray);
                    console.log(`${dataArray.length}개 로드`);
                } else {
                    const resultMsg = cdata?.resultMsg || "데이터 없음 / 응답 구조 오류";

                    console.warn("데이터를 찾을 수 없거나 API 응답 오류:", resultMsg);
                    setCdata([]);
                }
            })
            .catch(err => console.error("Fetch Error:", err))
    }


    const handleZcodeChange = useCallback((e) => {
        setSelZcode(e.target.value);
        setSelZscode('');
    }, []);

    const handleKindChange = useCallback((e) => {
        setSelKind(e.target.value);
        setSelKdetail('');
    }, []);

    const handleClick = () => {

        getFetchData();
        console.log(cdata);
    }

    const handleCancel = (e) => {
        setSelZcode('');
        setSelZscode('');
        setSelKind('');
        setSelKdetail('');
        setCdata([]);
        setStatistics({
            total: 0, stat1: 0, stat2: 0, stat3: 0, stat9: 0, etc: 0
        });
    }

    const getStatistics = (data) => {
        const stats = {
            total: data.length,
            stat1: 0, // 통신이상 (1)
            stat2: 0, // 충전가능 (2)
            stat3: 0, // 충전중 (3)
            stat9: 0, // 예약가능 (9)
            etc: 0,   // 기타 (4, 5, 0)
        };

        data.forEach(item => {
            switch (item.stat) {
                case '1':
                    stats.stat1 += 1;
                    break;
                case '2':
                    stats.stat2 += 1;
                    break;
                case '3':
                    stats.stat3 += 1;
                    break;
                case '9':
                    stats.stat9 += 1;
                    break;
                default:
                    // 4, 5, 0 등 나머지 상태
                    stats.etc += 1;
            }
        });

        return stats;
    };

    useEffect(() => {
        if (selZcode === '') {
            setSCodeOptions({});
            return;
        }
        const filteredOptions = zscode[selZcode] || {};

        setSCodeOptions(filteredOptions);

    }, [selZcode]);

    useEffect(() => {
        if (selKind === '') {
            setKDetailOptions({});
            return;
        }

        const filteredOptions = kinddetail[selKind] || {};
        setKDetailOptions(filteredOptions);

    }, [selKind]);

    useEffect(() => {
        if (cdata.length > 0) {
            const stats = getStatistics(cdata);
            setStatistics(stats);
        } else {

            setStatistics({
                total: 0, stat1: 0, stat2: 0, stat3: 0, stat9: 0, etc: 0
            });
        }
    }, [cdata]);
    return (
        <div className='w-full flex flex-col items-center overflow-auto mt-5'>
            <h1 className='mb-20 text-5xl font-semibold '>전기차 충전소 정보</h1>
            <div className='flex flex-row justify-start items-center gap-5'>
                <TailSelect id="sel1" title="시도" opk={Object.keys(zcode)} opv={Object.values(zcode)} handleChange={handleZcodeChange} ref={sel1Ref} value={selZcode} className='w-50'/>
                <TailSelect id="sel2" title="지역동" opk={Object.values(sCodeOptions)} opv={Object.keys(sCodeOptions)} handleChange={(e) => setSelZscode(e.target.value)} disabled={selZcode === ''} ref={sel2Ref} value={selZscode}  className='w-50'/>
                <TailSelect id="sel3" title="충전소구분" opk={Object.keys(kind)} opv={Object.values(kind)} handleChange={handleKindChange} ref={sel3Ref} value={selKind}  className='w-50'/>
                <TailSelect id="sel4" title="충전소상세" opk={Object.values(kDetailOptions)} opv={Object.keys(kDetailOptions)} handleChange={(e) => setSelKdetail(e.target.value)} disabled={selKind === ''} ref={sel4Ref} value={selKdetail}  className='w-50'/>
                <TailButton color='gray' caption="검색" onClick={handleClick} />
                <TailButton color='white' caption="취소" onClick={handleCancel} />
            </div>
            <div>
                {(cdata.length > 0) && (
                    <div className='mt-10 w-full lg:w-4/5 flex flex-row ustify-center items-center gap-4 p-4  rounded'>
                        <StatisticsCard title="총 충전소 수" count={statistics.total} color="border-cyan-500" />
                        <StatisticsCard title="통신 이상" count={statistics.stat1} color="border-gray-500" />
                        <StatisticsCard title="충전 가능" count={statistics.stat2} color="border-green-500" />
                        <StatisticsCard title="충전 중" count={statistics.stat3} color="border-yellow-500" />
                        <StatisticsCard title="예약 가능" count={statistics.stat9} color="border-blue-500" />
                        <StatisticsCard title="기타/점검" count={statistics.etc} color="border-red-500" />
                    </div>
                )}
            </div>

            <div className=' w-4/5 h-150'>
                {cdata.length > 0 && (
                    <>

                        <TailCard3 data={cdata} />
                    </>
                )}
                {cdata.length === 0 && (selZcode !== '' || selKind !== '') && (
                    <div ></div>
                )}
            </div>
        </div>
    )
}
