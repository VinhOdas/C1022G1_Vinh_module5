import React, { useEffect, useState } from 'react'
import * as BookService from './service/BookService'

export default function Book() {

    const [book, setBook] = useState([]);
    const [typeBook, setTypeBook] = useState([]);

    const listBook = async() =>{
        let res = await BookService.findAll()
        return setBook(res)
    }
    
    const listTypeBook = async() =>{
        let res = await BookService.findAllCustomerType()
        return setTypeBook(res)
    }

    useEffect(() =>{
        listBook()
        listTypeBook()
    },[])

  return (
    <>
    <table>
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
            {
                book.map((bookList, i) =>(
                    <tr key={i}>
                        <td>{++i}</td>
                        <td>{bookList.title}</td>
                        <td>{bookList.quantity}</td>
                        <td>{
                            typeBook.filter((typeBookList) =>typeBookList.id === bookList.typeId)[0]?.name
                            }
                            </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
}
