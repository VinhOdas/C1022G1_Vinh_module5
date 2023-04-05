import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {ToastContainer, toast} from 'react-toastify'
import { Audio } from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
    return (

        <div>
            <h1>Contact Form</h1>
            <Formik initialValues={
                { name: '', email: '', phone: '', message: '' }}
                validationSchema={Yup.object(
                    {
                        name: Yup.string().required('Ban chua nhap').min(3, 'it nhat 3 ky tu').max(10, 'nhieu nhat 10 ky tu'),
                    
                        email: Yup.string().required('Ban chua nhap email').email('phai dung dinh dang email'),
                   
                        phone: Yup.string().required('Khong dc de trong').min(9, 'it nhat 9 so')
                        .max(11, 'nhieu nhat 11 so')
                        .matches('^[0-9]+$', "Phai la so"),
                    }
                )}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        toast("them moi thanh cong");

                    }, 3000)
                }}

            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label>Name </label>
                            <Field type='text' placeholder='Field name' name='name' className='form-control' />
                            <br></br>
                            <ErrorMessage name='name' component='span' className='form-err'  />
                        </div>
                        <div>
                            <label>Email </label>
                            <Field type='text' placeholder='Field email' name='email' />
                            <br></br>
                            <ErrorMessage name='email' component='span' className='form-err'  />
                        </div>
                        <div >
                            <label>Phone </label>
                            <Field type='string' placeholder='Field phone number' name='phone' />
                            <br></br>
                            <ErrorMessage name='phone' component='span' className='form-err'  />
                        </div>
                        <div>
                            <label>Message </label>
                            <textarea  id='textArea' name='message' />

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
                        :<button style={{backgroundColor: 'red'}} type="submit">  Submit  </button>
    
                        }
                    </Form>
                )}

            </Formik>
                  <ToastContainer style={{backgroundColor: 'green'}}/>          
        </div>
        
    )
}
