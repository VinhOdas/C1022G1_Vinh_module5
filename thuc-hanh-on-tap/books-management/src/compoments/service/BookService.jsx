import axios from 'axios'

const URLAPI = `http://localhost:3000/books`
export const getAll = async () =>{
        try {
            let result  = axios.get(URLAPI)
            return (await result).data
        } catch (error) {
            console.log(error);
            
        }
}

export const save = async (values) =>{
    try {
        await axios.post(URLAPI + `/`, {...values})
    } catch (error) {
        console.log(error);
    }
}

export const saveEdit = async(values) =>{
    try {

        await axios.put(URLAPI + `/${values.id}`, {...values})

        
    } catch (error) {   
        console.log(error);
        
    }
}

export const findById = async(id) =>{
        try {
            let res = await axios.get(`http://localhost:3000/books/${id}`)

            return res.data
        } catch (error) {
            console.log(error);
            
        }
}

export const remove = async(id) =>{
    try {
         await axios.delete(`http://localhost:3000/books/${id}`)

    } catch (error) {
        console.log(error);
        
    }
}


