import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {

  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"

    if (numberAllow) str += "0123456789"
    if (charAllow) str += "{[(/\?|@#$)]}"



    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllow, charAllow])
  
  const  onClickPasswordClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 32)
    window.navigator.clipboard.writeText(password)
  }, [password])
 


  {/* use Effect hook working starts here */ }

  useEffect(() => { passGenerator() }, [length, numberAllow, charAllow, passGenerator])

  return (
    < div >
      {/* Main/Container div working starts here */}

      <div className="w-full max-w-xl mx-auto bg-gray-900 rounded-lg shadow-md
       text-orange-300 px-4 py-3 my-24">

        <h1 className="text-orange-400 text-center text-4xl pb-3">Password Generator</h1>


        {/* password working starts here */}

        <div className="flex shadow overflow-hidden mb-4 rounded-lg">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}

          />
          <button
          onClick={onClickPasswordClipboard}
          className="outline-none bg-blue-500 text-white text-lg px-3 py-0.5 shrink-0 hover:bg-sky-700">Copy</button>

        </div>
        <div className="flex text-sm gap-x-2">

          {/* Length range working starts here */}

          <div className="flex items-center gap-x-1">

            <input type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>

          {/* Number Allow checkbox working */}

          <div className="flex text-sm gap-x-2">

            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => setNumberAllow((prev => !prev))}
            />
            <label>Number</label>

          </div>

          {/* Char Allow checkbox working */}

          <div className="flex text-sm gap-x-2">

            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => setCharAllow((prev => !prev))}
            />
            <label>Character</label>

          </div>

        </div>

      </div>

    </div >
  );
}

export default App;
