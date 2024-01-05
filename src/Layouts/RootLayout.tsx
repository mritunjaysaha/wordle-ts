import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { useAuthContext } from '../hooks/useAuthContext';
import LeaderBoard from '../Pages/LeaderBoard';

export const RootLayout = ({ children }: { children: ReactNode }) => {
    const { openLeaderBoard } = useAuthContext();

    return (
        <section className='flex h-screen flex-col'>
            {children}
            {openLeaderBoard && <LeaderBoard />}
            <Toaster />
        </section>
    );
};
