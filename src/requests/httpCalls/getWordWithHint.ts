import type { WordResponse } from '../../types/WordResponse';
import { axiosInstance } from '../config/axiosInstance';

export const getWordWithHint = async (email: string): Promise<WordResponse> => {
    const res = await axiosInstance.get(`/api/v1/words/${email}`);

    console.log('[getWordWithHint]', { res });

    if (res.status === 200) {
        return res.data as WordResponse;
    }

    return {
        success: false,
        message: 'Failed to fetch word',
        word: '',
        hint: '',
    };
};
