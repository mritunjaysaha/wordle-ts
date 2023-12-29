import { Link, useNavigate } from 'react-router-dom';
import { ModeSwitch } from './ModeSwitch';
import { ROUTES } from '../../constants/routes';

interface HeaderProps {
    text: string;
}

export const Header = ({ text }: HeaderProps) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(ROUTES.HOME);
    };

    return (
        <header className='bg-primary bg-violet-dark flex justify-between py-2 px-4 text-center text-2xl font-bold text-white'>
            <h1 onClick={handleOnClick}>{text}</h1>
            <ModeSwitch />
        </header>
    );
};
