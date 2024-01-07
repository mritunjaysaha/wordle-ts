import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { leaderBoard } from '../requests/httpCalls/leaderBoard';
import { useAppContext } from './useAppContext';
import { useAuthContext } from './useAuthContext';

export const useLeaderBoard = () => {
    const { leaderBoardArr, setLeaderBoardArr } = useAppContext();
    const {
        isAuthenticated,
        user: { email },
    } = useAuthContext();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getLeaderBoard = async () => {
        setIsLoading(true);
        const res = await leaderBoard(email);

        if (res.success) {
            setLeaderBoardArr(res.users);
        }

        setIsLoading(false);
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
        isLoading,
        leaderBoardArr,
    } as const;
};
