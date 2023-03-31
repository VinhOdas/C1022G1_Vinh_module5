import React, { Component } from 'react'
import Footer from '../home/Footer'
import Header from '../home/Header'
import Navigation from '../home/Navigation'

 class FacilityList extends Component {
  render() {
    return (
   
        <div>
            <body className="d-flex flex-column" >
<Header/>
<Navigation/>
<div className="container-fluid">
  <div>
    <button className="btn btn-primary btn-outline-secondary btn-sm" data-bs-toggle="modal"
            data-bs-target="#addContract">
      <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
      <span   className="text-light"> Create Facility</span>
    </button>
  </div>
  <div className="row">
    <table className="table table-dark" border="1">
      <thead>
      <tr>
        <th>STT</th>
        <th>Name</th>
        <th>Area</th>
        <th>Cost</th>
        <th>Max People</th>
        <th>Standard Room</th>
        <th>Description Other Convenience</th>
        <th>Pool Area</th>
        <th>Floors</th>
        <th>Facility Free</th>
        <th>Rent Type</th>
        <th>Facility Type</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody align="center">
     <tr></tr>
      </tbody>
    </table>

  </div>


</div>

<Footer/>
</body>
        </div>

    )
  }
}
export default FacilityList