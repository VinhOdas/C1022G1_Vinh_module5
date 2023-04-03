import React from 'react'
import Header from '../home/Header'
import Navigation from '../home/Navigation'
import Footer from '../home/Footer'

export default function ContractList() {
  
  return (
    <div>
      <Header/>
        <Navigation/>
        <div>
  <div className="container-fluid">
    <button
      className="btn btn-primary btn-outline-secondary btn-sm"
      data-bs-toggle="modal"
      data-bs-target="#addContract"
    >
      <span className="fa-solid fa-plus text-light h6 my-auto me-1" />
      <span className="text-light">
        {" "}
        Add New Contract
      </span>
    </button>
  </div>
  <table className="table table-dark" border={1}>
    <thead>
      <tr>
        <th className="text-center">STT</th>
        <th>Facility</th>
        <th>Customer</th>
        <th>Date Start</th>
        <th>Date End</th>
        <th>Deposit</th>
        <th className="text-center">Attach Facilities</th>
      </tr>
    </thead>
    <tbody align="center">
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </table>
</div>
    <Footer/>
    </div>
  )
}
