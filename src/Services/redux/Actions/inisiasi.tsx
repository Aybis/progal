import { Dispatch } from 'react';
import Swal from 'sweetalert2';
import { setHeader } from '../../../Configs/api';
import progalApi from '../../../Middleware/progal-api';
import {
  InisiasiDispatchTypes,
  DataInisiasi,
  INISIASI_ERROR,
  INISIASI_LOADING,
  INISIASI_MESSAGE,
  INISIASI_SELECTED,
  LIST_INISIASI,
  InisiasiLoading,
  InisiasiMessage,
  InisiasiError,
  ListInisiasi,
  InisiasiLoadingDisposisi,
  INISIASI_LOADING_DISPOSISI,
} from '../Types/inisiasi';

export const setLoadingInisiasi = (data: boolean): InisiasiLoading => ({
  type: INISIASI_LOADING,
  payload: data,
});

export const setLoadingInisiasiDisposisi = (
  data: boolean,
): InisiasiLoadingDisposisi => ({
  type: INISIASI_LOADING_DISPOSISI,
  payload: data,
});

export const setMessageInisiasi = (data: string): InisiasiMessage => ({
  type: INISIASI_MESSAGE,
  payload: data,
});

export const setErrorInisiasi = (data: any): InisiasiError => ({
  type: INISIASI_ERROR,
  payload: data,
});

export const setInisiasiSelected = (data: DataInisiasi) => ({
  type: INISIASI_SELECTED,
  payload: data,
});

export const setInisiasiList = (data: DataInisiasi[]): ListInisiasi => ({
  type: LIST_INISIASI,
  payload: data,
});

export const getListInisiasiWon =
  () => async (dispatch: Dispatch<InisiasiDispatchTypes>) => {
    dispatch(setLoadingInisiasi(true));

    try {
      setHeader();
      const response: any = await progalApi.inisiasiWon();
      dispatch(setInisiasiList(response.data));
      dispatch(setLoadingInisiasi(false));
      return response.data;
    } catch (error: any) {
      Swal.fire('Error', error?.response?.data?.message, 'error');
      return error;
    }
  };

export const DisposisiProjectToPIC =
  (data: any) => async (dispatch: Dispatch<InisiasiDispatchTypes>) => {
    dispatch(setLoadingInisiasiDisposisi(true));
    try {
      setHeader();
      const response = await progalApi.disposisi(data);
      dispatch(setLoadingInisiasiDisposisi(false));
      getListInisiasiWon()(dispatch);
      return response;
    } catch (error: any) {
      dispatch(setLoadingInisiasiDisposisi(false));
      return error;
    }
  };
