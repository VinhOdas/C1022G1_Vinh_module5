import React, { Component } from 'react'
import Footer from '../home/Footer'
import Header from '../home/Header'
import Navigation from '../home/Navigation'

export default class CustomerEdit extends Component {
  render() {
    return (
      <div>
        
<body className="d-flex flex-column" >

<Header/>

<Navigation/>

<div className="container">
  <div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <strong id="inDam"><h1 className="card-title"style={{color: 'red'}}>Edit Customer</h1></strong>
        </div>
        <form   >
          <div className="card-body">
            <div className="col-xl-12 col-md-12 col-sm-12 mb-2">

              <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                <label className="form-label" for="name_customer">Name Customer::</label>
                <div className="input-group input-group-merge">
                  <input type="text" className="form-control phone-number-mask" placeholder="Input Name" id="name_customer"
                         />
                </div>
       

              </div>


              <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                <label className="form-label" for="dateOfBirth">Date Of Birth :</label>
                <input type="date" className="form-control date-mask" placeholder="birth Day"
                       id="dateOfBirth" />
             
              </div>


              <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                <label className="form-label" for="gender">gender :</label>
                <select className="form-control"  id="gender">
                  <option >Nam</option>
                  <option>Nu</option>
                  <option >LGBT</option>
                </select>
             
              </div>



              <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                <label className="form-label" for="idCard">Id Card :</label>
                <input type="text" className="form-control numeral-mask" placeholder="Id Card :" id="idCard"  />
             
              </div>



              <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                <label className="form-label" for="phoneNumber">Phone Number :</label>
                <input type="text" className="form-control block-mask" placeholder="loại phòng" id="phoneNumber"
                      />
              
              </div>



              <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                <label className="form-label" for="email">Email :</label>
                <input type="text" className="form-control delimiter-mask" placeholder="" id="email"  />
          

              </div>


              <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                <label className="form-label" for="address">Address</label>
                <input type="text" className="form-control custom-delimiter-mask" placeholder="address" id="address"/>
                    
              </div>


              <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                <label className="form-label" for="customerType">customerType :</label>
                <select className="form-select" id="customerType" >
                  <option >
                  
                  </option>
                </select>
              </div>

            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                     >Update
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
    <div className="col-md-3"></div>
  </div>
</div>

<Footer/>
</body>
      </div>
    )
  }
}
