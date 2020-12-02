import axios from 'axios';
import asyncStorage from '@react-native-community/async-storage'

import {BASE_URL} from '../config/api.config'
const instance = axios.create({baseURL: BASE_URL});
instance.interceptors.request.use(async (req) => {
    const token = await asyncStorage.getItem('access_token');
    req.headers = {
        ...req.headers,
        Authorization: token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'CORS': '*'
    }
    return req;
})
export default instance;