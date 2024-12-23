import React, { useContext } from 'react'
import { DataContext } from './UserContext'

const Section = () => {

    const data = useContext(DataContext)

  return (
    <div>
        <h1>This is Section and i {data}</h1>
    </div>
  )
}

export default Section