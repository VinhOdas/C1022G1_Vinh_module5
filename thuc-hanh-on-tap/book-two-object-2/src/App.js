import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Book from './components/Book';
import BookAdd from './components/BookAdd';
import BookEdit from './components/BookEdit';
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Book/>} />
            <Route path='/add' element={<BookAdd/>} />
            <Route path='/edit/:id' element={<BookEdit/>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
