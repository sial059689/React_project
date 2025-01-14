import React from 'react'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div className=''>

      <Navbar />

      <div className='mt-4 max-w-xl w-full mx-auto p-6 bg-gray-500 rounded-lg shadow-md'>

        <h2 className='text-3xl text-center text-white font-bold mb-6'>Contact us</h2>
        <form action="">

          <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Name</label>
            <input placeholder='Type your name' className='w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:border-blue-500' required type="text" />
          </div>

          <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Email</label>
            <input placeholder='Email@example.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:border-blue-500' required type="email" />
          </div>

          <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Message</label>
            <textarea rows='4' placeholder='Type your message here. . .. ' className='w-full px-3 py-2 border rounded-lg text-white bg-gray-800 focus:border-blue-500' required type="text" />
          </div>

          <div className='flex justify-center'>
            <button type="submit" className='bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-900 focus:outline-white'>
              Send message
            </button>
          </div>

        </form>
      </div>

      <PageBottom />
    </div>
  )
}

export default Contact