import { DataInisiasi } from './inisiasi';
import { DataProject } from './project';
import { Vendor } from './vendor';

export const LIST_PROJECT_MITRA = 'LIST_PROJECT_MITRA';
export const LIST_PROJECT_MITRA_LOADING = 'LIST_PROJECT_MITRA_LOADING';
export const LIST_PROJECT_MITRA_ERROR = 'LIST_PROJECT_MITRA_ERROR';
export const LIST_PROJECT_MITRA_SUCCESS = 'LIST_PROJECT_MITRA_SUCCESS';
export const LIST_PROJECT_MITRA_MESSAGE = 'LIST_PROJECT_MITRA_MESSAGE';
export const LIST_PROJECT_MITRA_SELECTED = 'LIST_PROJECT_MITRA_SELECTED';
export const LIST_MITRA_PIC = 'LIST_MITRA_PIC';
export const LIST_MITRA_PIC_SELECTED = 'LIST_MITRA_PIC_SELECTED';
export const LIST_MITRA_PIC_LOADING = 'LIST_MITRA_PIC_LOADING';
export const LOADING_UPDATE_MITRA = 'LOADING_UPDATE_MITRA';
export const LIST_MITRA_PIC_FILTER = 'LIST_MITRA_PIC_FILTER';
export const LIST_MITRA_PIC_FILTER_DONE = 'LIST_MITRA_PIC_FILTER_DONE';
export const LIST_MITRA_PIC_DONE = 'LIST_MITRA_PIC_DONE';
export const LIST_MITRA_PIC_DONE_LOADING = 'LIST_MITRA_PIC_DONE_LOADING';
export const LIST_MITRA_MONITORING = 'LIST_MITRA_MONITORING';
export const LIST_MITRA_MONITORING_LOADING = 'LIST_MITRA_MONITORING_LOADING';
export const LIST_MITRA_MONITORING_FILTER = 'LIST_MITRA_MONITORING_FILTER';

// type data
export type DataMitraHasProject = {
  id: number | string;
  amandemen?: [];
  bakn?: any;
  bast?: any;
  prsap?: any;
  posap?: any;
  do_file?: any;
  bapp?: any;
  ba_progress?: any;
  baut?: any;
  boq_item?: [];
  deskripsi_pekerjaan?: string;
  end_jangka_waktu_pekerjaan?: string;
  is_down_payment?: boolean;
  jenis_dokumen?: string;
  khs?: any;
  kontrak?: any;
  mitra?: Vendor;
  nilai_down_payment?: any;
  nilai_pekerjaan?: any;
  nilai_realisasi_cogs?: any;
  permohonan?: any;
  persetujuan?: any;
  project?: DataProject;
  sph?: any;
  spph?: any;
  start_jangka_waktu_pekerjaan: string;
  status?: string;
  tata_cara_pembayaran?: string;
};

export type DataProjectHasMitra = {
  id: number | string;
  inisiasi_id: number;
  kl_dokumen: string;
  no_io: string;
  file_p6: string;
  file_p8: string;
  file_kl: string;
  p6_dokumen: string;
  p8_dokumen: string;
  pic_legal: {
    id: number;
    name: string;
  };
  pic_procurement: {
    id: number;
    name: string;
  };
  inisiasi: DataInisiasi;
  project_mitra: {
    id: number;
    nilai_down_payment: any;
    nilai_pekerjaan: any;
    nilai_realisasi_cogs: any;
  }[];
};

// interfaces
export interface ListProjectMitra {
  type: typeof LIST_PROJECT_MITRA;
  payload: DataProjectHasMitra[];
}

export interface ProjectMitraLoading {
  type: typeof LIST_PROJECT_MITRA_LOADING;
  payload: boolean;
}

export interface ProjectMitraError {
  type: typeof LIST_PROJECT_MITRA_ERROR;
}

export interface ProjectMitraMessage {
  type: typeof LIST_PROJECT_MITRA_MESSAGE;
  payload: string;
}

export interface ProjectMitraSuccess {
  type: typeof LIST_PROJECT_MITRA_SUCCESS;
  payload: boolean;
}

export interface ProjectMitraSelected {
  type: typeof LIST_PROJECT_MITRA_SELECTED;
  payload: DataProjectHasMitra;
}

// Mitra has project
export interface ListMitraPIC {
  type: typeof LIST_MITRA_PIC;
  payload: DataMitraHasProject[];
}

export interface ListMitraPICSelected {
  type: typeof LIST_MITRA_PIC_SELECTED;
  payload: DataMitraHasProject;
}
export interface ListMitraPICUpdate {
  type: typeof LOADING_UPDATE_MITRA;
  payload: boolean;
}

export interface ListMitraPICFilter {
  type: typeof LIST_MITRA_PIC_FILTER;
  payload: DataMitraHasProject[];
}

// Project Mitra done
export interface ListMitraPicDone {
  type: typeof LIST_MITRA_PIC_DONE;
  payload: DataMitraHasProject[];
}

export interface ListMitraPicDoneFilter {
  type: typeof LIST_MITRA_PIC_FILTER_DONE;
  payload: DataMitraHasProject[];
}

export interface ListMitraPicDoneLoading {
  type: typeof LIST_MITRA_PIC_DONE_LOADING;
  payload: boolean;
}

// Project mitra monitoring
export interface ListMitraMonitoring {
  type: typeof LIST_MITRA_MONITORING;
  payload: DataMitraHasProject[];
}

export interface ListMitraMonitoringLoading {
  type: typeof LIST_MITRA_MONITORING_LOADING;
  payload: boolean;
}

export interface ListMitraMonitoringFilter {
  type: typeof LIST_MITRA_MONITORING_FILTER;
  payload: DataMitraHasProject[];
}

export type ProjectMitraDispatchTypes =
  | ListProjectMitra
  | ProjectMitraLoading
  | ProjectMitraError
  | ProjectMitraMessage
  | ProjectMitraSuccess
  | ProjectMitraSelected
  | ListMitraPIC
  | ListMitraPICSelected
  | ListMitraPICUpdate
  | ListMitraPICFilter
  | ListMitraPicDone
  | ListMitraPicDoneFilter
  | ListMitraPicDoneLoading
  | ListMitraMonitoring
  | ListMitraMonitoringLoading
  | ListMitraMonitoringFilter;
