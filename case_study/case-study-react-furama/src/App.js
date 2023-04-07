import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from './components/home/Home'
import CustomerList from './components/customer/CustomerList';
import CustomerAdd from './components/customer/CustomerAdd';
import FacilityList from './components/facility/FacilityList';
import ContractList from './components/contract/ContractList';
import FacilityAdd from './components/facility/FacilityAdd';
import FacilityEdit from './components/facility/FacilityEdit';
import ContractAdd from './components/contract/ContractAdd';
import Header from './components/home/Header';
import Navigation from './components/home/Navigation';
import Footer from './components/home/Footer';
import CustomerEdit from './components/customer/CustomerEdit';



function App() {
  return (

    <>
      <Header />

      <BrowserRouter>
        <div className="sticky-top">
          <Navigation />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customers' element={<CustomerList />} />
          <Route path='/customers/add' element={<CustomerAdd />} />
          <Route path='/customers/edit/:id' element={<CustomerEdit />} />
          <Route path='/facility' element={<FacilityList />} />
          <Route path='/contracts' element={<ContractList />} />
          <Route path='/facility/add' element={<FacilityAdd />} />
          <Route path='/facility/edit/:id' element={<FacilityEdit />} />
          <Route path='/contracts/add' element={<ContractAdd />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>




  );
}

export default App;
