import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import LeaderBoard from '../Pages/LeaderBoard';

export const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className='flex h-screen flex-col'>
            {children}
            <LeaderBoard />
            <Toaster />
        </section>
    );
};
