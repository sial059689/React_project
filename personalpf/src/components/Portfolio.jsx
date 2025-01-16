import React from 'react'
import PageBottom from '../components/PageBottom'
import Navbar from '../components/Navbar'

const Portfolio = () => {
    return (
        <>
            <div className=' w-full h-full'>

                <Navbar />
                <h1 className='flex justify-center'>This is Portfolio page</h1>

                <PageBottom />

            </div>
        </>
    )
}

export default Portfolio