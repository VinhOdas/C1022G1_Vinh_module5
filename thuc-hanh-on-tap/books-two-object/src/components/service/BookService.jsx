import axios  from 'axios'

export const findAll = async() =>{
    try {
        let res = await axios.get(`http://localhost:3000/books`)

    return res.data
    } catch (error) {
        
    }
    
}

export const findAllCustomerType = async() =>{
    try {
        let res = await axios.get(`http://localhost:3000/typeBook`)

    return res.data
    } catch (error) {
        
    }
    
}