export const USER = 'USER';
export const USER_LOADING = 'USER_LOADING';
export const USER_ERROR = 'USER_ERROR';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_MESSAGE = 'USER_MESSAGE';
export const USER_PROFILE = 'USER_PROFILE';

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

export interface UserLoading {
  type: typeof USER_LOADING;
}

export interface UserError {
  type: typeof USER_ERROR;
}

export interface UserMessage {
  type: typeof USER_MESSAGE;
}

export interface UserSuccess {
  type: typeof USER_SUCCESS;
  payload: UserSession;
}

export interface UserProfile {
  type: typeof USER_PROFILE;
  payload: User;
}

export type UserDispatchTypes =
  | UserLoading
  | UserError
  | UserSuccess
  | UserProfile
  | UserMessage;
