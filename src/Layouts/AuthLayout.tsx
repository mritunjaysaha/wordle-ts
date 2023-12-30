import type { FC, ReactNode } from 'react';

type AuthLayoutProps = {
    children: ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return <section className='flex h-full w-full items-center justify-center'>{children}</section>;
};
