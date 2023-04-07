import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Audio, TailSpin } from 'react-loader-spinner'
import * as BookService from './service/BookService'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


export default function BookEdit() {
    const [book, setBook] = useState(null)
    const { id } = useParams();
    let navigate = useNavigate()
    const bookForm = ({bookss}) =>{
        const initialValues = {
            title: bookss.title,
             quantity:bookss.quantity
        };
    }






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


    if (!book) {
        return (
            <>
                <h1>Loading...</h1>
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </>
        )
    }
    return (
        <>
            <Formik
                initialValues={{ id: book.id, title: book.title, quantity: book.quantity }}
                onSubmit={async (values) => {
                    await handleUpdate(values);


                }}
            >


                <Form>

                    <div className="container">
                        <div className="row">
                            <div className="card">
                                <div className="card-header">
                                    <strong id="inDam"><h1 className="card-title" style={{ color: 'red' }}>Edit Books</h1></strong>
                                </div>


                                <div className="card-body">
                                    <div className="col-xl-12 col-md-12 col-sm-12 mb-2">

                                        <label htmlFor='title' className="form-label" >Title</label>
                                        <div className="input-group input-group-merge">
                                            <Field id="title" type='text' placeholder='' name='title' className='form-control' />
                                        </div>
                                        <br></br>
                                    </div>


                                    <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                                        <label htmlFor='quantity' className="form-label" >Quantity</label>
                                        <div className="input-group input-group-merge">
                                            <Field id="quantity" type='text' placeholder='' name='quantity' className='form-control' />
                                        </div>
                                        <br></br>
                                    </div>
                                    <button className='btn btn-danger' type="submit">  Submit  </button>


                                </div>
                            </div>
                        </div>
                    </div>
                </Form>


            </Formik>
        </>
    )
}
