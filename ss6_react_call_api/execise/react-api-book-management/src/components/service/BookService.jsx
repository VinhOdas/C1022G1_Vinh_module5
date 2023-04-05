import axios from 'axios';

export const APIBOOKS = 'http://localhost:3000/books'

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

export const saveEdit = async (id, values) =>{
    try{
        await axios.patch(APIBOOKS + '/'+ id, {...values})  
      }
    catch(e){ 
        console.log(e);
    }
}

export const findById = async(id) =>{
    try {
        await axios.get(APIBOOKS + '/'+ id)
    } catch (error) {
        
    }
}