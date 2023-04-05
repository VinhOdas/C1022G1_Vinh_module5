import Header from '../home/Header'
import Navigation from '../home/Navigation'
import CustomerData from './model/Customer'
import {  NavLink } from "react-router-dom";

export default function CustomerList()  {
    return (
      <div>


        <div>
          <button className="btn btn-primary btn-outline-secondary btn-sm">
            <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
            <span className="text-light">
              <NavLink style={{textDecoration: 'none', color: 'whitesmoke'}} to={'/customers/add'} > 
              Create Customer
              </NavLink>
              </span>
          </button>

        </div>
        <table className="table table-dark" border="1" style={{ textAlign: 'center' }}>
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
          <tbody align="center">
            {
              CustomerData.customer.map((customerLists, index) => (

              
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{customerLists.name}</td>
                    <td>{customerLists.dateOfBirth}</td>
                    <td>{customerLists.gender}</td>
                    <td>{customerLists.idCard}</td>
                    <td >{customerLists.phoneNumber}</td>
                    <td>{customerLists.email}</td>
                    <td>{customerLists.address}</td>
                    <td >{customerLists.customerType.name}</td>
                    <td>
                      <button className="btn btn-warning btn-outline-secondary btn-nm">
                        <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
                        <span className="text-light text-align-center">
                          Edit
                          </span>
                      </button>
                    </td>
                    <td><button style={{ backgroundColor: "greenyellow" }}>Delete</button></td>
                  </tr>
               
              ))
            }
            <tr>
            </tr>
          </tbody>
        </table>


      </div>
    )
  }
