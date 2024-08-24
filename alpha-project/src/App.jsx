import { useState } from 'react'
import './App.css'
import Dictaphone from './components/Dictaphone'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dictaphone/>
    </>
  )
}

export default App
