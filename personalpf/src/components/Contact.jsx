import React, { useState } from 'react'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'
import sendIcon from '../images/send.png'


const Contact = () => {

  

  return (
    <div className='bg-gray-500'>

      <Navbar />

      <div className='mt-2 w-full p-6 bg-gray-500 rounded-lg shadow-md'>

        <h2 className='text-6xl text-center text-gray-200 font-bold font-[robboto] '>GET IN TOUCH</h2>

        <div className='flex mx-auto'>

        <div className='w-1/3 bg-green-300 mr-6'></div>

          <div className='w-2/3 px-10 py-12'>
            <form action="">

              <div className='mb-6 flex max-w-4xl gap-4'>

                <input placeholder='YOUR NAME' className='w-full px-6 py-4 border rounded-full bg-gray-800 text-white focus:border-orange-500' required type="text" />

                <input placeholder='YOUR EMAIL' className='w-full px-6 py-4 border rounded-full bg-gray-800 text-white focus:border-orange-500' required type="email" />

              </div>

              <div className='mb-6'>
                
                <input placeholder='YOUR SUBJECT' className='w-full px-6 py-4 border rounded-full bg-gray-800 text-white focus:border-orange-500' required type="email" />
              </div>

              <div className='mb-6'>
                
                <textarea rows='6' placeholder='YOUR MESSAGE ' className='w-full px-6 py-4  rounded-3xl text-white bg-gray-800 border border-white' required type="text" />
              </div>

              <div className=''>
                <button type="submit" className='bg-gray-800 text-white font-semibold px-10 py-4 rounded-full border border-white'>
                  SEND MESSAGE 
                </button>
                
              </div>

            </form>
          </div>

         

        </div>

      </div>

      <PageBottom />
    </div>
  )
}

export default Contact