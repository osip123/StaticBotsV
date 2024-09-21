import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './components/router/Router.jsx'
import { BrowserRouter } from 'react-router-dom'

// const [auth, setAuth] = useState({isAuth: "false", userName: "unknown"})
// const [auth, setAuth] = useState(true)

// const AuthContext = createContext([auth, setAuth])

// const auth = true

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <AuthContext.Provider value={[auth]}> */}
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    {/* </AuthContext.Provider> */}
  </StrictMode>,
)
