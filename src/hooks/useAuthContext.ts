import { useContext } from 'react';

import { AuthContext } from '../store/AuthContext';

export const useAuthContext = () => {
    const { isAuthenticated, user, setIsAuthenticated, openLeaderBoard, setOpenLeaderBoard } =
        useContext(AuthContext);

    return {
        user,
        isAuthenticated,
        setIsAuthenticated,
        openLeaderBoard,
        setOpenLeaderBoard,
    } as const;
};
