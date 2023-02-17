import axios from "axios";

const axiosOption = {
    baseURL: 'http:localhost:1337',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }

}

const instance = axios.create(axiosOption);

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    const myPromise = Promise.reject(error);
    myPromise.catch(error => {
        console.error(error.message);
    });
    return null;
});

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    const myPromise = Promise.reject(error);
    myPromise.catch(error => {
        console.error(error.message);
    });
    return null;
});

export default instance;