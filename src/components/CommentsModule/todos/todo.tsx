import React from 'react';
import { useGetTodo } from './hooks'

export function Todo() {
    const { fetchTodo, todos } = useGetTodo()

    return (
        <>
            <button onClick={fetchTodo}>Fetch Todo</button>
            {todos.map((todo: any, index: number) => <div key={index}>{todo.title}</div>)}
        </>
    );
}

