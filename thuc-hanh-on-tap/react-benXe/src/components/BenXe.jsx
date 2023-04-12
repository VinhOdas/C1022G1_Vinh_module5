import React, { useEffect, useState } from 'react'
import * as BenXeService from './service/BenXeService'
import {NavLink} from 'react-router-dom'
import { Form, Formik, Field } from 'formik'
import ReactPaginate from 'react-paginate'
export default function BenXe() {
    const [benXe, setBenXe] = useState([])
    const [loaiXe, setloaiXe] = useState([])
    const [nhaXe, setNhaXe] = useState([])
    const [diemDi, setDiemDi] = useState([])
    const [diemDen, setDiemDen] = useState([])
    const [deleteId, setDeleteId] = useState(0)
    const [deleteMaXe, setDeleteMaXe] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    const handlePageClick = (selectedPage) =>{

        setCurrentPage(selectedPage.selected)

    }

    const swapDelete = (id, maXe) =>{
        setDeleteId(id)
        setDeleteMaXe(maXe) 
    }
    const listBenXe = async () => {
        let res = await BenXeService.getAll()
        setBenXe(res)
        setPageCount(Math.ceil(res.length / 5) )
    }


    const listLoaiXe = async () => {
        let res = await BenXeService.getAllLoaiXe()
        setloaiXe(res)
    }


    const listNhaXe = async () => {
        let res = await BenXeService.getAllNhaXe()
        setNhaXe(res)
    }


    const listDiemDi = async () => {
        let res = await BenXeService.getAllDiemDi()
        setDiemDi(res)
    }


    const listDiemDen = async () => {
        let res = await BenXeService.getAllDiemDen()
        setDiemDen(res)
    }

    useEffect(() => {
        listBenXe()
        listLoaiXe()
        listNhaXe()
        listDiemDi()
        listDiemDen()
    }, [])

    const handleDelete = async(deleteId) =>{
        await BenXeService.remove(deleteId)
        listBenXe()

    }
    return (
        <>

        <Formik initialValues={{maXe: '', loaiXeId: '' }}
            onSubmit={(values) =>{

                const search = async() =>{
                    let res = await BenXeService.getAll(values.maXe, values.loaiXeId)
                    setBenXe(res)
                }
                search()
            }}
        >
            <Form>
                <Field type='text' name='maXe'   />

                <div>
                <Field as = 'select' name='loaiXeId'>
                    <option value="">----------------</option>
                        {
                            loaiXe.map((lx, i) =>(
                                <option key={i}  value={lx.id}>{lx.name}</option>
                            ))
                        }
                </Field>
                       
                </div>
                <div>
                    <button type='submit'>Search</button>
                </div>
            </Form>
            

        </Formik>
        <div>
            <NavLink to={`/add`}>
                Add
            </NavLink>
        </div>
            <table align='center' border={1}>
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Ma Xe</th>
                        <th>Loai Xe</th>
                        <th>Nha Xe</th>
                        <th>Diem Di</th>
                        <th>Diem Den</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>gio di</th>
                        <th>gio den</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                       benXe.
                       slice(currentPage * 5, currentPage *5 + 5)
                       .map((benXeList, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{benXeList.maXe}</td>
                                <td>{loaiXe.filter((loaiXeList) => loaiXeList.id == benXeList.loaiXeId)[0]?.name}</td>
                                <td>{nhaXe.filter((nhaXeList) => nhaXeList.id == benXeList.nhaXeId)[0]?.name}</td>
                                <td>{diemDi.filter((diemDiList) => diemDiList.id == benXeList.diemDiId)[0]?.name}</td>
                                <td>{diemDen.filter((diemDenList) => diemDenList.id == benXeList.diemDenId)[0]?.name}</td>
                                <td>{benXeList.phone}</td>
                                <td>{benXeList.email}</td>
                                <td>{benXeList.gioDi}</td>
                                <td>{benXeList.gioDen}</td>
                                <td>
                                    <NavLink to={`/edit/${benXeList.id}`}>Edit</NavLink>
                                </td>
                                <td>
                                    <button onClick={() =>swapDelete(benXeList.id,benXeList.maXe)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {deleteMaXe}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={() =>handleDelete(deleteId)} type="button" data-bs-dismiss="modal" className="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
 
<ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
        </>
    )
}
