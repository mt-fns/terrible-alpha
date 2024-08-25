import { useState } from 'react'
import './App.css'
import Dictaphone from './components/Dictaphone'
import Brain_Damage from './components/Brain_Damage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dictaphone/>
    </>
  )
}

export default App
