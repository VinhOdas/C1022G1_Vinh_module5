import axios from 'axios'

export const getAll = async(maXe='', loaiXeId ='') =>{
    try {
        let res = await axios.get(`http://localhost:3000/benXe?maXe_like=`+ maXe + `&loaiXeId_like=` + loaiXeId)
       return res.data
    } catch (error) {
        
    }
}

export const getAllLoaiXe = async() =>{
    try {
        let res = await axios.get(`http://localhost:3000/loaiXe`)
       return res.data
    } catch (error) {
        
    }
}

export const getAllNhaXe = async() =>{
    try {
        let res = await axios.get(`http://localhost:3000/nhaXe`)
        return res.data
    } catch (error) {
        
    }
}

export const getAllDiemDi = async() =>{
    try {
        let res = await axios.get(`http://localhost:3000/diemDi`)
        return  res.data
    } catch (error) {
        
    }
}

export const getAllDiemDen = async() =>{
    try {
        let res = await axios.get(`http://localhost:3000/diemDen`)
        return  res.data
    } catch (error) {
        
    }
}

export const remove = async(id) =>{
    try {
        await axios.delete(`http://localhost:3000/benXe/${id}`)
    } catch (error) {
        
    }
}

export const save = async(values) =>{
    try {
        await axios.post(`http://localhost:3000/benXe/`, {...values})
        alert('thong cong')
        return values
    } catch (error) {
        
    }
}

export const findById = async(id) =>{
    try {
     let res =   await axios.get(`http://localhost:3000/benXe/${id}`)
       return res.data
    } catch (error) {
        
    }
}
export const saveEdit = async(values) =>{
    try {
      await axios.put(`http://localhost:3000/benXe/${values.id}`, {...values})
      return values
    } catch (error) {
        
    }
}

