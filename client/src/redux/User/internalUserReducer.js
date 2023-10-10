import {
    GET_USER,
    CREATE_USER,
    GET_USERS,
    EDIT_USER,
    BEFORE_USER,
    DELETE_USER,
} from "./internalUserTypes";

const initialState = {
    getUsers: false,
    users: null,
    delUser: false,
    createUser: false,
    getUser: false,
    editUser: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                getUserInfo: action.payload,
                getUser: true
            }
        case CREATE_USER:
            return {
                ...state,
                getUserInfo: action.payload,
                createUser: true
            }
        case GET_USERS:
            return {
                ...state,
                usersList: action.payload,
                getUsers: true
            }
        case EDIT_USER:
            return {
                ...state,
                User: action.payload,
                editUser: true
            }
        case DELETE_USER:
            return {
                ...state,
                User: action.payload,
                delUser: true
            }
        case BEFORE_USER:
            return {
                ...state,
                getUsers: false,
                users: null,
                delUser: false,
                createUser: false,
                getUser: false,
                editUser: false
            }
        default:
            return {
                ...state
            }
    }
}