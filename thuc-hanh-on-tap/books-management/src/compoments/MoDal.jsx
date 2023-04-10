import React, { useEffect, useState } from 'react'
import * as CustomerService from './service/BookService'

export default function MoDal(props) {

    


  const handleDelete = async(id) =>{
    await CustomerService.remove(id)
        props.findAllList()
  }  
  return (
    <>

    

<div class="modal fade" id="modalDelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p>Ban co that su mua xoa <span style={{color: 'red'}}>{props.name}</span> khong</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  onClick={() =>handleDelete(props.id)}  data-bs-dismiss="modal"  type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
