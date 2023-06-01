import React from 'react';
import { useIncrementStore } from '../../../store';

export function Counter() {
    const count = useIncrementStore(state => state.count)

    return (
        <div>{count}</div>
    );
}

