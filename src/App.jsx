import { useState,useRef } from 'react'
import './App.css'



function App() {
  const ref = useRef(0);
  const [count, setCount] = useState(0)
  console.log("ref",ref.current);

  const handleClick = () => {
    ref.current = ref.current + 1;
    
  }

  return (
    <>
      <div className="">
        <button onClick={handleClick}> ref click {ref.current} </button>
      </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    
    </>
   
  )
}

export default App
