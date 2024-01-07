import { useContext } from 'react';

import { AuthContext } from '../store/AuthContext';

export const useAuthContext = () => {
    const {
        user,
        leaderBoardArr,
        isAuthenticated,
        isGameModalClicked,
        isLeaderBoardClicked,
        setLeaderBoardArr,
        setIsAuthenticated,
        handleOpenGameModal,
        handleCloseGameModal,
        handleOpenLeaderBoard,
        handleCloseLeaderBoard,
    } = useContext(AuthContext);

    return {
        user,
        leaderBoardArr,
        isAuthenticated,
        isGameModalClicked,
        isLeaderBoardClicked,
        setLeaderBoardArr,
        setIsAuthenticated,
        handleOpenGameModal,
        handleCloseGameModal,
        handleOpenLeaderBoard,
        handleCloseLeaderBoard,
    } as const;
};
