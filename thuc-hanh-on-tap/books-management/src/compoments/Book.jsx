import React, { useEffect, useState } from 'react'
import * as BookService from './service/BookService'
import { NavLink, useNavigate } from 'react-router-dom'
import MoDal from './MoDal'

export default function Book() {
    let navigate = useNavigate()
    const [book, setBook] = useState([])
    const [type, setType] = useState([])
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState('')
    const listBook = async () => {
        let result = await BookService.getAll()

        return setBook(result)
    }
    const listType = async () => {
        let result = await BookService.getAllType()

        return setType(result)
    }
    useEffect(() => {
        listType()
        listBook()
    }, [])

    const swapDelete = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }


    // const handleUpdate = (id) => {
    //     navigate(`/edit/${id}`);
    // }  


    // const handleDelete = async (id) => {
    //     await BookService.remove(id)
    //     let res = await BookService.getAll()
    //     setBook(res)


    // }


    return (
        <>
            <h1>Library</h1>
            <div>
                <NavLink to='/add'>
                    <button style={{ color: "red" }} >Create</button>
                </NavLink>

            </div>
            <div className="container">
                <table border={1} align='center' className='table table-warning'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            book.map((bookList, index) => (
                                <tr key={index}>
                                    <td>{bookList.title}</td>
                                    <td>{bookList.quantity}</td>
                                    <td>{
                                        type.filter((typeList) => (typeList?.id == bookList?.typeId))[0]?.name

                                    }</td>
                                    <td>

                                        {/* <button onClick={() => handleUpdate(bookList.id)} style={{color: "white", background: "red"}} className='btn btn-warning' >Edit</button> */}

                                        <NavLink to={`/edit/${bookList.id}`}>
                                            <button>
                                                Edit
                                            </button>
                                        </NavLink>
                                        {/* <button onClick={() => handleDelete(bookList.id)} style={{color: "white", background: "red"}}  className='btn btn-warning' >Delete</button> */}
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" onClick={() => {
                                            swapDelete(bookList.id,
                                                bookList.name

                                            )
                                        }} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalDelete">
                                            Delete
                                        </button>
                                        
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>
            <MoDal
                id={deleteId}
                name={deleteName}
                findAllList={() =>{
                    listBook()
                }}


            />

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>


    )
}
