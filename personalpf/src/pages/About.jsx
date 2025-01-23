import React from 'react'

import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'
import img from '../images/2.png'
import downloadImg from '../images/download.png'
import html80 from '../images/html80.png'
import css704 from '../images/css704.png'
import js45 from '../images/js45.png'

const About = () => {
  return (
    <div className=' w-full h-screen bg-gray-500'>

      <Navbar />

      <div className='mt-6'>
        <h1 className='flex justify-center text-gray-300 font-[robboto] text-3xl p-2'>I'm a creative front end web developer</h1>
      </div>


      <div className='flex'>

        {/* skills section */}
        <div className='w-1/2'>
          <h1 className='font-[robboto] font-semibold text-gray-300 
          text-4xl text-center pl-5 pt-14 tracking-widest'>MY SKILLS</h1>

          <div>

            {/* html, css, js and bootstrap section */}
            <div className='flex place-content-center gap-20 pt-10 '>

              <div className=' '>
                <img src={html80} alt="" className='' />
                <h4 className='text-center pt-4 text-white text-xl font-bold'>HTML</h4>
              </div>

              <div className=''>
                <img src={css704} alt="" className='' />
                <h4 className='text-center pt-4 text-white text-xl font-bold'>CSS</h4>
              </div>

              <div className=''>
                <img src={js45} alt="" className='' />
                <h4 className='text-center pt-4 text-white text-xl font-bold'>JAVASCRIPT</h4>
              </div>

              <div className=''>
                <img src={js45} alt="" className='' />
                <h4 className='text-center pt-4 text-white text-xl font-bold'>BOOTSTRAP</h4>
              </div>

            </div>

            {/* wordpress, jquery, react and tailwindcss section */}
            <div className='flex place-content-center gap-20 pt-10 '>

              <div className=' '>
                <img src={html80} alt="" className='' />
                <h4 className='text-center pt-4 text-white text-xl font-bold'>WORDPRESS</h4>
              </div>

              <div className=''>
                <img src={css704} alt="" className='' />
                <h4 className='text-center pt-4 text-white text-xl font-bold'>JQUERY</h4>
              </div>

              <div className=''>
                <img src={js45} alt="" className='' />
                <h4 className='text-center pt-4 text-white text-xl font-bold'>REACT JS</h4>
              </div>

              <div className=''>
                <img src={js45} alt="" className='' />
                <h4 className='text-center pt-4 text-white text-xl font-bold'>TAILWINDCSS</h4>
              </div>

            </div>

          </div>

        </div>


        <div className='w-1/2 '>

          <h1 className='font-[robboto] font-semibold text-gray-300 text-4xl tracking-widest pl-32 pt-14'>PERSONAL INFO'S</h1>

          {/* persona info name section */}
          <div className='flex pt-8'>

            <div className='w-1/2'>
              <h1 className=' text-gray-200 text-lg pl-5 pt-6'>
                First Name: <span className='text-white font-[robboto] tracking-wider'>Rizwan</span>
              </h1>
            </div>

            <div className='w-1/2 '>

              <h1 className=' text-gray-200 text-lg pl-10 pt-6 '>
                Last Name: <span className='text-white font-[robboto]'>Ali</span>
              </h1>
            </div>
          </div>

          {/* persona info age section */}
          <div className='flex'>
            <div className='w-1/2 '>
              <h1 className=' text-gray-200 text-lg pl-5 pt-3'>
                Age: <span className='text-white font-[robboto]'>29 years</span>
              </h1>
            </div>

            <div className='w-1/2 '>
              <h1 className=' text-gray-200 text-lg pl-10 pt-3  '>
                Nationality: <span className='text-white font-[robboto]'>Pakistani</span>
              </h1>
            </div>
          </div>

          {/* personal info address section */}
          <div className='flex'>
            <div className='w-1/2 '>
              <h1 className=' text-gray-200 text-lg pl-5 pt-3'>
                Address: <span className='text-white font-[robboto]'>Lahore</span>
              </h1>
            </div>

            <div className='w-1/2 '>
              <h1 className=' text-gray-200 text-lg pl-10 pt-3  '>
                phone: <span className='text-white font-[robboto]'>+92 3084543596</span>
              </h1>
            </div>
          </div>
          {/* persona info email section */}
          <div className='flex'>
            <div className='w-1/2 '>
              <h1 className=' text-gray-200 text-lg pl-5 pt-3'>
                Email: <span className='text-white font-[robboto]'>sial059689@gmail.com</span>
              </h1>
            </div>

            <div className='w-1/2 '>
              <h1 className=' text-gray-200 text-lg pl-10 pt-3  '>
                LinkedIn: <span className='text-white font-[robboto]'>Rizwan Ali</span>
              </h1>
            </div>
          </div>

          {/* resume button */}
          <div className='flex mt-8 ml-6 w-72 rounded-full border border-white font-[robboto] '>
            <button type="submit" className=' hover:text-orange-400 tracking-normal text-white font-semibold px-10 py-4 rounded-full hover:bg-slate-100'>
              DOWNLOAD CV
            </button>
            <img src={downloadImg} alt="" className='h-12 w-12 rounded-full pt-2' />
          </div>

        </div>

      </div>

      <PageBottom />
    </div>
  )
}

export default About