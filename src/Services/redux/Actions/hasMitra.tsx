import Swal from 'sweetalert2';
import progalApi from '../../../Middleware/progal-api';
import {
  LIST_PROJECT_MITRA,
  LIST_PROJECT_MITRA_ERROR,
  LIST_PROJECT_MITRA_LOADING,
  LIST_PROJECT_MITRA_MESSAGE,
  LIST_PROJECT_MITRA_SELECTED,
} from '../Types/hasmitra';

export const setLoadingProjectMitra = (data: boolean) => ({
  type: LIST_PROJECT_MITRA_LOADING,
  payload: data,
});

export const setMessageProjectMitra = (data: string) => ({
  type: LIST_PROJECT_MITRA_MESSAGE,
  payload: data,
});

export const setErrorProjectMitra = (data: string) => ({
  type: LIST_PROJECT_MITRA_ERROR,
  payload: data,
});

export const setSelectedProjectMitra = (data: any) => ({
  type: LIST_PROJECT_MITRA_SELECTED,
  payload: data,
});

export const setListProjectMitra = (data: any) => ({
  type: LIST_PROJECT_MITRA,
  payload: data,
});

export const getProjectMitra = (data: any) => async (dispatch: any) => {
  try {
    const response = await progalApi.mitra({
      params: {
        pic_id: data.id,
      },
    });

    console.log(response);
  } catch (error: any) {
    console.log(error?.response?.data?.message);
    Swal.fire('Error', error?.response?.data?.message, 'error');
  }
};
