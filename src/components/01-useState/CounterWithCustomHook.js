import React from 'react'
import useCounter from '../../hooks/useCounter'
import './counter.css'

const CounterWithCustomHook = () => {
    
    const { state, increment, decrement, reset } = useCounter(100);
  
    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />

            <button onClick={ () => increment(2) } className='btn btn-success'> + 1</button>
            <button onClick={ () => decrement(1) } className='btn btn-success'> - 1</button>
            <button onClick={ reset } className='btn btn-success'> Reset </button>
        </>
    )
}

export default CounterWithCustomHook
