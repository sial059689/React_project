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
                        <div className='h-[30vh] bg-orange-700'></div>


                        <div className='h-[70vh] bg-gray-700 flex flex-col space-y-8 items-center'>

                         <div className='flex'>
                         <i className="ri-home-office-line"></i>
                         <Link to='/'>Home</Link>
                         </div>
                         <i className="ri-expand-horizontal-s-fill"></i>
                                
                                <Link to='/about'>About</Link>
                                <Link to='/portfolio'>Portfolio</Link>
                                <Link to='/contact'>Contact</Link>

                        </div>
                    </div>

                </div>

                {/* left side image section */}
                <div className='5/6'>

                    <div className=' w-full h-screen'>
                        <img src={hImage} alt="" className='w-full h-screen bg-cover bg-no-repeat blur-0' />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Portfolio