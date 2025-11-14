import React, { useEffect, useState } from 'react'
import TrafficNav from './TrafficNav'
import trafficData from './교통사고통계.json'
import TrafficRes from './TrafficRes';
const apikey = import.meta.env.VITE_TRA_API;

export default function Traffic() {
    const [tdata, setTdata] = useState([]);
    const getFetchData = () => {
            
        // setTdata(trafficData);
        const baseurl = "https:/https://apis.data.go.kr.odcloud.krhttps://apis.data.go.kr/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117&returnType=json&serviceKey="
        let url = `${baseurl}${apikey}`;

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTdata(data.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        let bigCategory = [
            '전체',
            ...new Set(tdata.map(item => item["사고유형대분류"]))
        ];
        bigCategory = [... new Set(bigCategory)];
        setC1(bigCategory);
        if (tdata.length > 0 && selC1 === null) {
        setSelC1('전체'); 
    }
    }, [tdata])

    const [c1, setC1] = useState([]);
    const [selC1, setSelC1] = useState(null);
    const [c2, setC2] = useState([]);
    const [selC2, setSelC2] = useState(null);
    const [c3, setC3] = useState([]);
    const [selC3, setSelC3] = useState(null);
    useEffect(() => {
        console.log('대분류 : ' + selC1);
    }, [selC1]);


    let middata = tdata.filter(item => {
        // if (selC1 === '전체') return true;
        return item['사고유형대분류'] === selC1;
    })
    useEffect(() => {
        if (!selC1 || tdata.length === 0) {
            setC2([]);
            setSelC2(null);
            return;
        }
        let midCategory = [
            '전체',
            ...new Set(middata.map(item => item["사고유형중분류"]))
        ];
        midCategory = [... new Set(midCategory)];
        setC2(midCategory);
    }, [selC1, tdata])


    useEffect(() => {
        console.log('중분류 : ' + selC2);
    }, [selC2]);
    useEffect(() => {
        if (selC1) {
            setSelC2('전체');
        }
    }, [selC1]);


    useEffect(() => {
        if (selC2) {
            setSelC3('전체'); // 도로종류 초기화
        }
    }, [selC2]);
    let roaddata;
    if (selC1 === '전체') {
        // selC1이 '전체'일 때는 middata 전체를 사용 (c3 계산 시 전체 도로종류를 추출해야 함)
        roaddata = tdata;
    } else {
        // 특정 대분류 선택 시, 중분류에 따라 필터링
        roaddata = middata.filter(item => {
            if (selC2 === '전체') return true;
            return item['사고유형중분류'] === selC2;
        });
    }

    useEffect(() => {
        if (!selC1 || !selC2 || tdata.length === 0) {
            setC3([]);
            setSelC3(null);
            return;
        }
        let roadCategory = [
            '전체',
            ...new Set(roaddata.map(item => item["도로종류"]))
        ];
        roadCategory = [... new Set(roadCategory)];
        setC3(roadCategory);
        if (!selC3) {
            setSelC3('전체');
        }
    }, [selC1, selC2, tdata])


    const resdata = tdata.filter(item => {
        if (!selC1) return false;
        // if (selC1 === '전체') {
        //     return item;
        // }
        const isSelC1Valid = selC1 && (selC1 === '전체' || item['사고유형대분류'] === selC1);

        // 2. selC2 필터링
        const isSelC2Valid = selC2 && (selC2 === '전체' || item['사고유형중분류'] === selC2);

        // 3. selC3 필터링
        const isSelC3Valid = selC3 && (selC3 === '전체' || item['도로종류'] === selC3);


        if (selC1 === '전체') {

            return isSelC1Valid && isSelC3Valid;
        }
        else {
            return isSelC1Valid && isSelC2Valid && isSelC3Valid;
        }
    });

    const total = resdata.reduce((acc, item) => {
        acc.사고건수 = (acc.사고건수 || 0) + (item["사고건수"] || 0);
        acc.사망자수 = (acc.사망자수 || 0) + (item["사망자수"] || 0);
        acc.중상자수 = (acc.중상자수 || 0) + (item["중상자수"] || 0);
        acc.경상자수 = (acc.경상자수 || 0) + (item["경상자수"] || 0);
        acc.부상신고자수 = (acc.부상신고자수 || 0) + (item["부상신고자수"] || 0);
        return acc;
    }, {});

    return (
        <div className='flex flex-col justify-start items-center'>
            <div className='w-full'>
                {
                    c1.length > 0 && <TrafficNav title='대분류' category={c1} selectC={selC1} setSelC={setSelC1} />
                }
                {
                    (c2.length > 0 && selC1 !== '전체') && <TrafficNav title='중분류' category={c2} selectC={selC2} setSelC={setSelC2} />
                }
                {
                    c3.length > 0 && <TrafficNav title='도로종류' category={c3} selectC={selC3} setSelC={setSelC3} />
                }
            </div>

            <div className='flex justify-between w-full px-20'>
                {
                    resdata.length > 0 && <TrafficRes a={total.사고건수} k={total.사망자수} h={total.중상자수} l={total.경상자수} r={total.부상신고자수} />
                }
            </div>


        </div>
    )
}
