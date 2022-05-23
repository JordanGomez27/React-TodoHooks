import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounterE1 } from '../../hooks/useCounterE1.js'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

const Layout = () => {

    const { counter, increment } = useCounterE1(1);

    // console.log( counter );

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // console.log( data );

    const { author, quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect());
        // console.log(  );

    }, [quote])
    // console.log( loading );
    // console.log( 'author', author );
    // console.log( 'quote', quote );

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className='blockquote text-right'>

                <p 
                    className="mb-0"
                    ref={ pTag }
                > {author} </p>

                <footer className="blockquote-footer"> {quote} </footer>

            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente quote
            </button>

        </div>
    )
}

export default Layout
