export const enum UserGender {
    unknown = 0,  // 未知
    male = 1,     // 男
    female = 2,   // 女
  }
export const enum DataState {
    editing = 0,
    enabled = 1,
    disabled = 2,
}

export interface UserModel {
    username: string;
    name: string;
    gender: UserGender;
    avatar: string;
    state: DataState;
}