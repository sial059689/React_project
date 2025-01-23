import React from 'react'
import imgi from '../images/2.png'

const TiltTex = () => {
  return (
    <div className='flex h-full'>

      <div className='w-6/12 '>

        <h1 className='mt-12 0 pl-16 text-4xl flex'>
          <span className='text-8xl font-semibold font-[robboto]'>RIZWAN ALI</span>

          <div className='pt-4'>
            <i className="ri-hand text-6xl text-yellow-300"></i>
          </div>
        </h1>

        <h1 className='text-2xl pt-0 pl-36 text-gray-300'> Front End Web Developer</h1>

        <p className='w-4/5 text-lg pt-8 pl-16 font-serif text-gray-300 text-justify'>I am a front end web developer with good knowledge of front-end techniques,
          specializes in creating and maintaining websites, combining technical expertise with creative
          problem-solving to deliver user-friendly, functional, and visually appealing online experiences.
          I've skilled in programming languages like HTML, CSS, JavaScript, and often frameworks such as React.</p>


      </div>

      <div className='w-6/12 bg-red-400 justify-end'>

        <img src={imgi} alt="" className='' />

      </div>


    </div>
  )
}

export default TiltTex