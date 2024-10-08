import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            {/* <button onClick = {()=> {incrementCount()}}> + </button>
            <button onClick = {()=> {decrementCount()}}> - </button> */}
            <button onClick = {incrementCount}> + </button>
            <button onClick = {decrementCount}> - </button>
        </div>
    )
}

export default Counter;