import type { ReactNode } from 'react';

export const RootLayout = ({ children }: { children: ReactNode }) => {
    return <section className='flex h-screen flex-col'>{children}</section>;
};
