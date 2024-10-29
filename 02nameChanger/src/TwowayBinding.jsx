import React, { useState } from 'react'

const TwowayBinding = () => {

    const [bind, setBind] = useState('')

    
    const submitHandler = (e) => {
        e.preventDefault(e)

        console.log("submitted")
        setBind("")
    }

    return (
        <div className=''>

            <form
                onSubmit={(e) => {
                    submitHandler(e)
                }}
            >

                <input
                    value={bind}
                    onChange={(e) => {
                        setBind(e.target.value)
                    }}
                    className='rounded bg-green-400 mx-3 my-3 px-2 text-white py-1'
                    type="text" name="" id="" placeholder='First Name'
                />

                <input className='rounded bg-green-400 mx-3 my-3 px-2 text-white py-1'
                    type="text" name="" id="" placeholder='Last Name'
                />

                <button
                    className='rounded bg-blue-600 text-white px-2 py-1'>
                    Submit
                </button>

            </form>

<h2 className='font-sans text-3xl ml-5 mt-10'>{bind}</h2>
<h2 className='font-thin text-3xl ml-16 mt-10'>{bind}</h2>
<h2 className='font-mono text-3xl ml-24 mt-10'>{bind}</h2>
<h2 className='font-thin text-3xl ml-16 mt-10'>{bind}</h2>
<h2 className='font-semibold text-3xl ml-5 mt-10'>{bind}</h2>

        </div>
    )
}

export default TwowayBinding