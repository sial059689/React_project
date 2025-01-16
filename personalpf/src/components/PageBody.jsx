import React from 'react'
import imgi from '../images/2.png'

const TiltTex = () => {
  return (
    <div className='flex'>

      <div className=' '>

      <h1 className='mt-24 pl-16 text-4xl '><span className='text-8xl  font-semibold'>Rizwan Ali</span><i className="ri-hand text-6xl text-yellow-400"></i> </h1>

      <h1 className='text-2xl pt-0 pl-36 text-gray-700'> Front End Web Developer</h1>


      <div className='ml-24'>
        <h4 className='w-96 pt-8 font-serif text-gray-700'>I'm creative developer based in Lahore, and i am very passionate and dedicate to my work.</h4>
      </div>

      </div>

      <div className='flex justify-end bg-blue-100 w-[50vw] h-72 right-0'>
        <img src={imgi} alt="" className='h-[32vw] w-[60vw]' />
      </div>


    </div>
  )
}

export default TiltTex