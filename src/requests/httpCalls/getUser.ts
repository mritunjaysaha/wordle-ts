import type { UserResponse } from '../../types/UserResponse';
import { axiosInstance } from '../config/axiosInstance';

export const getUser = async (email: string): Promise<UserResponse> => {
    const res = await axiosInstance.get(`/api/v1/users/${email}`);

    return res.data as UserResponse;
};
