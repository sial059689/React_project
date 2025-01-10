import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        // <div className='w-full absolute flex items-center justify-end z-10 px-6 pt-6'>

        //     <button className=' text-gray-700 rounded-full text-2xl font-[kabir]
        //    px-5 py-1'>Hire Me</button>
        //     <i className="ri-more-2-fill text-3xl text-white"></i>

        // </div>


        <>

            <div className=" mx-auto flex items-center justify-between px-4 py-3 gap-4">
                {/* Logo */}
                <div className="text-2xl font-serif text-gray-600">Rizwan Ali</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-gray-400">
                        Home
                    </a>
                    <a href="#about" className="hover:text-gray-400">
                        About
                    </a>
                    <a href="#services" className="hover:text-gray-400">
                        Services
                    </a>
                    <a href="#contact" className="hover:text-gray-400">
                        Contact
                    </a>
                <link rel="stylesheet" href="" className="hover:text-gray-400" />Contact
                </div>


            </div>




        </>


    )
}

export default Header