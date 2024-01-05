import type { BaseResponse } from './BaseResponse';
import type { LeaderBoardData } from './LeaderBoardData';

export type LeaderBoardResponse = BaseResponse & {
    users: LeaderBoardData[];
};
