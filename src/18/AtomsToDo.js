import { atom } from "jotai";

export const todosAtom = atom([

    {id : '1', text: '리액트 공부', completed : false},
    {id : '2', text: 'Next.js 공부', completed : false}
]);

export const completedAtom = atom((get) => {
    const todos = get(todosAtom);
    return todos.filter(todo => todo.completed).length
})

