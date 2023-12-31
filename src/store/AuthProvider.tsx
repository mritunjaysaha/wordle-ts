import type { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { setAuthTokenToInstance } from '../requests/utils/setAuthTokenToInstance';
import type { UserInfo } from '../types/UserInfo';
import { AuthContext } from './AuthContext';

type AuthProviderProps = {
    children: ReactNode;
};

type AuthJwtPayload = JwtPayload & {
    email: string;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const [user, setUser] = useState<UserInfo>({
        firstName: '',
        lastName: '',
        email: '',
        solvedWordsCount: 0,
    });

    useEffect(() => {
        const token = window.localStorage.getItem('token');

        if (token) {
            setAuthTokenToInstance(token);
            setIsAuthenticated(true);

            const decoded = jwtDecode<AuthJwtPayload>(token);
            const currentDate = Date.now() / 1000;

            if (decoded.exp && currentDate < decoded.exp) {
                setUser((prev) => ({ ...prev, email: decoded?.email }));
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                navigate(ROUTES.LOG_IN);
            }
        } else {
            setIsAuthenticated(false);
            navigate(ROUTES.LOG_IN);
        }
    }, []);

    useEffect(() => {
        // if (isAuthenticated && ) {
        // }
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
