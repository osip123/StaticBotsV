import React from 'react'
import { Outlet } from 'react-router-dom'

const Layoyt = () => {
  return (
    <>
        <header>header</header>
        <Outlet />
    </>
  )
}

export default Layoyt