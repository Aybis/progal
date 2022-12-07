import { Dispatch } from 'react';
import Swal from 'sweetalert2';
import progalApi from '../../../Middleware/progal-api';
import {
  DataMitraHasProject,
  DataProjectHasMitra,
  ListMitraPIC,
  ListMitraPICSelected,
  ListProjectMitra,
  LIST_MITRA_PIC,
  LIST_MITRA_PIC_SELECTED,
  LIST_PROJECT_MITRA,
  LIST_PROJECT_MITRA_LOADING,
  LIST_PROJECT_MITRA_MESSAGE,
  LIST_PROJECT_MITRA_SELECTED,
  ProjectMitraDispatchTypes,
  ProjectMitraLoading,
  ProjectMitraMessage,
  ProjectMitraSelected,
} from '../Types/hasmitra';

export const setLoadingProjectMitra = (data: boolean): ProjectMitraLoading => ({
  type: LIST_PROJECT_MITRA_LOADING,
  payload: data,
});

export const setMessageProjectMitra = (data: string): ProjectMitraMessage => ({
  type: LIST_PROJECT_MITRA_MESSAGE,
  payload: data,
});

// Redux Project Has Mitra
export const setSelectedProjectMitra = (
  data: DataProjectHasMitra,
): ProjectMitraSelected => ({
  type: LIST_PROJECT_MITRA_SELECTED,
  payload: data,
});

export const setListProjectMitra = (
  data: DataProjectHasMitra[],
): ListProjectMitra => ({
  type: LIST_PROJECT_MITRA,
  payload: data,
});

// Redux Mitra Has Project
export const setListMitraPIC = (data: DataMitraHasProject[]): ListMitraPIC => ({
  type: LIST_MITRA_PIC,
  payload: data,
});

export const setMitraPICSelected = (
  data: DataMitraHasProject,
): ListMitraPICSelected => ({
  type: LIST_MITRA_PIC_SELECTED,
  payload: data,
});

// get project has mitra
export const getProjectHasMitra =
  (id?: number | string) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const response = await progalApi.listProjectMitra({
        params: {
          user_id: id,
        },
      });

      dispatch(setListProjectMitra(response.data));
      return response.data;
    } catch (error: any) {
      Swal.fire('Error', error?.response?.data?.message, 'error');
      return error;
    }
  };

// get mitra has project
export const getMitraHasProject =
  (id?: number | string) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    dispatch(setLoadingProjectMitra(true));
    try {
      const response = await progalApi.mitra({
        params: {
          pic_id: id,
        },
      });
      dispatch(setListMitraPIC(response.data));
      dispatch(setLoadingProjectMitra(false));
      return response.data;
    } catch (error: any) {
      dispatch(setLoadingProjectMitra(false));

      Swal.fire('Error', error?.response?.data?.message, 'error');
      return error;
    }
  };
