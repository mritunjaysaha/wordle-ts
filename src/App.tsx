import { Toaster } from 'react-hot-toast';
import { Board } from './components/Board/Board';

function App() {
    return (
        <>
            <main className='bg-grey-light dark:bg-blue-midnight flex flex-1 flex col justify-center gap-2 md:gap-4'>
                <Board />
            </main>
            <Toaster />
        </>
    );
}

export default App;
