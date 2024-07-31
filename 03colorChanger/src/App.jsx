import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-8 ">
        <div className="flex flex-wrap gap-3 justify-center bg-white rounded-lg px-2 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none  shadow-lg rounded-full px-5 py-1"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("grey")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("silver")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "silver" }}
          >
            Silver
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none  shadow-lg text-white rounded-full px-5 py-1"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
