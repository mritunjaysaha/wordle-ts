import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import OutsideClickHandler from 'react-outside-click-handler';

import { useAuthContext } from '../hooks/useAuthContext';
import LeaderBoard from '../Pages/LeaderBoard';

export const RootLayout = ({ children }: { children: ReactNode }) => {
    const { isLeaderBoardClicked, handleCloseLeaderBoard } = useAuthContext();

    return (
        <section className='flex h-screen flex-col'>
            {children}
            {isLeaderBoardClicked && (
                <OutsideClickHandler onOutsideClick={handleCloseLeaderBoard}>
                    <LeaderBoard />
                </OutsideClickHandler>
            )}
            <Toaster />
        </section>
    );
};
