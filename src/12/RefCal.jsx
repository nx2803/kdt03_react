import React, { useEffect, useRef } from 'react'
import TailButton from '../components/TailButton'


export default function RefCal() {
    //임포트 요소 ref 연결
    const txt1Ref = useRef();
    const txt2Ref = useRef();
    const txt3Ref = useRef();
    const opRef = useRef();

    //컴포넌트가 생성될때
    useEffect(() => {
        txt1Ref.current.focus();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        let num1 = txt1Ref.current?.value ?? "";
        let num2 = txt2Ref.current?.value ?? "";
        let op = opRef.current?.value ?? "+";
        let num3 = 0;
        switch (op){
            case "+" : num3 = Number(num1) + Number(num2); break;
            case "-" : num3 = Number(num1) - Number(num2); break;
            case "x" : num3 = Number(num1) * Number(num2); break;
            case "÷" : num3 = (Number(num2)==0 ? "오류" : (Number(num1) / Number(num2))); break;
        }
        txt3Ref.current.value = num3;
    }
    return (
        <div className='flex flex-row w-full h-full justify-center items-center'>
            
                <input type="number" name="txt1" ref={txt1Ref} className='bg-white rounded text-center font-bold p-3 m-4'></input>
                <select ref={opRef} className='text-white text-xl font-bold'>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option>
                    <option value="÷">÷</option>
                </select>
                <input type="number" name="txt2" ref={txt2Ref} className='bg-white text-center font-bold rounded p-3 m-4'></input>


            
            <TailButton color="red" caption="=" onClick={handleClick} />
            <input name="txt3" ref={txt3Ref} className='bg-white rounded text-center font-bold p-3 m-4'></input>

        </div>
    )
}
