import type { WordResponse } from '../../types/WordResponse';
import { axiosInstance } from '../config/axiosInstance';

export const getWord = async (): Promise<Omit<WordResponse, 'hint'>> => {
    const res = await axiosInstance.get('/api/v1/words');

    if (res.status === 200) {
        return res.data as WordResponse;
    }

    return {
        success: false,
        message: 'Failed to get word',
        word: '',
    };
};
