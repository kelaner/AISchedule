import axios from "axios";

const axiosOption = {
    baseURL: 'http:localhost:1337',
    timeout: 5000
}

const instance = axios.create(axiosOption);

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default instance;