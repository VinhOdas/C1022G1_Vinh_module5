import { Field, Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import * as BookService from './service/BookService'
import { Form } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function BookAdd() {
    const navigate = useNavigate()
    const [typeBook, setTypeBook] = useState([])

    const listTypeBook = async() =>{
        let res = await BookService.findAllTypeBook()
        return setTypeBook(res)
    }
    useEffect(() =>{
        listTypeBook()
    },[])
    
  
  return (
    <>
        <Formik initialValues={{title: '', quantity: '', typeBooks: 1 }}
        
            onSubmit={(values) =>{
                try {
                    if (typeof values.typeBooks === "string") {
                        values.typeBooks = parseInt(values.typeBooks);
                      }
                        const addBook = async()=>{
                            await BookService.save(values)
                            alert('thanh cong')
                            navigate(`/`)
    
                        }
                        addBook()
                
            } catch (error) {
                console.log(error);
                alert('that bai')
                
            }
               
            }}  
        >
            <Form>

                <div>
                    <label>
                    title
                    </label>
                    <Field type='text' name='title' className='form-control' />
                </div>

                <div>
                    <label>
                        quantity
                    </label>
                    <Field type='text' name='quantity' className='form-control' />
                </div>

                <div>
                    <label>
                        typeBooks
                    </label>
                    <Field as='select' name='typeBooks'  className='form-control' >
                        {typeBook.map((typeBookList) =>(
                          <option key={typeBookList.id} value={typeBookList.id}>
                                {typeBookList.name}
                          </option>        
                        ))}
                    </Field>
                </div>
                <div>
                    <button type='submit'>Save</button>
                </div>
            </Form>
            
            </Formik>    
    </>
      )
}
