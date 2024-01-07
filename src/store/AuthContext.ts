import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

import type { LeaderBoardData } from '../types/LeaderBoardData';
import type { UserInfo } from '../types/UserInfo';

type AuthContextType = {
    user: UserInfo;
    leaderBoardArr: LeaderBoardData[];
    isAuthenticated: boolean;
    isGameModalClicked: boolean;
    isLeaderBoardClicked: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    handleOpenLeaderBoard: () => void;
    handleCloseLeaderBoard: () => void;

    handleOpenGameModal: () => void;
    handleCloseGameModal: () => void;
    setLeaderBoardArr: Dispatch<SetStateAction<LeaderBoardData[]>>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
