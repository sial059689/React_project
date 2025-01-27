import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import Contact from './pages/Contact'
import Resume from './pages/Resume'


const App = () => {
  return (
    <>
      <div className=''>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </div>

    </>

  )
}

export default App