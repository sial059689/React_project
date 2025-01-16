import React from 'react'
import PageBody from '../components/PageBody'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'
import img from '../images/2.png'

const About = () => {
  return (
    <div className=' w-full h-full'>

      <Navbar />

      <h1 className='flex justify-center font-[]'>I'm a creative React web developer</h1>

      <div>
        <img className="h-[32vw] w-[40vw]" src={img} alt="" />
      </div>
      <div></div>
      <div></div>

      <PageBottom />
    </div>
  )
}

export default About