import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // 🎗️ REMINDER ITS ALL FAKE EVERYTHING IS FAKE
  // let div = {
  //   className: 'card'
  // }

  return (
    <>
      <h1>Cool Stuff</h1>

      <div className="card"  >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
