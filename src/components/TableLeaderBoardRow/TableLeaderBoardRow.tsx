import type { FC } from 'react';

type TableLeaderBoardRowProps = {
    rank: number;
    player: string;
    count: number;
};

export const TableLeaderBoardRow: FC<TableLeaderBoardRowProps> = ({ rank, player, count }) => {
    return (
        <tr>
            <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200'>
                {rank}
            </td>
            <td className='w-32 truncate break-words px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                {player}
            </td>
            <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                {count}
            </td>
        </tr>
    );
};
