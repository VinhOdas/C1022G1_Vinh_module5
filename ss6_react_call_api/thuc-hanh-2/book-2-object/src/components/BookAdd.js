import React, { useEffect, useState } from 'react'
import * as BookService from './service/BookService'
import { Field, Formik } from 'formik'
import { Form } from 'formik';
export default function BookAdd() {
    const [typeBook, setTypeBook] = useState([]);

    const listTypeBook = async () => {
        let res = await BookService.getAllTypeBook()
        setTypeBook(res)
    }
    useEffect(() => {
        listTypeBook()
    },[])
    return (
        <>
            <Formik
                initialValues={{ title: '', quantity: '', typeId: 1 }}

                onSubmit={(values) => {
                    // if(typeof values.typeId === 'string'){
                    //     values.typeId = parseInt(values.typeId)
                    // }
                    const addBook = async () => {
                        await BookService.save(values)
                        alert('them moi thanh cong')
                    }
                    addBook()

                }}
            >

                <Form>
                    <div>
                        <label>Title</label>
                        <Field type='text' name='title' />
                    </div>
                    <div>
                        <label>quantity</label>
                        <Field type='text' name='quantity' />
                    </div>
                    <div>
                        <label> type</label>
                        <Field as='select' name='typeId'>
                            {
                                typeBook.map((typeBookList, i) => (
                                    <option key={i} value={typeBookList.id}>
                                        {typeBookList.name}
                                    </option>
                                ))
                            }
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
