import React, { useEffect, useState } from 'react'
import * as BookService from './service/BookService'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Book() {
    let navigate = useNavigate()
    const [book, setBook] = useState([])

    useEffect(() =>{
        const listBook = async() =>{
            let result = await BookService.getAll()

            return setBook(result)
        }
        listBook()
    }, [])
    const handleUpdate = (id) => {
        navigate(`/edit/${id}`);
    }  
    
    
    const handleDelete  = async (id) =>{
        await BookService.remove(id)
        let res = await BookService.getAll()
        setBook(res)


    }

 
    return (
        <>
            <h1>Library</h1>
            <div>
                <NavLink to='/add'>
                <button style={{color: "red"}} >Create</button>
                </NavLink>
                
            </div>
            <div className="container">
                <table border={1} align='center' className='table table-warning'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            book.map((bookList, index) => (
                                <tr key={index}>
                                    <td>{bookList.title}</td>
                                    <td>{bookList.quantity}</td>
                                    <td>
                                       
                                        <button onClick={() => handleUpdate(bookList.id)} style={{color: "white", background: "red"}} className='btn btn-warning' >Edit</button>

                                        
                                        <button onClick={() => handleDelete(bookList.id)} style={{color: "white", background: "red"}}  className='btn btn-warning' >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
