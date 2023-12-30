export const HorizontalTimeline = () => {
    return (
        <ol className='mb-16 items-center justify-center sm:flex'>
            <li className='relative mb-6 w-full sm:mb-0'>
                <div className='flex items-center'>
                    <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm ring-0 ring-white sm:ring-8 dark:bg-blue-900 dark:ring-gray-900'>
                        1
                    </div>
                    <div className='hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700'></div>
                </div>
                <div className='timeline-text-center'>Enter your email address</div>
            </li>
            <li className='relative mb-6 w-full sm:mb-0'>
                <div className='flex items-center'>
                    <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm ring-0 ring-white sm:ring-8 dark:bg-blue-900 dark:ring-gray-900'>
                        2
                    </div>
                    <div className='hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700'></div>
                </div>
                <div className='timeline-text-center'>Provide your basic info</div>
            </li>
            <li className='relative z-0 mb-6 w-max sm:mb-0'>
                <div className='flex items-center'>
                    <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm ring-0 ring-white sm:ring-8 dark:bg-blue-900 dark:ring-gray-900'>
                        3
                    </div>
                    {/* <div className='hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700'></div> */}
                </div>
                <div className='timeline-text-center z-10 w-max'>Create your password</div>
            </li>
        </ol>
    );
};
