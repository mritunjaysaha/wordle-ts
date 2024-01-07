import { Tile } from '../Board/Tile';

export const GameInstructionsModal = () => {
    return (
        <div className='flex flex-col gap-2 bg-white dark:bg-gray-800'>
            <div>
                <h3 className='text-2xl font-bold'>How To Play</h3>
                <p>Guess the Wordle in 6 tries</p>
            </div>
            <ul className='list-inside list-disc'>
                <li>Each guess must be a valid 5-letter word</li>
                <li>
                    The color of the tiles will change to show how close your guess was to the word.
                </li>
            </ul>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold'>Examples</h3>

                {/* EXAMPLES */}
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1'>
                        <Tile letter='H' color='bg-green-500' />
                        {'ELLO'.split('').map((letter, index) => (
                            <Tile key={index} letter={letter} />
                        ))}
                    </div>
                    <p>
                        <span className='font-bold'>H</span> is in the word and in the correct spot.
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1'>
                        <Tile letter='W' />
                        <Tile letter='O' color='bg-yellow-500' />
                        {'RLD'.split('').map((letter, index) => (
                            <Tile key={index} letter={letter} />
                        ))}
                    </div>
                    <p>
                        <span className='font-bold'>O</span> is in the word but in the wrong spot.
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1'>
                        {'VAG'.split('').map((letter, index) => (
                            <Tile key={index} letter={letter} />
                        ))}
                        <Tile letter='U' color='bg-grey-med' />
                        <Tile letter='E' />
                    </div>
                    <p>
                        <span className='font-bold'>U</span> is not in the word in any spot.
                    </p>
                </div>
            </div>
        </div>
    );
};
