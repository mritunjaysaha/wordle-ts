import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import OutsideClickHandler from 'react-outside-click-handler';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { useAuthContext } from '../hooks/useAuthContext';
import LeaderBoard from '../Pages/LeaderBoard';

export const RootLayout = ({ children }: { children: ReactNode }) => {
    const { isLeaderBoardClicked, handleCloseLeaderBoard } = useAuthContext();

    return (
        <section className='flex h-screen flex-col'>
            <Navbar />
            {children}
            {isLeaderBoardClicked && (
                <OutsideClickHandler onOutsideClick={handleCloseLeaderBoard}>
                    <LeaderBoard />
                </OutsideClickHandler>
            )}
            <Footer />

            <Toaster />
        </section>
    );
};
