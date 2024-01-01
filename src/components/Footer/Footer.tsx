import { ReactComponent as IconGitHub } from '../../assets/github.svg';

export const Footer = () => {
    return (
        <footer className='bg-violet-dark p-2 text-center text-white'>
            <p className='flex items-center justify-center'>
                Made by&nbsp;
                <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://github.com/mritunjaysaha'
                    className='flex items-center justify-center'
                >
                    Mritunjay&nbsp;
                    <span className='text-white hover:underline'>
                        <IconGitHub className='h-5 w-5 fill-current' />
                    </span>
                </a>
            </p>
        </footer>
    );
};
