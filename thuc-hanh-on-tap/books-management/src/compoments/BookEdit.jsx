import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as BookService from './service/BookService'
import { Formik,Form, Field } from 'formik'

 function BookEdit() {

    const navigate = useNavigate()
    const [bookEdit, setBookEdit] = useState()
    const id = useParams()
    console.log(id);
    
    
    
    useEffect(() =>{
        const byID = async() =>{
            const res = await BookService.findById(id.id)
            setBookEdit(res)
        }
        byID()
    }, [])

    if(!bookEdit){
        return null
    }

    const editBook = async (values) =>{
        await BookService.saveEdit(values)
           
       } 
       
       editBook()

    

  return (
    <>
     <Formik initialValues={{id: bookEdit.id, title: bookEdit.title, quatity: bookEdit.quatity}}
        onSubmit={async ( values) =>{
            await editBook(values)

            navigate("/")
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
export default BookEdit;