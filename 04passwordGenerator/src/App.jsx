import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-400">
      <h1>Password Generator</h1>
    </div>
  );
}

export default App;
