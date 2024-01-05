export const TableLeaderBoardHead = () => {
    return (
        <thead className='bg-gray-50 dark:bg-gray-700'>
            <tr>
                <th
                    scope='col'
                    className='px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                >
                    Rank
                </th>
                <th
                    scope='col'
                    className='px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                >
                    Player
                </th>
                <th
                    scope='col'
                    className='px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                >
                    Wordles solved
                </th>
            </tr>
        </thead>
    );
};
