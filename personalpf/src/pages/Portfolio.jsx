import React from 'react'
import hImage from '../images/homeImage2.jpg'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <>
            <div className='flex'>
                {/* right side nav bar section */}
                <div className='w-1/6'>

                    <div>
                        <div className='h-[30vh] bg-slate-500'></div>


                        <div className='h-[70vh] bg-red-300 columns-4'>

                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/portfolio'>Portfolio</Link>
                            <Link to='/contact'>Contact</Link>
                        </div>
                    </div>

                </div>

                {/* left side image section */}
                <div className='w-5/6'>

                    <div className=' w-full h-screen'>
                        <img src={hImage} alt="" className='w-full h-screen bg-cover bg-no-repeat blur-0' />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Portfolio