import {LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS} from './authActionTypes'
import api from '../../axios/apiConfig';
import axios from 'axios';

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

const loginSuccess = (users) => {
    return {
        type: LOGIN_SUCCESS,
        payload: users,
    }
}

const loginFail = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}

export const login = (credentials) => {
    return  async (dispatch) => {
        dispatch(loginRequest);
        console.log('tuda suda');
        api.post('http://localhost:3004/auth/login', credentials)
        .then(response => {
            const user = response.data;
            console.log({user});
            dispatch(loginSuccess(user));
        })
        .catch(e =>{
            console.log(e);
            dispatch(loginFail(e));
        })
    }
}