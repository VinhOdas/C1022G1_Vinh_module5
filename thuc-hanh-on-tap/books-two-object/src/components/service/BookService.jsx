import axios from 'axios'

export const findAll = async() =>{
   try {
    const res = await axios.get(`http://localhost:3000/typeBook`)
    return res.data
    
   } catch (error) {
    console.log(error);

   }
} 

export const findAllTypeBook = async() =>{
   try {
    const res = await axios.get(`http://localhost:3000/typeBook`)
    return res.data
    
   } catch (error) {
    console.log(error);
    
   }
} 