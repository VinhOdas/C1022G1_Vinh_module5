import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import * as BookService from './service/BookService' 
import { Field, Form, Formik } from 'formik'
// import { NavLink } from 'react-router-dom'
export default function ExamAdd() {

  const [type, setType] = useState([])
  const listType = async() =>{
    let res = await BookService.getAllType()
    setType(res)
}
useEffect(() =>{
       
  listType()
},[])

  return (
   
    <Formik
      initialValues={{name: '', gender: '', typeId: ''}}
      onSubmit={values =>{
        const add = async() =>{
          await BookService.save(values)
          return values
        }
        add()
      }}
    >

      <Form>
      <>

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
              <Field id='nam'  type='radio' name='gender' value='1' />
            </div>

            <div className="input-group input-group-merge">
            <label >Nu</label>
              <Field id='nu' type='radio' name='gender' value='0' />
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

</>
      </Form>
    </Formik>


 
  )
}
