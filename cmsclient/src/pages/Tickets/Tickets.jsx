import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Tickets = () => {

  const [data, setData] = useState([])

  useEffect(() => {
      axios.get('http://localhost:3000/tickets/get-all').then(
          res => {
              setData(res.data)
          }
      )
      console.log(data)
  }, [])

  return (
    <div>Tickets</div>
  )
}

export default Tickets