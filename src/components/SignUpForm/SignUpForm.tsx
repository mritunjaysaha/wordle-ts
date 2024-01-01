import type { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { createAccount } from '../../requests/httpCalls/createAccount';
import type { CreateAccountData } from '../../types/CreateAccountData';
import type { FormTimelineStates } from '../../types/FormTimelineStates';
import { Input } from '../Input/Input';

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

    const onSubmit = async (data: CreateAccountData) => {
        console.log('[onSubmit]');
        const res = await createAccount(data);

        if (res.success) {
            navigate(ROUTES.LOG_IN);
            toast.success('Sign up successful');
        } else {
            toast.error('Sign up failed');
        }
    };

    const handleEmailSubmit = () => {
        const email = getValues('email');

        if (!errors.email && email) {
            setFormTimelineState('info');
            setTimeout(() => {
                setFocus('firstName');
            }, 0);
        }
    };

    const handleInfoSubmit = () => {
        setFormTimelineState('password');
        setTimeout(() => {
            setFocus('password');
        }, 0);
    };

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        e.preventDefault();

        handleEmailSubmit();
    };

    useEffect(() => {
        setFocus('email');
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formTimelineState === 'email' && (
                <>
                    <Input
                        id='email'
                        label={`What's your email?`}
                        errors={errors}
                        register={register}
                        registerKey='email'
                        registerOptions={{
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                        }}
                        onKeyDown={handleInputKeyDown}
                    />
                    <button type='button' onClick={handleEmailSubmit} className='form-button mb-20'>
                        Next
                    </button>
                </>
            )}
            {formTimelineState === 'info' && (
                <>
                    <div className='flex justify-between gap-10'>
                        <Input
                            id='firstName'
                            label='First Name'
                            register={register}
                            registerKey='firstName'
                            placeholder='John'
                        />
                        <Input
                            id='lastName'
                            label='Last Name'
                            register={register}
                            registerKey='lastName'
                            placeholder='Doe'
                        />
                    </div>

                    <button type='button' onClick={handleInfoSubmit} className='form-button mb-20'>
                        Next
                    </button>
                </>
            )}
            {formTimelineState === 'password' && (
                <>
                    <Input
                        id='password'
                        type='password'
                        label='Password'
                        errors={errors}
                        register={register}
                        registerKey='password'
                        registerOptions={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters',
                            },
                        }}
                        placeholder='*************'
                    />
                    <button type='submit' className='form-button mb-20'>
                        Submit
                    </button>
                </>
            )}
        </form>
    );
};
