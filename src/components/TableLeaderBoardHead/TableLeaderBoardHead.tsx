export const TableLeaderBoardHead = () => {
    return (
        <thead className='w-full bg-gray-50 dark:bg-gray-700'>
            <tr>
                <th
                    scope='col'
                    className='px-3 text-start text-xs font-medium uppercase text-gray-500 md:px-6 md:py-3 dark:text-gray-400'
                >
                    Rank
                </th>
                <th
                    scope='col'
                    className='px-3 text-start text-xs font-medium uppercase text-gray-500 md:px-6 md:py-3 dark:text-gray-400'
                >
                    Player
                </th>
                <th
                    scope='col'
                    className='px-3 text-start text-xs font-medium uppercase text-gray-500 md:px-6 md:py-3 dark:text-gray-400'
                >
                    Wordles solved
                </th>
            </tr>
        </thead>
    );
};
