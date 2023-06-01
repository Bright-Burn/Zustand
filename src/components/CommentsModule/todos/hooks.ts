import { useIncrementStore } from "../../../store"
import { useTodoStore } from "../../../store"

export const useGetTodo = () => {
    const { fetchTodo, todos } = useTodoStore(state => ({ fetchTodo: state.fetchTodo, todos: state.todo }))
    const count = useIncrementStore(state => state.count)

    return { fetchTodo: () => { console.log(count); fetchTodo(String(count))}, todos}

}