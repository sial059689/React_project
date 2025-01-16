import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css' 

const Navbar = () => {


    const downloadCv = 'http://localhost:5173/Rizwan_Ali_FEWD.pdf'
    return (
        <div className='container mx-auto flex items-center justify-between px-8 py-8'>

            <div className="text-2xl font-bold font-[font3]">Rizwan Ali</div>

            <div className='flex space-x-10'>

                <Link class='navMenu' to='/'>Home</Link>
                <Link class='navMenu' to='/about'>About</Link>
                <Link class='navMenu' to='/portfolio'>Portfolio</Link>
                <Link class='navMenu' to='/contact'>Contact</Link>

                <div>
                    <Link onClick={()=>{downloadCv}} className='pr-8 rounded-full border-2 border-red-400 px-6  py-1 hover:text-sm ' to='/'>Download CV</Link>

                </div>

            </div>

        </div>
    )
}

export default Navbar