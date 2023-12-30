import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { ModeSwitch } from '../ModeSwitch/ModeSwitch';

interface HeaderProps {
    text: string;
}

export const Navbar = ({ text }: HeaderProps) => {
    return (
        <header className='bg-primary flex justify-between bg-violet-dark px-4 py-2 text-center text-2xl font-bold text-white'>
            <Link to={ROUTES.HOME}>{text}</Link>
            <ModeSwitch />
        </header>
    );
};
