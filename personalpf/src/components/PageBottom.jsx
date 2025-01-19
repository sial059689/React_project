import React from 'react'

const PageBotton = () => {
  return (
    <div className='bg-black absolute items-end p-4 flex justify-between w-full bottom-0 left-0'>
      <div>

        <h3 className='text-xl  text-white font-[robboto]'>Follow me:
          <i className="ri-twitter-fill text-xl ml-2 text-white"></i>
          <i className="ri-linkedin-box-line text-xl ml-2 text-white"></i>
          <i className="ri-messenger-fill text-xl ml-2 text-white"></i>
          <i className="ri-facebook-box-line text-xl ml-2 text-white"></i>
          <i className="ri-github-fill textxl ml-2 text-white"></i>

        </h3>
      </div>

      <div>
        <i className="ri-sparkling-2-fill text-2xl text-white"></i>
        <i className="ri-sparkling-line text-2xl text-white"></i>
        <i className="ri-sparkling-line text-2xl text-white"></i>
        <i className="ri-sparkling-2-fill text-2xl text-white"></i>
      </div>

    </div>
  )
}

export default PageBotton