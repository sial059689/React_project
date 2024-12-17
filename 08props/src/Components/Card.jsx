import React from 'react'

const Card = (props) => {
  console.log(props.pic)
  return (
    <div className=' inline-block m-auto  '>
      <div className='bg-green-100  rounded border-solid border-2 border-indigo-600 mr-6  ml-12 mt-6 p-3'>
        <img className='w-28 h-28  rounded mb-3' src="{props.pic}" alt="" />
        <h1>Name : {props.name}</h1>
        <h1>Age : {props.age}</h1>
        <h1>City : {props.city}</h1>
        <h1>Profession : {props.prof}</h1>
      </div>
    </div>
  )
}

export default Card