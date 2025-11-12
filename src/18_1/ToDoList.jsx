import React, { useEffect, useState } from 'react'
import ToDoInput from './ToDoInput'
import ToDOItem from './ToDOItem'
export default function ToDoList() {
    // const todos = useAtomValue(todosAtom);
    // const comp = useAtomValue(completedAtom);
    const [todos, setTodos ] = useState([]); 
    const [comp, setComp] = useState(0);


    useEffect(()=>{
        const todosto = localStorage.getItem("todo") || [];
        if (todosto) {
            setTodos(JSON.parse(todosto));
        }
        
        
    }, []);

    useEffect(()=>{
        localStorage.setItem("todo", JSON.stringify(todos));
        setComp(todos.filter(todo => todo.completed).length)
    }, [todos]);
    
    return (
        <div className='flex flex-col w-250 justify-center items-center'>
            <h1 className="mt-10 text-5xl font-bold text-center ">
                할일 목록
            </h1>
            <div className='w-200 h-10 my-10 text-white bg-neutral-600/80 rounded text-center flex justify-center items-center'>

                전체 : {todos.length} 개 | 완료 : {comp} 개 | 미완료 : {todos.length - comp} 개
            </div>
            <ToDoInput setTodos={setTodos}/>
            {
                todos.map (todo => <ToDOItem key={todo.id} todo={todo} setTodos={setTodos}/>)
            }    
        </div>
    )
}
