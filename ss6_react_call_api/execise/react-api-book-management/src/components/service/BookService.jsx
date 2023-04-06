import axios from 'axios';

export const APIBOOKS = `http://localhost:3000/books`

export const findAll = async () => {

    try{
        const result = await axios.get(APIBOOKS);
        return result.data;
    }
    catch(err){
        console.log(err);

    }
}

export const save = async (values) =>{
    try{
        await axios.post(APIBOOKS, {...values})
    }
    catch(e){ 
        console.log(e);
    }
}

export const saveEdit = async ( book) =>{
    try{
        await axios.put(`http://localhost:3000/books/${book.id}`, {...book})  
      }
    catch(e){ 
        console.log(e);
    }
}

export const findById = async(id) =>{
    try {
        const result =   await axios.get(`http://localhost:3000/books/${id}`)
        return result.data
    } catch (error) {
        
    }
}