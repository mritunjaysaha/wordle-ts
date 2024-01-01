import type { BaseResponse } from '../../types/BaseResponse';
import type { CreateAccountData } from '../../types/CreateAccountData';

export async function createAccount(data: CreateAccountData): Promise<BaseResponse> {
    const baseUrl = import.meta.env.VITE_BASE_URL as string;

    if (!baseUrl) {
        return {
            success: false,
            message: 'BASE URL IS NOT DEFINED',
        };
    }

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const parsedRes = (await res.json()) as BaseResponse;

    return parsedRes;
}
