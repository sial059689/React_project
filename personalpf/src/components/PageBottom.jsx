import React from 'react'

const PageBottom = () => {
  return (
    <div className='bg-gray-900 absolute items-end p-4 flex justify-between w-full bottom-0 left-0'>
      <div>

        <h3 className='text-xl font-[robboto] text-gray-200'>Follow me:
          <i className="ri-twitter-fill text-xl ml-2 text-gray-200"></i>
          <i className="ri-linkedin-box-line text-xl ml-2 text-gray-200"></i>
          <i className="ri-messenger-fill text-xl ml-2 text-gray-200"></i>
          <i className="ri-facebook-box-line text-xl ml-2 text-gray-200"></i>
          <i className="ri-github-fill textxl ml-2 text-gray-200"></i>

        </h3>
      </div>

      <div>
        <i className="ri-sparkling-2-fill text-2xl text-gray-200"></i>
        <i className="ri-sparkling-line text-2xl text-gray-200"></i>
        <i className="ri-sparkling-line text-2xl text-gray-200"></i>
        <i className="ri-sparkling-2-fill text-2xl text-gray-200"></i>
      </div>

    </div>
  )
}

export default PageBottom