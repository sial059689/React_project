import React from 'react'
import { Link } from 'react-router-dom'
import lImage from '../images/line.png'
import 'remixicon/fonts/remixicon.css'
import rLogo from '../images/rlogo.png'

const HeaderNavPart = () => {
    return (

        <>

            <div className='w-[12vw]'>

                <div>
                    <div className='h-[30vh] bg-gray-600 place-content-center'>

                        <Link to='/'>
                            <img src={rLogo} alt="" className=' w-full' />
                        </Link>

                    </div>


                    <div className='h-[70vh] bg-gray-900 flex flex-col space-y-3 pt-2'>

                        <Link to='/' className=''>
                            <div className='flex space-x-2 text-xl pl-8 text-[robboto] text-gray-300'>
                                <i className="ri-home-office-line"></i>
                                <Link to='/' className=''>Home</Link>
                            </div>
                        </Link>

                        <div>
                            <img className='h-1 w-48 mt-1' src={lImage} alt="" />
                        </div>

                        <Link to='/about' className=''>
                            <div className='flex space-x-2 text-xl pl-8 text-[robboto] text-gray-300'>
                                <i className="ri-account-circle-fill"></i>
                                <Link to='/about'>About</Link>
                            </div>
                        </Link>

                        <div>
                            <img className='h-1 w-48 mt-0' src={lImage} alt="" />
                        </div>

                        <Link to='/resume' className=''>
                            <div className='flex space-x-2 text-xl pl-8 text-[robboto] text-gray-300'>
                                <i className="ri-mail-star-fill"></i>
                                <Link to='/resume'>RESUME</Link>
                            </div>
                        </Link>

                        <div>
                            <img className='h-1 w-48 mt-0' src={lImage} alt="" />
                        </div>

                        <Link to='/contact' className=''>
                            <div className='flex space-x-2 text-xl pl-8 text-[robboto] text-gray-300'>
                                <i className="ri-mail-ai-line"></i>
                                <Link to='/contact'>Contact</Link>
                            </div>
                        </Link>

                        <div>
                            <img className='h-1 w-48 mt-0' src={lImage} alt="" />
                        </div>

                        <div className='absolute items-end flex w-full bottom-16 px-4 space-x-4'>
                            <i className="ri-linkedin-box-line text-gray-300"></i>
                            <i className="ri-twitter-fill text-gray-300"></i>
                            <i className="ri-messenger-fill text-gray-300"></i>
                            <i className="ri-facebook-box-line text-gray-300"></i>
                            <i className="ri-github-fill text-gray-300"></i>
                        </div>

                        <div className='absolute items-end p-6 flex justify-between w-full bottom-0'>

                            <Link to='/' className=''>
                                <p className='text-center text-[robboto] text-gray-300 text-2xl'>RIZWAN ALI</p>
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default HeaderNavPart