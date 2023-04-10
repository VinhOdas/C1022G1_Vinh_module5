import React, { useEffect, useState } from 'react'
import * as BookService from './service/BookService'
import {NavLink} from 'react-router-dom'

export default function Books() {
    const [book, setBook] = useState([]);
    const [typeBook, setTypeBook] = useState([]);


    const listBook = async() =>{
        let res = await BookService.getAll()
        setBook(res)
    }

    const listTypeBook = async() =>{
        let res = await BookService.getAllTypeBook()
        setTypeBook(res)
    }

    useEffect(() =>{
        listBook();
        listTypeBook();
    },[])


  return (
    <>
        <NavLink to={`/add`}><button>Add</button></NavLink>
        <table align='center' border={1}>
            <thead>
                <tr>
                    <th>Stt</th>
                    <th>title</th>
                    <th>quantity</th>
                    <th>type</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {book.map((bookList, i) =>(
                    <tr key={i}>
                        <td>{++i}</td>
                        <td>{bookList.title}</td>
                        <td>{bookList.quantity}</td>
                        <td>{typeBook.filter((typeBookList) =>typeBookList.id == bookList.typeId)[0]?.name}</td>
                        <td>
                            <NavLink to={`/edit/${bookList.id}`}>
                            <button className='btn btn-warning'>Edit</button>
                            </NavLink>
                            <button className='btn btn-warning'>Delete</button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    
    </>
  )
}
