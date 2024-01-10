import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as IconQuestion } from '../../assets/question.svg';
import { ROUTES } from '../../constants/routes';
import { useAppContext } from '../../hooks/useAppContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { logout } from '../../requests/httpCalls/logout';
import { ModeSwitch } from '../ModeSwitch/ModeSwitch';

export const Navbar = () => {
    const location = useLocation();
    const { handleOpenLeaderBoard, handleOpenGameModal } = useAppContext();
    const { isAuthenticated, setIsAuthenticated } = useAuthContext();

    const menuRef = useRef<HTMLDivElement>(null);
    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

    const handleLogOutClick = async () => {
        const res = await logout();

        if (res.success) {
            setIsAuthenticated(false);
            localStorage.removeItem('token');
        } else {
            toast.error('Failed to log out');
        }
    };

    const handleMenuClick = () => {
        if (!menuRef.current) return;

        const menu = menuRef.current as HTMLElement;

        if (!isMenuClicked) {
            menu.classList.remove('hidden');

            setIsMenuClicked(true);
        } else {
            menu.classList.add('hidden');

            setIsMenuClicked(false);
        }
    };

    const handleMenuClose = () => {
        if (!menuRef.current) return;

        const menu = menuRef.current as HTMLElement;

        setIsMenuClicked(false);
        menu.classList.add('hidden');
    };

    useEffect(() => {
        handleMenuClose();
    }, [location.pathname]);

    return (
        <OutsideClickHandler onOutsideClick={handleMenuClose}>
            <nav className='w-full items-center justify-between border-gray-200 bg-gray-900 md:px-10 xl:px-20 2xl:px-40'>
                <div className='relative flex w-full flex-wrap items-center justify-between p-4'>
                    <Link
                        to={ROUTES.HOME}
                        className='flex items-center space-x-3 rtl:space-x-reverse'
                    >
                        <span className='self-center whitespace-nowrap text-2xl font-semibold text-white'>
                            Wordle
                        </span>
                    </Link>
                    <button
                        data-collapse-toggle='navbar-default'
                        type='button'
                        className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'
                        aria-controls='navbar-default'
                        aria-expanded='false'
                        onClick={handleMenuClick}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='h-5 w-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 17 14'
                        >
                            <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M1 1h15M1 7h15M1 13h15'
                            />
                        </svg>
                    </button>
                    <div
                        ref={menuRef}
                        className='absolute inset-x-0 top-14 mx-auto hidden w-11/12 md:relative md:top-0 md:block md:w-auto lg:mx-0 lg:w-max'
                        id='navbar-default'
                    >
                        <ul className='mt-4 flex flex-col gap-4 rounded-lg border-gray-100 bg-gray-900 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse'>
                            <li>
                                <Link
                                    to={ROUTES.HOME}
                                    className='nav-list-item'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleOpenLeaderBoard} className='nav-list-item'>
                                    Leader Board
                                </button>
                            </li>
                            {!isAuthenticated ? (
                                <>
                                    <li>
                                        <Link
                                            to={ROUTES.LOG_IN}
                                            className='nav-list-item'
                                            aria-current='page'
                                        >
                                            Log In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={ROUTES.SIGN_UP}
                                            className='nav-list-item'
                                            aria-current='page'
                                        >
                                            Sign Up
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <button
                                            type='button'
                                            className='nav-list-item'
                                            aria-current='page'
                                            onClick={handleLogOutClick}
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </>
                            )}

                            <li>
                                <button
                                    title='How to play?'
                                    onClick={handleOpenGameModal}
                                    className='h-4'
                                >
                                    <IconQuestion />
                                </button>
                            </li>

                            <li>
                                <ModeSwitch />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </OutsideClickHandler>
    );
};
