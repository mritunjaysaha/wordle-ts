import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { useAuthContext } from '../hooks/useAuthContext';
import { AuthLayout } from '../Layouts/AuthLayout';
import { login } from '../requests/httpCalls/login';
import { setAuthTokenToInstance } from '../requests/utils/setAuthTokenToInstance';
import type { LoginData } from '../types/LoginData';

export default function LogIn() {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuthContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({ mode: 'onSubmit' });

    const onSubmit = async (data: LoginData) => {
        const res = await login(data);

        if (res.success) {
            navigate(ROUTES.HOME);

            setAuthTokenToInstance(res.token);
            setIsAuthenticated(true);
        } else {
            toast.error('Failed to log in');
        }
    };

    return (
        <AuthLayout>
            <div className='flex w-11/12 flex-col items-center justify-center rounded-lg border px-8 py-10 md:w-10/12 lg:w-1/2 lg:px-14'>
                <h3 className='text-2xl'>Sign in</h3>

                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-input-container'>
                        <label className='form-label' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='form-input'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                        />
                        <p className='min-h-4 text-red-400'>
                            {errors.email && errors.email.message}
                        </p>
                    </div>
                    <div className='form-input-container'>
                        <label className='form-label' htmlFor='email'>
                            Password
                        </label>
                        <input
                            type='password'
                            className='form-input'
                            {...register('password', { required: true })}
                        />
                        <p className='min-h-4 text-red-400'>
                            {errors.password && errors.password.message}
                        </p>
                    </div>

                    <button className='form-button'>Log in</button>
                </form>
            </div>
        </AuthLayout>
    );
}
