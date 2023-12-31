import type { BaseResponse } from './BaseResponse';
import type { UserInfo } from './UserInfo';

export type LogInResponse = BaseResponse & {
    token: string;
    user: UserInfo;
};
