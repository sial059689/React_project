import React from 'react'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div className=''>

      <Navbar />

      <div className='mt-4 w-full p-6 bg-gray-500 rounded-lg shadow-md'>

        <h2 className='text-3xl text-center text-white font-bold mb-6'>Get In Touch</h2>

        <div className='flex mx-auto'>

        <div className='w-1/3 bg-green-300 mr-6'></div>

          <div className='w-2/3 px-8 py-10'>
            <form action="">

              <div className='mb-4 flex max-w-2xl mx-auto'>

                <input placeholder='YOUR NAME' className='w-full px-6 py-3 border rounded-full bg-gray-800 text-white focus:border-orange-500' required type="text" />

                <input placeholder='YOUR EMAIL' className='w-full px-6 py-3 border rounded-full bg-gray-800 text-white focus:border-orange-500' required type="email" />

              </div>

              <div className='mb-4'>
                <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Email</label>
                <input placeholder='YOUR SUBJECT' className='w-full px-6 py-3 border rounded-full bg-gray-800 text-white focus:border-orange-500' required type="email" />
              </div>

              <div className='mb-4'>
                <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Message</label>
                <textarea rows='4' placeholder='YOUR MESSAGE ' className='w-full px-6 py-6 border-2 rounded-3xl text-white bg-gray-800 focus:border-orange-500' required type="text" />
              </div>

              <div className='flex justify-center'>
                <button type="submit" className='bg-gray-800 text-white font-semibold px-4 py-2 rounded-full hover:bg-gray-900 focus:outline-white'>
                  Send message
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