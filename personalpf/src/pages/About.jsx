import React from 'react'
import PageBody from '../components/PageBody'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'
import img from '../images/2.png'

const About = () => {
  return (
    <div className=' w-full h-full'>

      <Navbar />
      <div className='mt-6'>
        <h1 className='flex justify-center font-[robboto] text-xl p-2'>I'm a creative front end web developer</h1>

      </div>


      <div className='flex'>

        <div className='w-1/3'>
          <img className="h-[32vw] w-[60vw]" src={img} alt="" />
        </div>

        <div className='w-1/3'>
          <h1 className='font-[robboto] font-semibold text-2xl pl-16 pt-14'>About Me</h1>
          <p className='px-16 py-12 tracking-wide text-md text-justify'>I am a front end web developer with good knowledge of front-end techniques, specializes in creating and maintaining websites,
            combining technical expertise with creative problem-solving to deliver user-friendly, functional,
            and visually appealing online experiences. I've skilled in programming languages like HTML, CSS,
            JavaScript, and often frameworks such as React.</p>
        </div>


        <div className='w-1/3'>
          <h1 className='font-[robboto] font-semibold text-2xl pl-5 pt-14'>Details</h1>

          <div>
            <h1 className='font-[robboto] font-bold text-lg pl-5 pt-6'>Name:  </h1>
            <h2 className='px-8 py-0 text-md text-justify'>Rizwan Ali</h2>
          </div>

          <div>
            <h1 className='font-[robboto] font-bold text-lg pl-5 pt-6'>Age:  </h1>
            <h2 className='px-8 py-0 text-md text-justify'>29 years</h2>
          </div>

          <div>
            <h1 className='font-[robboto] font-bold text-lg pl-5 pt-6'>Location:  </h1>
            <h2 className='px-8 py-0 text-md text-justify'>Chungi Amer Sidhu, Lahore.</h2>
          </div>

          <div className='mt-8 ml-6'>
            <i className="ri-twitter-x-line px-1 text-md"></i>
            <i className="ri-facebook-fill px-1 text-md"></i>
            <i className="ri-messenger-fill px-1 text-md"></i>
            <i className="ri-github-line px-1 text-md"></i>
            <i className="ri-linkedin-line px-1 text-md "></i>
          </div>

        </div>

      </div>

      <PageBottom />
    </div>
  )
}

export default About