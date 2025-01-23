import React from 'react'
import 'remixicon/fonts/remixicon.css'
import PageBody from '../components/PageBody'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'



const Home = () => {
    return (
        <div className='bg-gray-500 w-full'>

            <Navbar />


            <div className='text-8xl ml-2'>
                <i className="ri-sparkling-2-fill text-2xl text-gray-200"></i>
                <i className="ri-sparkling-line text-2xl text-gray-200"></i>
                <i className="ri-sparkling-line text-2xl text-gray-200"></i>
                <i className="ri-sparkling-2-fill text-2xl text-gray-200"></i>
            </div>



            <PageBody />
            <PageBottom />

        </div>
    )
}

export default Home