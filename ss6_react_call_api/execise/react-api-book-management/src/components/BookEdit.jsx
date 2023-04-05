import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Audio } from 'react-loader-spinner'
import * as BookService from './service/BookService'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


export default function BookEdit() {
    let navigate = useNavigate()

    // const [book, setBook] = useState([])
    // const [bookEdit, SetBookEdit] = useState({});

    // const {id} = useParams;
    // const [values, setValues] = useState({
    //     id: id,
        
    // })
  return (
    <>
         <Formik
                initialValues={{id: '', title: '', quantity:''  }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        const editBook = async (id, values) => {
                                await BookService.saveEdit(id, values);
                            setSubmitting(false)
                            toast("edit thành công")
                            navigate('/books')

                        }
                        editBook(values.id, values)

                    }, 500)

                

                }}
        >

 {({ isSubmitting }) => (
    <Form>

                        <div className="container">
                            <div className="row">
                                    <div className="card">
                                        <div className="card-header">
                                            <strong id="inDam"><h1 className="card-title" style={{ color: 'red' }}>Edit Books</h1></strong>
                                        </div>


                                        <div className="card-body">
                                            <div className="col-xl-12 col-md-12 col-sm-12 mb-2">

                                                <label className="form-label" >Title</label>
                                                <div className="input-group input-group-merge">
                                                    <Field   type='text' placeholder='' name='title' className='form-control' />
                                                </div>
                                                <br></br>
                                            </div>


                                            <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                                                <label className="form-label" >Quantity</label>
                                                <div className="input-group input-group-merge">
                                                    <Field  type='text' placeholder='' name='quantity' className='form-control' />
                                                </div>
                                                <br></br>
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
                    </Form>
    
                )
                }
        </Formik>
    </>
  )
}
