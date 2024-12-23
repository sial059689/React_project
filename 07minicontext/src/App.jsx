import React, { useContext } from 'react'
import Header from './context/Header'
import Section from './Context/Section'
import Footer from './Context/Footer'
import { DataContext } from './context/UserContext'



const App = () => {

const data = useContext(DataContext)

  return (
    <div className='bg-green-500 w-full h-screen text-white text-center p-36 text-6xl'>
      <h1>This is app and i {data}</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App