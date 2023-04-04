import { useState } from 'react'
import './App.css'

import HealthDeclaration from './components/HealthDeclaration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HealthDeclaration/>
    </>
  )
}

export default App
