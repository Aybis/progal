export const LIST_INISIASI = 'LIST_INISIASI';
export const INISIASI_LOADING = 'INISIASI_LOADING';
export const INISIASI_ERROR = 'INISIASI_ERROR';
export const INISIASI_MESSAGE = 'INISIASI_MESSAGE';
export const INISIASI_SUCCESS = 'INISIASI_SUCCESS';
export const INISIASI_SELECTED = 'INISIASI_SELECTED';
export const INISIASI_LOADING_DISPOSISI = 'INISIASI_LOADING_DISPOSISI';

// type

export type DataAM = {
  agama: string;
  alamat: string;
  company: string;
  created_at: string;
  deleted_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  is_shifting: string;
  jenis_kelamin: string;
  leader_id: string;
  name: string;
  nik: string;
  phone: string;
  regional_id: string;
  status_kepegawaian: string;
  tanggal_lahir: string;
  tempat_lahir: string;
  updated_at: string;
  username: string;
  workplace: string;
};

export type DataInisiasi = {
  id: number;
  io: {
    internal_order: string;
    io_format: string;
  };
  am: DataAM;
  tgl_target_win: string;
  desc_project?: string;
  nilai_cogs: number;
  end_customer?: string;
  jasbisis?: DataJasbis[];
  title_project?: string;
  nilai_kl: number;
  nilai_penawaran: number;
  nilai_project: number;
  no_insisasi: string;
};

export type DataJasbis = {
  id: number;
  inisiasi_id: number;
  cogs: number | 0;
  indirect_cost: number;
  ebitda_project: number;
  ebitda_project_margin: number;
  revenue: number;
  metode_pembiayaan: string;
  status: string;
  dokumen: string;
  created_at: string;
  updated_at: string;
  dokumen_url: string;
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

export interface InisiasiLoadingDisposisi {
  type: typeof INISIASI_LOADING_DISPOSISI;
  payload: boolean;
}

export type InisiasiDispatchTypes =
  | InisiasiLoading
  | InisiasiError
  | InisiasiSuccess
  | InisiasiMessage
  | ListInisiasi
  | InisiasiSelected
  | InisiasiLoadingDisposisi;
