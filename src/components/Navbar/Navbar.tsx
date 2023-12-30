import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { ModeSwitch } from '../ModeSwitch/ModeSwitch';

interface HeaderProps {
    text: string;
}

export const Navbar = ({ text }: HeaderProps) => {
    return (
        <header className='bg-primary flex justify-between bg-violet-dark px-4 py-2 text-center font-bold text-white'>
            <Link to={ROUTES.HOME} className='text-2xl'>
                {text}
            </Link>
            <div className='flex gap-4 align-middle'>
                <ModeSwitch />
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                <Link to={ROUTES.LOG_IN}>Log In</Link>
            </div>
        </header>
    );
};
