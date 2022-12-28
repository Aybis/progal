import { Dispatch } from 'react';
import Swal from 'sweetalert2';
import { setHeader } from '../../../Configs/api';
import progalApi from '../../../Middleware/progal-api';
import {
  DataMitraHasProject,
  DataProjectHasMitra,
  ListMitraMonitoring,
  ListMitraMonitoringFilter,
  ListMitraMonitoringLoading,
  ListMitraPIC,
  ListMitraPicDone,
  ListMitraPicDoneFilter,
  ListMitraPicDoneLoading,
  ListMitraPICFilter,
  ListMitraPICSelected,
  ListMitraPICUpdate,
  ListProjectMitra,
  LIST_MITRA_MONITORING,
  LIST_MITRA_MONITORING_FILTER,
  LIST_MITRA_MONITORING_LOADING,
  LIST_MITRA_PIC,
  LIST_MITRA_PIC_DONE,
  LIST_MITRA_PIC_DONE_LOADING,
  LIST_MITRA_PIC_FILTER,
  LIST_MITRA_PIC_FILTER_DONE,
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

// Reducer data mitra pic with status done

export const setListMitraPicDone = (
  data: DataMitraHasProject[],
): ListMitraPicDone => ({
  type: LIST_MITRA_PIC_DONE,
  payload: data,
});

export const setListMitraPicDoneFilter = (
  data: DataMitraHasProject[],
): ListMitraPicDoneFilter => ({
  type: LIST_MITRA_PIC_FILTER_DONE,
  payload: data,
});

export const setListMitraPicDoneLoading = (
  data: boolean,
): ListMitraPicDoneLoading => ({
  type: LIST_MITRA_PIC_DONE_LOADING,
  payload: data,
});

// reducer data mitra for monitoring
export const setListMonitoring = (
  data: DataMitraHasProject[],
): ListMitraMonitoring => ({
  type: LIST_MITRA_MONITORING,
  payload: data,
});

export const setListMonitoringFilter = (
  data: DataMitraHasProject[],
): ListMitraMonitoringFilter => ({
  type: LIST_MITRA_MONITORING_FILTER,
  payload: data,
});

export const setListMonitoringLoading = (
  data: boolean,
): ListMitraMonitoringLoading => ({
  type: LIST_MITRA_MONITORING_LOADING,
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

// get mitra pic with status done bast and done all
export const getMitraHasProjectDone =
  (id?: number) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    dispatch(setListMitraPicDoneLoading(true));
    try {
      setHeader();
      const response: any = await progalApi.listProjectMitraDone({
        params: {
          pic_id: id,
        },
      });
      dispatch(setListMitraPicDoneLoading(false));
      dispatch(setListMitraPicDone(response.data));
      dispatch(setListMitraPicDoneFilter(response.data));
      return await response.data;
    } catch (error: any) {
      dispatch(setListMitraPicDoneLoading(false));
      return error;
    }
  };

// get list mitra for monitoring
export const getListMonitoringMitra =
  (id?: number) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    dispatch(setListMonitoringLoading(false));
    try {
      setHeader();
      const res = await progalApi.listProjectMonitorinng({
        params: {
          pic_id: id,
        },
      });

      dispatch(setListMonitoring(res.data));
      dispatch(setListMonitoringFilter(res.data));
      return res;
    } catch (error: unknown) {
      return error;
    }
  };

// update data mitra pic
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

export const uploadFileBast =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertBast(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

/*
New requirement 13-12-2022
split upload file bast 
-BAST
-BAPP
-BA Progress
-DO
-PR SAP
-PO SAP
*/
export const uploadFileBapp =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertBapp(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFileBaProgress =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertBaProgress(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFileDo =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertDo(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFileBaut =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertBaut(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFilePrSap =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertPrSap(data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const uploadFilePoSap =
  (data: any) => async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.insertPoSap(data);
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

export const updateFileBast =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateBast(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

/*
New requirement 13-12-2022
split upload file bast 
-BAST
-BAPP
-BA Progress
-DO
-PR SAP
-PO SAP
*/

export const updateFileBapp =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateBapp(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFileBapProgress =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateBapProgress(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFileDo =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateDo(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFileBaut =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updateBaut(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFilePrSap =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updatePrSap(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };

export const updateFilePoSap =
  (id: string, data: any) =>
  async (dispatch: Dispatch<ProjectMitraDispatchTypes>) => {
    try {
      const res = await progalApi.updatePoSap(id, data);
      return res;
    } catch (error: any) {
      return error;
    }
  };
