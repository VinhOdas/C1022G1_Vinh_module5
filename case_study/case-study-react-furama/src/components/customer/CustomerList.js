
import { useEffect, useState } from 'react';
import {  NavLink } from "react-router-dom";
import * as CustomerService from './service/CustomerService'

export default function CustomerList()  {
  const [customer, setCustomer] = useState([])

  useEffect(() =>{
    const listCustomer = async() =>{
      const res = await CustomerService.getAll()
       await CustomerService.getAllCustomertype()
      setCustomer(res)
    }
    listCustomer()

  },[])
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
              customer.map((customerLists, index) => (

              
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

                      <NavLink to={`/customers/edit/${customerLists.id}`} className="btn btn-warning btn-outline-secondary btn-nm">
                        <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
                        <span className="text-light text-align-center">
                          Edit
                          </span>
                      </NavLink>
                    </td>
                    <td><NavLink style={{ backgroundColor: "greenyellow" }}>Delete</NavLink></td>
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
