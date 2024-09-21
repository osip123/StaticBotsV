import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState({isAuth: false, name: "Unknown"})

  return (
    <AuthContext.Provider value={[user, setUser]}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider