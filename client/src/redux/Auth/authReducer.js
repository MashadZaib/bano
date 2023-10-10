import { REGISTER, LOGIN, BEFORE_LOGIN, PROFILE, LOGOUT } from "./authTypes";

const initialState = {
    signupUser: false,
    loginUser: false,
    getProfile: false,
    logoutUser: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                getUserInfo: action.payload,
                signupUser: true
            };
        case LOGIN:
            return {
                ...state,
                getUserInfo: action.payload,
                loginUser: true,
            };
        case PROFILE:
            return {
                ...state,
                profileInfo: action.payload,
                getProfile: true,
            };
        case LOGOUT:
            return {
                ...state,
                userLogoutInfo: action.payload,
                logoutUser: true,
            };
        case BEFORE_LOGIN:
            return {
                ...state,
                loginUser: false,
                getProfile: false,
                logoutUser: false
            };
        default:
            return {
                ...state,
            };
    }
}
