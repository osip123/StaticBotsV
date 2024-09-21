import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../ui/header/Header'

const Layoyt = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layoyt