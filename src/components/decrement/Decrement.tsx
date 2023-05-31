import React, { useState } from 'react';
import { useDecreaseCount } from './hooks';

export function Decrement() {
    const decrease = useDecreaseCount()

    return (
        <button onClick={decrease}>decrement</button>
    );
}

