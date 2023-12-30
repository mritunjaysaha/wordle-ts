import type { Dispatch, FC, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as IconPasswordHidden } from '../../assets/passwordHidden.svg';
import { ReactComponent as IconPasswordVisible } from '../../assets/passwordVisible.svg';
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
        setFocus,
    } = useForm<CreateAccountData>({ mode: 'onBlur' });

    const [formErrors, setFormErrors] = useState<CreateAccountData>({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const onSubmit = async (data: CreateAccountData) => {
        console.log('[onSubmit]');
        const res = await createAccount(data);

        if (res.success) {
            navigate(ROUTES.LOG_IN);
        } else {
            toast.error('Sign up failed');
        }
    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleEmailSubmit = () => {
        const email = getValues('email');

        if (!errors.email && email) {
            setFormTimelineState('info');
            setTimeout(() => {
                setFocus('firstName');
            }, 0);
        } else if (!email) {
            setFormErrors((prevFormErrors) => ({
                ...prevFormErrors,
                email: 'Email is required',
            }));
        }
    };

    const handleInfoSubmit = () => {
        setFormTimelineState('password');
        setTimeout(() => {
            setFocus('password');
        }, 0);
    };

    useEffect(() => {
        setFocus('email');
    }, []);

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
                            onKeyDown={(e) => {
                                if (e.key !== 'Enter') return;

                                e.preventDefault();

                                handleEmailSubmit();
                            }}
                        />
                        <p className='min-h-4 text-xs text-red-400'>
                            {errors.email ? errors.email.message : formErrors.email}
                        </p>
                    </div>
                    <button type='button' onClick={handleEmailSubmit} className='form-button'>
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

                    <button type='button' onClick={handleInfoSubmit} className='form-button'>
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
                        <div
                            tabIndex={-1}
                            className='form-input flex items-center focus-within:outline focus-within:outline-2'
                        >
                            <input
                                id='password'
                                type={!isPasswordVisible ? 'password' : 'text'}
                                placeholder='*************'
                                className='w-full outline-none'
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters',
                                    },
                                })}
                            />
                            <button type='button' onClick={handlePasswordVisibility}>
                                {isPasswordVisible ? (
                                    <IconPasswordVisible />
                                ) : (
                                    <IconPasswordHidden />
                                )}
                            </button>
                        </div>
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
