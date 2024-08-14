import { useCallback, useState } from "react";
import "./App.css";

function App() {

  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"

    if (numberAllow) str += "0123456789"
    if (charAllow) str += "{[(/\?|@#$)]}"

    for (let i = 1; i < array.length; i++) {
      let char = math.floor(math.random() * str.length + 1)

      pass = str.charAt(char)
    }

    setPassword(pass)
    console.log(setPassword);


  }

    , [length, numberAllow, charAllow])

  return (
    <div>
      <h1 className=" text-orange-300 text-center text-6xl font-serif mt-12 mb-4
      ">Password Generator</h1>
      <div className="w-full max-w-md mx-auto rounded-full  text-orange-300
      px-4 py-3">
<input type="text" value={password} 
className="outline-none w-full px-4 py-3 rounded-full readOnly" placeholder="Enter Your Password" />
      </div>
    </div>
  );
}

export default App;
