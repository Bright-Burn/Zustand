import { todo } from "./types"

export const getTodos = async (id: string): Promise<todo | never> => {
    let todo = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
    
    if (typeof todo.userId === 'number'
        && typeof todo.id === 'number'
        && typeof todo.title === 'string'
        && typeof todo.completed === 'boolean')
        return todo
    return Promise.reject()
}
