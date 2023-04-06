import userService from "../service/userService";
import { DELETE_USERS, GET_ALL_USERS } from "./types";

export const getAllUsers = () => async (dispatch) =>{
    try {
        const res  = await userService.getAllUser();
        dispatch({
            type: GET_ALL_USERS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error);
    }
} 

export const deleteUser = () => async (dispatch) =>{
    try {
        const res  = await userService.de();
        dispatch({
            type: DELETE_USERS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error);
    }
}