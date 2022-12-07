export const LIST_INISIASI = 'LIST_INISIASI';
export const INISIASI_LOADING = 'INISIASI_LOADING';
export const INISIASI_ERROR = 'INISIASI_ERROR';
export const INISIASI_MESSAGE = 'INISIASI_MESSAGE';
export const INISIASI_SUCCESS = 'INISIASI_SUCCESS';
export const INISIASI_SELECTED = 'INISIASI_SELECTED';

// type

export type DataInisiasi = {
  id: number;
  io: {
    internal_order: string;
  };
  tgl_target_win: string;
  desc_project?: string;
  nilai_cogs: number;
  end_customer?: string;
  jasbisis?: any;
};

// interface
export interface ListInisiasi {
  type: typeof LIST_INISIASI;
  payload: DataInisiasi[];
}

export interface InisiasiLoading {
  type: typeof INISIASI_LOADING;
  payload: boolean;
}

export interface InisiasiError {
  type: typeof INISIASI_ERROR;
  payload: boolean;
}

export interface InisiasiMessage {
  type: typeof INISIASI_MESSAGE;
  payload: string;
}

export interface InisiasiSuccess {
  type: typeof INISIASI_SUCCESS;
  payload: boolean;
}

export interface InisiasiSelected {
  type: typeof INISIASI_SELECTED;
  payload: DataInisiasi;
}

export type InisiasiDispatchTypes =
  | InisiasiLoading
  | InisiasiError
  | InisiasiSuccess
  | InisiasiMessage
  | ListInisiasi
  | InisiasiSelected;
