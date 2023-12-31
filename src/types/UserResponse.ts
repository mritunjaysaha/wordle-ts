import type { BaseResponse } from './BaseResponse';
import type { UserInfo } from './UserInfo';

export type UserResponse = BaseResponse & {
    user: UserInfo;
};
