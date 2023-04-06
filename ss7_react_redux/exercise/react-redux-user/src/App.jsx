import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import User from './components/User'
function App() {


  return (
  <>
    <Routes>
      <Route path='/' element= {<User/>}></Route>
    </Routes>
  </>
  )
}

export default App
