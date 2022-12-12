import { Dispatch } from 'react';
import Swal from 'sweetalert2';
import { setHeader } from '../../../Configs/api';
import progalApi from '../../../Middleware/progal-api';
import {
  DataMitraHasProject,
  DataProjectHasMitra,
  ListMitraPIC,
  ListMitraPICFilter,
  ListMitraPICSelected,
  ListMitraPICUpdate,
  ListProjectMitra,
  LIST_MITRA_PIC,
  LIST_MITRA_PIC_FILTER,
  LIST_MITRA_PIC_SELECTED,
  LIST_PROJECT_MITRA,
  LIST_PROJECT_MITRA_LOADING,
  LIST_PROJECT_MITRA_MESSAGE,
  LIST_PROJECT_MITRA_SELECTED,
  LOADING_UPDATE_MITRA,
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

export const setLoadingUpdateMitra = (data: boolean): ListMitraPICUpdate => ({
  type: LOADING_UPDATE_MITRA,
  payload: data,
});

export const setListMitraPicFilter = (
  data: DataMitraHasProject[],
): ListMitraPICFilter => ({
  type: LIST_MITRA_PIC_FILTER,
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
      dispatch(setListMitraPicFilter(response.data));
      dispatch(setLoadingProjectMitra(false));
      return response.data;
    } catch (error: any) {
      dispatch(setLoadingProjectMitra(false));

      Swal.fire('Error', error?.response?.data?.message, 'error');
      return error;
    }
  };

export const updateMitraHasProject =
  (id: string, data: any, user_id?: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    dispatch(setLoadingUpdateMitra(true));
    try {
      const res = await progalApi.updateMitra(id, data);

      dispatch(setLoadingUpdateMitra(false));
      getMitraHasProject(user_id)(dispatch);
      return res;
    } catch (error: any) {
      dispatch(setLoadingUpdateMitra(false));

      return error;
    }
  };

// Upload File Pendukung
export const uploadFileSPPH =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    dispatch(setLoadingUpdateMitra(true));
    try {
      setHeader();
      const res = await progalApi.insertSpph(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFileSPH =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertSph(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFileBAKN =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertBakn(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFileKHS =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertKhs(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFileKontrak =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertKontrak(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFilePersetujuan =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertAgreement(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFilePermohonan =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertRequest(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

// Update File Pendukung
export const updateFileSPPH =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    dispatch(setLoadingUpdateMitra(true));
    try {
      setHeader();
      const res = await progalApi.updateSpph(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFileSPH =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateSph(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFileBAKN =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateBakn(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFileKHS =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateKhs(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFileKontrak =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateKontrak(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFilePersetujuan =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateAgreement(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFilePermohonan =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateRequest(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };
