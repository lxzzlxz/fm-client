import { UserModel } from './user.model';

export interface TokenModel {
    id: string;
    user: UserModel;
    createDate: number;
    expireDate: number;
    ipAddress: string;
}
