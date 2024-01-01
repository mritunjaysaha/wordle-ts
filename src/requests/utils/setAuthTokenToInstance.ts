import { axiosInstance } from '../config/axiosInstance';

export const setAuthTokenToInstance = (token = '') => {
    if (token) {
        localStorage.setItem('token', token);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common.Authorization;
    }
};
