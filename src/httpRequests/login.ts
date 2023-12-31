import type { LoginData } from '../types/LoginData';
import type { LogInResponse } from '../types/LogInResponse';
import type { UserInfo } from '../types/UserInfo';

export const login = async (data: LoginData): Promise<LogInResponse> => {
    const baseUrl = import.meta.env.VITE_BASE_URL as string;

    if (!baseUrl) {
        return {
            success: false,
            message: 'BASE URL NOT DEFINED IN ENV',
            user: {} as UserInfo,
            token: '',
        };
    }

    const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const parsedRes = (await res.json()) as LogInResponse;

    return parsedRes;
};
