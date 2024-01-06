import { TableLeaderBoardHead } from '../components/TableLeaderBoardHead/TableLeaderBoardHead';
import { TableLeaderBoardRow } from '../components/TableLeaderBoardRow/TableLeaderBoardRow';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLeaderBoard } from '../hooks/useLeaderBoard';

export default function LeaderBoard() {
    const { handleCloseLeaderBoard } = useAuthContext();
    const { leaderBoardArr } = useLeaderBoard();

    return (
        <div className='absolute right-0 top-0 flex h-screen w-screen flex-col items-center bg-gray-100 p-2 md:w-1/4 lg:w-1/3 lg:p-10 dark:bg-gray-800'>
            <header className='mb-4 flex w-full flex-col text-left'>
                <button
                    className='mb-8 w-max text-4xl font-bold dark:text-white'
                    onClick={handleCloseLeaderBoard}
                >
                    &times;
                </button>
                <h3 className='text-2xl font-bold text-black dark:text-white'>Leader Board</h3>
            </header>

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
        </div>
    );
}
