import React, { useEffect, useState } from 'react'
import TailButton from '../components/TailButton'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useRef } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { MdSaveAs } from "react-icons/md";

export default function ToDOItem({ todo, setTodos, getTodos }) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
    const inRef = useRef();
    // const [todos, setTodos] = useAtom(todosAtom);
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const handleToggle = async () => {
        const response = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
            method: 'PATCH',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: !todo.completed })
        });
        if (response.ok) {
            getTodos();
        } else {
            console.error('Error toggling todo:', response.statusText);
        }
    }
    const handleCancel = () => {
        setEditText(todo.text);
        setIsEdit(false);
    }
    const handleSave = async () => {
        if (inRef.current.value == "") {
            alert("값을 입력해주세요.");
            inRef.current.focus();
            return;
        }
        const response = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
            method: 'PATCH',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: inRef.current.value })
        });
        if (response.ok) {
            getTodos();
        } else {
            console.error('Error toggling todo:', response.statusText);
        }
        setIsEdit(false);

    }
    const handleDelete = async () => {
        const response = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
            method: 'DELETE',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`
            }
        });
        if (response.ok) {
            getTodos();
        } else {
            console.error('Error deleting todo:', response.statusText);
        }
    }
    const handleEdit = () => {
        setIsEdit(true)
        inRef.current.focus();
    }

    useEffect(() => {
        if (isEdit && inRef.current) {
            inRef.current.focus();
        }
    }, [isEdit]);




    return (
        <div className='flex flex-row gap-5 my-5 text-white'>
            <input type='checkbox' checked={todo.completed} onChange={handleToggle} className='w-10 cursor-pointer' />

            {isEdit ?
                <div className='flex flex-row gap-5'>
                    <input type="text" ref={inRef} value={editText} className='text-black bg-white flex justify-start px-5 item-center w-150 rounded text-2xl'
                        onChange={(e) => setEditText(e.target.value)} />

                    <TailButton color='gray' caption={<MdSaveAs className='text-3xl' />} onClick={handleSave} />
                    <TailButton color='white' caption={<MdOutlineCancel className='text-3xl' onClick={handleCancel} />} />
                </div>
                :
                <div className='flex flex-row gap-5'>
                    <div className={` border-b-2 border-white flex justify-start px-5 items-center text-2xl w-150 font-bold ${todo.completed ? "line-through text-neutral-400" : ""} `}>
                        {todo.text}
                    </div>


                    <TailButton color='gray' caption={<FaEdit className='text-3xl' />} onClick={handleEdit} />
                    <TailButton color='white' caption={<MdDeleteForever className='text-3xl' onClick={handleDelete} />} />
                </div>
            }

        </div>
    )
}
