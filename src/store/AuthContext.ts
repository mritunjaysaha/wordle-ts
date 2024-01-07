import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

import type { UserInfo } from '../types/UserInfo';

type AuthContextType = {
    user: UserInfo;
    isAuthenticated: boolean;
    setUser: Dispatch<SetStateAction<UserInfo>>;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
