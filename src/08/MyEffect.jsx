
import React, { useEffect, useState } from 'react'
import TailButton from '../components/TailButton';

export default function MyEffect() {
    const [IsActive, setIsActive] = useState(false);
    const [tag, setTag] = useState();
    const handleClick = () => {
        setIsActive(!IsActive);
        
        if (IsActive)
            setTag(<h1>ON</h1>)
        else
            setTag(<h1>OFF</h1>)

        console.log("handleClick", IsActive);

    };
    const handleShow = () => {
        if (IsActive)
            setTag(<h1>ON</h1>)
        else
            setTag(<h1>OFF</h1>)
    };
    useEffect(() => {
        //컴포넌트 생성시 한번 실행
        console.log("컴포넌트 생성")

    }, []);
    useEffect(() => {
        //state변수가 변경될때
        console.log("useEffect", IsActive)
    }, [IsActive]);

    useEffect(() => {
        //상태가 변경될때마다
        console.log("useEffect 상태가 변경될 때", IsActive)
    });

    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
            <div className='text-white'>{tag}</div>
            {
                IsActive ? <TailButton color='red' caption="useEffect" onClick={handleClick} /> : <TailButton color='white' caption="useEffect" onClick={handleClick} />
                
            }
            <TailButton color='gray' caption="태그" onClick={handleShow} />

        </div>
    )
}
