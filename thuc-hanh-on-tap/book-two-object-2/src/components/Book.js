import React, { useEffect, useState } from 'react'
import * as BookService from './service/BookService'
import { NavLink } from 'react-router-dom'

export default function Book() {
    const [books, setBooks] = useState([])
    const [typeBook, setTypeBook] = useState([])


    useEffect(() =>{
        listBook()
        listTypeBook()
    },[])

    const listBook = async() =>{
        let res = await BookService.findAll()

        return setBooks(res)
    }
    const listTypeBook = async() =>{
        let res = await BookService.findAllTypeBook()

        return setTypeBook(res)
    }




  return (
    <>
    <div>
        <NavLink to={`/add`}>
        <button>
            Add
        </button>
        </NavLink>
     
    </div>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>title</th>
                    <th>Quantity</th>
                    <th>TypeBook</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((bookList, i) =>(
                        <tr key={i}>
                            <td>{++i}</td>
                            <td>{bookList.title}</td>
                            <td>{bookList.quantity}</td>
                            <td>{
                            typeBook.filter((typeBookList ) =>typeBookList.id === bookList.typeBooks)[0]?.name
                            }
                            </td>
                            <td><NavLink to={`/edit/${bookList.id}`}>
                                <button>
                                Edit
                                </button>
                            </NavLink>
                              
                                <button>
                                Delete
                                </button>
                                </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}
