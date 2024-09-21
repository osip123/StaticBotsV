import React, { useEffect, useState } from 'react'

import Link from 'react-router-dom'
import axios from 'axios'

const TicketItem = ({props}) => {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:3000/tickets').then(
    //         res => {
    //             setData(res.data)
    //         }
    //     )
    //     console.log(data)
    // }, [])

  return (
    <>
    <div>{props.name}</div>
    <Link to = {'/tickets/:id'}></Link>
    </>
  )
}

export default TicketItem