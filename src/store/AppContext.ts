import { createContext, type Dispatch, type SetStateAction } from 'react';

import type { LeaderBoardData } from '../types/LeaderBoardData';

type AppContextType = {
    leaderBoardArr: LeaderBoardData[];
    isGameModalClicked: boolean;
    isLeaderBoardClicked: boolean;
    handleOpenLeaderBoard: () => void;
    handleCloseLeaderBoard: () => void;
    handleOpenGameModal: () => void;
    handleCloseGameModal: () => void;
    setLeaderBoardArr: Dispatch<SetStateAction<LeaderBoardData[]>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
