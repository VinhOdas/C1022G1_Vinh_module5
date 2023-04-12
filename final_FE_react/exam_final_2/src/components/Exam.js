import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import * as BookService from './service/BookService'
import { NavLink } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'

export default function Exam() {

  const [book, setBook] = useState([])
  const [type, setType] = useState([])
  const [deleteId, setDeleteId] = useState(0)
  const [deleteName, setDeleteName] = useState('')

  const swapDelete =(id, name) => {
      setDeleteId(id)
      setDeleteName(name)
  }

  const listBook = async () => {
    let res = await BookService.getAll()
    setBook(res)
  }
  const listType = async () => {
    let res = await BookService.getAllType()
    setType(res)
  }
  const handleDelete = async(deleteId) =>{
     await BookService.remove(deleteId)
     listBook()
   

  }

  useEffect(() => {

    listBook()
    listType()
  }, [])



  return (

    <>
      <Formik
        initialValues={{ name: '', typeId: '' }}
        onSubmit={(values) => {
          const search = async () => {
            let res = await BookService.getAll(values.name, values.typeId)
            setBook(res)
          }
          search()
        }}
      >
        <Form>
          <label>Name:</label>
          <Field name='name' />

          <Field as='select' name='typeId'>
            <option value=''>-------------- </option >
            {

              type.map((typeList, i) => (
                <option key={i} value={typeList.id}>
                  {typeList.name}
                </option>
              ))
            }
          </Field>
          <button type='submit'>Search</button>

        </Form>


      </Formik>
      <div>
        <button className="btn btn-primary btn-outline-secondary btn-sm">
          <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
          <span className="text-light">
            <NavLink to={`/add`}>
              Create
            </NavLink>


          </span>
        </button>

      </div>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nam</th>
            <th scope="col">Gender</th>
            <th scope="col">type</th>
          </tr>
        </thead>
        <tbody>
          {
            book.map((b, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{b.name}</td>
                <td>{parseInt(b.gender) === 1 ? "Nam" : "Nu"}</td>
                <td>{
                  type.filter((type) => (type.id === parseInt(b.typeId)))[0]?.name
                }</td>
                <td>
                  <NavLink to={`/edit/${b.id}`}>Edit</NavLink>
                </td>
                <td>
                  <button type="button" onClick={() =>swapDelete( b.id,b.name)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Delete
                    </button>
                </td>
              </tr>
            ))

          }
        </tbody>
      </table>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        -----{deleteName}
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={() =>handleDelete(deleteId)} type="button" data-bs-dismiss="modal" className="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
