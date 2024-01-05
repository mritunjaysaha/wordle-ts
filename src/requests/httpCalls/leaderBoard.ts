import type { LeaderBoardResponse } from '../../types/LeaderBoardResponse';
import { axiosInstance } from '../config/axiosInstance';

export const leaderBoard = async (email: string): Promise<LeaderBoardResponse> => {
    const res = await axiosInstance.get(`/api/v1/users/${email}/leaderboard`);

    if (res.status === 200) {
        console.log('[here]', res.data);
        return res.data as LeaderBoardResponse;
    }

    return {
        success: false,
        message: 'Failed to fetch leaderboard',
        users: [],
    };
};
