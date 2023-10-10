import { toast } from "react-toastify";
import { GET_ERRORS, REGISTER , LOGIN, BEFORE_LOGIN ,PROFILE, LOGOUT } from "./authTypes";
import {apiHelper} from "../apiHelper";
import { notifyError, notifySuccess } from '../../utils/toast';
export const beforeVendor = () => {
    return {
        type: BEFORE_LOGIN,
    };
};
const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ` + localStorage.getItem("token"),
};

export const registerStudent = (formData) => async (dispatch) => {
    try {
        let res = await apiHelper("post", `student/register`, formData);
        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: REGISTER,
                    payload: data,
                });
                
            } else {
                dispatch({
                    type: GET_ERRORS,
                });
            }
            return res?.data;
        }
    } catch (error) {
        console.log(error);
    }
};

export const loginStudent = (formData) => async (dispatch) => {
    try {
        let res = await apiHelper("post", `student/login`, formData)
        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: LOGIN,
                    payload: data,
                });
            } else {
                dispatch({
                    type: GET_ERRORS,
                });
            }
            return res?.data;
        }
    } catch (error) {
        console.log(error);
    }
};




export const registerUser = (formData) => async (dispatch) => {
    try {
        let res = await apiHelper("post", `auth/register`, formData);
        console.log(res);
        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: REGISTER,
                    payload: data,
                });
                
            } else {
                dispatch({
                    type: GET_ERRORS,
                });
            }
            return res?.data;
        }
    } catch (error) {
        
        console.log(error);
    }
};

export const loginUser = (formData) => async (dispatch) => {
    try {
        let res = await apiHelper("post", `auth/login`, formData)
        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: LOGIN,
                    payload: data,
                });
            } else {
                dispatch({
                    type: GET_ERRORS,
                });
            }
            return res?.data;
        }
    } catch (error) {
        console.log(error);
    }
};

export const fetchProfile = () => async (dispatch) => {
    try {
        let res = await apiHelper("get", `profile`, "" , headers)
        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: PROFILE,
                    payload: data,
                });
            } else {
                dispatch({
                    type: GET_ERRORS,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
};

export const logoutStudent = (formData) => async (dispatch) => {
    try {
        let res = await apiHelper("post", `auth/logout`, formData , headers)
        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: LOGOUT,
                    payload: data,
                });
                
            } else {
                dispatch({
                    type: GET_ERRORS,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
};

// export const checkAuth  = (formData) => async (dispatch) => {
//     try {
//         let res = await apiHelper("get", `auth/login`, formData)
//         if (res?.data) {
//             if (res?.data) {
//                 let { data } = res;
//                 dispatch({
//                     type: LOGIN,
//                     payload: data,
//                 });
//             } else {
//                 dispatch({
//                     type: GET_ERRORS,
//                 });
//             }
//             return res?.data;
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };
