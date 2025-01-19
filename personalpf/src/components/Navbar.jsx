import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import iconLogo from '../images/rlogo.png'
import r2Logo from '../images/r2logo.png'

import aLogo from '../images/alogo.png'

const Navbar = () => {


    const downloadCv = 'http://localhost:5173/Rizwan_Ali_FEWD.pdf'
    return (
        <div className='bg-gray-200 container mx-auto flex items-center justify-between px-8 py-4'>

            <div className="flex text-2xl font-bold font-[font3]">
                <img src={r2Logo} alt="" className='h-6 w-6' />
                <h2 className='font-[robboto]'>izwan </h2>
                <img src={aLogo} alt="" className='h-6 w-6' />
                <h2>li</h2>

            </div>

            <div className='flex space-x-6'>

                <Link class='navMenu' to='/'>Home</Link>
                <Link class='navMenu' to='/about'>About</Link>
                <Link class='navMenu' to='/portfolio'>Portfolio</Link>
                <Link class='navMenu' to='/contact'>Contact</Link>

                <div>
                    <Link onClick={() => { downloadCv }} className='pr-8 rounded-full border-2 border-red-400 px-6  py-1 hover:text-sm ' to='/'>Download CV</Link>

                </div>

            </div>

        </div>
    )
}

export default Navbar