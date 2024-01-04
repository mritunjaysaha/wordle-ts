export default function LeaderBoard() {
    return (
        <div className='absolute right-0 top-0 flex h-full flex-col bg-red-400 p-10 dark:bg-gray-800'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <caption className='mb-4 text-left'>
                    <h3 className='text-2xl font-bold text-white'>Leader Board</h3>
                </caption>
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
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    <tr>
                        <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200'>
                            001
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                            John Brown 45
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                            1000
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
