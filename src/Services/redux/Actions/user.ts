import { UserType as type } from '../Types/user';
import { Dispatch } from 'redux';
import userApi from '../../../Middleware/user-api';

export const setUser = (data: Object) => ({
  type: type.USER,
  payload: data,
});

export const setSession = (data: Object) => ({
  type: type.USER_SESSION,
  payload: data,
});

export const setUserSuccess = (data: Object) => ({
  type: type.USER_SUCCESS,
  payload: data,
});

export const setUserFailure = (data: Object) => ({
  type: type.USER_FAILURE,
  payload: data,
});

export const setUserMessage = (data: Object) => ({
  type: type.USER_MESSAGE,
  payload: data,
});

export const loginUser =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    const result = await userApi.login({ username, password });

    console.log(result);
    dispatch(setUser(result));
  };
