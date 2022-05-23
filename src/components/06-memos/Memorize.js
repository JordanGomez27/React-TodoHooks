import React, { useState } from 'react'
import { useCounterE1 } from '../../hooks/useCounterE1.js';
import Small from './Small.js';
import './memorize.css';

const Memorize = () => {

    const { counter, increment } = useCounterE1( 10 );
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter: <Small value = { counter } /> </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={ () => {
                    setShow( !show )
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}

export default Memorize
