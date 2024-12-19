import { useState } from 'react'
import axios from 'axios'

function App() {
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
    console.log(response)
  }

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-300 text-white 
      font-semibold text-2xl rounded  p-2 active:m-0.5'>Get Data</button>

      <div className='bg-slate-950 text-white  px-5 py-4  mt-4 rounded'>helo</div>
    </div>
  )
}

export default App
