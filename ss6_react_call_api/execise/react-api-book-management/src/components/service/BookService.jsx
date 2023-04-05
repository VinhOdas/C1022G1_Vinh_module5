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