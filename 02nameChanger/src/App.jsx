import React, { useState } from 'react'

const App = () => {


  const [a, setA] = useState('Hello')


  const change = () => {
    setA('Rizwan')
  }

  return (
    <div className="w-full h-screen bg-green-500 p-6 mx-auto">
      <h1 className=" text-2xl">{a}</h1>

      <button className=" bg-slate-400 text-white rounded-lg w-40 py-2 text-lg"
        onClick={change}
      >Change Name</button>

    </div>
  )
}

export default App
