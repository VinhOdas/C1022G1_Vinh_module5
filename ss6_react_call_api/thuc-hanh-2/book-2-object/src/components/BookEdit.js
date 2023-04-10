import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as BookService from './service/BookService'

export default function BookEdit() {
    const [bookEdit, setBookEdit] = useState()
    const id = useParams()
    const [typeBook, setTypeBook] = useState([]);

    const listTypeBook = async () => {
        let res = await BookService.getAllTypeBook()
        setTypeBook(res)
    }


    useEffect(() => {
        listTypeBook()
    }, [])


    useEffect(() => {
        const findId = async () => {
            let res = await BookService.findById(id.id)
            setBookEdit(res)
        }
        findId()
    }, [id.id])

    if (!bookEdit) {
        return null
    }



    const saveEditt = async (values) => {
        await BookService.save(values)
    }

    saveEditt()




    return (
        <>
            <Formik
                initialValues={{ id: BookEdit.id, title: BookEdit.title, quantity: BookEdit.quantity, typeId: BookEdit.typeId }}
                onSubmit={
                    async (values) => {
                        await saveEditt(values)
                    }
                }
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
                    {
                        <div>
                            <button type='submit'>Save</button>
                        </div>
                    }



                </Form>

            </Formik>
        </>
    )
}
