import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  return (
    <div>
        <h1>LoginScreen</h1>      
        <hr />
        <button
          className='btn btn-primary'
          onClick={ () => setUser({
            id:1,
            name:'Jordy<3'
          }) }
        >
          Login
        </button>
    </div>
  )
}

export default LoginScreen
