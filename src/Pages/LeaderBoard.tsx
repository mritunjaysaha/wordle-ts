import { Rings } from 'react-loader-spinner';

import { TableLeaderBoardHead } from '../components/TableLeaderBoardHead/TableLeaderBoardHead';
import { TableLeaderBoardRow } from '../components/TableLeaderBoardRow/TableLeaderBoardRow';
import { useAppContext } from '../hooks/useAppContext';
import { useLeaderBoard } from '../hooks/useLeaderBoard';

export default function LeaderBoard() {
    const { handleCloseLeaderBoard } = useAppContext();
    const { leaderBoardArr, isLoading } = useLeaderBoard();

    console.log('[Leaderboard]', isLoading);

    return (
        <div className='absolute right-0 top-0  flex h-screen w-screen flex-col items-center bg-gray-100 p-2 lg:w-1/2 lg:p-10 xl:w-1/3 dark:bg-gray-800'>
            <header className='mb-4 flex w-full flex-col text-left'>
                <button
                    className='mb-8 w-max text-4xl font-bold dark:text-white'
                    onClick={handleCloseLeaderBoard}
                >
                    &times;
                </button>
                <h3 className='text-2xl font-bold text-black dark:text-white'>Leader Board</h3>
            </header>

            {!isLoading ? (
                <table className='w-full  divide-y divide-gray-200 dark:divide-gray-700'>
                    <TableLeaderBoardHead />
                    <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                        {leaderBoardArr.map(({ email: player, solvedWordsCount }, index) => (
                            <TableLeaderBoardRow
                                key={index}
                                rank={index}
                                player={player}
                                count={solvedWordsCount}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className='flex w-full justify-center'>
                    <Rings
                        visible={true}
                        height='50'
                        width='50'
                        color='#fafafa'
                        ariaLabel='rings-loading'
                    />
                </div>
            )}
        </div>
    );
}
