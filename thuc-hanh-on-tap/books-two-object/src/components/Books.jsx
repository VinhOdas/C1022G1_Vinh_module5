import React, { useEffect, useState } from 'react'
import * as BookService from './service/BookService'

export default function Books() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const listBook = async () => {
      let res = await BookService.findAll
      setBook(res)
      return book
    }
    listBook()
  }, [])
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>title</th>
            <th>quantity</th>
            <th>typeBook</th>
            <th>action</th>
          </tr>
        </thead>
        {
          book.map((bookList, index) => (
            <tr key={index}>
              <td>{bookList.title}</td>
              <td>{bookList.quantity}</td>
              <td>{bookList.typeBook}</td>
              <td>

                <button  className='btn btn-warning' >Edit</button>


                <button style={{ color: "white", background: "red" }} className='btn btn-warning' >Delete</button>
              </td>
            </tr>
          ))
        }
      </table>

    </>
  )
}
