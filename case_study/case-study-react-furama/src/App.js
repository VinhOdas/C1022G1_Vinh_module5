import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from './components/home/Home'
import CustomerList from './components/customer/CustomerList';
import CustomerAdd from './components/customer/CustomerAdd';
import FacilityList from './components/facility/FacilityList';
import ContractList from './components/contract/ContractList';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/customers' element={<CustomerList/>} />
      <Route path='/customers/add' element={<CustomerAdd/>} />
      <Route path='/facility' element={<FacilityList/>} />
      <Route path='/contracts' element={<ContractList/>} />
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
