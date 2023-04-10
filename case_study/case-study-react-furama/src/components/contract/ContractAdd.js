import React from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'


export default function ContractAdd() {
  const REQUIRED_VALIDATION = 'Không được để trống'

  return (
    <>
    <Formik
    initialValues={{
      startDate: '',
      endDate: '',
      deposit: '',
      customer: 1,
      facility: 1,
      rentType: 1,
      standardRoom: '',
      descriptionOtherCovenience: '',
      poolArea: '',
      numberOfFloors: '',
      facilityFree: '',
      status: false
    }}
    validationSchema={Yup.object({
      startDate: Yup.string().required(REQUIRED_VALIDATION),
      endDate: Yup.string().required(REQUIRED_VALIDATION),
      deposit: Yup.number().required(REQUIRED_VALIDATION),
      standardRoom: Yup.string().required(REQUIRED_VALIDATION),
      descriptionOtherCovenience: Yup.string().required(REQUIRED_VALIDATION),
      poolArea: Yup.number().required(REQUIRED_VALIDATION),
      numberOfFloors:  Yup.string().required(REQUIRED_VALIDATION),
      facilityFree:  Yup.string().required(REQUIRED_VALIDATION)
    })}
    >
      <Form>
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
                <label className="form-label" htmlFor="facility">Name Facility </label>
                <select style={{ width: "100%", height: "70%" }}classname="form-select" id="facility">
                  <option>IT</option>
                  <option>Blade Runner</option>
                  <option>Thor Ragnarok</option>
                </select>
              </div>



              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" htmlFor="name_customer">Name Customer </label>
                <select style={{ width: "100%", height: "70%" }} className="form-select" id="name_customer">
                  <option>IT</option>
                  <option>Blade Runner</option>
                  <option>Thor Ragnarok</option>
                </select>


              </div>


              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <div>
                <label className="form-label" htmlFor="dayStart">Day Start:</label>
                <Field type="date" name='startDate' className="form-control time-mask" placeholder="?" id="dayStart" />
                </div>
                <ErrorMessage name='startDate' component='span' className='form-err' />

              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <div>
                <label className="form-label" htmlFor="endDateForm">End Day:</label>
                <Field type="text" name='endDate' className="form-control numeral-mask" placeholder="input number people" id="endDateForm"/>
                </div>
                <ErrorMessage name='endDate' component='span' className='form-err' />


              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <div>
                <label className="form-label" htmlFor="deposit">Deposit(VNĐ):</label>
                <Field type="number" name='deposit'  className="form-control block-mask" placeholder="giá" id="deposit" />
                </div>
                <ErrorMessage name='deposit' component='span' className='form-err' />

               

              </div>


            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary me-1 waves-effect waves-float waves-light">Submit</button>
              <button type="reset" className="btn btn-outline-secondary waves-effect">Reset</button>
            </div>                </div>
        </form>
      </div>
    </div>
  </div>
</div>
      </Form>

    </Formik>


    </>
  )
}

