import { useContext } from 'react';

import { WordleContext } from '../../store/WordleContext';

type ModalContentProps = {
    isCorrect: boolean;
    solution: string;
    turn: number;
};

export const ModalContent = ({ isCorrect, solution, turn }: ModalContentProps) => {
    const { onIncrementScore } = useContext(WordleContext);

    return (
        <div className='text-center'>
            <h2 className='pb-4 pt-2 text-xl font-bold'>
                {isCorrect ? 'Congrats, You guessed it right!' : 'Aw! Better luck next time'}
            </h2>
            <p className=''>
                Right answer is <span className='font-bold text-green-700'>{solution}</span>
            </p>
            <p>{isCorrect && `You found answer in ${turn === 1 ? ' 1 turn' : `${turn} turns`}`}</p>

            <button
                onClick={onIncrementScore}
                className='mt-4 bg-blue-midnight px-4 py-2 font-bold text-white'
            >
                Play Again
            </button>
        </div>
    );
};
