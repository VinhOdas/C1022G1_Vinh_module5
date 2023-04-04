
import { NavLink } from "react-router-dom";


export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-sm " style={{width: '100%'}}  align="center" >
    <div className="wrapper  d-flex" style={{marginLeft: '30%'}}>
    <ul className="list d-flex text-bg-green ">
      <li style={{width: '100%' , textDecoration: 'none'}}  className="list__item d-flex justify-content-center align-items-center">
      <NavLink to="/">Home</NavLink>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center">
        <NavLink to="/customers">Customer</NavLink>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center">
        <NavLink to="/facility">Facility</NavLink>
      </li>
      <li className="list__item d-flex justify-content-center align-items-center">
        <NavLink to="/contracts">Contract</NavLink></li>
    </ul>
    </div>
  </nav>
    )

}
