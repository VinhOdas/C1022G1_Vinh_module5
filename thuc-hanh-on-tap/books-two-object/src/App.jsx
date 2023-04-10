import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Book from './components/Book'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Book/>} />
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
