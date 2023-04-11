import React, { useEffect, useState } from 'react'
import * as CustomerService from './service/BookService'

export default function MoDal(props) {

    


  const handleDelete = async(id) =>{
    await CustomerService.remove(id)
        props.findAllList()
  }  
  return (
    <>

    

<div className="modal fade" id="modalDelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p>Ban co that su mua xoa <span style={{color: 'red'}}>{props.title}</span> khong</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  onClick={() =>handleDelete(props.id)}  data-bs-dismiss="modal"  type="button" className="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
