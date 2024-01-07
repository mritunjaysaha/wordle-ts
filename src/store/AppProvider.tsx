import type { ReactNode } from 'react';
import { useState } from 'react';

import type { LeaderBoardData } from '../types/LeaderBoardData';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [leaderBoardArr, setLeaderBoardArr] = useState<LeaderBoardData[]>([]);
    const [isGameModalClicked, setIsGameModalClicked] = useState<boolean>(false);
    const [isLeaderBoardClicked, setIsLeaderBoardClicked] = useState<boolean>(false);

    const handleOpenLeaderBoard = () => {
        setIsLeaderBoardClicked(true);
    };

    const handleCloseLeaderBoard = () => {
        setIsLeaderBoardClicked(false);
    };

    const handleOpenGameModal = () => {
        setIsGameModalClicked(true);
    };

    const handleCloseGameModal = () => {
        setIsGameModalClicked(false);
    };

    return (
        <AppContext.Provider
            value={{
                leaderBoardArr,
                isGameModalClicked,
                isLeaderBoardClicked,
                setLeaderBoardArr,
                handleOpenGameModal,
                handleCloseGameModal,
                handleOpenLeaderBoard,
                handleCloseLeaderBoard,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
