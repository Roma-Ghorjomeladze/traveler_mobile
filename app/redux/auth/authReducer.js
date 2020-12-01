import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from './authActionTypes';

const initialState = {
    access_token: null,
    refresh_token: null,
    user: null,
    error: null,
    isLoading: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                access_token: action.payload.access_token,
                refresh_token: action.payload.refresh_token,
                user: action.payload.user,
                isLoading: false,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;