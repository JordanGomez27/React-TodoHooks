import React, { useState, useEffect } from 'react'
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey!');
    }, [])

    useEffect( () => {
        // console.log('formState cambió!');
    }, [formState])

    useEffect( () => {
        // console.log('email cambió!');
    }, [email])

    const handleInputChange = ( { target } ) => {
        // console.log('name',name);
        setFormState(
            {
                ...formState,
                [ target.name ]: target.value
            }
        )
        // console.log(e.target.value);
    }

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      
      <div className="form-group">
          <input 
          type="text"
          name="name"
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
          />

      </div>
      <div className="form-group">
          <input 
          type="text"
          name="email"
          className='form-control'
          placeholder='email@mail.com'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
          />
      </div>

      { ( name === '123' ) && <Message /> }

    </>
  )
}

export default SimpleForm
