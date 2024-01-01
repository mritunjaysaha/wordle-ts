import { useState } from 'react';
import { Link } from 'react-router-dom';

import { HorizontalTimeline } from '../components/HorizontalTimeline/HorizontalTimeline';
import { SignUpForm } from '../components/SignUpForm/SignUpForm';
import { ROUTES } from '../constants/routes';
import { AuthLayout } from '../Layouts/AuthLayout';

type FormTimelineStates = 'email' | 'info' | 'password';

export default function SignUp() {
    const [formTimelineState, setFormTimelineState] = useState<FormTimelineStates>('email');

    return (
        <AuthLayout>
            <div className='2xl:w-1/3lg:px-0 m-auto w-full px-4 md:px-40 lg:w-1/2'>
                {/* HEADER */}
                <header className='mb-20 flex flex-col justify-center gap-1 text-center'>
                    <h3 className='text-3xl'>Create an account</h3>
                    <p className='text-base'>
                        Already have an account?{' '}
                        <Link className='underline' to={ROUTES.LOG_IN}>
                            Log in
                        </Link>
                    </p>
                </header>
                {/* FORM CONTAINER */}
                <div className='flex flex-col gap-8'>
                    <HorizontalTimeline formTimelineState={formTimelineState} />
                    <SignUpForm
                        formTimelineState={formTimelineState}
                        setFormTimelineState={setFormTimelineState}
                    />
                </div>
            </div>
        </AuthLayout>
    );
}
