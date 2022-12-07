import Swal from 'sweetalert2';
import progalApi from '../../../Middleware/progal-api';
import {
  ListVendor,
  LIST_VENDOR,
  Vendor,
  VendorSelected,
  VENDOR_ERROR,
  VENDOR_LOADING,
  VENDOR_MESSAGE,
  VENDOR_SELECTED,
} from '../Types/vendor';

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

export const setListVendor = (data: Vendor[]): ListVendor => ({
  type: LIST_VENDOR,
  payload: data,
});

export const setVendorSelected = (data: Vendor): VendorSelected => ({
  type: VENDOR_SELECTED,
  payload: data,
});

export const getListVendor = () => async (dispatch: any) => {
  try {
    dispatch(setLoadingVendor(true));

    const response = await progalApi.listMitra();

    dispatch(setListVendor(response.data.data));
    dispatch(setLoadingVendor(false));

    return response;
  } catch (error: any) {
    dispatch(setLoadingVendor(false));
    dispatch(setVendorMessage(error?.response?.data?.message));
    dispatch(setVendorError(true));

    return error;
  }
};
