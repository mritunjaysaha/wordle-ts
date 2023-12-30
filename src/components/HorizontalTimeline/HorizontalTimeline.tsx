import type { FC } from 'react';

import type { FormTimelineStates } from '../../types/FormTimelineStates';

type HorizontalTimelineProps = {
    formTimelineState: FormTimelineStates;
};

export const HorizontalTimeline: FC<HorizontalTimelineProps> = ({ formTimelineState }) => {
    return (
        <ol className='mb-8 items-center justify-center sm:flex'>
            <li className='relative mb-6 w-full sm:mb-0'>
                <div className='flex items-center'>
                    <div className='timeline-state-number'>1</div>
                    <div className='hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700'></div>
                </div>
                <div
                    className={`timeline-text-center ${
                        formTimelineState === 'email' ? 'timeline-text-center-active' : ''
                    }`}
                >
                    Enter your email address
                </div>
            </li>
            <li className='relative mb-6 w-full sm:mb-0'>
                <div className='flex items-center'>
                    <div className='timeline-state-number'>2</div>
                    <div className='hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700'></div>
                </div>
                <div
                    className={`timeline-text-center ${
                        formTimelineState === 'info' ? 'timeline-text-center-active' : ''
                    }`}
                >
                    Provide your basic info
                </div>
            </li>
            <li className='relative z-0 mb-6 w-max sm:mb-0'>
                <div className='flex items-center'>
                    <div className='timeline-state-number'>3</div>
                </div>
                <div
                    className={`timeline-text-center z-10 w-max ${
                        formTimelineState === 'password' ? 'timeline-text-center-active' : ''
                    }`}
                >
                    Create your password
                </div>
            </li>
        </ol>
    );
};
