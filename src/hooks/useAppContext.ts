import { useContext } from 'react';

import { AppContext } from '../store/AppContext';

export const useAppContext = () => {
    const {
        leaderBoardArr,
        isGameModalClicked,
        isLeaderBoardClicked,
        setLeaderBoardArr,
        handleOpenGameModal,
        handleCloseGameModal,
        handleOpenLeaderBoard,
        handleCloseLeaderBoard,
    } = useContext(AppContext);

    return {
        leaderBoardArr,
        isGameModalClicked,
        isLeaderBoardClicked,
        setLeaderBoardArr,
        handleOpenGameModal,
        handleCloseGameModal,
        handleOpenLeaderBoard,
        handleCloseLeaderBoard,
    } as const;
};
