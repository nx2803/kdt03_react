import React from 'react'
import TailButton from '../components/TailButton'
import { useRef } from 'react'
import { FaPen } from "react-icons/fa";


export default function ToDoInput({ setTodos }) {
    // const setTodos = useSetAtom(todosAtom);
    const inRef = useRef();
    const handleAdd = () => {
        if (inRef.current.value == "") {
            alert("값을 입력해주세요.");
            inRef.current.focus();
            return;
        }
        const newItem = {
            id: Date.now(), text: inRef.current.value, completed: false
        }
        setTodos(prev => [newItem, ...prev]);
        inRef.current.value = "";
        inRef.current.focus();
    }
    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            handleAdd();
        }

    }


    return (
        <div className='flex flex-row gap-4 mb-10'>
            <input type="text" ref={inRef} className="w-200 h-14 bg-white text-black rounded text-xl shadow text-center font-bold" onKeyDown={handleKeyDown} placeholder='여기에 할 일 입력'/>
            {/* <TailButton color="gray" caption={<FaPen className='text-3xl' />} onClick={handleAdd} /> */}
        </div>
    )
}
