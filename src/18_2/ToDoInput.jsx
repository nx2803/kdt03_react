import React, { useEffect } from 'react'
import TailButton from '../components/TailButton'
import { useRef } from 'react'
import { FaPen } from "react-icons/fa";


export default function ToDoInput({ setTodos, getTodos }) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
    // const setTodos = useSetAtom(todosAtom);
    const inRef = useRef();
    
    useEffect(() => {
        getTodos();
    }, [])


    const handleAdd = async () => {
        if (inRef.current.value == "") {
            alert("값을 입력해 주세요.");
            inRef.current.focus();
            return
        }
        const response = await fetch(`${supabaseUrl}/rest/v1/todos`, {
            method: 'POST',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: inRef.current.value, completed: false })
        });

        if (response.ok) {
            getTodos();
            inRef.current.value = "";
            inRef.current.focus();
        } else {
            console.error('Error adding todo:', response.statusText);
        }

    }
    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            handleAdd();
        }

    }


    return (
        <div className='flex flex-row gap-4 mb-10'>
            <input type="text" ref={inRef} className="w-200 h-14 bg-white text-black rounded text-xl shadow text-center font-bold" onKeyDown={handleKeyDown} placeholder='여기에 할 일 입력' />
            {/* <TailButton color="gray" caption={<FaPen className='text-3xl' />} onClick={handleAdd} /> */}
        
        </div>

    )
}
