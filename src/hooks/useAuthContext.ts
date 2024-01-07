import { useContext } from 'react';

import { AuthContext } from '../store/AuthContext';

export const useAuthContext = () => {
    const { user, isAuthenticated, setUser, setIsAuthenticated } = useContext(AuthContext);

    return {
        user,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
    } as const;
};
