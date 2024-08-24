import { useState } from 'react'
import './App.css'
import Dictaphone from './components/Dictaphone'
import Brain_Damage from './components/Brain_Damage'
<<<<<<< HEAD

=======
>>>>>>> 7c6fbc3 (tested openAI text to speech)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dictaphone/>
      {console.log("test")}
      <Brain_Damage/>
    </>
  )
}

export default App
