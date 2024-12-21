import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='bg-slate-500 w-full h-16 py-4 px-10 flex text-white items-center justify-between'>
        <h1 className='text-2xl'>Header <input className='rounded text-black' type="text" name="" id="" /></h1>
        <div className='flex gap-6 text-white underline'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Header