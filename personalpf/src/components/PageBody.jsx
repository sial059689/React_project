import React from 'react'
import imgi from '../images/2.png'

const TiltTex = () => {
  return (
    <div className='flex'>

      <div className='w-6/12 h-auto bg-green-400'>

        <h1 className='mt-12 pl-16 text-4xl '>
          <span className='text-8xl  font-semibold'>Rizwan Ali</span>
          <i className="ri-hand text-6xl text-yellow-400"></i> </h1>

        <h1 className='text-2xl pt-0 pl-36 text-gray-700'> Front End Web Developer</h1>

        <p className='w-96 pt-8 pl-24 font-serif text-gray-700'>I'm creative developer based in Lahore, and i am very passionate and dedicate to my work.</p>


      </div>

      <div className='w-6/12 h-auto bg-red-400 justify-end'>

        <img src={imgi} alt="" className='h-[32vw] w-[60vw]' />

      </div>


    </div>
  )
}

export default TiltTex