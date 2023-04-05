import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify'
import { Audio } from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';
export default function HealthDeclaration() {
  return (
    <div>

      <Formik initialValues={{
        name: '',
        idCard: '',
        yearOfBirth: '',
        gender: '',
        nationality: '',
        company: '',
        workingParts: '',
        healthInsuranceCard: '',
        province: '',
        district: '',
        ward: '',
        addressNumber: '',
        phone: '',
        email: '',
        moveToCountry: '',
        medicalSign: [],
        contactWithSickPeople: []

      }}
        validationSchema={Yup.object(
          {
            name: Yup.string().required('Không được để trống'),
            idCard: Yup.string().required('Không được để trống'),
            yearOfBirth: Yup.number().required('Không được để trống').min(1901, 'lớn hơn 1900'),
            nationality: Yup.string().required('Không được để trống'),
            province: Yup.string().required('Không được để trống'),
            district: Yup.string().required('Không được để trống'),
            ward: Yup.string().required('Không được để trống'),
            phone: Yup.string().required('Không được để trống'),
            email: Yup.string().required('Không được để trống').email('phải đúng định dạng'),
            company: Yup.string().required('Không được để trống'),
            workingParts: Yup.string().required('Không được để trống')
              

          }

        )}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            toast("thêm thành công");
          }, 3000)
        }}
      >
        {
          ({ isSubmitting }) => (
            <Form>

              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <strong id="inDam"><h1 className="card-title" style={{ color: 'red' }}>Form Health Declaration</h1></strong>
                      </div>


                      <div className="card-body">
                        {/* input Họ và tên */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Họ và tên</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='name' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='name' component='span' className='form-err' />
                        </div>
                        {/* input idCard */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Số hộ chiếu/ CMND</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='idCard' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='idCard' component='span' className='form-err' />
                        </div>
                        {/* input Năm sinh */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Năm sinh</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='yearOfBirth' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='yearOfBirth' component='span' className='form-err' />
                        </div>

                        {/* input giới tính */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label htmlFor='gender1' className="form-label" >Nam</label>

                          <Field type='radio' placeholder='' name='gender' className='form-check-input' id='gender1' value='1' />

                          <label style={{ marginLeft: '10%' }} htmlFor='gender2' className="form-label" >Nữ</label>

                          <Field type='radio' placeholder='' name='gender' className='form-check-input' id='gender2' value='0' />

                        </div>


                        {/* input quốc tịch */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Quốc tịch</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='nationality' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='nationality' component='span' className='form-err' />
                        </div>
                        {/* input công ty làm việc  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Công ty làm việc</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='company' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='company' component='span' className='form-err' />
                        </div>

                        {/* input bộ phận làm việc  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Bộ phận làm việc</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='workingParts' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='workingParts' component='span' className='form-err' />
                        </div>
                        <h3>Địa chỉ liên lạc tại Việt Nam </h3>
                        {/* input tỉnh thành  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Tỉnh thành</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='province' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='province' component='span' className='form-err' />
                        </div>

                        {/* input huyện  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Huyện</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='district' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='district' component='span' className='form-err' />
                        </div>

                        {/* input xã  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Xã/Phường</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='ward' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='ward' component='span' className='form-err' />
                        </div>

                        {/* input số nhà/địa chỉ nhà  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Số nhà/địa chỉ</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='addressNumber' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='addressNumber' component='span' className='form-err' />
                        </div>

                        {/* input phone  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Phone</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='phone' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='phone' component='span' className='form-err' />
                        </div>

                        {/* input email  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Email</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' name='email' className='form-control' />
                          </div>
                          <br></br>
                          <ErrorMessage name='email' component='span' className='form-err' />
                        </div>

                        {/* input di chuyển textArea  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label className="form-label" >Trong vòng 14 ngày qua. Anh/Chị có đến quốc gia
                            /vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)</label>
                          <div className="input-group input-group-merge">
                            <Field type='text' placeholder='' component='textArea' name='moveToCountry' className='form-control' />
                          </div>
                        </div>

                        {/* input dấu hiệu y tế  */}
                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <label htmlFor='medicalSign1' className="form-label" >Sốt</label>

                          <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign1' value='Sot' />

                          <label style={{ marginLeft: '10%' }} htmlFor='medicalSign2' className="form-label" >Ho</label>

                          <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign2' value='Ho' />

                          <label style={{ marginLeft: '10%' }} htmlFor='medicalSign3' className="form-label" >Khó thở</label>

                          <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign3' value='KhoTho' />

                           <label style={{ marginLeft: '10%' }} htmlFor='medicalSign4' className="form-label" >Mệt mỏi</label>

                          <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign4' value='MetMoi' />

                           <label style={{ marginLeft: '10%' }} htmlFor='medicalSign2' className="form-label" >Đau họng</label>

                          <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign2' value='DauHong' />
                        </div>

                         {/* input biểu hiện  */}
                         <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                          <div className="row">
                            <div className="col-md-2">
                            <Field type='checkbox' placeholder='' name='contactWithSickPeople' 
                           id='contactWithSickPeople1' value='Nghingo' />
                            </div>
                            <div className='col-md-10'>
                          <label htmlFor='contactWithSickPeople1' className="form-label" >
                            Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                          </label>
                          </div>

                          <div className="col-md-2">
                            <Field type='checkbox' placeholder='' name='contactWithSickPeople' 
                           id='contactWithSickPeople2' value='ToiTuVungDich' />
                            </div>
                            <div className='col-md-10'>
                          <label htmlFor='contactWithSickPeople2' className="form-label" >
                          Người bệnh tới từ nước COVID-19
                          </label>
                          </div>

                          <div className="col-md-2">
                            <Field type='checkbox' placeholder='' name='contactWithSickPeople' 
                           id='contactWithSickPeople3' value='BieuHien' />
                            </div>
                            <div className='col-md-10'>
                          <label htmlFor='contactWithSickPeople3' className="form-label" >
                          Người bệnh có biểu hiện(Ho, Sốt,.....)
                          </label>
                          </div>

                          {
                  isSubmitting ?
                    <Audio
                      height="80"
                      width="80"
                      radius="9"
                      color="green"
                      ariaLabel="loading"
                      wrapperStyle
                      wrapperClass
                    />
                    : <button className='btn btn-danger' type="submit">  Submit  </button>

                }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
             
              </div>



            </Form>
          )
        }

      </Formik>
      <ToastContainer />


    </div>
  )
}
