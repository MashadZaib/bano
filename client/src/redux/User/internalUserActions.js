import { toast } from "react-toastify";
import {
    GET_ERRORS,
    GET_USER,
    CREATE_USER,
    GET_USERS,
    EDIT_USER,
    BEFORE_USER,
    DELETE_USER,
} from "./internalUserTypes";
import { apiHelper } from "../apiHelper";

export const beforeUser = () => {
    return {
        type: BEFORE_USER,
    };
};
const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ` + localStorage.getItem("token"),
};
export const fetchUsersInfo = () => async (dispatch) => {
    try {
        let res = await apiHelper("get", `users`, "", headers);
        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: GET_USERS,
                    payload: data,
                });
            } else {
                dispatch({
                    type: GET_ERRORS,
                    payload: error,
                });
            }
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ERRORS,
            payload: error,
        });
    }
};

export const createUser = (formData) => async (dispatch) => {
    try {
        let res = await apiHelper("post", `users`, formData, headers);

        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: CREATE_USER,
                    payload: data,
                });
                if (res?.data?.status == "Success") {
                    toast.success(res?.data?.message);
                } else {
                    toast.error(res?.data?.message);
                }
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

export const deleteUser = (id) => async (dispatch) => {
    try {
        let res = await apiHelper("delete", `users/${id}`, "", headers);

        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: DELETE_USER,
                    payload: data,
                });
                if (res?.data?.status == "Success") {
                    toast.success(res?.data?.message);
                } else {
                    toast.error(res?.data?.message);
                }
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

export const ShowUser = (id) => async (dispatch) => {
    try {
        let res = await apiHelper("get", `users/${id}`, "", headers);
        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: GET_USER,
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

export const editUser = (id, formData) => async (dispatch) => {
    try {
        let res = await apiHelper("put", `users/${id}`, formData, headers);

        if (res?.data) {
            if (res?.data) {
                let { data } = res;
                dispatch({
                    type: EDIT_USER,
                    payload: data,
                });
                if (res?.data?.status == "Success") {
                    toast.success(res?.data?.message);
                } else {
                    toast.error(res?.data?.message);
                }
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
