import React, { createContext, useState } from 'react'

const AuthContext = ({Children}) => {
    const [auth, setAuth] = useState({isAuth: false, userName: "unknown"})
    const AuthProvider = createContext(null)
  return (
    <AuthProvider.Provider value={[auth, setAuth]}>{Children}</AuthProvider.Provider>
  )
}

export default AuthContext