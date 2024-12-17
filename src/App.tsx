import { useState } from 'react'
import './App.css'

function App() {
  //                        vv React Hook
  const [count, setCount] = useState(0)
  //    v destructuring
  const [x, setX] = useState(10)

  // x[0] == number
  // x[1] == setterFunction

  function incrementX(){
    setX(x + 1)
    console.log(x)
  }


  // 🎗️ REMINDER ITS ALL FAKE EVERYTHING IS FAKE
  // let div = {
  //   className: 'card'
  // }

  const cardClass = "card"

  return (
    <>
      <h1>Cool Stuff</h1>

      <div className={cardClass}>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <div>
          <button onClick={incrementX}>{x}</button>
        </div>
      </div>

    </>
  )
}

export default App
