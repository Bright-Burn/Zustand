import { create } from 'zustand'
import { getTodos } from '../../../api'

export interface todo {
    todo: any
    fetchTodo: (id: string) => any
}
export const useTodoStore= create<todo>((set, get) => ({
  todo: [],
  fetchTodo: async (id) => {
    const response = await getTodos(id)
    set({ todo: [...get().todo, response] })
  },
}))


