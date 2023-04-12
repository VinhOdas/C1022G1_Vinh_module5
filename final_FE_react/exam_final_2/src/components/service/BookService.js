import axios from "axios"

export const getAll = async(name = '', typeId = '') =>{
   try {
    let res = await axios.get(`http://localhost:8080/books?name_like=` + name + `&typeId_like=` + typeId)
    return res.data
   } catch (error) {
    
   }
}

export const getAllType = async() =>{
    try {
        let red = await axios.get(`http://localhost:8080/typeBook`)
        return red.data
    } catch (error) {
        
    }
}

export const save = async(values) =>{
    await axios.post(`http://localhost:8080/books/`, {...values})
}

export const findById = async(id) =>{
    let res = await axios.get(`http://localhost:8080/books/${id }`)
    return res.data
}

export const saveEdit = async(values) =>{
    await axios.put(`http://localhost:8080/books/${values.id}`, {...values})

    return values
}
export const remove = async(id) =>{
    try {
        await axios.delete(`http://localhost:8080/books/${id}`)
    } catch (error) {
        
    }

}