import Swal from 'sweetalert2';
import progalApi from '../../../Middleware/progal-api';
import {
  LIST_PROJECT,
  PROJECT_ERROR,
  PROJECT_LOADING,
  PROJECT_MESSAGE,
  PROJECT_SELECTED,
} from '../Types/project';

export const setLoadingProject = (data: boolean) => ({
  type: PROJECT_LOADING,
  payload: data,
});

export const setMessageProject = (data: string) => ({
  type: PROJECT_MESSAGE,
  payload: data,
});

export const setErrorProject = (data: boolean) => ({
  type: PROJECT_ERROR,
  payload: data,
});

export const setSelectedProject = (data: any) => ({
  type: PROJECT_SELECTED,
  payload: data,
});

export const setListProject = (data: any) => ({
  type: LIST_PROJECT,
  payload: data,
});

export const getListProject = (data: any) => async (dispatch: any) => {
  try {
    const response = await progalApi.listProject({
      params: {
        user_id: data.id,
      },
    });

    console.log(response);

    return response;
  } catch (error: any) {
    console.log(error?.response?.data?.message);
    Swal.fire('Error', error?.response?.data?.message, 'error');
  }
};
