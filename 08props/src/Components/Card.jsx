import React from 'react'

const Card = (props) => {
  return (
    <div className='w-full h-screen bg-black'>
      <div className='w-40 h-56 bg-white rounded m-6 p-3 inline-block'>
        <img className='w-28 h-28 bg-white rounded mb-3' src="" alt="" />
        <h1>Name : {}</h1>
        <h1>Age : </h1>
        <h1>City : </h1>
      </div>
    </div>
  )
}

export default Card