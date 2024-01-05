import { TableLeaderBoardHead } from '../components/TableLeaderBoardHead/TableLeaderBoardHead';
import { TableLeaderBoardRow } from '../components/TableLeaderBoardRow/TableLeaderBoardRow';
import { useLeaderBoard } from '../hooks/useLeaderBoard';

export default function LeaderBoard() {
    const { leaderBoardArr } = useLeaderBoard();

    return (
        <div className='absolute right-0 top-0 flex h-full flex-col bg-red-400 p-10 dark:bg-gray-800'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <caption className='mb-4 text-left'>
                    <h3 className='text-2xl font-bold text-white'>Leader Board</h3>
                </caption>
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
