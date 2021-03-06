import React, { useCallback, useEffect, useState } from 'react'
import './memorize.css'
import ShowIncrement from './ShowIncrement';
//cuando mandamos una función a un componente hijo
const CallBackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( ( num ) => {
        setCounter( c => c + num );
      }, [ setCounter ] )
    
    useEffect(() => {
      
    
    }, [increment])
    

    return (
        <div>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}

export default CallBackHook
