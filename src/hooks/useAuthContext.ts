import { useContext } from 'react';

import { AuthContext } from '../store/AuthContext';

export const useAuthContext = () => {
    const {
        isAuthenticated,
        user,
        setIsAuthenticated,
        openLeaderBoard,
        setOpenLeaderBoard,
        leaderBoardArr,
        setLeaderBoardArr,
    } = useContext(AuthContext);

    return {
        user,
        isAuthenticated,
        setIsAuthenticated,
        openLeaderBoard,
        setOpenLeaderBoard,
        leaderBoardArr,
        setLeaderBoardArr,
    } as const;
};
