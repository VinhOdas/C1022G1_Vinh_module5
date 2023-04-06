import { GET_ALL_USERS } from "../action/types";

const initialState = []
const userReducer = (users = initialState, action) =>{
    const{type, payload} = action;

    switch (type) {
        case GET_ALL_USERS:
            
            return payload
            
    
    default:
        return users;
}
};

export default userReducer