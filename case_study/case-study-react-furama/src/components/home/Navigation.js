import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm " style={{width: '100%'}}  align="center" >
    <div className="wrapper  d-flex" style={{marginLeft: '30%'}}>
    <ul className="list d-flex text-bg-light">
      <li style={{width: '100%'}} className="list__item d-flex justify-content-center align-items-center"><a href="/#" >Home</a>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center"><a href="/#">Employee</a>

      </li>
      <li className="list__item d-flex justify-content-center align-items-center"><a href="/#">Customer</a>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center"><a href="/">Facility</a>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center"><a href="/">Contract</a></li>
    </ul>
    </div>
  </nav>
    )
  }
}
