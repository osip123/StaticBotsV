import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './components/router/Router.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider, { AuthContext } from './Providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
          <Router />
        </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
