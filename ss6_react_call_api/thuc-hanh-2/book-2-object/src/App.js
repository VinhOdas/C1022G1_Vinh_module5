import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Books from './components/Books'
import BookAdd from './components/BookAdd'
import BookEdit from './components/BookEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path={'/'} element={<Books/>}/>
        <Route path={'/add'} element={<BookAdd/>}/>
        <Route path={'/edit/:id'} element={<BookEdit/>}/>
        </Routes>

      </BrowserRouter>
      </>
  );
}

export default App;
