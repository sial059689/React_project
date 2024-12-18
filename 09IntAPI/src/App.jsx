import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-10'>
      <button className='bg-teal-300 text-white 
      font-semibold text-2xl rounded  p-2'>Get Data</button>

      <div className='bg-slate-950 text-white  px-5 py-4  mt-4 rounded'>helo</div>
    </div>
  )
}

export default App
