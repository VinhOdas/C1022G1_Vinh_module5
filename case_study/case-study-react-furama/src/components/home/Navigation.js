import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navigation extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm " style={{width: '100%'}}  align="center" >
    <div className="wrapper  d-flex" style={{marginLeft: '30%'}}>
    <ul className="list d-flex text-bg-green ">
      <li style={{width: '100%' , textDecoration: 'none'}}  className="list__item d-flex justify-content-center align-items-center">
      <Link to="/">Home</Link>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center">
        <Link to="/customers">Customer</Link>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center">
        <Link to="/facility">Facility</Link>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center">
        <Link to="/contracts">Contract</Link></li>
    </ul>
    </div>
  </nav>
    )
  }
}
