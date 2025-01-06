import React from 'react'
import mainLogo from './images.jpg'
import PageBotton from '../components/PageBotton'
import TiltTex from '../components/TiltTex'

const Page1 = () => {
    return (
        <div className='h-screen bg-white px-2 py-2'>
            <div className='h-full w-full bg-gray-600 p-10 rounded-3xl shadow-2xl shadow-grey-500 '>

                <img className='h-16' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
               
               
                <TiltTex />
                <PageBotton />


            </div>
        </div>
    )
}

export default Page1