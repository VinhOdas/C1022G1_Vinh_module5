import { toast } from 'react-toastify'
import { Audio } from 'react-loader-spinner'
import { Field, Form, Formik } from 'formik'
import * as BookService from './service/BookService'
import { useNavigate } from 'react-router-dom';

export default function BooksAdd() {
    let navigate = useNavigate()

    return (
        <>
            <Formik
                initialValues={{ title: '', quantity: '' }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {

                        const createBooks = async () => {
                            await BookService.save(values)
                            setSubmitting(false)
                            toast("thêm mới thành công")
                            navigate('/books')

                        }
                        createBooks()

                    }, 500)

                }}
            >

                {({ isSubmitting }) => (

                    <Form>

                        <div className="container">
                            <div className="row">
                                    <div className="card">
                                        <div className="card-header">
                                            <strong id="inDam"><h1 className="card-title" style={{ color: 'red' }}>Add Books</h1></strong>
                                        </div>


                                        <div className="card-body">
                                            <div className="col-xl-12 col-md-12 col-sm-12 mb-2">

                                                <label className="form-label" >Title</label>
                                                <div className="input-group input-group-merge">
                                                    <Field type='text' placeholder='' name='title' className='form-control' />
                                                </div>
                                                <br></br>
                                            </div>


                                            <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                                                <label className="form-label" >Quantity</label>
                                                <div className="input-group input-group-merge">
                                                    <Field type='text' placeholder='' name='quantity' className='form-control' />
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
