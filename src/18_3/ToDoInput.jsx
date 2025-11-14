import React, { useEffect } from 'react'
import TailButton from '../components/TailButton'
import { useRef } from 'react'
import { FaPen } from "react-icons/fa";
import { supabase } from "../supabase/client";

export default function ToDoInput({ getTodos }) {
    const supabaseUrl = import.meta.env.VITE_SUPABSE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABSE_KEY;
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
        const { data, error } = await supabase
            .from('todos')
            .insert([
                { text: inRef.current.value, completed: false },
            ]);
        if (error) {
            console.error('Error adding todo:', error);
        } else {
            getTodos();
            inRef.current.value = "";
            inRef.current.focus();
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
