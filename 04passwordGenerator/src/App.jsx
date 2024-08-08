import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if (numberAllowed) str =+ "0123456789"
if (charAllowed) str =+ "\!@#$%&*[]{}<>?/"
let char = ""

  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <div>
      <h1 className="text-white text-center text-4xl font-serif mt-4">Password Generator</h1>
      <h2>Copy</h2>
    </div>
  );
}

export default App;
