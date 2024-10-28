import React, { useState2w } from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted')

  }

  return (

    <div>

      <form onSubmit={(e) => {
          submitHandler(e)
        }}
      >

        <input className='rounded bg-green-400 mx-3 my-3 px-2 text-white py-1'
          type="text" name="" id="" placeholder='First Name' />

        <input className='rounded bg-green-400 mx-3 my-3 px-2 text-white py-1'
          type="text" name="" id="" placeholder='First Name' />

        <button
          className='rounded bg-blue-600 text-white px-2 py-1'>
          Submit
        </button>

      </form>

    </div>
  )
}

export default App
