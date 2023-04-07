

export default function FacilityAdd()  {
 
    return (
      <div>

        <section id="input-mask-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <strong id="inDam"><h1 className="card-title" style={{ color: 'red' }}>Create Service</h1></strong>
                </div>
                <form >
                  <div className="card-body">
                    <div className="row col-md-12 col-xl-12 col-sm-12" >
                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" htmlFor="basicSelect">Facility Type </label>
                        <select className="form-select" id="basicSelect" >
                          <option>IT</option>
                          <option>Blade Runner</option>
                          <option>Thor Ragnarok</option>
                        </select>

                      </div>
                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" >Name Facility:</label>
                        <input type="text" className="form-control phone-number-mask" placeholder="Input Name" />


                      </div>
                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" htmlFor="area">Area</label>
                        <input type="text" className="form-control date-mask" placeholder="1000 mét vuông" id="area"
                        />

                      </div>

                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" >Cost</label>
                        <input type="text" className="form-control time-mask" placeholder="?" id='cost' />


                      </div>
                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" htmlFor="numeral-formatting">Max People</label>
                        <input type="text" className="form-control numeral-mask" placeholder="input number people" id="numeral-formatting" />


                      </div>
                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" htmlFor="standardRoom">Standard Room</label>
                        <input type="text" className="form-control block-mask" placeholder="loại phòng" id="standardRoom" />


                      </div>
                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" >Description Other Convenience</label>
                        <div className="input-group input-group-merge">
                          <input type="text" className="form-control delimiter-mask" />
                        </div>


                      </div>
                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" >poolArea</label>
                        <input type="text" className="form-control custom-delimiter-mask" placeholder="poolArea"
                        />
                      </div>


                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" >numberFloors</label>
                        <div className="input-group input-group-merge">
                          <input type="text" className="form-control prefix-mask"
                          />
                        </div>

                      </div>


                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" htmlFor="facilityFree">facilityFree</label>
                        <input type="text" className="form-control prefix-mask" id="facilityFree" />
                      </div>



                      <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                        <label className="form-label" htmlFor="rentType">Rent Type</label>
                        <select className="form-select" id="rentType" >
                          <option>IT</option>
                          <option>Blade Runner</option>
                          <option>Thor Ragnarok</option>
                        </select>

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
        </section>
        

      </div>
    )
  }

