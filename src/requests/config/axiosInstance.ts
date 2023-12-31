import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.NEXT_PUBLIC_BASE_URL,
});
