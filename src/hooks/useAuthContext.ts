import { useContext } from 'react';

import { AuthContext } from '../store/AuthContext';

export const useAuthContext = () => {
    const {
        isAuthenticated,
        user,
        setIsAuthenticated,
        isLeaderBoardClicked,
        handleOpenLeaderBoard,
        handleCloseLeaderBoard,
        leaderBoardArr,
        setLeaderBoardArr,
    } = useContext(AuthContext);

    return {
        user,
        isAuthenticated,
        setIsAuthenticated,
        isLeaderBoardClicked,
        handleOpenLeaderBoard,
        handleCloseLeaderBoard,
        leaderBoardArr,
        setLeaderBoardArr,
    } as const;
};
