import React, {  useState } from 'react'
import {Form, Formik, Field} from 'formik'
import * as BookService from './service/BookService'
import { useNavigate } from 'react-router-dom'
export default function BookAdd() {

    const [bookAdd, setBookAdd] = useState([])
    const navigate = useNavigate()
    
  return (

    <>
    <Formik initialValues={{title: '' , quantity: ''}}
        onSubmit={(values ) =>{
               const addBook = async () =>{
                await BookService.save(values)
                setBookAdd(values)
                navigate("/")

                return bookAdd
               } 
               addBook()

        }}

    >
        <Form >
            <div>
                <label htmlFor="title">Title</label>
                <Field name='title' id='title' />
            </div>
            
            <div>
                <label htmlFor="quantity">Quantity</label>
                <Field name='quantity' id='quantity' />
            </div>
            {
             <button type='submit'>Save</button>
            }

        
        </Form>
        


    </Formik>
        
    </>
  )
}
