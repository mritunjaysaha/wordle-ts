import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { useAuthContext } from '../../hooks/useAuthContext';
import { logout } from '../../requests/httpCalls/logout';
import { ModeSwitch } from '../ModeSwitch/ModeSwitch';

interface HeaderProps {
    text: string;
}

export const Navbar = ({ text }: HeaderProps) => {
    const { isAuthenticated, setIsAuthenticated, setOpenLeaderBoard } = useAuthContext();

    const handleLogOutClick = async () => {
        const res = await logout();

        if (res.success) {
            setIsAuthenticated(false);
            localStorage.removeItem('token');
        } else {
            toast.error('Failed to log out');
        }
    };

    return (
        <header className='bg-primary flex justify-between bg-violet-dark px-4 py-2 text-center font-bold text-white'>
            <Link to={ROUTES.HOME} className='text-2xl'>
                {text}
            </Link>
            <div className='flex gap-4 align-middle'>
                <ModeSwitch />
                {!isAuthenticated ? (
                    <>
                        <Link to={ROUTES.SIGN_UP} className='text-lg'>
                            Sign Up
                        </Link>
                        <Link to={ROUTES.LOG_IN} className='text-lg'>
                            Log In
                        </Link>
                    </>
                ) : (
                    <button onClick={handleLogOutClick} className='text-lg'>
                        Log out
                    </button>
                )}
                <button
                    onClick={() => {
                        setOpenLeaderBoard(true);
                    }}
                >
                    Leader Board
                </button>
            </div>
        </header>
    );
};
