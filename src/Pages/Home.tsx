import { useEffect } from 'react';
import { useStore } from '../hooks/useStore';
import { WordleContext } from '../components/store/context';
import { Header } from '../components/Header/Header';
import { Board } from '../components/Board/Board';
import { Keypad } from '../components/Keypad/Keypad';
import { Footer } from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-responsive-modal';
import { ModalContent } from '../components/Modal/ModalContent';

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
        const key = e.key;

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
            <section className='h-screen flex flex-col'>
                {import.meta.env.MODE === 'development' && (
                    <>
                        <p>score: {score}</p>
                        <p>solution: {solution}</p>
                    </>
                )}
                <main className='bg-grey-light dark:bg-blue-midnight flex flex-1 flex-col justify-center gap-2 md:gap-4'>
                    <Board
                        guesses={guesses}
                        turn={turn}
                        currentGuess={currentGuess}
                        shake={shake}
                    />
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
            </section>
        </WordleContext.Provider>
    );
}

export default Home;
