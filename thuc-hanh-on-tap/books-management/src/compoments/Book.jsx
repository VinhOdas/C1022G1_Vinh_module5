import React, { useEffect, useState } from 'react'
import * as BookService from './service/BookService'
import { NavLink, useNavigate } from 'react-router-dom'
import MoDal from './MoDal'
import ReactPaginate from 'react-paginate';
import Pagination from 'react-paginate'
import {Swal} from 'sweetalert2'



export default function Book() {
    let navigate = useNavigate()
    const [book, setBook] = useState([])
    const [type, setType] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState('')
    const [searchName, setSearchName] = useState('')
    const [searchType, setSearchType] = useState(0)
    const listBook = async () => {
        let result = await BookService.getAll(searchType)
         setBook(result)
        setPageCount(Math.ceil(result.length / 5));

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
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
      };

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
            <input type='text' onChange={(e) =>{
                setSearchName(e.target.value)
            }} />

            <select name="typeId" onChange={(e) =>{
                setSearchType(e.target.value)
            }} >
                <option value="">---------</option>
                {
                    type.map((typeList,i) =>(
                        <option key={i} value={typeList.id}>
                                {typeList.name}
                        </option>
                    ))
                }
            </select>
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
                            book.filter((bookSearch ) =>{
                                return searchName.toLowerCase() === '' ? bookSearch: bookSearch.title.toLowerCase().includes(searchName)
                              

                            })
                            
                            .slice(currentPage * 5, currentPage * 5+5).map((bookList, index) => (
                                <tr key={index}>
                                <td>{bookList.title}</td>
                                <td>{bookList.quantity}</td>
                                <td>{
                                    type.filter((typeList) => (typeList?.id == bookList?.typeId))[0]?.name

                                }</td>
                                <td>

                                    <NavLink to={`/edit/${bookList.id}`}>
                                        <button>
                                            Edit
                                        </button>
                                    </NavLink>
                                    <button type="button" onClick={() => {
                                        swapDelete(bookList.id,
                                            bookList.name

                                        )
                                    }} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalDelete">
                                        Delete
                                    </button>
                                    
                                </td>

                            </tr> 
                                    

                        
                                
                            )
                            )
                            
                        }
                    </tbody>
                </table>

                <ReactPaginate
        previousLabel={'previous'} 
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
              />



          {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}



            </div>
            <MoDal
                id={deleteId}
                name={deleteName}
                findAllList={() =>{
                    listBook()
                }}


            />


        </>


    )
}
