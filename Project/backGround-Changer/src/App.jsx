import {useState} from "react"

function App() {
  const [color, setColor] = useState("White")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className=" flex flex-wrap justify-center  "> 
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl" >
          <button
          onClick={()=>setColor("Red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={()=>setColor("Green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Green"}}
          >Green</button>
          <button
          onClick={()=>setColor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Pink"}}
          >Pink</button>
          <button
          onClick={()=>setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Blue"}}
          >Blue</button>
          <button
          onClick={()=>setColor("Grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Grey"}}
          >Grey</button>
          <button
          onClick={()=>setColor("Lavender")}
          className="outline-none px-4 py-1 rounded-full text-grey shadow-lg"
          style={{backgroundColor:"Lavender"}}
          >Lavender</button>
          <button
          onClick={()=>setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-grey shadow-lg"
          style={{backgroundColor:"Yellow"}}
          >Yellow</button>
        </div>
        
      </div>

    </div>
  )
}

export default App
