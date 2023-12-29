import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-responsive-modal';

import { Board } from '../components/Board/Board';
import { Keypad } from '../components/Keypad/Keypad';
import { ModalContent } from '../components/Modal/ModalContent';
import { WordleContext } from '../components/store/context';
import { useStore } from '../hooks/useStore';

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
            <Toaster />

            <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{ modal: 'rounded p-6', closeButton: 'top-0 p-0.5 right-0' }}
            >
                <ModalContent isCorrect={isCorrect} solution={solution} turn={turn} />
            </Modal>
        </WordleContext.Provider>
    );
}

export default Home;
