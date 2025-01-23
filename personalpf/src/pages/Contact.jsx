import React, { useState } from 'react'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'
import sendIcon from '../images/send.png'
import addressImg from '../images/address.png'
import mail2Img from '../images/mail2.png'
import phoneImg from '../images/phone.png'


const Contact = () => {



  return (
    <div className='bg-gray-500 h-screen'>

      <Navbar />

      <div className='mt-2 w-full p-6 bg-gray-500 rounded-lg'>

        {/* page heading */}
        <h2 className='text-6xl text-center text-gray-200 font-bold font-[robboto] '>GET IN TOUCH</h2>

        <div className='flex mx-auto'>
          {/* left section  */}
          <div className='w-1/3 mt-6 mr-6 items-center'>

            <div>
              <h1 className='text-gray-300 text-4xl font-[robboto] text-center pt-6'>DON'T BE SHY!</h1>
              <p className='text-white px-12 pt-4 text-justify'>Feel free to get in touch with me. I am always open to discussing new projects,
                creative ideas or opportunities to be part of your visions.</p>
            </div>

            <div className='flex pl-10 pt-12'>
              <img src={addressImg} alt="" className='h-6 w-6 flex text-gray-200' />
              <p className='pt-0 pl-3'>Chungi Amer Sidhu, Lahore.</p>
            </div>

            <div className='flex pl-10 pt-4'>
              <img src={mail2Img} alt="" className='h-6 w-6 flex text-gray-200' />
              <p className='pt-0 pl-3'>rizzar3505@gmail.com</p>
            </div>

            <div className='flex pl-10 pt-4'>
              <img src={phoneImg} alt="" className='h-6 w-6 flex text-gray-200' />
              <p className='pt-0 pl-3'>+92 3084543596</p>
            </div>

            <div className='flex pl-10 pt-8 text-yellow-500 text-xl'>
              <i className="ri-twitter-x-line px-1 "></i>
              <i className="ri-facebook-fill px-1 "></i>
              <i className="ri-messenger-fill px-1 "></i>
              <i className="ri-github-line px-1 "></i>
              <i className="ri-linkedin-line px-1"></i>
            </div>

          </div>


          {/* form submission  */}
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