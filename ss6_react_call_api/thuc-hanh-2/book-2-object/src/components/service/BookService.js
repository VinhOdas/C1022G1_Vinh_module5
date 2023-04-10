import axios from 'axios'

export const getAll = async () =>{
    try {
        let res = (await axios.get(`http://localhost:3000/books`)).data

    return res
    } catch (error) {
        
    }
    
}

export const getAllTypeBook = async () =>{
try {
    let res = (await axios.get(`http://localhost:3000/typeBooks`)).data

    return res
} catch (error) {
    
}
  
}

export const save = async(values) =>{
    try {
        await axios.post(`http://localhost:3000/books`,{...values})
    } catch (error) {
        
    }
}
export const findById = async(id) =>{
    try {
        let res = await axios.get(`http://localhost:3000/books/${id}`)

        return  res.data
    } catch (error) {
        
    }
}

export const saveEdit = async(values) => {
    try {
        axios.put(`http://localhost:3000/books/${values.id}`, {...values})
        return values
    } catch (error) {
        
    }
}