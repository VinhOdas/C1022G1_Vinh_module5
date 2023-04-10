import axios from 'axios'

const URLAPI = `http://localhost:3000`

export const getAll = async () => {
    let rs = await axios.get(URLAPI + `/customers`)

    return rs.data
}

export const getAllCustomertype = async () => {
    let res = await axios.get(URLAPI + `/customerTypes`)
    return res.data
}

export const save = async (values) => {
    await axios.post(URLAPI + `/`, { ...values })

}

export const remove = async(id) =>{
    await axios.delete(URLAPI + `/customers/${id}`)
}