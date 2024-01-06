import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

import type { LeaderBoardData } from '../types/LeaderBoardData';
import type { UserInfo } from '../types/UserInfo';

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserInfo;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    isLeaderBoardClicked: boolean;
    handleOpenLeaderBoard: () => void;
    handleCloseLeaderBoard: () => void;
    leaderBoardArr: LeaderBoardData[];
    setLeaderBoardArr: Dispatch<SetStateAction<LeaderBoardData[]>>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
