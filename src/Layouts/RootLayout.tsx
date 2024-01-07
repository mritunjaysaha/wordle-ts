import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import OutsideClickHandler from 'react-outside-click-handler';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { useAppContext } from '../hooks/useAppContext';
import LeaderBoard from '../Pages/LeaderBoard';

export const RootLayout = ({ children }: { children: ReactNode }) => {
    const { isLeaderBoardClicked, handleCloseLeaderBoard } = useAppContext();

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
