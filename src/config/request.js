import axios from 'axios';
import Cookies from 'js-cookie';

 const request = axios.create({baseURL: "http://localhost:3000"});

 request.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers, 
        Authorization: `Bearer ${Cookies.get("token-server")}`
    }
    return config;
 })

export {request}