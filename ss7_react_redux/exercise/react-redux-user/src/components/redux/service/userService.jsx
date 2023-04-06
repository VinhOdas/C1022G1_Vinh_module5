import request from '../http-common'

const getAllUser = () => {
    return request.get('/user')
};


const userService = {
    getAllUser
}

export default userService