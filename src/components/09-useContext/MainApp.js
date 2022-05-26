import React, { useState } from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'


const MainApp = () => {

  const [user, setUser] = useState({});

  // const user = {
  //   id: 123,
  //   name: 'Jordy <3',
  //   email: 'toolbunj77@gmail.com'
  // }

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>

      <AppRouter />

    </UserContext.Provider>
  )
}

export default MainApp
