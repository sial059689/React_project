import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import iconLogo from '../images/rlogo.png'
import r2Logo from '../images/r2logo.png'

import aLogo from '../images/alogo.png'

const Navbar = () => {


    const downloadCv = 'http://localhost:5173/Rizwan_Ali_FEWD.pdf'
    return (
        <div className='bg-black container text-white mx-auto flex items-center justify-between px-8 py-4'>

            <div className="flex text-2xl font-bold font-[font3]">
                <h2 className='text-gray-500 font-[robboto]'>RIZWAN ALI</h2>

            </div>

            <div className='flex space-x-12 hover:bg-white left-0 bottom-0 '>

                <Link className='uppercase' class='navMenu' to='/'>Home</Link>
                <Link className='uppercase' class='navMenu' to='/about'>About</Link>
                <Link className='uppercase' class='navMenu' to='/portfolio'>Portfolio</Link>
                <Link className='uppercase' class='navMenu' to='/contact'>Contact</Link>

                

            </div>

        </div>
    )
}

export default Navbar