import { useState } from 'react'
import './App.css'

function App() {
  

  let [counter, setCounter] = useState(0)
 
// Add value button working starts here 

  let addValue = () => {
    
   if (counter <= 49) {
    
     setCounter(counter + 1)
   }
    
 }

 // Remove value button working starts here 

  let removeValue = () => {
    if (counter >= 1) {
    
      setCounter(counter - 1)
    }
    

  }

  return (
    <div className='w-full h-screen bg-slate-800  text-white py-20 text-center font-semibold'>
      <div className=''>

        <h1 className='font-extrabold text-9xl'>Number Counter</h1>
        <h3 className='text-8xl mt-10'>Counter is : {counter}</h3>
        <button
          onClick={addValue}
          className='mt-14 rounded-full px-6 py-4 text-4xl 
        font-serif bg-green-600  cursor-default mr-12 hover:bg-green-700'>Add Value</button>
        <button
          onClick={removeValue}
          className='mt-14 mr-10 rounded-full px-6 py-4 text-4xl 
        font-serif bg-red-600  cursor-default hover:bg-red-700'>Remove Value</button>


      </div>
      <div>
        <p className='mt-4'>Note : This counter will only works between 0 - 50 Number</p>
      </div>
    </div>

  )
}

export default App
