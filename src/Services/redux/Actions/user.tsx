import Cookies from 'js-cookie';
import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { setHeader } from '../../../Configs/api';
import userApi from '../../../Middleware/user-api';
import {
  User,
  UserDispatchTypes,
  UserLegal,
  UserMenu,
  UserProcurement,
  UserProfile,
  UserSuccess,
  USER_ERROR,
  USER_LEGAL,
  USER_LOADING,
  USER_MENU,
  USER_MESSAGE,
  USER_PROCUREMENT,
  USER_PROFILE,
  USER_SUCCESS,
} from '../Types/user';

export const setProfileUser = (data: User): UserProfile => ({
  type: USER_PROFILE,
  payload: data,
});

export const setMenuUser = (data: any): UserMenu => ({
  type: USER_MENU,
  payload: data,
});

export const setUserSession = (data: any): UserSuccess => ({
  type: USER_SUCCESS,
  payload: data,
});

export const setUserProcurement = (data: User[]): UserProcurement => ({
  type: USER_PROCUREMENT,
  payload: data,
});

export const setUserLegal = (data: User[]): UserLegal => ({
  type: USER_LEGAL,
  payload: data,
});

export const LoginUser =
  (data: Object) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      // await login
      const res = await userApi.login(data);
      dispatch({
        type: USER_SUCCESS,
        payload: res?.data,
      });

      // set token to local storage
      localStorage.setItem('token', res?.data?.access_token);

      // set session to cookies
      Cookies.set('session', res?.data?.access_token, { expires: 0.5 });
      return res;
    } catch (error: any) {
      dispatch({
        type: USER_ERROR,
      });

      dispatch({
        type: USER_MESSAGE,
        payload: error?.response?.data?.message ?? 'Something Happened!',
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
    } catch (error: any) {
      dispatch({
        type: USER_ERROR,
      });

      dispatch({
        type: USER_MESSAGE,
        payload: error?.response?.data?.message ?? 'Something Happened!',
      });

      return error;
    }
  };

export const GetListMenu =
  (data?: any) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      setHeader();
      // await get list menu
      const res = await userApi.listMenu({
        params: {
          user_id: data?.user_id,
        },
      });

      dispatch({
        type: USER_MENU,
        payload: res,
      });

      return res;
    } catch (error: any) {
      dispatch({
        type: USER_ERROR,
      });

      dispatch({
        type: USER_MESSAGE,
        payload: error?.response?.data?.message ?? 'Something Happened!',
      });

      return error;
    }
  };

export const GetListProcurementPic =
  () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await userApi.userProcurement();
      dispatch(setUserProcurement(res.data));

      return res;
    } catch (error: any) {
      Swal.fire('Error', error?.response?.data?.message, 'error');
      return error;
    }
  };

export const GetListLegalPic =
  () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await userApi.userLegal();
      dispatch(setUserLegal(res.data));

      return res;
    } catch (error: any) {
      Swal.fire('Error', error?.response?.data?.message, 'error');
      return error;
    }
  };
