import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { AuthLayout } from '../Layouts/AuthLayout';

type FormTimelineStates = 'email' | 'info' | 'password';

export default function SignUp() {
    const [formTimelineState, setFormTimelineState] = useState<FormTimelineStates>('email');

    return (
        <AuthLayout>
            <div className='m-auto w-1/2'>
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
                <div>
                    {/* SIGN UP TIMELINE */}
                    <div></div>
                    {/* SIGN UP FORM */}
                    <form>
                        {formTimelineState === 'email' && (
                            <>
                                <div className='form-input-container'>
                                    <label htmlFor='email' className='form-label'>
                                        What&apos;s your email?
                                    </label>
                                    <input
                                        id='email'
                                        className='form-input'
                                        placeholder='Enter your email address'
                                    />
                                </div>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setFormTimelineState('info');
                                    }}
                                    className='form-button'
                                >
                                    Next
                                </button>
                            </>
                        )}
                        {formTimelineState === 'info' && (
                            <>
                                <div className='flex justify-between gap-10'>
                                    <div className='form-input-container'>
                                        <label htmlFor='first-name' className='form-label'>
                                            First Name
                                        </label>
                                        <input
                                            id='first-name'
                                            className='form-input'
                                            placeholder='John'
                                        />
                                    </div>
                                    <div className='form-input-container'>
                                        <label htmlFor='last-name' className='form-label'>
                                            Last Name
                                        </label>
                                        <input
                                            id='last-name'
                                            className='form-input'
                                            placeholder='Doe'
                                        />
                                    </div>
                                </div>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setFormTimelineState('password');
                                    }}
                                    className='form-button'
                                >
                                    Next
                                </button>
                            </>
                        )}
                        {formTimelineState === 'password' && (
                            <>
                                <div className='form-input-container'>
                                    <label htmlFor='password' className='form-label'>
                                        Enter a password
                                    </label>
                                    <input
                                        id='password'
                                        className='form-input'
                                        placeholder='*************'
                                    />
                                </div>
                                <button className='form-button'>Submit</button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
}
