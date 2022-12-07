export const LIST_PROJECT_MITRA = 'LIST_PROJECT_MITRA';
export const LIST_PROJECT_MITRA_LOADING = 'LIST_PROJECT_MITRA_LOADING';
export const LIST_PROJECT_MITRA_ERROR = 'LIST_PROJECT_MITRA_ERROR';
export const LIST_PROJECT_MITRA_SUCCESS = 'LIST_PROJECT_MITRA_SUCCESS';
export const LIST_PROJECT_MITRA_MESSAGE = 'LIST_PROJECT_MITRA_MESSAGE';
export const LIST_PROJECT_MITRA_SELECTED = 'LIST_PROJECT_MITRA_SELECTED';

// type data
export type DataMitra = {
  id: number | string;
  amandemen?: [];
  bakn?: any;
  bast?: any;
  boq_item?: [];
  deskripsi_pekerjaan?: string;
  end_jangka_waktu_pekerjaan?: string;
  is_down_payment?: boolean;
  jenis_dokumen?: string;
  khs?: any;
  kontrak?: any;
  mitra?: {
    akun_vendor?: string;
    alamat?: string;
    deskripsi_vendor?: string;
    direktur?: string;
    email?: string;
    fax?: string;
    id: number;
    jenis_vendor_id?: number;
    nama_vendor?: string;
    no_tlpn?: string;
    pic?: string;
  };
  nilai_down_payment?: string;
  nilai_pekerjaan?: string;
  nilai_realisasi_cogs?: string;
  permohonan?: any;
  persetujuan?: any;
  project?: any;
  sph?: any;
  spph?: any;
  start_jangka_waktu_pekerjaan: string;
  status?: string;
  tata_cara_pembayaran?: string;
};

// interface

export interface ListProjectMitra {
  type: typeof LIST_PROJECT_MITRA;
  payload: DataMitra[];
}

export interface ListProjectMitraLoading {
  type: typeof LIST_PROJECT_MITRA_LOADING;
}

export interface ListProjectMitraError {
  type: typeof LIST_PROJECT_MITRA_ERROR;
}

export interface ListProjectMitraMessage {
  type: typeof LIST_PROJECT_MITRA_MESSAGE;
  payload: string;
}

export interface ListProjectMitraSuccess {
  type: typeof LIST_PROJECT_MITRA_SUCCESS;
  payload: boolean;
}

export interface ListProjectMitraSelected {
  type: typeof LIST_PROJECT_MITRA_SELECTED;
  payload: DataMitra;
}

export type ProjectDispatchTypes =
  | ListProjectMitra
  | ListProjectMitraLoading
  | ListProjectMitraError
  | ListProjectMitraMessage
  | ListProjectMitraSuccess
  | ListProjectMitraSelected;
