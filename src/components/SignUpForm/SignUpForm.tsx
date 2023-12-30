import type { Dispatch, FC, SetStateAction } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { createAccount } from '../../httpRequests/createAccount';
import type { CreateAccountData } from '../../types/CreateAccountData';
import type { FormTimelineStates } from '../../types/FormTimelineStates';

type SignUpFormProps = {
    formTimelineState: FormTimelineStates;
    setFormTimelineState: Dispatch<SetStateAction<FormTimelineStates>>;
};

export const SignUpForm: FC<SignUpFormProps> = ({ formTimelineState, setFormTimelineState }) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<CreateAccountData>({ mode: 'onBlur' });

    const [formErrors, setFormErrors] = useState<CreateAccountData>({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    const onSubmit = async (data: CreateAccountData) => {
        const res = await createAccount(data);

        if (res.success) {
            navigate(ROUTES.LOG_IN);
        } else {
            toast.error('Sign up failed');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formTimelineState === 'email' && (
                <>
                    <div className='form-input-container'>
                        <label htmlFor='email' className='form-label'>
                            What&apos;s your email?
                        </label>
                        <input
                            id='email'
                            type='email'
                            className='form-input'
                            placeholder='Enter your email address'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                        />
                        <p className='min-h-4 text-xs text-red-400'>
                            {errors.email ? errors.email.message : formErrors.email}
                        </p>
                    </div>
                    <button
                        type='button'
                        onClick={() => {
                            const email = getValues('email');

                            if (!errors.email && email) {
                                setFormTimelineState('info');
                            } else if (!email) {
                                setFormErrors((prevFormErrors) => ({
                                    ...prevFormErrors,
                                    email: 'Email is required',
                                }));
                            }
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
                                {...register('firstName')}
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
                                {...register('lastName')}
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
                            type='password'
                            className='form-input'
                            placeholder='*************'
                            {...register('password', {
                                required: 'Password is required',
                                minLength: 8,
                            })}
                        />
                        <p className='min-h-4 text-xs text-red-400'>
                            {errors.password && errors.password.message}
                        </p>
                    </div>

                    <button type='submit' className='form-button'>
                        Submit
                    </button>
                </>
            )}
        </form>
    );
};
