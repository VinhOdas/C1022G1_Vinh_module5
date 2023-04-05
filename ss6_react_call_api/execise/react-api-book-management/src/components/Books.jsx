
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as BookService from './service/BookService'

export default function Books() {
    let navigate = useNavigate()
    const [book, setBook] = useState([])

    useEffect(() => {
        const listBook = async () => {
            const result = await BookService.findAll()
            setBook(result)
        }
        listBook()
    }, [])
    return (
        <>

            <div>
                <h1>Library</h1>
                <button className='btn btn-warning'><NavLink to='/books/add'>Add a new Book</NavLink></button>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <table className="table table-dark" border="1" style={{ textAlign: 'center' }}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Quantity</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody align="center">
                                {
                                    book.map((bookList, index) => (
                                        <tr key={index}>
                                            <td>{bookList.title}</td>
                                            <td>{bookList.quantity}</td>
                                            <td border="1"><button style={{textDecoration: "none"}} className='btn btn-warning'>
                                                <NavLink to={`edit/${bookList.id}`}>
                                                Edit
                                                </NavLink>
                                                </button>
                                                <button className='btn btn-warning'>Delete</button></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ToastContainer />

        </>
    )
}
