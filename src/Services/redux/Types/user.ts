export const USER = 'USER';
export const USER_LOADING = 'USER_LOADING';
export const USER_ERROR = 'USER_ERROR';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_MESSAGE = 'USER_MESSAGE';
export const USER_PROFILE = 'USER_PROFILE';
export const USER_MENU = 'USER_MENU';
export const USER_PROCUREMENT = 'USER_PROCUREMENT';
export const USER_LEGAL = 'USER_LEGAL';

export type User = {
  id?: number;
  name?: string;
  email?: string;
  token?: string;
  thumb_url?: string;
};

export type UserSession = {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
};

export type UserProcurementPic = {
  users: User[];
};
export type UserLegalPic = {
  users: User[];
};

export interface UserLoading {
  type: typeof USER_LOADING;
}

export interface UserError {
  type: typeof USER_ERROR;
}

export interface UserMessage {
  type: typeof USER_MESSAGE;
  payload: string;
}

export interface UserSuccess {
  type: typeof USER_SUCCESS;
  payload: UserSession;
}

export interface UserProfile {
  type: typeof USER_PROFILE;
  payload: User;
}

export interface UserMenu {
  type: typeof USER_MENU;
  payload?: any;
}

export interface UserProcurement {
  type: typeof USER_PROCUREMENT;
  payload?: any;
}

export interface UserLegal {
  type: typeof USER_LEGAL;
  payload?: any;
}

export type UserDispatchTypes =
  | UserLoading
  | UserError
  | UserSuccess
  | UserProfile
  | UserMessage
  | UserMenu
  | UserProcurement
  | UserLegal;
