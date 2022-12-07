import { Dispatch } from 'react';
import { setHeader } from '../../../Configs/api';
import progalApi from '../../../Middleware/progal-api';
import {
  DataProject,
  ListProject,
  LIST_PROJECT,
  ProjectDispatchTypes,
  ProjectLoading,
  ProjectMessage,
  ProjectSelected,
  PROJECT_ERROR,
  PROJECT_LOADING,
  PROJECT_MESSAGE,
  PROJECT_SELECTED,
} from '../Types/project';

export const setLoadingProject = (data: boolean): ProjectLoading => ({
  type: PROJECT_LOADING,
  payload: data,
});

export const setMessageProject = (data: string): ProjectMessage => ({
  type: PROJECT_MESSAGE,
  payload: data,
});

export const setErrorProject = (data: boolean) => ({
  type: PROJECT_ERROR,
  payload: data,
});

export const setSelectedProject = (data: DataProject): ProjectSelected => ({
  type: PROJECT_SELECTED,
  payload: data,
});

export const setListProject = (data: DataProject[]): ListProject => ({
  type: LIST_PROJECT,
  payload: data,
});

export const getListProject =
  (id?: number | string) =>
  async (dispatch: Dispatch<ProjectDispatchTypes>) => {
    dispatch(setLoadingProject(true));

    try {
      setHeader();
      const response = await progalApi.listProject({
        params: {
          user_id: id,
        },
      });

      dispatch(setListProject(response.data));

      return response;
    } catch (error: any) {
      dispatch(setLoadingProject(false));
      return error;
    }
  };

export const handlerMappingMitra =
  (data: any) => async (dispatch: Dispatch<ProjectDispatchTypes>) => {
    try {
      dispatch(setLoadingProject(true));

      const response = await progalApi.mappingMitra(data);

      dispatch(setLoadingProject(false));
      getListProject()(dispatch);
      return response;
    } catch (error: any) {
      console.log(error);
      dispatch(setLoadingProject(false));
      dispatch(setMessageProject(error?.response?.data?.message));

      return error;
    }
  };
