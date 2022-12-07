import Swal from 'sweetalert2';
import userApi from '../../../Middleware/user-api';
import { VENDOR_ERROR, VENDOR_LOADING, VENDOR_MESSAGE } from '../Types/vendor';

export const setLoadingVendor = (data: boolean) => ({
  type: VENDOR_LOADING,
  payload: data,
});

export const setVendorMessage = (data: string) => ({
  type: VENDOR_MESSAGE,
  payload: data,
});

export const setVendorError = (data: any) => ({
  type: VENDOR_ERROR,
  payload: data,
});

export const getListVendor = () => async (dispatch: any) => {
  try {
    dispatch(setLoadingVendor(true));

    const response = await userApi.listVendor();

    console.log(response);
    dispatch(setLoadingVendor(false));
  } catch (error: any) {
    console.log(error?.response?.data?.message);
    dispatch(setLoadingVendor(false));
    dispatch(setVendorMessage(error?.response?.data?.message));
    dispatch(setVendorError(true));

    Swal.fire('Error', error?.response?.data?.message, 'error');
  }
};
