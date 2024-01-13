import { useEffect } from 'react';
import Modal from 'react-responsive-modal';

import { ReactComponent as IconClose } from '../assets/close.svg';
import { Board } from '../components/Board/Board';
import { GameInstructionsModal } from '../components/GameInstructionsModal/GameInstructionsModal';
import { Keypad } from '../components/Keypad/Keypad';
import { ModalContent } from '../components/Modal/ModalContent';
import { useAppContext } from '../hooks/useAppContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStore } from '../hooks/useStore';
import { WordleContext } from '../store/WordleContext';

function Home() {
    const {
        hint,
        turn,
        open,
        shake,
        // score,
        guesses,
        showHint,
        solution,
        usedKeys,
        isCorrect,
        currentGuess,
        keyboardEnable,
        handleInput,
        onCloseModal,
        handleHideHint,
        handleShowHint,
        onIncrementScore,
        setKeyboardEnable,
    } = useStore();

    const { isGameModalClicked, handleCloseGameModal } = useAppContext();

    const { isAuthenticated } = useAuthContext();

    const handleKeyup = (e: KeyboardEvent) => {
        const { key } = e;

        if (key) handleInput(key);
    };

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        // remove access to keyboard after correct guess
        if (isCorrect || turn > 5) {
            setKeyboardEnable(false);
            window.removeEventListener('keyup', handleKeyup);
        }

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    return (
        <WordleContext.Provider
            value={{
                onIncrementScore,
            }}
        >
            {/* {import.meta.env.MODE === 'development' && (
                <>
                    <p>score: {score}</p>
                    <p>solution: {solution}</p>
                </>
            )} */}
            <div className='absolute right-2 top-20 flex w-max flex-col items-end gap-2 rounded-lg bg-grey-light p-4 lg:right-10 dark:bg-blue-midnight'>
                <button
                    className='w-max rounded bg-slate-800 px-8 py-2 font-semibold text-white transition duration-200 hover:bg-slate-700 dark:bg-slate-100 dark:text-black dark:hover:bg-slate-200'
                    onFocus={handleShowHint}
                    onMouseOver={handleShowHint}
                    onMouseOut={handleHideHint}
                    onBlur={handleHideHint}
                >
                    Hint
                </button>
                {showHint && (
                    <div className='w-60 rounded bg-blue-midnight p-4 text-white dark:bg-grey-light dark:text-black'>
                        {!isAuthenticated ? <p>Please login to see hints</p> : <p>{hint}</p>}
                    </div>
                )}
            </div>

            <main className='flex flex-1 flex-col justify-center gap-2 bg-grey-light md:gap-4 dark:bg-blue-midnight'>
                <Board guesses={guesses} turn={turn} currentGuess={currentGuess} shake={shake} />
                <Keypad
                    handleInput={handleInput}
                    keyboardEnable={keyboardEnable}
                    usedKeys={usedKeys}
                />
            </main>

            <Modal
                open={open}
                center
                onClose={onCloseModal}
                closeIcon={<IconClose />}
                classNames={{
                    modal: 'rounded p-10 dark:bg-slate-800 dark:text-slate-100',
                    closeButton: 'top-0 p-2 right-0 dark:text-white current',
                }}
            >
                <ModalContent isCorrect={isCorrect} solution={solution} turn={turn} />
            </Modal>
            <Modal
                open={isGameModalClicked}
                center
                onClose={handleCloseGameModal}
                closeIcon={<IconClose />}
                classNames={{
                    modal: 'rounded p-8 w-11/12 lg:w-1/2 2xl:w-1/4 dark:bg-gray-800 dark:text-white',
                    closeButton: 'top-0 p-4 lg:right-0 dark:text-white current',
                }}
            >
                <GameInstructionsModal />
            </Modal>
        </WordleContext.Provider>
    );
}

export default Home;
