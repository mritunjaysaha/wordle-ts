import type { BaseResponse } from './BaseResponse';

export type LogInResponse = BaseResponse & {
    token: string;
};
