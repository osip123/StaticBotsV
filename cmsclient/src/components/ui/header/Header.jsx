
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import { Link } from 'react-router-dom'

import './Header.scss'

export const Header = () => {

    const [user, setUser] = useContext(AuthContext)


    return(
        <>
            <header className='header'>
                <div className="left">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/tickets'}>Tickets</Link>
                </div>
                <div className="right">
                </div>
            </header>
        </>
    )
}
