import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import * as BookService from './service/BookService' 
import { Field, Form, Formik } from 'formik'
import { useParams } from 'react-router-dom'

export default function ExamEdit() {
    const [type, setType] = useState([])
    const [book, setBook] = useState()
    const param = useParams()
    const listType = async() =>{
      let res = await BookService.getAllType()
      setType(res)
  }

  const findId = async(id) =>{
    let res = await BookService.findById(id)
    setBook(res)
  }
  useEffect(() =>{
    findId(param.id)

  },[param.id])

  useEffect(() =>{
    listType()
  },[])

    if(!book){
        return null
    }
  return (

    <>
    <Formik
    initialValues={{id: book.id, name: book.name, gender: book.gender, typeId: book.typeId}}
    onSubmit={(values) =>{
        const edit = async() =>{
            await BookService.saveEdit(values)

            setBook(values)
        } 
        edit() 
    }}
    >
        <Form>
        <div className="row">
 
 <div className="col-md-6">
   <div className="card">
   

     <div className="card-body">
       <div className="col-xl-12 col-md-12 col-sm-12 mb-2">

       <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
            <label className="form-label">Name</label>
            <div className="input-group input-group-merge">

              <Field   type='text' name='name' />
            </div>
            </div>
         <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
           <label className="form-label">Gender</label>
           <div className="input-group input-group-merge">
             <label >Nam</label>
             <Field id='nam'  type='radio' name='gender' value='1' check={book.gender === 1} />
           </div>

           <div className="input-group input-group-merge">
           <label >Nu</label>
             <Field id='nu' type='radio' name='gender' value='0' check={book.gender === 0}/>
           </div>
         
         </div>


         <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
           <label className="form-label" >?</label>
             <Field as='select' name='typeId' id='typeId' >
               <option value=''>
                   ----------------
               </option>
                 {type.map((t,i) =>(
                   <option key={i} value={t.id}>
                     {t.name}
                   </option>
                 ))}
             </Field>
           </div>
         

       </div>
       <div className="col-12">
         <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
             Add
         </button>
         <button style={{ marginLeft: '10%' }} type='reset' className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
           Reset
         </button>
       </div>

     </div>


   </div>
 </div>
</div>
        </Form>

    </Formik>
    </>
  )
}
