import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        <div className='w-full absolute flex items-center justify-end z-10 px-6 pt-6'>

            <button className=' text-white rounded-full text-lg
         bg-black hover:bg-gray-500 border-2 px-5 py-1'>Hire Me</button>
            <i className="ri-more-2-fill text-3xl text-white"></i>

        </div>
    )
}

export default Header