
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, } from 'formik'
import * as Yup from 'yup'

export default function CustomerAdd() {
  const REQUIRED_VALIDATION = 'Không được để trống'

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          dateOfBirth: '',
          gender: '',
          idCard: '',
          phoneNumber: '',
          email: '',
          address: '',
          customerType: {}
        }}

        validationSchema={Yup.object({

          name: Yup.string().required(REQUIRED_VALIDATION),
          dateOfBirth: Yup.string().required(REQUIRED_VALIDATION),
          idCard: Yup.string().required(REQUIRED_VALIDATION),
          phoneNumber: Yup.string().required(REQUIRED_VALIDATION),
          email: Yup.string().required(REQUIRED_VALIDATION),
          address: Yup.string().required(REQUIRED_VALIDATION),

        })}

      >
        <Form>
          <div>

            <div className="container">
              <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <strong id="inDam"><h1 className="card-title" style={{ color: 'red' }}>Add Customer</h1></strong>
                    </div>

                    <div className="card-body">
                      <div className="col-xl-12 col-md-12 col-sm-12 mb-2">


                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="name_customer">Name Customer::</label>
                          <div className="input-group input-group-merge">
                            <Field type="text" name='name' className="form-control phone-number-mask" placeholder="Input Name" id="name" />
                          </div>
                          <ErrorMessage name='name' component='span' className='form-err' />
                        </div>


                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="dateOfBirth">Date Of Birth :</label>
                          <div className="input-group input-group-merge">
                            <Field type="date" className="form-control date-mask" name='dateOfBirth' placeholder="birth Day"
                              id="dateOfBirth" />
                          </div>
                          <ErrorMessage name='dateOfBirth' component='span' className='form-err' />


                        </div>


                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="gender">gender :</label>
                          <select className="form-control" id="gender">
                            <option >Nam</option>
                            <option>Nu</option>
                            <option >LGBT</option>
                          </select>

                        </div>



                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="idCard">Id Card :</label>
                          <div className="input-group input-group-merge">
                            <Field type="text" name='idCard' className="form-control numeral-mask" placeholder="Id Card :" id="idCard" />
                          </div>
                          <ErrorMessage name='idCard' component='span' className='form-err' />
                        </div>



                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="phoneNumber">Phone Number :</label>
                          <div className="input-group input-group-merge">
                            <Field type="text" className="form-control block-mask" name='phoneNumber' placeholder="loại phòng" id="phoneNumber" />
                          </div>
                          <ErrorMessage name='phoneNumber' component='span' className='form-err' />
                        </div>



                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="email">Email :</label>
                          <Field type="text" className="form-control delimiter-mask" placeholder="" name='email' id="email" />
                          <ErrorMessage name='email' component='span' className='form-err' />

                        </div>


                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="address">Address</label>
                          <Field type="text" className="form-control custom-delimiter-mask" name='address' placeholder="address" id="address" />
                          <ErrorMessage name='address' component='span' className='form-err' />

                        </div>


                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="customerType">customerType :</label>
                          <select className="form-select" id="customerType" >
                            <option >

                            </option>
                          </select>
                        </div>

                      </div>
                      <div className="col-12">
                        <button className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                          <NavLink style={{ textDecoration: "none", color: "whitesmoke" }} to={'/customers/add'}>
                            Add
                          </NavLink>

                        </button>
                        <button style={{ marginLeft: '10%' }} type='reset' className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                          Reset
                        </button>
                      </div>

                    </div>


                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>


          </div>
        </Form>

      </Formik>

    </>
  )
}

