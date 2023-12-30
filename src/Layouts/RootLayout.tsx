import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className='flex h-screen flex-col'>
            {children}
            <Toaster />
        </section>
    );
};
