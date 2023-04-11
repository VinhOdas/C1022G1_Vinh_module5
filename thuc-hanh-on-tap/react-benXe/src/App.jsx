import { useState } from 'react'

import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BenXe from './components/BenXe'
import BenXeAdd from './components/BenXeAdd'
import BenXeEdit from './components/BenXeEdit'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<BenXe/>} />
      <Route path='/add' element={<BenXeAdd/>} />
      <Route path='/edit/:id' element={<BenXeEdit/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
