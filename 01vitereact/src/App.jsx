import { useState } from 'react'
import './App.css'

function App() {
  //let counter = "0"

let [counter, setCounter] = useState(0)
// let [removeValue, setRemoveValue] = useState(0)

let addValue = () =>{
  setCounter(counter+1)
  if (counter === 10)
      alert("The limit of this Counter is 10")
  
}

let removeValue = () =>{
  setCounter(counter-1)

}

  return (
    <div className='w-full h-screen bg-slate-800  text-white py-20 text-center font-semibold'>
      <div className=''>

        <h1 className='font-extrabold text-9xl'>Number Counter</h1>
        <h3 className='text-8xl mt-10'>Counter is : {counter}</h3>
        <button 
        onClick={addValue}
        className='mt-14 rounded-full px-6 py-4 text-4xl 
        font-serif bg-blue-600 hover: cursor-default mr-12'>Add Value</button>
        <button 
        onClick={removeValue}
        className='mt-14 mr-10 rounded-full px-6 py-4 text-4xl 
        font-serif bg-blue-600 hover: cursor-default '>Remove Value</button>


      </div>
    </div>

  )
}

export default App
