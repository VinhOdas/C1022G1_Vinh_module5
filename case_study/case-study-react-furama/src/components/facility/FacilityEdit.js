import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'


export default function FacilityEdit() {

  const REQUIRED_VALIDATION = 'Không được để trống'

  return (
    <>

      <Formik initialValues={{
        name: '',
        area: '',
        cost: '',
        maxPepple: '',
        facilityType: {},
        rentType: {},
        standardRoom: '',
        descriptionOtherCovenience: '',
        poolArea: '',
        numberOfFloors: '',
        facilityFree: '',
        status: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(REQUIRED_VALIDATION),
        area: Yup.number().required(REQUIRED_VALIDATION),
        cost: Yup.number().required(REQUIRED_VALIDATION),
        maxPepple: Yup.number().required(REQUIRED_VALIDATION),
        standardRoom: Yup.string().required(REQUIRED_VALIDATION),
        descriptionOtherCovenience: Yup.string().required(REQUIRED_VALIDATION),
        poolArea: Yup.number().required(REQUIRED_VALIDATION),
        numberOfFloors: Yup.string().required(REQUIRED_VALIDATION),
        facilityFree: Yup.string().required(REQUIRED_VALIDATION)

      })}


      >
          <Form>
          <div>
<section id="input-mask-wrapper">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <strong id="inDam"><h1 className="card-title" style={{ color: 'red' }}>Edit Service</h1></strong>
        </div>
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
                <Field name='name' type="text" className="form-control phone-number-mask" placeholder="Input Name" />
                <div>
                <ErrorMessage name='name' component='span' className='form-err' />
                </div>


              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" htmlFor="area">Area</label>
                <Field name='area' type="number" className="form-control date-mask" placeholder="1000 mét vuông" id="area"
                />
                <div>
                <ErrorMessage name='area' component='span' className='form-err' />
                </div>

              </div>

              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" >Cost</label>
                <Field name='cost' type="number" className="form-control time-mask" placeholder="?" id='cost' />
                <div>
                <ErrorMessage name='cost' component='span' className='form-err' />
                </div>


              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" htmlFor="numeral-formatting">Max People</label>
                <Field name='maxPepple' type="number" className="form-control numeral-mask" placeholder="input number people" id="numeral-formatting" />
                <div>
                <ErrorMessage name='maxPepple' component='span' className='form-err' />
                </div>

              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" htmlFor="standardRoom">Standard Room</label>
                <Field name='standardRoom' type="text" className="form-control block-mask" placeholder="loại phòng" id="standardRoom" />
                <div>
                <ErrorMessage name='standardRoom' component='span' className='form-err' />
                </div>

              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" >Description Other Convenience</label>
                <div className="input-group input-group-merge">
                  <Field name='descriptionOtherCovenience' type="text" className="form-control delimiter-mask" />
                </div>
                <div>
                <ErrorMessage name='descriptionOtherCovenience' component='span' className='form-err' />
                </div>


              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" >poolArea</label>
                <Field name='poolArea' type="number" className="form-control custom-delimiter-mask" placeholder="poolArea"
                />
                <div>
                <ErrorMessage name='poolArea' component='span' className='form-err' />
                </div>
              </div>


              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" >numberFloors</label>
                <div className="input-group input-group-merge">
                  <Field name='numberOfFloors' type="text" className="form-control prefix-mask"
                  />
                </div>
                <div>
                <ErrorMessage name='numberOfFloors' component='span' className='form-err' />
                </div>

              </div>


              <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                <label className="form-label" htmlFor="facilityFree">facilityFree</label>
                <Field name='facilityFree' type="text" className="form-control prefix-mask" id="facilityFree" />

                <div>
                <ErrorMessage name='facilityFree' component='span' className='form-err' />
                </div>
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
              <button type="submit" className="btn btn-primary me-1 waves-effect waves-float waves-light">Submit</button>
              <button type="reset" className="btn btn-outline-secondary waves-effect">Reset</button>
            </div>
          </div>
      </div>
    </div>

  </div>
</section>


</div>
          </Form>

      </Formik>

     
    </>

  )
}

