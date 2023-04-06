import request from '../http-common'

const getAllUser = () => {
    return request.get('/user')
};

const deleteUser = (id) => {
    return request.delete(`/user/${id}`)
};


const userService = {
    getAllUser,deleteUser
}



export default userService