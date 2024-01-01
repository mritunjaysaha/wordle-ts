import type { BaseResponse } from '../../types/BaseResponse';
import { axiosInstance } from '../config/axiosInstance';

export const logout = async (): Promise<BaseResponse> => {
    const res = await axiosInstance.delete('/api/v1/auth/logout');

    return res.data as BaseResponse;
};
