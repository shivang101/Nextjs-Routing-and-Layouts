"use client"
import { useState } from 'react'
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';

export default function Counter() {
    const [val, setVal] = useState(0);

    const increment = () => {
        setVal(prevVal => prevVal + 1);
    }
    const decrement = () => {
        setVal(prevVal => prevVal - 1);
    }
    return (
        <div>
            <IncrementButton plusOne={increment} />
            <p >Count : {val}</p>
            <DecrementButton minusOne={decrement} />
        </div>
    )
}

