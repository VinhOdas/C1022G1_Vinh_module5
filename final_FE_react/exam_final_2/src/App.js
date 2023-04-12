import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navigation from './components/home/Navigation';
import Exam from './components/Exam';
import ExamAdd from './components/ExamAdd';
import ExamEdit from './components/ExamEdit';




function App() {
  return (

    <>
      <BrowserRouter>
        <div className="sticky-top">
          <Navigation />
        </div>
        <Routes>

          <Route path='/' element={<Exam />} />
          <Route path='/add' element={<ExamAdd />} />
          <Route path='/edit/:id' element={<ExamEdit />} />
        
        </Routes>
      </BrowserRouter>
    </>




  );
}

export default App;
