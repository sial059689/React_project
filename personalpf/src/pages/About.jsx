import React from 'react'
import PageBody from '../components/PageBody'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'
import img from '../images/2.png'
import downloadImg from '../images/download.png'

const About = () => {
  return (
    <div className=' w-full h-screen bg-gray-500'>

      <Navbar />

      <div className='mt-6'>
        <h1 className='flex justify-center text-gray-300 font-[robboto] text-3xl p-2'>I'm a creative front end web developer</h1>
      </div>


      <div className='flex'>

        <div className='w-1/3'>
          <img className="h-[32vw] w-[60vw]" src={img} alt="" />
        </div>

        <div className='w-1/3'>



          <div>
            <p className='px-16 py-12  text-gray-200 tracking-wide text-md text-justify'>I am a front end web developer with good knowledge of front-end techniques, specializes in creating and maintaining websites,
              combining technical expertise with creative problem-solving to deliver user-friendly, functional,
              and visually appealing online experiences. I've skilled in programming languages like HTML, CSS,
              JavaScript, and often frameworks such as React.</p>
          </div>



        </div>


        <div className='w-1/3'>
          <h1 className='font-[robboto] font-semibold text-white text-2xl pl-5 pt-14'>PERSONAL INFO'S</h1>

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

          {/* persona info address section */}
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
          <div className='flex mt-16 w-64 rounded-full border border-white bg-gray-800 hover:bg-gray-100'>
            <button type="submit" className=' text-white font-semibold px-10 py-4 rounded-full'>
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