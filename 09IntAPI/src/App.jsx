import { useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=05")
    setData(response.data)
    console.log(data[2].download_url)
  }

  return (
    <div className='p-10'>
      <h1 className='font-extrabold text-4xl text-green-500 text-center'>Fetching the Data through 'API'</h1>
      <button onClick={getData} className='bg-teal-300 text-white 
      font-semibold text-2xl rounded  p-2 active:m-0.5 place-content-center'>Get Data</button>

      <div className='bg-slate-950 text-white  px-5 py-4  mt-4 rounded'>
        {data.map(function (elem, idx) {
          return <div key={idx} className='h-96 text-black flex w-full justify-between px-2 py-2 mb-4 bg-gray-50'>
            <img src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}

      </div>
    </div>
  )
}

export default App
