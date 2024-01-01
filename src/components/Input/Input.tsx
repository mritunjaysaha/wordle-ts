import type { FC, InputHTMLAttributes } from 'react';
import { useState } from 'react';
import type { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { ReactComponent as IconPasswordHidden } from '../../assets/passwordHidden.svg';
import { ReactComponent as IconPasswordVisible } from '../../assets/passwordVisible.svg';
import type { CreateAccountData } from '../../types/CreateAccountData';
import type { LoginData } from '../../types/LoginData';

type RegisterKeys = 'email' | 'password' | 'firstName' | 'lastName';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    label: string;
    errors?: FieldErrors<LoginData | CreateAccountData>;
    register: UseFormRegister<LoginData | CreateAccountData>;
    registerKey: RegisterKeys;
    registerOptions: RegisterOptions<LoginData | CreateAccountData, RegisterKeys> | undefined;
};

export const Input: FC<InputProps> = ({
    id,
    type = 'text',
    label,
    errors,
    register,
    registerKey,
    registerOptions,
    ...rest
}) => {
    const [inputType, setInputType] = useState(type);
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const handlePasswordVisibility = () => {
        setIsPasswordVisible((prev) => {
            const currentVisibility = !prev;
            setInputType(currentVisibility ? 'text' : 'password');

            return currentVisibility;
        });
    };

    return (
        <div className='form-input-container'>
            <label className='form-label' htmlFor={id}>
                {label}
            </label>
            <div
                tabIndex={-1}
                className='form-input flex items-center focus-within:outline focus-within:outline-2'
            >
                <input
                    id={id}
                    type={inputType}
                    {...rest}
                    {...register(registerKey, registerOptions)}
                    className='w-full focus:outline-none'
                />
                {type === 'password' && (
                    <button type='button' onClick={handlePasswordVisibility}>
                        {isPasswordVisible ? <IconPasswordVisible /> : <IconPasswordHidden />}
                    </button>
                )}
            </div>
            {errors && (
                <p className='min-h-4 text-red-400'>{errors.email && errors.email.message}</p>
            )}
        </div>
    );
};
