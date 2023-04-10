import React from 'react'
import * as CustomerService from '../customer/service/CustomerService'

export default function CustomerModal(props) {



const handleDelete = async(id) =>{
  await CustomerService.remove(id)
  props.findAllList()

}

  return (
    <>
  
<div class="modal" tabindex="-1" id='modalDelete'>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Ban co that su mua xoa <span style={{color: 'red'}}>{props.name}</span> khong</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={() =>handleDelete(props.id)}   type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
    </>
    
    )
}
