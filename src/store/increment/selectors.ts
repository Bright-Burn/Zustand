import { CountStore } from "./useIncrementStore"

type incrementSelectorType = (state: CountStore) => CountStore[keyof Omit<CountStore, 'count'>]

export const incrementSelector: incrementSelectorType = (state) => state.decrease