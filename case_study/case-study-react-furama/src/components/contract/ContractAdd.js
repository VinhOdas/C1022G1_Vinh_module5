import React from 'react'


export default function ContractAdd() {

  return (
    <>

<div id="input-mask-wrapper">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <strong id="inDam"><h1 className="card-title" style={{color: 'red'}}>Create Contract</h1></strong>
        </div>
        <form >
          <div className="card-body">
            <div className="row col-md-12 col-xl-12 col-sm-12" >


              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" for="facility">Name Facility </label>
                <select style={{ width: "100%", height: "70%" }}classname="form-select" id="facility">
                  <option>IT</option>
                  <option>Blade Runner</option>
                  <option>Thor Ragnarok</option>
                </select>
              </div>



              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" for="name_customer">Name Customer </label>
                <select style={{ width: "100%", height: "70%" }} className="form-select" id="name_customer">
                  <option>IT</option>
                  <option>Blade Runner</option>
                  <option>Thor Ragnarok</option>
                </select>


              </div>


              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" for="dayStart">Day Start:</label>
                <input type="date" className="form-control time-mask" placeholder="?" id="dayStart" />

              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" for="endDateForm">End Day:</label>
                <input type="text" className="form-control numeral-mask" placeholder="input number people" id="endDateForm"/>


              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" for="deposit">Deposit(VNĐ):</label>
                <input type="number" className="form-control block-mask" placeholder="giá" id="deposit" />

              </div>


            </div>
            <div className="col-12">
              <button type="reset" className="btn btn-primary me-1 waves-effect waves-float waves-light">Submit</button>
              <button type="reset" className="btn btn-outline-secondary waves-effect">Reset</button>
            </div>                </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

