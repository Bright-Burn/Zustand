import { useIncrementStore } from "../../../store"

export const useDecreaseCount = () => {
    const decrease = useIncrementStore(state => state.decrease)
    return decrease
}