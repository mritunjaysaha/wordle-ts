import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

import type { UserInfo } from '../types/UserInfo';

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserInfo;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    openLeaderBoard: boolean;
    setOpenLeaderBoard: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
