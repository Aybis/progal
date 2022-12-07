import { Dispatch } from 'react';
import Swal from 'sweetalert2';
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
} from '../Types/inisiasi';

export const setLoadingInisiasi = (data: boolean): InisiasiLoading => ({
  type: INISIASI_LOADING,
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
      const response: any = await progalApi.inisiasiWon();
      dispatch(setInisiasiList(response));
      dispatch(setLoadingInisiasi(false));

      return response;
    } catch (error: any) {
      console.log(error?.response?.data?.message);
      Swal.fire('Error', error?.response?.data?.message, 'error');
      return error;
    }
  };
