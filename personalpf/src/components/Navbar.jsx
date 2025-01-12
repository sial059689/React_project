import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container mx-auto flex items-center justify-between px-8 py-8'>

            <div className="text-2xl font-bold font-[font3]">Rizwan Ali</div>

            <div className='flex space-x-10'>

                <Link to='/'>Home</Link>
                <Link to='#about'>About</Link>
                <Link to='/'>Portfolio</Link>
                <Link to='/'>Contact</Link>

                <div>
                    <Link className='pr-8 rounded-full border-2 border-red-400 px-6  py-1 hover:bg-red-100 ' to='/'>Download CV</Link>

                </div>

            </div>

        </div>
    )
}

export default Navbar