import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import iconLogo from '../images/rlogo.png'
import r2Logo from '../images/r2logo.png'

import aLogo from '../images/alogo.png'

const Navbar = () => {

    return (
        <div className='bg-gray-900 max-w-full container text-gray-300 mx-auto flex items-center justify-between px-8 py-4'>

            <div className="flex text-2xl font-bold font-[font3]">
                <h2 className='text-gray-500 font-[robboto]'>RIZWAN ALI</h2>

            </div>

            <div className='flex font-[robboto] uppercase space-x-12 '>

                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>RESUME</Link>
                <Link to='/contact'>Contact</Link>



            </div>

        </div>
    )
}

export default Navbar