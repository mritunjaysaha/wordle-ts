import { useEffect } from 'react';
import Modal from 'react-responsive-modal';

import { Board } from '../components/Board/Board';
import { GameInstructionsModal } from '../components/GameInstructionsModal/GameInstructionsModal';
import { Keypad } from '../components/Keypad/Keypad';
import { ModalContent } from '../components/Modal/ModalContent';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStore } from '../hooks/useStore';
import { WordleContext } from '../store/context';

function Home() {
    const {
        turn,
        open,
        shake,
        score,
        guesses,
        solution,
        usedKeys,
        isCorrect,
        currentGuess,
        keyboardEnable,
        handleInput,
        onCloseModal,
        setKeyboardEnable,
        onIncrementScore,
    } = useStore();

    const { isGameModalClicked, handleCloseGameModal } = useAuthContext();

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
            {import.meta.env.MODE === 'development' && (
                <>
                    <p>score: {score}</p>
                    <p>solution: {solution}</p>
                </>
            )}
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
                onClose={onCloseModal}
                center
                classNames={{ modal: 'rounded p-6', closeButton: 'top-0 p-0.5 right-0' }}
            >
                <ModalContent isCorrect={isCorrect} solution={solution} turn={turn} />
            </Modal>
            <Modal
                open={isGameModalClicked}
                center
                onClose={handleCloseGameModal}
                classNames={{
                    modal: 'rounded p-8 w-1/2 2xl:w-1/4',
                    closeButton: 'top-0 p-4 right-0',
                }}
            >
                <GameInstructionsModal />
            </Modal>
        </WordleContext.Provider>
    );
}

export default Home;
