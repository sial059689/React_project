import React, { useContext } from 'react'
import { DataContext } from './UserContext'

const Header = () => {

const data = useContext(DataContext)

  return (
    <div>
        <h1>This is Header and i {data}</h1>
    </div>
  )
}

export default Header