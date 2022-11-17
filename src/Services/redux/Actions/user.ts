import Cookies from 'js-cookie';
import { Dispatch } from 'redux';
import { setHeader } from '../../../Configs/api';
import userApi from '../../../Middleware/user-api';
import {
  UserDispatchTypes,
  USER_ERROR,
  USER_LOADING,
  USER_MESSAGE,
  USER_PROFILE,
  USER_SUCCESS,
} from './../Types/user';

export const LoginUser =
  (data: Object) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      // await login
      const res = await userApi.login(data);
      console.log(res.data);
      dispatch({
        type: USER_SUCCESS,
        payload: res?.data,
      });

      // set token to local storage
      localStorage.setItem('token', res?.data?.access_token);

      // set session to cookies
      Cookies.set('session', res?.data?.access_token, { expires: 0.5 });

      return res;
    } catch (error) {
      dispatch({
        type: USER_ERROR,
      });

      return error;
    }
  };

export const GetProfileUser =
  () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      setHeader();
      // await get profile
      const res = await userApi.profile();

      dispatch({
        type: USER_PROFILE,
        payload: res.data,
      });

      return res;
    } catch (error) {
      dispatch({
        type: USER_ERROR,
      });

      dispatch({
        type: USER_MESSAGE,
        payload: error,
      });

      return error;
    }
  };
