import { create } from 'zustand'

export interface CountStore {
    count: number
    increase: () => void
    decrease: () => void
}
export const useIncrementStore = create<CountStore>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}))


