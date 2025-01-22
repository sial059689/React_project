import React from 'react'

import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'
import img from '../images/2.png'
import downloadImg from '../images/download.png'
import css703 from '../images/css703.png'
import css702 from '../images/css702.png'
import css70 from '../images/css70.png'

const About = () => {
  return (
    <div className=' w-full h-screen bg-gray-500'>

      <Navbar />

      <div className='mt-6'>
        <h1 className='flex justify-center text-gray-300 font-[robboto] text-3xl p-2'>I'm a creative front end web developer</h1>
      </div>


      <div className='flex'>

{/* skills section */}
        <div className='w-2/3'>
          <h1 className='font-[robboto] font-semibold text-gray-300 
          text-4xl text-center pl-5 pt-14'>MY SKILLS</h1>

          <div className='flex px-4 '>

            <div className='w-1/3'>
              <img src={css703} alt="" className='' />
              <h4 className='text-center'>25%</h4>
            </div>

            <div className='w-1/3'>
            <img src={css702} alt="" />
              <h4 className='text-center'>25%</h4>
            </div>

            <div className='w-1/3'>
             <img src={css70} alt="" />
              <h4 className='text-center'>25%</h4>
            </div>

          </div>

        </div>


        <div className='w-1/3'>

          <h1 className='font-[robboto] font-semibold text-gray-300 text-4xl pl-5 pt-14'>PERSONAL INFO'S</h1>

          {/* persona info name section */}
          <div className='flex'>
            <div className='w-1/2 bg-green-400'>
              <h1 className=' text-gray-200 text-lg pl-5 pt-6'>
                First Name: <span className='text-white font-[robboto]'>Rizwan</span>
              </h1>
            </div>

            <div className='w-1/2 bg-red-300'>
              <h1 className=' text-gray-200 text-lg pl-10 pt-6'>
                Last Name: <span className='text-white font-[robboto]'>Ali</span>
              </h1>
            </div>
          </div>

          {/* persona info age section */}
          <div className='flex'>
            <div className='w-1/2 bg-green-400'>
              <h1 className=' text-gray-200 text-lg pl-5 pt-3'>
                Age: <span className='text-white font-[robboto]'>29 years</span>
              </h1>
            </div>

            <div className='w-1/2 bg-red-300'>
              <h1 className=' text-gray-200 text-lg pl-10 pt-3  '>
                Nationality: <span className='text-white font-[robboto]'>Pakistani</span>
              </h1>
            </div>
          </div>

          {/* personal info address section */}
          <div className='flex'>
            <div className='w-1/2 bg-green-400'>
              <h1 className=' text-gray-200 text-lg pl-5 pt-3'>
                Address: <span className='text-white font-[robboto]'>Lahore</span>
              </h1>
            </div>

            <div className='w-1/2 bg-red-300'>
              <h1 className=' text-gray-200 text-lg pl-10 pt-3  '>
                phone: <span className='text-white font-[robboto]'>+92 3084543596</span>
              </h1>
            </div>
          </div>
          {/* persona info email section */}
          <div className='flex'>
            <div className='w-1/2 bg-green-400'>
              <h1 className=' text-gray-200 text-lg pl-5 pt-3'>
                Email: <span className='text-white font-[robboto]'>rizzar3505@gmail.com</span>
              </h1>
            </div>

            <div className='w-1/2 bg-red-300'>
              <h1 className=' text-gray-200 text-lg pl-10 pt-3  '>
                LinkedIn: <span className='text-white font-[robboto]'>Rizwan Ali</span>
              </h1>
            </div>
          </div>

          {/* resume button */}
          <div className='flex mt-16 w-64 rounded-full border border-white bg-red-800 hover:text-orange-400'>
            <button type="submit" className=' text-white font-semibold px-10 py-4 rounded-full hover:bg-slate-100'>
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