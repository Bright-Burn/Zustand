import React from 'react';
import { incrementSelector, useIncrementStore } from '../../../store';

export function Increment() {
    const add = useIncrementStore(incrementSelector)
    return (
        <button onClick={add}>increment</button>
    );
}

