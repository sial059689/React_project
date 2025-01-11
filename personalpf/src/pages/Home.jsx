import React from 'react'
import 'remixicon/fonts/remixicon.css'
import PageBody from '../components/PageBody'
import PageBottom from '../components/PageBottom'

const Home = () => {
    return (
        <div>
            <div className='h-full w-full bg-white px-2 py-2'>
                <img className='h-16' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
            </div>


           <PageBody /> 
           <PageBottom /> 
        </div>
    )
}

export default Home