import React, { useState } from 'react';
import { useTodoStore } from '../../store';

export function Todo() {
    const { fetchTodo, todos } = useTodoStore(state => ({ fetchTodo: state.fetchTodo, todos: state.todo }))
    console.log(todos)
    return (
        <>
            <button onClick={() => fetchTodo('1')}>Fetch Todo</button>
            {todos.map((todo: any, index: number) => <div key={index}>{todo.title}</div>)}
        </>
    );
}

