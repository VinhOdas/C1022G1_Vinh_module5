import './App.css'
import Books from './components/Books'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BooksAdd from './components/BookAdd'
import BookEdit from './components/BookEdit'


function App() {

  return (
    <>
    <>
      <BrowserRouter>
      <Routes>
        <Route path='books' element={<Books/>} />
        <Route path='books/add' element={<BooksAdd/>} />
        <Route path='books/edit/:id' element={<BookEdit/>} />
      </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
