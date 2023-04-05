import axios from 'axios';

export const APITODO = 'http://localhost:3000/todos'

export const findAll = async () => {

    try{
        const result = await axios.get(APITODO);
        return result.data;
    }
    catch(err){
        console.log(err);

    }
}

export const save = async (values) =>{
    try{
        await axios.post(APITODO, {...values})
    }
    catch(e){
        console.log(e);
    }
}