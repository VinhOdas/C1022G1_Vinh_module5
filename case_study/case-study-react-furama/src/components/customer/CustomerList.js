import React, { Component } from 'react'
import Header from '../home/Header'
import Navigation from '../home/Navigation'

export default class CustomerList extends Component {
  render() {
    return (
      <div>
      
            <Header/>
            <Navigation/>

            <div>
  <button className="btn btn-primary btn-outline-secondary btn-sm" data-bs-toggle="modal"
          data-bs-target="#addContract">
    <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
    <span  className="text-light"> Create Customer</span>
  </button>

</div>
<table className="table table-dark" border="1" style={{textAlign: 'center'}}>
    <thead>
    <tr>
      <th>STT</th>
      <th>Name</th>
      <th>Date Of Birth</th>
      <th>Gender</th>
      <th>ID Card</th>
      <th>Phone Number</th>
      <th>Email</th>
      <th>Address</th>
      <th>Type</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </thead>
    <tbody >
   <tr>
    </tr>
    </tbody>
  </table>


      </div>
    )
  }
}
