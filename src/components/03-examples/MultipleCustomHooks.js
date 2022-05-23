import React from 'react'
import { useCounterE1 } from '../../hooks/useCounterE1.js'
import { useFetch } from '../../hooks/useFetch'
import './multipleCustomHooks.css'

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounterE1(1);

  // console.log( counter );

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  // console.log( data );
  
  const { author, quote } = !!data && data[0];
  // console.log( loading );
  // console.log( 'author', author );
  // console.log( 'quote', quote );

  return (
    <div>
      <h1>BrakingBad Quotes</h1>
      <hr />

      {
        loading
        ?
          (
            <div className='alert alert-info text-center'>
              Loading...
            </div>
          )
          :
          (
            <blockquote className='blockquote text-right'>

            <p className="mb-0"> { author } </p>

            <footer className="blockquote-footer"> { quote } </footer>

            </blockquote>
          )          
      }

      <button 
      className='btn btn-primary'
      onClick={ increment }
      >
        Siguiente quote
      </button>

    </div>
  )
}

export default MultipleCustomHooks
