import axios from 'axios'

export const findAll = async () =>{
    try {
        let res = await axios.get(`http://localhost:3000/books`)
    return res.data
    } catch (error) {
        console.log(error);
        
    }
}

export const findAllTypeBook = async () =>{
    try {
        let res = await axios.get(`http://localhost:3000/typeBooks`)
    return res.data
    } catch (error) {
        console.log(error);
        
    }
}

export const save = async (values) =>{
    try {
        await axios.post(`http://localhost:3000/books`, {...values})

     
    } catch (error) {
        console.log(error);
        
    }
}