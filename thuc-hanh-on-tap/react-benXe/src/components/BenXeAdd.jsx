import React, { useEffect, useState } from 'react'
import * as BenXeService from './service/BenXeService'
import { Field, Form, Formik } from 'formik'
export default function BenXeAdd() {
    const [loaiXe, setloaiXe] = useState([])
    const [nhaXe, setNhaXe] = useState([])
    const [diemDi, setDiemDi] = useState([])
    const [diemDen, setDiemDen] = useState([])



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
        listLoaiXe()
        listNhaXe()
        listDiemDi()
        listDiemDen()
    }, [])

    return (
        <>

            <Formik initialValues={
                {
                    maXe: '',
                    loaiXeId: '',
                    nhaXeId: '',
                    diemDiId: '',
                    diemDenId: '',
                    phone: '',
                    email: '',
                    gioDi: '',
                    gioDen: ''
                }}
                onSubmit={(values) =>{
                    const create = async() =>{
                        await BenXeService.save(values)
                        return values

                    }
                    create()
                } } 
                >
                    <Form>
                        <div>
                            <label htmlFor="maXe"/>
                            <Field type='number' name='maXe' id='maXe' />
                        </div>

                        <div>
                            <label htmlFor="loaiXeId"/>
                            <Field as='select' name='loaiXeId' id='loaiXeId' >
                                {
                                    loaiXe.map((loaiXeList, index) =>(
                                        <option key={index} value={loaiXeList.id}>
                                            {loaiXeList.name}
                                        </option>
                                    ))
                                }
                            </Field>
                            </div>

                            <div>
                            <label htmlFor="nhaXeId"/>
                            <Field as='select' name='nhaXeId' id='nhaXeId' >
                                {
                                    nhaXe.map((nhaXeList, index) =>(
                                        <option key={index} value={nhaXeList.id}>
                                            {nhaXeList.name}
                                        </option>
                                    ))
                                }
                            </Field>
                            </div>

                            <div>
                            <label htmlFor="diemDiId"/>
                            <Field as='select' name='diemDiId' id='diemDiId' >
                                {
                                    diemDi.map((diemDiList, index) =>(
                                        <option key={index} value={diemDiList.id}>
                                            {diemDiList.name}
                                        </option>
                                    ))
                                }
                            </Field>
                            </div>

                            <div>
                            <label htmlFor="diemDenId"/>
                            <Field as='select' name='diemDenId' id='diemDenId' >
                                {
                                    diemDen.map((diemDenList, index) =>(
                                        <option key={index} value={diemDenList.id}>
                                            {diemDenList.name}
                                        </option>
                                    ))
                                }
                            </Field>
                            </div>
                        <div>
                            <label htmlFor="phone"/>
                            <Field type='text' name='phone' id='phone' />
                        </div>
                        

                        <div>
                            <label htmlFor="email"/>
                            <Field type='text' name='email' id='email' />
                        </div>
                        <div>
                            <label htmlFor="gioDi"/>
                            <Field type='number' name='gioDi' id='gioDi' />
                        </div>

                        <div>
                            <label htmlFor="gioDen"/>
                            <Field type='number' name='gioDen' id='gioDen' />
                        </div>

                        <div>
                            <button type='submit' className='btn btn-warning' style={{color: 'white'}}>Add</button>
                        </div>
                    </Form>
                    



            </Formik>

        </>
    )
}
