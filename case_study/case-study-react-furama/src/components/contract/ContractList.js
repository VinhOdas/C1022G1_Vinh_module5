import React from 'react'

import Footer from '../home/Footer'
import   ContractData from './model/Contract'
import { NavLink } from 'react-router-dom'

export default function contractLists() {
  
  return (
    <div>
   
        <div>
  <div className="container-fluid">
    <button
      className="btn btn-primary btn-outline-secondary btn-sm"
      data-bs-toggle="modal"
      data-bs-target="#addContract"
    >
      <span className="fa-solid fa-plus text-light h6 my-auto me-1" />
      <span className="text-light">
        <NavLink to='/contracts/add'>Add New Contract</NavLink>
        
      </span>
    </button>
  </div>
  <table style={{textAlign: 'center'}} className="table table-dark" border={1}>
    <thead>
      <tr>
        <th className="text-center">STT</th>
        <th>Facility</th>
        <th>Customer</th>
        <th>Date Start</th>
        <th>Date End</th>
        <th>Deposit</th>
        <th className="text-center">
          Attach Facilities</th>
          <th className="text-center">
          Delete</th>
      </tr>
    </thead>
    <tbody align="center">
      {
            ContractData.contract.map((contractLists, index) =>(
              
              <tr style={{textAlign: 'center'}} key={index}>
                  <td>{index + 1}</td>
                  <td >{contractLists.facility.name}</td>
                  <td >{contractLists.customer.name}</td>
                  <td>{contractLists.startDate}</td>
                  <td>{contractLists.endDate}</td>
                  <td>{contractLists.deposit}</td>
                  <td>
                      <button className="btn btn-warning btn-outline-secondary btn-nm">
                        <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
                        <span className="text-light text-align-center">
                          Detail
                          </span>
                      </button>
                    </td>
                    <td><button style={{ backgroundColor: "greenyellow" }}>Delete</button></td>
              </tr>
             
            ))
        }
          
    </tbody>
  </table>
</div>
    <Footer/>
    </div>
  )
}
