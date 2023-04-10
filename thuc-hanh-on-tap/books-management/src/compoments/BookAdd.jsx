import React, {  useEffect, useState } from 'react'
import {Form, Formik, Field} from 'formik'
import * as BookService from './service/BookService'
import { useNavigate } from 'react-router-dom'
export default function BookAdd() {

    const [bookAdd, setBookAdd] = useState([])
    const [type, setType] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        const listType = async() =>{
            let res  = await BookService.getAllType()
            setType(res)
        }
        listType()
    },[])
    
  return (

    <>
    <Formik initialValues={{title: '' , quantity: '', typeId: 1}}
       
        onSubmit={(values ) =>{
            if(typeof values === 'string'){
                values.typeId = parseInt(values.typeId)
            }
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
            <div>
                <label htmlFor="typeId">type</label>
                <Field name='typeId' id='typeId' as='select' >
                <>
                         <option value="luachon">
                         ---------------
                         </option>
                    {
                        type.map((typeList, i) =>(
                             <option key={i} value={typeList.id}>
                                 {typeList.name}
                             </option>
                          
                        ))
                        
                    }
                    </>
                </Field>
            </div>
            {
             <button type='submit'>Save</button>
            }

        
        </Form>
        


    </Formik>
        
    </>
  )
}
