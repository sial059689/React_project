import React from 'react'
import Footer from './components/Footer'

const Components = () => {
    return (
        <>

            <nav className='bg-emerald-200 flex items-center justify-between'>
                <h1 className='text-red-700 text-3xl ml-8 mt-8 pb-5  font-extrabold text-center'>Components working </h1>

                <div className='flex gap-5 mt-2 mr-6 items-center'>
                    <h4>Home</h4>
                    <h4>Form Submit Handler</h4>
                    <h4>Two Way Binding</h4>
                </div>
            </nav>

            {/* Footer component */}
            <Footer />
        </>
    )
}

export default Components