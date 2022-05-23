import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado.js';
import { useCounterE1 } from '../../hooks/useCounterE1.js';

import './memorize.css';

const MemoHook = () => {

    const { counter, increment } = useCounterE1( 5000 );
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small> </h3>
            <hr />

            <p> memoProcesoPesado </p>

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

export default MemoHook
