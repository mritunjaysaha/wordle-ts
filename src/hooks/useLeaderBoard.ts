import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { leaderBoard } from '../requests/httpCalls/leaderBoard';
import type { LeaderBoardData } from '../types/LeaderBoardData';
import { useAuthContext } from './useAuthContext';

export const useLeaderBoard = () => {
    // const {} = useAppContext();
    const {
        isAuthenticated,
        user: { email },
    } = useAuthContext();

    const [leaderBoardArr, setLeaderBoardArr] = useState<LeaderBoardData[]>([]);

    const getLeaderBoard = async () => {
        const res = await leaderBoard(email);

        if (res.success) {
            setLeaderBoardArr(res.users);
        }
    };

    useEffect(() => {
        if (isAuthenticated && email) {
            if (!leaderBoardArr.length) {
                getLeaderBoard();
            }
        } else {
            toast('You need to log in to see the leader board');
        }
    }, [isAuthenticated]);

    return {
        leaderBoardArr,
    } as const;
};
