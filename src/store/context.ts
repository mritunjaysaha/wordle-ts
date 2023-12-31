import { createContext } from 'react';

type WordleContextType = {
    onIncrementScore: () => void;
};

export const WordleContext = createContext<WordleContextType>({
    onIncrementScore: () => {},
});

// type AuthContextType = {
//     isAuthenticated: boolean;
//     user: UserInfo;
// };
