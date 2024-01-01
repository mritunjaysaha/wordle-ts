import { useContext } from 'react';

import { AuthContext } from '../store/AuthContext';

export const useAuthContext = () => {
    const { isAuthenticated, user, setIsAuthenticated } = useContext(AuthContext);

    return {
        user,
        isAuthenticated,
        setIsAuthenticated,
    } as const;
};
