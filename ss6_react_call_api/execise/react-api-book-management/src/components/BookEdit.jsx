import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import * as BookService from './service/BookService'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
    

  
export default function BookEdit() {
    const [book, setBook] = useState([])
    const {id} = useParams();
    let navigate = useNavigate()

    
    useEffect(() => {
        const booksEdit = async() =>{
            const result = await BookService.findById(id);
            setBook(result)
        }
        booksEdit()
    }, [id])
    


    const handleUpdate = async (values) => {
        try {
            await BookService.saveEdit(values);
            console.log(values)
            toast('Sửa thành công!');
            navigate('/books');
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <>
         <Formik
                initialValues={{id: book.id, title: book.title, quantity: book.quantity }}
                onSubmit={async (values) => {
                   
                            await handleUpdate(values);
                            setSubmitting(false)
                          


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
                                                    <Field    type='text' placeholder='' name='quantity' className='form-control' />
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
