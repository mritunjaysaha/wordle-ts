import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Rings } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../components/Input/Input';
import { ROUTES } from '../constants/routes';
import { useAuthContext } from '../hooks/useAuthContext';
import { AuthLayout } from '../Layouts/AuthLayout';
import { login } from '../requests/httpCalls/login';
import { setAuthTokenToInstance } from '../requests/utils/setAuthTokenToInstance';
import type { LoginData } from '../types/LoginData';

export default function LogIn() {
    const navigate = useNavigate();
    const { setIsAuthenticated, setUser } = useAuthContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        getValues,
    } = useForm<LoginData>({ mode: 'onSubmit' });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async (data: LoginData) => {
        setIsLoading(true);
        const res = await login(data);

        if (res.success) {
            setIsLoading(true);

            setUser((prev) => ({ ...prev, email: getValues('email') }));
            setAuthTokenToInstance(res.token);
            setIsAuthenticated(true);
            navigate(ROUTES.HOME);
        } else {
            toast.error('Failed to log in');
        }

        setIsLoading(false);
    };

    useEffect(() => {
        setFocus('email');
    }, []);

    return (
        <AuthLayout>
            <div className='flex w-11/12 flex-col gap-8 md:w-10/12 lg:w-1/2 2xl:w-1/3 dark:bg-blue-midnight'>
                <div className='flex flex-col items-center justify-center rounded-lg border px-8 py-10 lg:px-14 dark:border-slate-700 '>
                    <h3 className='text-2xl'>Sign in</h3>

                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            id='email'
                            label='Email'
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
                        />
                        <Input
                            id='password'
                            type='password'
                            label='Password'
                            errors={errors}
                            register={register}
                            registerKey='password'
                            registerOptions={{
                                required: 'Password is required',
                            }}
                        />

                        <button className='form-button'>
                            {!isLoading ? (
                                'Log in'
                            ) : (
                                <Rings
                                    visible={true}
                                    height='50'
                                    width='50'
                                    color='#fafafa'
                                    ariaLabel='rings-loading'
                                />
                            )}
                        </button>
                    </form>
                </div>

                <div className='border border-slate-300 dark:border-slate-700'></div>

                <Link
                    to={ROUTES.SIGN_UP}
                    className='flex h-16 items-center justify-center rounded-full border  border-black text-xl transition duration-300 ease-in-out hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800'
                >
                    Create an account
                </Link>
            </div>
        </AuthLayout>
    );
}
