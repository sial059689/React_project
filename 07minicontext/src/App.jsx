import React from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContext.Provider>
      <h1>React with Context API</h1>
    </UserContext.Provider>
  )
}

export default App
